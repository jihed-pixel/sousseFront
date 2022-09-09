import axios from "axios";
const baseUrl = "https://test.yobitrust.com:8443/HachCovid19Back-0.0.1-SNAPSHOT/";
export default {
  medicalService(url = baseUrl) {
    return {
      login: (values) => axios.post(url + "login", values),
      signup: (values) => axios.post(url + "cc", values),
      loginAdmin: (values) => axios.post(url + "loginadmin", values),
      logout: () => axios.get(url + "logout"),
      addPatient: (values) => axios.post(url + "addPatient", values),
      searchPatient: (cin,cinD) => axios.get(url + "search/" + cin+"/"+cinD),
      searchPatient1: (cin) => axios.get(url + "search1/" + cin),
      allPatient: (cin) => axios.get(url + "getAllPatients" ),
      removepInfosGenerales: (cin) => axios.post(url + "remove-p-info-generales/" + cin),
      removepAntecedentMedical: (cin) => axios.post(url + "remove-p-antecedent-medical/" + cin),
      removepHabitudesDeVie: (cin) => axios.post(url + "remove-p-habitudes-de-vie/" + cin),
      removeAntecedentMedical: (cin, values) => axios.post(url + "remove-antecedent-medical/" + cin, values),
      removepConfDiags: (cin) => axios.post(url + "remove-p-Conf-Diags/" + cin),
      removepExpoRisque: (cin) => axios.post(url + "remove-p-ExpoRisque/" + cin),
      removepExamBio: (cin) => axios.post(url + "remove-p-ExamBio/" + cin),
      removepCaracCliniques: (cin) => axios.post(url + "remove-p-CaracCliniques/" + cin),
      removepAdmissions: (cin) => axios.post(url + "remove-p-Admissions/" + cin),
      removepExamenCli: (cin) => axios.post(url + "remove-p-ExamenCli/" + cin),
      removepExamRadio_ParaCli: (cin) => axios.post(url + "remove-p-ExamRadio_ParaCli/" + cin),
      removepEvaluationFinale: (cin) => axios.post(url + "remove-p-EvaluationFinale/" + cin),
      removepTraitement: (cin) => axios.post(url + "remove-p-Traitement/" + cin),
      removepEvoluationQuo: (cin) => axios.post(url + "remove-p-EvoluationQuo/" + cin),
      delOneExamenBio: (cin, values) => axios.post(url + "del-one-examen-bio/" + cin, values),
      delOneExamenRadioParacli: (cin, values) => axios.post(url + "del-one-examen-radio-paracli/" + cin, values),
      delOneConfDiag: (cin, values) => axios.post(url + "del-one-confDiag/" + cin, values),
      
      habitudesDeViePatient: (cin, values) => axios.post(url + "add-habitudes-de-vie/" + cin, values),
      infosGenerales: (cin, values) => axios.post(url + "add-infos-generales/" + cin, values),
      antecedentsMedicaux: (cin, values) => axios.post(url + "add-antecedents-medicaux/" + cin, values),
      allAntecedentsMedicaux: (cin) => axios.get(url + "get-all-antecedents-medicaux/" + cin),
      removeAntecedentMedical: (cin, values) => axios.post(url + "remove-antecedent-medical/" + cin, values),
      addDiagnostic: (cin, values) => axios.post(url + "add-diagnostic/" + cin, values),
      addExposition: (cin, values) => axios.post(url + "add-exposition/" + cin, values),
      addExposition1: (cin, values) => axios.post(url + "add-exposition1/" + cin, values),
      getAllDiagnostics: (cin) => axios.get(url + "get-all-diagnostics/" + cin),
      searchDiagnostic: (cin, values) => axios.post(url + "search-diagnostic/" + cin, values),
      addConfDiag: (cin, values) => axios.post(url + "add-confDiag/" + cin, values),
      addAdmission: (cin, values) => axios.post(url + "add-admission/" + cin, values),
      addCracCliniques: (cin, values) => axios.post(url + "add-carac-cliniques/" + cin, values),
      addExamCli: (cin, values) => axios.post(url + "add-examen-cli/" + cin, values),
      addExamRadioParaCli: (cin, values) => axios.post(url + "add-examen-radio-paracli/" + cin, values),
      addEvaluationFinale: (cin, values) => axios.post(url + "add-evaluation-finale/" + cin, values),
      uploadFileExamBio: (cin, formdata) => axios.post(url + "add-examen-bio-image/" + cin, formdata),
      addExamBio: (cin, values) => axios.post(url + "add-examen-bio/" + cin, values),
      addTraitment:(cin,values)=>axios.post(url+"add-traitement/"+cin,values),
      getTraitment:(cin,values)=>axios.post(url+"get-traitment/"+cin,values),
      addEvolution:(cin,values)=>axios.post(url+"add-Evolution/"+cin,values),
      getEvolution:(cin,values)=>axios.post(url+"get-evolution/"+cin,values)
    };
  },
};
