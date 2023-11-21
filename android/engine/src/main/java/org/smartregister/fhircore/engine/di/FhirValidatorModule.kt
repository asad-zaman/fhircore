/*
 * Copyright 2021-2023 Ona Systems, Inc
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package org.smartregister.fhircore.engine.di

import ca.uhn.fhir.context.FhirContext
import ca.uhn.fhir.validation.FhirValidator
import dagger.Module
import dagger.Provides
import dagger.hilt.InstallIn
import dagger.hilt.components.SingletonComponent
import javax.inject.Singleton
import kotlin.coroutines.coroutineContext
import kotlinx.coroutines.withContext
import org.hl7.fhir.common.hapi.validation.validator.FhirInstanceValidator
import org.hl7.fhir.r4.model.Resource
import org.smartregister.fhircore.engine.BuildConfig
import org.smartregister.fhircore.engine.util.extension.encodeResourceToString
import timber.log.Timber

@Module
@InstallIn(SingletonComponent::class)
class FhirValidatorModule {

  @Provides
  @Singleton
  fun provideFhirValidator(): FhirValidator {
    val fhirContext = FhirContext.forR4()
    val validatorModule = FhirInstanceValidator(fhirContext)
    return fhirContext.newValidator().apply { registerValidatorModule(validatorModule) }
  }
}

fun doRunValidation() = BuildConfig.DEBUG

suspend fun FhirValidator.checkResourceValid(resource: Resource) {
  if (!doRunValidation()) return
  withContext(coroutineContext) {
    val result = this@checkResourceValid.validateWithResult(resource)
    if (!result.isSuccessful) {
      Timber.e(resource.encodeResourceToString())
      throw IllegalStateException(result.messages.joinToString { it.message })
    }
  }
}
