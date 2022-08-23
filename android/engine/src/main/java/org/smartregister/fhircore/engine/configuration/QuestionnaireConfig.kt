/*
 * Copyright 2021 Ona Systems, Inc
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

package org.smartregister.fhircore.engine.configuration

import kotlinx.serialization.Serializable
import org.smartregister.fhircore.engine.domain.model.QuestionnaireType

@Serializable
data class QuestionnaireConfig(
  val id: String,
  val title: String? = null,
  val saveButtonText: String? = null,
  val setPractitionerDetails: Boolean = false,
  val setOrganizationDetails: Boolean = false,
  val planDefinitions: List<String>? = null,
  val type: QuestionnaireType = QuestionnaireType.DEFAULT,
  val clientIdentifier: String? = null,
  val groupIdentifier: String? = null,
  val confirmationDialog: ConfirmationDialog? = null,
  val groupResource: GroupResourceConfig? = null
) : java.io.Serializable

@Serializable
data class ConfirmationDialog(
  val title: String = "",
  val message: String = "",
  val actionButtonText: String = ""
) : java.io.Serializable

@Serializable
data class GroupResourceConfig(
  val memberResourceType: String,
  val removeMember: Boolean = false,
  val removeGroup: Boolean = false,
) : java.io.Serializable
