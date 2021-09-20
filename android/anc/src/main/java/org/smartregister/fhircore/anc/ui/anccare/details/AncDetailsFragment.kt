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

package org.smartregister.fhircore.anc.ui.anccare.details

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.databinding.DataBindingUtil
import androidx.fragment.app.Fragment
import androidx.lifecycle.ViewModelProvider
import androidx.recyclerview.widget.LinearLayoutManager
import com.google.android.fhir.FhirEngine
import org.hl7.fhir.r4.model.Encounter
import org.hl7.fhir.r4.model.Observation
import org.smartregister.fhircore.anc.AncApplication
import org.smartregister.fhircore.anc.R
import org.smartregister.fhircore.anc.data.AncPatientRepository
import org.smartregister.fhircore.anc.data.model.AncPatientDetailItem
import org.smartregister.fhircore.anc.data.model.CarePlanItem
import org.smartregister.fhircore.anc.databinding.FragmentAncDetailsBinding
import org.smartregister.fhircore.engine.ui.questionnaire.QuestionnaireActivity
import org.smartregister.fhircore.engine.util.extension.createFactory

class AncDetailsFragment private constructor() : Fragment() {

    private lateinit var patientId: String
    private lateinit var fhirEngine: FhirEngine

    lateinit var ancDetailsViewModel: AncDetailsViewModel

    private lateinit var ancPatientRepository: AncPatientRepository

    private val carePlanAdapter = CarePlanAdapter()

    lateinit var binding: FragmentAncDetailsBinding

    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View {
        binding = DataBindingUtil.inflate(inflater, R.layout.fragment_anc_details, container, false)
        return binding.root
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        patientId = arguments?.getString(QuestionnaireActivity.QUESTIONNAIRE_ARG_PATIENT_KEY) ?: ""

        fhirEngine = AncApplication.getContext().fhirEngine

        setupViews()

        ancPatientRepository =
            AncPatientRepository(
                (requireActivity().application as AncApplication).fhirEngine,
                AncPatientItemMapper
            )

        ancDetailsViewModel =
            ViewModelProvider(
                this,
                AncDetailsViewModel(ancPatientRepository, patientId = patientId).createFactory()
            )[AncDetailsViewModel::class.java]

        binding.txtViewPatientId.text = patientId

        ancDetailsViewModel
            .fetchDemographics()
            .observe(viewLifecycleOwner, this::handlePatientDemographics)

        ancDetailsViewModel
            .fetchCarePlan()
            .observe(viewLifecycleOwner, this::handleCarePlan)

        ancDetailsViewModel
            .fetchObservation()
            .observe(viewLifecycleOwner, this::handleObservation)

        ancDetailsViewModel
            .fetchEncounters()
            .observe(viewLifecycleOwner, this::handleEncounters)
    }

    private fun handleObservation(listObservation: List<Observation>) {
        val size = if (listObservation.isNotEmpty()) listObservation.size else 0
    }

    private fun handleEncounters(listEncounters: List<Encounter>) {
        val size = if (listEncounters.isNotEmpty()) listEncounters.size else 0
    }

    private fun setupViews() {
        binding.carePlanListView.apply {
            adapter = carePlanAdapter
            layoutManager = LinearLayoutManager(requireContext())
        }
    }

    companion object {
        fun newInstance(bundle: Bundle = Bundle()) =
            AncDetailsFragment().apply { arguments = bundle }
    }

    private fun handlePatientDemographics(patient: AncPatientDetailItem) {
        with(patient) {
            val patientDetails =
                this.patientDetails.name +
                        ", " +
                        this.patientDetails.gender +
                        ", " +
                        this.patientDetails.age
            val patientId =
                this.patientDetailsHead.demographics + " ID: " + this.patientDetails.patientIdentifier
            binding.txtViewPatientDetails.text = patientDetails
            binding.txtViewPatientId.text = patientId
        }
    }

    private fun handleCarePlan(immunizations: List<CarePlanItem>) {
        when {
            immunizations.isEmpty() -> {
                binding.txtViewNoCarePlan.visibility = View.VISIBLE
                binding.txtViewCarePlanSeeAllHeading.visibility = View.GONE
                binding.imageViewSeeAllArrow.visibility = View.GONE
                binding.carePlanListView.visibility = View.GONE
            }
            else -> {
                binding.txtViewNoCarePlan.visibility = View.GONE
                binding.txtViewCarePlanSeeAllHeading.visibility = View.VISIBLE
                binding.imageViewSeeAllArrow.visibility = View.VISIBLE
                binding.carePlanListView.visibility = View.VISIBLE
                populateImmunizationList(immunizations)
            }
        }
    }

    private fun populateImmunizationList(listCarePlan: List<CarePlanItem>) {
        carePlanAdapter.submitList(listCarePlan)
    }
}
