const ADMIN_PASSWORD = "admin123";
const CONFIG = {
  "defaultMarking": {
    "correct": 1,
    "wrong": -1,
    "empty": 0
  },
  "subjects": [
    {
      "id": "reanimation-l2-60",
      "title": "Réanimation L2 — 60 questions QCM et QCD",
      "matter": "Réanimation",
      "description": "Sujet d’entraînement en réanimation L2.",
      "instructions": "QCD : choisir Vrai ou Faux. QCM : sélectionner le nombre de réponses indiqué. Bonne réponse : +1 ; mauvaise réponse QCD : −1 ; mauvaise réponse QCM ou absence de réponse : 0.",
      "duration": 90,
      "programmed": true,
      "openDate": "2026-01-01",
      "openTime": "00:00",
      "closeDate": "2030-12-31",
      "closeTime": "23:59",
      "marking": {
        "correct": 1,
        "wrong": -1,
        "empty": 0
      },
      "questions": [
        {
          "type": "qcd",
          "text": "Le choc hypovolémique résulte d'une diminution importante de la masse sanguine circulante.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "La diminution du volume circulant réduit le retour veineux et le débit cardiaque, ce qui compromet la perfusion des tissus.",
          "source": "Réanimation L2, page 4. Réanimation L2",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "type": "qcm",
          "text": "Parmi les situations suivantes, lesquelles peuvent provoquer un choc hypovolémique ? (Choisir 4 réponses.)",
          "options": [
            "Hémorragie importante",
            "Vomissements importants",
            "Diarrhées profuses",
            "Brûlures étendues"
          ],
          "explanation": "Le choc hypovolémique peut être hémorragique par perte de sang ou non hémorragique par perte importante de liquides.",
          "source": "Réanimation L2, pages 4–5. Réanimation L2",
          "answers": [
            "Hémorragie importante",
            "Vomissements importants",
            "Diarrhées profuses",
            "Brûlures étendues"
          ],
          "correct": [
            "Hémorragie importante",
            "Vomissements importants",
            "Diarrhées profuses",
            "Brûlures étendues"
          ]
        },
        {
          "type": "qcd",
          "text": "Une diarrhée profuse ne peut jamais provoquer un état de choc.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "Une diarrhée profuse peut entraîner une perte liquidienne importante responsable d'une hypovolémie.",
          "source": "Réanimation L2, page 5. Réanimation L2",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "type": "qcm",
          "text": "Quels signes sont compatibles avec un choc hypovolémique ? (Choisir 4 réponses.)",
          "options": [
            "Tachycardie",
            "Hypotension artérielle",
            "Oligurie ou anurie",
            "Soif intense"
          ],
          "explanation": "Ces manifestations traduisent la diminution de la volémie et la mauvaise perfusion des organes.",
          "source": "Réanimation L2, pages 5–6. Réanimation L2",
          "answers": [
            "Tachycardie",
            "Hypotension artérielle",
            "Oligurie ou anurie",
            "Soif intense"
          ],
          "correct": [
            "Tachycardie",
            "Hypotension artérielle",
            "Oligurie ou anurie",
            "Soif intense"
          ]
        },
        {
          "type": "qcd",
          "text": "Le choc anaphylactique est toujours provoqué par une hémorragie.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "Le choc anaphylactique est lié à une réaction immunologique sévère avec libération de médiateurs vaso-actifs.",
          "source": "Réanimation L2, page 6. Réanimation L2",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "type": "qcm",
          "text": "Quels signes peuvent être observés au cours d'un choc anaphylactique ? (Choisir 4 réponses.)",
          "options": [
            "Prurit",
            "Urticaire",
            "Malaise",
            "Angoisse"
          ],
          "explanation": "Le cours décrit des manifestations générales et cutanées pouvant précéder ou accompagner le choc.",
          "source": "Réanimation L2, pages 6–7. Réanimation L2",
          "answers": [
            "Prurit",
            "Urticaire",
            "Malaise",
            "Angoisse"
          ],
          "correct": [
            "Prurit",
            "Urticaire",
            "Malaise",
            "Angoisse"
          ]
        },
        {
          "type": "qcd",
          "text": "L'adrénaline est le médicament de choix cité dans le cours pour le grand choc anaphylactique.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "Le cours place l'adrénaline au premier plan du traitement du grand choc anaphylactique.",
          "source": "Réanimation L2, page 11. Réanimation L2",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "type": "qcm",
          "text": "Quels éléments peuvent être observés dans le choc septique ? (Choisir 4 réponses.)",
          "options": [
            "Fièvre élevée",
            "Frissons",
            "Marbrures",
            "Tachycardie"
          ],
          "explanation": "Le choc septique est associé à une infection grave et peut associer fièvre, frissons et signes de mauvaise perfusion.",
          "source": "Réanimation L2, pages 8–9. Réanimation L2",
          "answers": [
            "Fièvre élevée",
            "Frissons",
            "Marbrures",
            "Tachycardie"
          ],
          "correct": [
            "Fièvre élevée",
            "Frissons",
            "Marbrures",
            "Tachycardie"
          ]
        },
        {
          "type": "qcm",
          "text": "Quelles causes de choc cardiogénique sont citées dans le cours ? (Choisir 3 réponses.)",
          "options": [
            "Infarctus du myocarde",
            "Tamponnade péricardique",
            "Embolie pulmonaire",
            "Diarrhée profuse"
          ],
          "explanation": "Ces trois affections peuvent compromettre gravement le fonctionnement circulatoire. La diarrhée profuse entraîne plutôt une hypovolémie.",
          "source": "Réanimation L2, page 9. Réanimation L2",
          "answers": [
            "Infarctus du myocarde",
            "Tamponnade péricardique",
            "Embolie pulmonaire"
          ],
          "correct": [
            "Infarctus du myocarde",
            "Tamponnade péricardique",
            "Embolie pulmonaire"
          ]
        },
        {
          "type": "qcm",
          "text": "Quels paramètres appartiennent à la surveillance clinique d'un état de choc ? (Choisir 4 réponses.)",
          "options": [
            "Pression artérielle",
            "État de conscience",
            "Fréquence respiratoire",
            "Diurèse"
          ],
          "explanation": "Ces paramètres permettent d'apprécier l'état circulatoire et la perfusion des organes.",
          "source": "Réanimation L2, page 13. Réanimation L2",
          "answers": [
            "Pression artérielle",
            "État de conscience",
            "Fréquence respiratoire",
            "Diurèse"
          ],
          "correct": [
            "Pression artérielle",
            "État de conscience",
            "Fréquence respiratoire",
            "Diurèse"
          ]
        },
        {
          "type": "qcd",
          "text": "L'arrêt cardio-circulatoire correspond à l'incapacité du cœur à assurer un débit efficace.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "La circulation efficace s'interrompt brutalement et les organes ne reçoivent plus suffisamment d'oxygène.",
          "source": "Réanimation L2, page 15. Réanimation L2",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "type": "qcm",
          "text": "Quels signes permettent d'évoquer un arrêt cardio-circulatoire ? (Choisir 4 réponses.)",
          "options": [
            "Absence de pouls sur un gros tronc artériel",
            "Apnée",
            "Inconscience",
            "Mydriase"
          ],
          "explanation": "L'association de l'absence de circulation efficace, de respiration et de conscience constitue une situation d'extrême urgence.",
          "source": "Réanimation L2, page 15. Réanimation L2",
          "answers": [
            "Absence de pouls sur un gros tronc artériel",
            "Apnée",
            "Inconscience",
            "Mydriase"
          ],
          "correct": [
            "Absence de pouls sur un gros tronc artériel",
            "Apnée",
            "Inconscience",
            "Mydriase"
          ]
        },
        {
          "type": "qcd",
          "text": "Une obstruction brutale des voies aériennes peut entraîner un arrêt cardio-circulatoire.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "L'obstruction empêche l'oxygénation et peut évoluer vers une anoxie puis un arrêt cardiaque.",
          "source": "Réanimation L2, page 16. Réanimation L2",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "type": "qcm",
          "text": "Parmi les causes suivantes, lesquelles sont citées comme causes possibles d'arrêt cardio-circulatoire ? (Choisir 4 réponses.)",
          "options": [
            "Électrocution",
            "Noyade",
            "Intoxication",
            "Hypothermie"
          ],
          "explanation": "Le cours cite ces différentes circonstances parmi les causes possibles d'arrêt cardiaque.",
          "source": "Réanimation L2, pages 15–16. Réanimation L2",
          "answers": [
            "Électrocution",
            "Noyade",
            "Intoxication",
            "Hypothermie"
          ],
          "correct": [
            "Électrocution",
            "Noyade",
            "Intoxication",
            "Hypothermie"
          ]
        },
        {
          "type": "qcm",
          "text": "Dans la méthode ABC, quelles correspondances sont correctes ? (Choisir 3 réponses.)",
          "options": [
            "A = Airways",
            "B = Breathing",
            "C = Circulation",
            "B = Blood pressure"
          ],
          "explanation": "ABC signifie libération des voies aériennes, respiration/ventilation puis circulation.",
          "source": "Réanimation L2, page 16. Réanimation L2",
          "answers": [
            "A = Airways",
            "B = Breathing",
            "C = Circulation"
          ],
          "correct": [
            "A = Airways",
            "B = Breathing",
            "C = Circulation"
          ]
        },
        {
          "type": "qcd",
          "text": "Le cours indique chez l'adulte 30 compressions suivies de 2 insufflations.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "C'est le rapport compression/ventilation présenté dans le document pour le massage cardiaque externe de l'adulte.",
          "source": "Réanimation L2, page 18. Réanimation L2",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "type": "qcd",
          "text": "Le cours indique une fréquence d'environ 100 compressions par minute chez l'adulte.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "Cette fréquence est indiquée dans la technique du massage cardiaque externe présentée dans le cours.",
          "source": "Réanimation L2, page 18. Réanimation L2",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "type": "qcm",
          "text": "Quels éléments peuvent témoigner de l'efficacité du massage cardiaque externe selon le cours ? (Choisir 4 réponses.)",
          "options": [
            "Retour d'un pouls carotidien ou fémoral",
            "Reprise de la ventilation spontanée",
            "Recoloration cutanée",
            "Retour de la conscience"
          ],
          "explanation": "Leur réapparition traduit une amélioration de la circulation et de l'oxygénation.",
          "source": "Réanimation L2, page 18. Réanimation L2",
          "answers": [
            "Retour d'un pouls carotidien ou fémoral",
            "Reprise de la ventilation spontanée",
            "Recoloration cutanée",
            "Retour de la conscience"
          ],
          "correct": [
            "Retour d'un pouls carotidien ou fémoral",
            "Reprise de la ventilation spontanée",
            "Recoloration cutanée",
            "Retour de la conscience"
          ]
        },
        {
          "type": "qcd",
          "text": "Le paracétamol est également appelé acétaminophène.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "Les deux appellations désignent le même médicament.",
          "source": "Réanimation L2, page 20. Réanimation L2",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "type": "qcd",
          "text": "Une intoxication grave au paracétamol peut provoquer une hépatite fulminante.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "Le foie constitue l'organe majeur menacé lors d'un surdosage important.",
          "source": "Réanimation L2, pages 20–21. Réanimation L2",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "type": "qcm",
          "text": "Quels signes peuvent apparaître après une intoxication au paracétamol ? (Choisir 4 réponses.)",
          "options": [
            "Nausées",
            "Vomissements",
            "Douleurs abdominales",
            "Hépatalgies"
          ],
          "explanation": "Ce sont des manifestations précoces décrites dans le cours.",
          "source": "Réanimation L2, page 21. Réanimation L2",
          "answers": [
            "Nausées",
            "Vomissements",
            "Douleurs abdominales",
            "Hépatalgies"
          ],
          "correct": [
            "Nausées",
            "Vomissements",
            "Douleurs abdominales",
            "Hépatalgies"
          ]
        },
        {
          "type": "qcm",
          "text": "Quels examens sont cités dans le bilan biologique d'une intoxication au paracétamol ? (Choisir 4 réponses.)",
          "options": [
            "NFS",
            "Transaminases",
            "Taux de prothrombine",
            "Paracétamolémie"
          ],
          "explanation": "Ils permettent notamment d'évaluer l'intoxication et son retentissement hépatique.",
          "source": "Réanimation L2, page 21. Réanimation L2",
          "answers": [
            "NFS",
            "Transaminases",
            "Taux de prothrombine",
            "Paracétamolémie"
          ],
          "correct": [
            "NFS",
            "Transaminases",
            "Taux de prothrombine",
            "Paracétamolémie"
          ]
        },
        {
          "type": "qcd",
          "text": "La N-acétylcystéine est l'antidote cité pour l'intoxication au paracétamol.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "La NAC apparaît dans la conduite thérapeutique présentée par le cours.",
          "source": "Réanimation L2, page 22. Réanimation L2",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "type": "qcd",
          "text": "L'acide acétylsalicylique correspond à l'aspirine.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "L'aspirine est l'acide acétylsalicylique.",
          "source": "Réanimation L2, page 23. Réanimation L2",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "type": "qcm",
          "text": "Quels troubles neurologiques peuvent apparaître lors d'une intoxication à l'aspirine ? (Choisir 4 réponses.)",
          "options": [
            "Acouphènes",
            "Vertiges",
            "Agitation",
            "Délire"
          ],
          "explanation": "Le cours classe ces manifestations parmi les troubles neurologiques de l'intoxication.",
          "source": "Réanimation L2, page 23. Réanimation L2",
          "answers": [
            "Acouphènes",
            "Vertiges",
            "Agitation",
            "Délire"
          ],
          "correct": [
            "Acouphènes",
            "Vertiges",
            "Agitation",
            "Délire"
          ]
        },
        {
          "type": "qcd",
          "text": "La polypnée avec tachypnée peut être observée lors d'une intoxication à l'aspirine.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "Le cours la décrit parmi les manifestations respiratoires.",
          "source": "Réanimation L2, page 24. Réanimation L2",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "type": "qcm",
          "text": "Quels troubles digestifs sont décrits dans l'intoxication à l'aspirine ? (Choisir 4 réponses.)",
          "options": [
            "Nausées",
            "Vomissements",
            "Gastralgies",
            "Hématémèse"
          ],
          "explanation": "Tous sont mentionnés dans la symptomatologie digestive du cours.",
          "source": "Réanimation L2, page 24. Réanimation L2",
          "answers": [
            "Nausées",
            "Vomissements",
            "Gastralgies",
            "Hématémèse"
          ],
          "correct": [
            "Nausées",
            "Vomissements",
            "Gastralgies",
            "Hématémèse"
          ]
        },
        {
          "type": "qcd",
          "text": "L'intoxication au pétrole chez l'enfant est essentiellement accidentelle dans le cours.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "Le document la présente comme une intoxication très fréquente chez l'enfant et essentiellement accidentelle.",
          "source": "Réanimation L2, page 27. Réanimation L2",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "type": "qcm",
          "text": "Quels signes peuvent être retrouvés dans l'intoxication au pétrole ? (Choisir 4 réponses.)",
          "options": [
            "Odeur de pétrole de l'haleine",
            "Toux",
            "Dyspnée",
            "Cyanose"
          ],
          "explanation": "L'atteinte respiratoire occupe une place importante dans cette intoxication.",
          "source": "Réanimation L2, pages 28–29. Réanimation L2",
          "answers": [
            "Odeur de pétrole de l'haleine",
            "Toux",
            "Dyspnée",
            "Cyanose"
          ],
          "correct": [
            "Odeur de pétrole de l'haleine",
            "Toux",
            "Dyspnée",
            "Cyanose"
          ]
        },
        {
          "type": "qcd",
          "text": "Il faut provoquer les vomissements chez un enfant qui a ingéré du pétrole.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "Le cours classe le fait de faire vomir parmi les gestes à ne pas réaliser.",
          "source": "Réanimation L2, page 31. Réanimation L2",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "type": "qcm",
          "text": "Quels gestes sont interdits selon le cours en cas d'intoxication au pétrole ? (Choisir 4 réponses.)",
          "options": [
            "Faire vomir",
            "Faire un lavage gastrique",
            "Donner de l'huile rouge",
            "Donner du lait non concentré"
          ],
          "explanation": "Tous figurent parmi les gestes à ne pas effectuer dans cette situation.",
          "source": "Réanimation L2, page 31. Réanimation L2",
          "answers": [
            "Faire vomir",
            "Faire un lavage gastrique",
            "Donner de l'huile rouge",
            "Donner du lait non concentré"
          ],
          "correct": [
            "Faire vomir",
            "Faire un lavage gastrique",
            "Donner de l'huile rouge",
            "Donner du lait non concentré"
          ]
        },
        {
          "type": "qcm",
          "text": "Quels groupes de pesticides sont principalement étudiés dans le cours ? (Choisir 2 réponses.)",
          "options": [
            "Organochlorés",
            "Organophosphorés",
            "Antibiotiques",
            "Antalgiques"
          ],
          "explanation": "Le chapitre sur les pesticides porte notamment sur les organochlorés et les organophosphorés.",
          "source": "Réanimation L2, page 32. Réanimation L2",
          "answers": [
            "Organochlorés",
            "Organophosphorés"
          ],
          "correct": [
            "Organochlorés",
            "Organophosphorés"
          ]
        },
        {
          "type": "qcm",
          "text": "L'intoxication aux organochlorés peut se produire par quelles voies ? (Choisir 3 réponses.)",
          "options": [
            "Cutanée",
            "Respiratoire",
            "Digestive",
            "Uniquement intraveineuse"
          ],
          "explanation": "Le cours décrit les voies cutanée, respiratoire et digestive.",
          "source": "Réanimation L2, page 33. Réanimation L2",
          "answers": [
            "Cutanée",
            "Respiratoire",
            "Digestive"
          ],
          "correct": [
            "Cutanée",
            "Respiratoire",
            "Digestive"
          ]
        },
        {
          "type": "qcd",
          "text": "Les organophosphorés sont des inhibiteurs des cholinestérases.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "L'inhibition des cholinestérases explique les manifestations cholinergiques de l'intoxication.",
          "source": "Réanimation L2, page 34. Réanimation L2",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "type": "qcm",
          "text": "Quels signes appartiennent au syndrome muscarinique des organophosphorés ? (Choisir 4 réponses.)",
          "options": [
            "Hypersalivation",
            "Hypersécrétion bronchique",
            "Myosis serré",
            "Sueurs"
          ],
          "explanation": "L'accumulation d'acétylcholine entraîne notamment une augmentation importante des sécrétions et un myosis.",
          "source": "Réanimation L2, pages 34–35. Réanimation L2",
          "answers": [
            "Hypersalivation",
            "Hypersécrétion bronchique",
            "Myosis serré",
            "Sueurs"
          ],
          "correct": [
            "Hypersalivation",
            "Hypersécrétion bronchique",
            "Myosis serré",
            "Sueurs"
          ]
        },
        {
          "type": "qcm",
          "text": "Quels signes peuvent appartenir au syndrome nicotinique ? (Choisir 4 réponses.)",
          "options": [
            "Fasciculations musculaires",
            "Crampes",
            "Fatigabilité musculaire",
            "Incoordination des mouvements"
          ],
          "explanation": "L'atteinte nicotinique concerne principalement la fonction neuromusculaire.",
          "source": "Réanimation L2, page 35. Réanimation L2",
          "answers": [
            "Fasciculations musculaires",
            "Crampes",
            "Fatigabilité musculaire",
            "Incoordination des mouvements"
          ],
          "correct": [
            "Fasciculations musculaires",
            "Crampes",
            "Fatigabilité musculaire",
            "Incoordination des mouvements"
          ]
        },
        {
          "type": "qcm",
          "text": "Quels traitements spécifiques des organophosphorés sont cités ? (Choisir 2 réponses.)",
          "options": [
            "Sulfate d'atropine",
            "Pralidoxime",
            "Paracétamol",
            "Aspirine"
          ],
          "explanation": "Le cours cite le sulfate d'atropine et la pralidoxime dans le traitement.",
          "source": "Réanimation L2, page 36. Réanimation L2",
          "answers": [
            "Sulfate d'atropine",
            "Pralidoxime"
          ],
          "correct": [
            "Sulfate d'atropine",
            "Pralidoxime"
          ]
        },
        {
          "type": "qcd",
          "text": "Les produits caustiques peuvent provoquer des lésions de la bouche, de l'œsophage et de l'estomac.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "Leur action corrosive peut léser les différentes parties du tube digestif traversées.",
          "source": "Réanimation L2, page 37. Réanimation L2",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "type": "qcm",
          "text": "Quels signes peuvent apparaître au début d'une intoxication par produit caustique ? (Choisir 4 réponses.)",
          "options": [
            "Brûlure buccale",
            "Hypersialorrhée",
            "Douleurs rétrosternales",
            "Vomissements"
          ],
          "explanation": "Ces manifestations témoignent des lésions irritatives et corrosives du tube digestif.",
          "source": "Réanimation L2, page 38. Réanimation L2",
          "answers": [
            "Brûlure buccale",
            "Hypersialorrhée",
            "Douleurs rétrosternales",
            "Vomissements"
          ],
          "correct": [
            "Brûlure buccale",
            "Hypersialorrhée",
            "Douleurs rétrosternales",
            "Vomissements"
          ]
        },
        {
          "type": "qcd",
          "text": "Le cours recommande de donner systématiquement du lait après ingestion d'un produit caustique.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "Le cours demande au contraire d'éviter l'ingestion d'eau, de lait, d'huile ou d'œuf sur le lieu de l'accident.",
          "source": "Réanimation L2, page 39. Réanimation L2",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "type": "qcd",
          "text": "Le remplissage vasculaire vise à établir une masse circulante suffisante et une meilleure perfusion tissulaire.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "Le but est de restaurer un volume circulant permettant une perfusion correcte des organes.",
          "source": "Réanimation L2, page 40. Réanimation L2",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "type": "qcm",
          "text": "Quels grands groupes de solutions sont présentés pour le remplissage vasculaire ? (Choisir 2 réponses.)",
          "options": [
            "Colloïdes",
            "Cristalloïdes",
            "Antalgiques",
            "Antipyrétiques"
          ],
          "explanation": "Le cours distingue notamment les colloïdes et les cristalloïdes.",
          "source": "Réanimation L2, pages 40–42. Réanimation L2",
          "answers": [
            "Colloïdes",
            "Cristalloïdes"
          ],
          "correct": [
            "Colloïdes",
            "Cristalloïdes"
          ]
        },
        {
          "type": "qcm",
          "text": "Quels produits sont des cristalloïdes cités dans le cours ? (Choisir 2 réponses.)",
          "options": [
            "Sérum salé isotonique",
            "Ringer lactate",
            "Albumine",
            "Gélatine"
          ],
          "explanation": "Le sérum salé isotonique et le Ringer lactate sont classés parmi les cristalloïdes.",
          "source": "Réanimation L2, page 42. Réanimation L2",
          "answers": [
            "Sérum salé isotonique",
            "Ringer lactate"
          ],
          "correct": [
            "Sérum salé isotonique",
            "Ringer lactate"
          ]
        },
        {
          "type": "qcm",
          "text": "Quels éléments témoignent de l'efficacité du remplissage vasculaire ? (Choisir 4 réponses.)",
          "options": [
            "Réduction de la tachycardie",
            "Normalisation de la tension artérielle",
            "Amélioration de la conscience",
            "Normalisation de la diurèse"
          ],
          "explanation": "Ces modifications traduisent une amélioration de la circulation et de la perfusion tissulaire.",
          "source": "Réanimation L2, page 42. Réanimation L2",
          "answers": [
            "Réduction de la tachycardie",
            "Normalisation de la tension artérielle",
            "Amélioration de la conscience",
            "Normalisation de la diurèse"
          ],
          "correct": [
            "Réduction de la tachycardie",
            "Normalisation de la tension artérielle",
            "Amélioration de la conscience",
            "Normalisation de la diurèse"
          ]
        },
        {
          "type": "qcm",
          "text": "Une surcharge liée au remplissage vasculaire peut entraîner : (Choisir 4 réponses.)",
          "options": [
            "Œdème aigu du poumon",
            "Œdème cérébral",
            "Troubles de la coagulation",
            "Insuffisance rénale"
          ],
          "explanation": "Le remplissage excessif expose à une surcharge volémique et à plusieurs complications décrites dans le cours.",
          "source": "Réanimation L2, page 42. Réanimation L2",
          "answers": [
            "Œdème aigu du poumon",
            "Œdème cérébral",
            "Troubles de la coagulation",
            "Insuffisance rénale"
          ],
          "correct": [
            "Œdème aigu du poumon",
            "Œdème cérébral",
            "Troubles de la coagulation",
            "Insuffisance rénale"
          ]
        },
        {
          "type": "qcd",
          "text": "Le cours définit la noyade comme la pénétration de liquide dans les voies aériennes.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "L'envahissement des voies aériennes compromet les échanges respiratoires et expose à l'hypoxie.",
          "source": "Réanimation L2, page 44. Réanimation L2",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "type": "qcm",
          "text": "Combien de stades d'urgence du noyé sont distingués dans le cours ? (Choisir 1 réponse.)",
          "options": [
            "Deux",
            "Trois",
            "Quatre",
            "Cinq"
          ],
          "explanation": "Le cours classe le noyé en quatre stades selon la gravité.",
          "source": "Réanimation L2, pages 46–47. Réanimation L2",
          "answer": "Quatre",
          "correct": "Quatre"
        },
        {
          "type": "qcm",
          "text": "Quels sont les quatre stades décrits ? (Choisir 4 réponses.)",
          "options": [
            "Aquastress",
            "Petit hypoxique",
            "Grand hypoxique",
            "Anoxique ou état de mort apparente"
          ],
          "explanation": "Ils représentent une aggravation progressive de l'atteinte liée à l'hypoxie.",
          "source": "Réanimation L2, pages 46–47. Réanimation L2",
          "answers": [
            "Aquastress",
            "Petit hypoxique",
            "Grand hypoxique",
            "Anoxique ou état de mort apparente"
          ],
          "correct": [
            "Aquastress",
            "Petit hypoxique",
            "Grand hypoxique",
            "Anoxique ou état de mort apparente"
          ]
        },
        {
          "type": "qcd",
          "text": "L'aquastress correspond au stade I.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "L'aquastress représente le premier stade dans la classification présentée.",
          "source": "Réanimation L2, page 46. Réanimation L2",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "type": "qcd",
          "text": "Le stade IV correspond à l'anoxique ou état de mort apparente.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "C'est le stade le plus grave de la classification du cours.",
          "source": "Réanimation L2, page 47. Réanimation L2",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "type": "qcd",
          "text": "La réanimation néonatale regroupe les mesures destinées à ressusciter un nouveau-né en détresse vitale.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "Elle vise à assurer les fonctions vitales du nouveau-né en difficulté à la naissance.",
          "source": "Réanimation L2, page 49. Réanimation L2",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "type": "qcm",
          "text": "Quels facteurs de risque liés au fœtus sont cités ? (Choisir 4 réponses.)",
          "options": [
            "Prématurité",
            "Macrosomie",
            "Hypotrophie",
            "Malformation"
          ],
          "explanation": "Ces situations peuvent augmenter le risque de détresse du nouveau-né.",
          "source": "Réanimation L2, page 50. Réanimation L2",
          "answers": [
            "Prématurité",
            "Macrosomie",
            "Hypotrophie",
            "Malformation"
          ],
          "correct": [
            "Prématurité",
            "Macrosomie",
            "Hypotrophie",
            "Malformation"
          ]
        },
        {
          "type": "qcm",
          "text": "Quelles manœuvres obstétricales sont citées comme facteurs de risque ? (Choisir 2 réponses.)",
          "options": [
            "Ventouse",
            "Forceps",
            "Prise de température",
            "Pesée"
          ],
          "explanation": "La ventouse et le forceps figurent parmi les manœuvres obstétricales mentionnées.",
          "source": "Réanimation L2, page 50. Réanimation L2",
          "answers": [
            "Ventouse",
            "Forceps"
          ],
          "correct": [
            "Ventouse",
            "Forceps"
          ]
        },
        {
          "type": "qcm",
          "text": "Quels sont les cinq éléments du score d'APGAR ? (Choisir 5 réponses.)",
          "options": [
            "Aspect",
            "Pouls",
            "Grimace",
            "Activité",
            "Respiration"
          ],
          "explanation": "Le score apprécie la couleur, la fréquence cardiaque, la réaction aux stimulations, le tonus et la respiration du nouveau-né.",
          "source": "Réanimation L2, page 51. Réanimation L2",
          "answers": [
            "Aspect",
            "Pouls",
            "Grimace",
            "Activité",
            "Respiration"
          ],
          "correct": [
            "Aspect",
            "Pouls",
            "Grimace",
            "Activité",
            "Respiration"
          ]
        },
        {
          "type": "qcd",
          "text": "Le score d'APGAR est calculé dans le cours à 1, 5 et 10 minutes de vie.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "Ces évaluations successives permettent d'apprécier l'adaptation du nouveau-né.",
          "source": "Réanimation L2, page 51. Réanimation L2",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "type": "qcm",
          "text": "Dans le tableau du cours, quelle fréquence cardiaque donne 2 points au critère « Pouls » ? (Choisir 1 réponse.)",
          "options": [
            "Absence de pouls",
            "Moins de 100/min",
            "Plus de 100/min",
            "Moins de 50/min"
          ],
          "explanation": "Dans le tableau d'APGAR du cours, une fréquence cardiaque supérieure à 100/min obtient 2 points.",
          "source": "Réanimation L2, page 51. Réanimation L2",
          "answer": "Plus de 100/min",
          "correct": "Plus de 100/min"
        },
        {
          "type": "qcd",
          "text": "Selon l'interprétation du cours, un score d'APGAR compris entre 3 et 7 correspond à une souffrance cérébrale modérée.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "C'est l'interprétation donnée dans le document pour cette tranche de score.",
          "source": "Réanimation L2, page 51. Réanimation L2",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "type": "qcm",
          "text": "Quels sont les principes de base de la réanimation néonatale présentés dans le cours ? (Choisir 3 réponses.)",
          "options": [
            "Vérification du matériel",
            "Asepsie",
            "Contrôle thermique",
            "Aucun contrôle de la température"
          ],
          "explanation": "La préparation du matériel, la prévention des infections et la lutte contre l'hypothermie constituent trois éléments fondamentaux.",
          "source": "Réanimation L2, pages 52–53. Réanimation L2",
          "answers": [
            "Vérification du matériel",
            "Asepsie",
            "Contrôle thermique"
          ],
          "correct": [
            "Vérification du matériel",
            "Asepsie",
            "Contrôle thermique"
          ]
        },
        {
          "type": "qcm",
          "text": "Quelles mesures permettent de prévenir l'hypothermie du nouveau-né selon le cours ? (Choisir 4 réponses.)",
          "options": [
            "Utiliser une table ou une lampe chauffante",
            "Interrompre la climatisation",
            "Éviter les courants d'air",
            "Habiller chaudement le bébé"
          ],
          "explanation": "Le nouveau-né perd facilement de la chaleur. Le contrôle thermique constitue donc un élément essentiel de sa prise en charge.",
          "source": "Réanimation L2, page 53. Réanimation L2",
          "answers": [
            "Utiliser une table ou une lampe chauffante",
            "Interrompre la climatisation",
            "Éviter les courants d'air",
            "Habiller chaudement le bébé"
          ],
          "correct": [
            "Utiliser une table ou une lampe chauffante",
            "Interrompre la climatisation",
            "Éviter les courants d'air",
            "Habiller chaudement le bébé"
          ]
        },
        {
          "type": "qcm",
          "text": "Parmi les gestes suivants, lesquels sont proscrits dans le cours lors de la réanimation néonatale ? (Choisir 4 réponses.)",
          "options": [
            "Taper vigoureusement sur les fesses du nouveau-né",
            "Frotter fortement sa peau avec de l'alcool",
            "Pincer le mamelon",
            "Réaliser des gestes brutaux"
          ],
          "explanation": "Le cours précise que ces gestes sont dangereux et ne doivent pas être utilisés pour stimuler le nouveau-né.",
          "source": "Réanimation L2, page 55. Réanimation L2",
          "answers": [
            "Taper vigoureusement sur les fesses du nouveau-né",
            "Frotter fortement sa peau avec de l'alcool",
            "Pincer le mamelon",
            "Réaliser des gestes brutaux"
          ],
          "correct": [
            "Taper vigoureusement sur les fesses du nouveau-né",
            "Frotter fortement sa peau avec de l'alcool",
            "Pincer le mamelon",
            "Réaliser des gestes brutaux"
          ]
        }
      ]
    },
    {
      "id": "chirurgie-pediatrique-l2-60",
      "title": "Chirurgie pédiatrique L2 — 60 questions",
      "matter": "Chirurgie pédiatrique",
      "description": "Traumatismes obstétricaux, vomissements de l’enfant et détresse respiratoire du nouveau-né.",
      "instructions": "QCD : choisir Vrai ou Faux. QCM : sélectionner le nombre de réponses indiqué. Bonne réponse : +1 ; mauvaise réponse QCD : −1 ; mauvaise réponse QCM ou absence de réponse : 0.",
      "duration": 90,
      "programmed": true,
      "openDate": "2026-01-01",
      "openTime": "00:00",
      "closeDate": "2030-12-31",
      "closeTime": "23:59",
      "marking": {
        "correct": 1,
        "wrong": -1,
        "empty": 0
      },
      "questions": [
        {
          "type": "qcd",
          "text": "La macrosomie constitue un facteur favorisant les traumatismes obstétricaux.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "Un nouveau-né macrosome est davantage exposé aux difficultés lors de l'accouchement et donc aux traumatismes obstétricaux.",
          "source": "Cours de pédiatrie L2, Traumatismes obstétricaux, p. 49–52.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "type": "qcd",
          "text": "La bosse sérosanguine est une collection située sous le périoste.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "La bosse sérosanguine est une collection sous-cutanée. C'est le céphalhématome qui correspond à une collection sanguine sous-périostée.",
          "source": "Cours de pédiatrie L2.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "type": "qcm",
          "text": "Quelles caractéristiques correspondent à la bosse sérosanguine ? (Choisir 3 réponses.)",
          "options": [
            "Collection sous-cutanée",
            "Tuméfaction mal limitée",
            "Peut dépasser les sutures crâniennes",
            "Toujours sous-périostée",
            "Nécessite systématiquement une incision"
          ],
          "explanation": "Contrairement au céphalhématome, la bosse sérosanguine est sous-cutanée, mal limitée et peut franchir les sutures.",
          "source": "Cours de pédiatrie L2.",
          "answers": [
            "Collection sous-cutanée",
            "Tuméfaction mal limitée",
            "Peut dépasser les sutures crâniennes"
          ],
          "correct": [
            "Collection sous-cutanée",
            "Tuméfaction mal limitée",
            "Peut dépasser les sutures crâniennes"
          ]
        },
        {
          "type": "qcd",
          "text": "Le céphalhématome peut dépasser les sutures crâniennes.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "Le céphalhématome est une collection sous-périostée généralement bien limitée. Il respecte les sutures crâniennes.",
          "source": "Cours de pédiatrie L2.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "type": "qcm",
          "text": "Quels gestes faut-il éviter devant un céphalhématome ? (Choisir 3 réponses.)",
          "options": [
            "Massage",
            "Ponction",
            "Incision",
            "Surveillance de la coloration",
            "Observation de l'évolution"
          ],
          "explanation": "Le massage, la ponction et l'incision sont à éviter. En revanche, l'évolution et la coloration du nouveau-né doivent être surveillées.",
          "source": "Cours de pédiatrie L2.",
          "answers": [
            "Massage",
            "Ponction",
            "Incision"
          ],
          "correct": [
            "Massage",
            "Ponction",
            "Incision"
          ]
        },
        {
          "type": "qcd",
          "text": "Le céphalhématome peut favoriser l'apparition d'un ictère.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "La résorption de la collection sanguine peut augmenter la production de bilirubine et favoriser l'ictère.",
          "source": "Cours de pédiatrie L2.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "type": "qcm",
          "text": "Quels signes peuvent faire suspecter une fracture de la clavicule chez le nouveau-né ? (Choisir 3 réponses.)",
          "options": [
            "Asymétrie des mouvements des bras",
            "Tuméfaction sur la clavicule",
            "Solution de continuité à la palpation",
            "Diarrhée",
            "Écoulement nasal"
          ],
          "explanation": "Une diminution des mouvements du membre et des anomalies à l'examen de la clavicule orientent vers une fracture.",
          "source": "Cours de pédiatrie L2.",
          "answers": [
            "Asymétrie des mouvements des bras",
            "Tuméfaction sur la clavicule",
            "Solution de continuité à la palpation"
          ],
          "correct": [
            "Asymétrie des mouvements des bras",
            "Tuméfaction sur la clavicule",
            "Solution de continuité à la palpation"
          ]
        },
        {
          "type": "qcd",
          "text": "Toutes les fractures obstétricales de la clavicule nécessitent une intervention chirurgicale.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "Une fracture de clavicule ne signifie pas automatiquement qu'une intervention chirurgicale est nécessaire.",
          "source": "Cours de pédiatrie L2.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "type": "qcm",
          "text": "Quel examen permet de confirmer une fracture de la clavicule ? (Choisir 1 réponse.)",
          "options": [
            "Radiographie centrée sur les clavicules",
            "ECBU",
            "Goutte épaisse",
            "Analyse des selles"
          ],
          "explanation": "La radiographie permet de visualiser la fracture et éventuellement son évolution vers la consolidation.",
          "source": "Cours de pédiatrie L2.",
          "answer": "Radiographie centrée sur les clavicules",
          "correct": "Radiographie centrée sur les clavicules"
        },
        {
          "type": "qcd",
          "text": "Une traction importante sur le membre supérieur peut provoquer une lésion du plexus brachial.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "Une traction obstétricale excessive peut léser les structures nerveuses du plexus brachial.",
          "source": "Cours de pédiatrie L2.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "type": "qcm",
          "text": "Quel signe évoque principalement une paralysie du plexus brachial ? (Choisir 1 réponse.)",
          "options": [
            "Diminution ou absence des mouvements du bras atteint",
            "Diarrhée",
            "Toux",
            "Rougeur du siège"
          ],
          "explanation": "Le plexus brachial assure l'innervation du membre supérieur. Sa lésion peut donc entraîner une diminution ou une absence des mouvements du bras.",
          "source": "Cours de pédiatrie L2.",
          "answer": "Diminution ou absence des mouvements du bras atteint",
          "correct": "Diminution ou absence des mouvements du bras atteint"
        },
        {
          "type": "qcd",
          "text": "Le massage forcé d'un bras paralysé est recommandé après une lésion obstétricale du plexus brachial.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "Les manipulations forcées peuvent aggraver les lésions et doivent être évitées.",
          "source": "Cours de pédiatrie L2.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "type": "qcm",
          "text": "Quelles situations nécessitent une orientation spécialisée selon le document ? (Choisir 3 réponses.)",
          "options": [
            "Fracture du fémur",
            "Fracture du rachis",
            "Lésion viscérale",
            "Bosse sérosanguine simple en régression",
            "Régurgitation isolée"
          ],
          "explanation": "Les fractures importantes et les lésions viscérales nécessitent une prise en charge spécialisée.",
          "source": "Cours de pédiatrie L2.",
          "answers": [
            "Fracture du fémur",
            "Fracture du rachis",
            "Lésion viscérale"
          ],
          "correct": [
            "Fracture du fémur",
            "Fracture du rachis",
            "Lésion viscérale"
          ]
        },
        {
          "type": "qcd",
          "text": "Les traumatismes obstétricaux concernent uniquement les os.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "Ils peuvent toucher les tissus mous, les os, les nerfs et les viscères.",
          "source": "Cours de pédiatrie L2.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "type": "qcm",
          "text": "Quelles actions participent à la prévention des traumatismes obstétricaux ? (Choisir 3 réponses.)",
          "options": [
            "Identifier les grossesses à risque",
            "Orienter les grossesses à risque",
            "Éviter les fortes tractions sur le nouveau-né",
            "Encourager les accouchements sans assistance"
          ],
          "explanation": "Le repérage des risques et la prudence lors de l'accouchement contribuent à prévenir les traumatismes.",
          "source": "Cours de pédiatrie L2.",
          "answers": [
            "Identifier les grossesses à risque",
            "Orienter les grossesses à risque",
            "Éviter les fortes tractions sur le nouveau-né"
          ],
          "correct": [
            "Identifier les grossesses à risque",
            "Orienter les grossesses à risque",
            "Éviter les fortes tractions sur le nouveau-né"
          ]
        },
        {
          "type": "qcd",
          "text": "Le vomissement correspond au rejet du contenu gastrique avec participation musculaire.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "Le vomissement est un phénomène actif faisant notamment intervenir les muscles abdominaux et le diaphragme.",
          "source": "Cours de pédiatrie L2.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "type": "qcd",
          "text": "Vomissement et régurgitation correspondent exactement au même phénomène.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "La régurgitation correspond à une remontée passive, tandis que le vomissement implique une participation musculaire.",
          "source": "Cours de pédiatrie L2.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "type": "qcm",
          "text": "Quels phénomènes doivent être distingués du vomissement ? (Choisir 3 réponses.)",
          "options": [
            "Régurgitation",
            "Mérycisme",
            "Vomique",
            "Appendicite"
          ],
          "explanation": "Ces trois phénomènes ont des mécanismes différents du vomissement.",
          "source": "Cours de pédiatrie L2.",
          "answers": [
            "Régurgitation",
            "Mérycisme",
            "Vomique"
          ],
          "correct": [
            "Régurgitation",
            "Mérycisme",
            "Vomique"
          ]
        },
        {
          "type": "qcd",
          "text": "Le mérycisme correspond à une rumination du contenu gastrique.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "C'est la définition donnée dans le document.",
          "source": "Cours de pédiatrie L2.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "type": "qcm",
          "text": "Le contenu rejeté lors d'une vomique provient : (Choisir 1 réponse.)",
          "options": [
            "De l'estomac",
            "Des voies respiratoires",
            "De la vessie",
            "Du périoste"
          ],
          "explanation": "La vomique correspond au rejet par la bouche d'un contenu provenant des voies respiratoires et ne doit donc pas être confondue avec un vomissement.",
          "source": "Cours de pédiatrie L2.",
          "answer": "Des voies respiratoires",
          "correct": "Des voies respiratoires"
        },
        {
          "type": "qcm",
          "text": "Quels renseignements doivent être précisés devant des vomissements ? (Choisir 4 réponses.)",
          "options": [
            "Fréquence",
            "Quantité",
            "Aspect",
            "Date de début"
          ],
          "explanation": "La caractérisation précise des vomissements aide à orienter la recherche de leur cause.",
          "source": "Cours de pédiatrie L2.",
          "answers": [
            "Fréquence",
            "Quantité",
            "Aspect",
            "Date de début"
          ],
          "correct": [
            "Fréquence",
            "Quantité",
            "Aspect",
            "Date de début"
          ]
        },
        {
          "type": "qcd",
          "text": "Un vomissement peut être alimentaire, bilieux ou hémorragique.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "L'aspect du vomissement constitue un renseignement important lors de l'interrogatoire.",
          "source": "Cours de pédiatrie L2.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "type": "qcm",
          "text": "Quels signes associés doivent être recherchés ? (Choisir 3 réponses.)",
          "options": [
            "Fièvre",
            "Constipation",
            "Diarrhée",
            "Couleur des vêtements"
          ],
          "explanation": "Ces signes peuvent aider à orienter vers la cause des vomissements.",
          "source": "Cours de pédiatrie L2.",
          "answers": [
            "Fièvre",
            "Constipation",
            "Diarrhée"
          ],
          "correct": [
            "Fièvre",
            "Constipation",
            "Diarrhée"
          ]
        },
        {
          "type": "qcd",
          "text": "L'état d'hydratation doit être évalué chez un enfant qui vomit.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "Les vomissements répétés peuvent provoquer des pertes hydriques et conduire à une déshydratation.",
          "source": "Cours de pédiatrie L2.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "type": "qcm",
          "text": "Quelles complications peuvent résulter de vomissements répétés ? (Choisir 3 réponses.)",
          "options": [
            "Déshydratation",
            "Dénutrition",
            "Fausse route",
            "Amélioration systématique de la croissance"
          ],
          "explanation": "Les pertes répétées peuvent altérer l'hydratation et la nutrition ; les vomissements exposent également au risque de fausse route.",
          "source": "Cours de pédiatrie L2.",
          "answers": [
            "Déshydratation",
            "Dénutrition",
            "Fausse route"
          ],
          "correct": [
            "Déshydratation",
            "Dénutrition",
            "Fausse route"
          ]
        },
        {
          "type": "qcm",
          "text": "Quelles causes de vomissements sont citées chez le nouveau-né ? (Choisir 3 réponses.)",
          "options": [
            "Atrésie de l'œsophage",
            "Maladie de Hirschsprung",
            "Occlusion",
            "Fracture simple de clavicule"
          ],
          "explanation": "Le document classe ces affections parmi les causes possibles de vomissements du nouveau-né.",
          "source": "Cours de pédiatrie L2.",
          "answers": [
            "Atrésie de l'œsophage",
            "Maladie de Hirschsprung",
            "Occlusion"
          ],
          "correct": [
            "Atrésie de l'œsophage",
            "Maladie de Hirschsprung",
            "Occlusion"
          ]
        },
        {
          "type": "qcm",
          "text": "Quelles causes sont citées chez le nourrisson et l'enfant ? (Choisir 3 réponses.)",
          "options": [
            "Invagination intestinale aiguë",
            "Sténose hypertrophique du pylore",
            "Hernie",
            "Céphalhématome isolé"
          ],
          "explanation": "Ces affections digestives peuvent être responsables de vomissements chez le nourrisson ou l'enfant.",
          "source": "Cours de pédiatrie L2.",
          "answers": [
            "Invagination intestinale aiguë",
            "Sténose hypertrophique du pylore",
            "Hernie"
          ],
          "correct": [
            "Invagination intestinale aiguë",
            "Sténose hypertrophique du pylore",
            "Hernie"
          ]
        },
        {
          "type": "qcd",
          "text": "L'invagination intestinale aiguë peut être une cause de vomissements chez le nourrisson.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "Elle figure explicitement parmi les causes citées dans le document.",
          "source": "Cours de pédiatrie L2.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "type": "qcm",
          "text": "Quels éléments peuvent être recherchés à l'examen abdominal ? (Choisir 3 réponses.)",
          "options": [
            "Météorisme",
            "Défense abdominale",
            "Hépatomégalie",
            "Plaie du cuir chevelu"
          ],
          "explanation": "L'examen abdominal recherche notamment une distension, une défense et une augmentation du volume du foie.",
          "source": "Cours de pédiatrie L2.",
          "answers": [
            "Météorisme",
            "Défense abdominale",
            "Hépatomégalie"
          ],
          "correct": [
            "Météorisme",
            "Défense abdominale",
            "Hépatomégalie"
          ]
        },
        {
          "type": "qcm",
          "text": "Quels examens peuvent rechercher une cause chirurgicale de vomissements ? (Choisir 3 réponses.)",
          "options": [
            "Radiographie de l'abdomen sans préparation",
            "Échographie",
            "Transit œsogastroduodénal",
            "Audiogramme"
          ],
          "explanation": "Ces examens d'imagerie sont cités pour orienter la recherche d'une affection digestive ou chirurgicale.",
          "source": "Cours de pédiatrie L2.",
          "answers": [
            "Radiographie de l'abdomen sans préparation",
            "Échographie",
            "Transit œsogastroduodénal"
          ],
          "correct": [
            "Radiographie de l'abdomen sans préparation",
            "Échographie",
            "Transit œsogastroduodénal"
          ]
        },
        {
          "type": "qcd",
          "text": "L'ionogramme sanguin peut être utile chez un enfant présentant des vomissements importants.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "Il permet notamment d'apprécier les perturbations électrolytiques liées aux pertes digestives.",
          "source": "Cours de pédiatrie L2.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "type": "qcm",
          "text": "Quel examen permet de rechercher une infection urinaire ? (Choisir 1 réponse.)",
          "options": [
            "ECBU",
            "Goutte épaisse",
            "Radiographie de clavicule",
            "Transit œsogastroduodénal"
          ],
          "explanation": "L'ECBU est l'examen cité pour rechercher une infection urinaire selon le contexte clinique.",
          "source": "Cours de pédiatrie L2.",
          "answer": "ECBU",
          "correct": "ECBU"
        },
        {
          "type": "qcm",
          "text": "Quel examen est cité pour rechercher un paludisme ? (Choisir 1 réponse.)",
          "options": [
            "Goutte épaisse ou frottis sanguin",
            "ECBU uniquement",
            "Radiographie de clavicule",
            "Échographie cardiaque"
          ],
          "explanation": "La goutte épaisse ou le frottis sanguin peut être demandé si le contexte fait suspecter un paludisme.",
          "source": "Cours de pédiatrie L2.",
          "answer": "Goutte épaisse ou frottis sanguin",
          "correct": "Goutte épaisse ou frottis sanguin"
        },
        {
          "type": "qcd",
          "text": "Le reflux gastro-œsophagien figure parmi les causes habituelles de vomissements citées.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "Le document le cite parmi les causes habituelles.",
          "source": "Cours de pédiatrie L2.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "type": "qcd",
          "text": "Tout vomissement chez le nourrisson signifie obligatoirement une affection chirurgicale.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "Les vomissements ont de nombreuses causes. L'évaluation clinique sert justement à rechercher leur origine.",
          "source": "Cours de pédiatrie L2.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "type": "qcd",
          "text": "La détresse respiratoire néonatale peut avoir une origine malformative.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "Plusieurs malformations sont citées parmi ses causes.",
          "source": "Cours de pédiatrie L2, détresse respiratoire, p. 21–25.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "type": "qcm",
          "text": "Quelles causes malformatives ou obstructives sont citées ? (Choisir 3 réponses.)",
          "options": [
            "Atrésie des choanes",
            "Syndrome de Pierre Robin",
            "Hernie diaphragmatique",
            "Bosse sérosanguine"
          ],
          "explanation": "Ces trois affections peuvent compromettre la respiration du nouveau-né.",
          "source": "Cours de pédiatrie L2.",
          "answers": [
            "Atrésie des choanes",
            "Syndrome de Pierre Robin",
            "Hernie diaphragmatique"
          ],
          "correct": [
            "Atrésie des choanes",
            "Syndrome de Pierre Robin",
            "Hernie diaphragmatique"
          ]
        },
        {
          "type": "qcd",
          "text": "L'atrésie des choanes peut provoquer une détresse respiratoire du nouveau-né.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "Elle constitue une cause obstructive ORL citée dans le document.",
          "source": "Cours de pédiatrie L2.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "type": "qcd",
          "text": "La hernie diaphragmatique figure parmi les causes de détresse respiratoire néonatale.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "Il s'agit d'une cause malformative mentionnée dans le cours.",
          "source": "Cours de pédiatrie L2.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "type": "qcm",
          "text": "Quels appareils ou systèmes doivent particulièrement être examinés ? (Choisir 3 réponses.)",
          "options": [
            "Appareil respiratoire",
            "Appareil cardiovasculaire",
            "Système neurologique",
            "Système pileux uniquement"
          ],
          "explanation": "L'évaluation ne doit pas se limiter aux poumons, car des causes cardiaques ou neurologiques peuvent intervenir.",
          "source": "Cours de pédiatrie L2.",
          "answers": [
            "Appareil respiratoire",
            "Appareil cardiovasculaire",
            "Système neurologique"
          ],
          "correct": [
            "Appareil respiratoire",
            "Appareil cardiovasculaire",
            "Système neurologique"
          ]
        },
        {
          "type": "qcm",
          "text": "Quels examens peuvent être demandés selon le tableau clinique ? (Choisir 3 réponses.)",
          "options": [
            "Radiographie pulmonaire",
            "Glycémie",
            "Hémogramme",
            "Mesure de la pointure"
          ],
          "explanation": "Le bilan est orienté par le contexte clinique et peut comporter ces examens.",
          "source": "Cours de pédiatrie L2.",
          "answers": [
            "Radiographie pulmonaire",
            "Glycémie",
            "Hémogramme"
          ],
          "correct": [
            "Radiographie pulmonaire",
            "Glycémie",
            "Hémogramme"
          ]
        },
        {
          "type": "qcd",
          "text": "La radiographie pulmonaire peut contribuer à l'évaluation d'une détresse respiratoire néonatale.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "Elle fait partie des examens cités pour rechercher certaines causes respiratoires.",
          "source": "Cours de pédiatrie L2.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "type": "qcm",
          "text": "Quelle affection respiratoire est particulièrement citée chez le prématuré ? (Choisir 1 réponse.)",
          "options": [
            "Maladie des membranes hyalines",
            "Bosse sérosanguine",
            "Fracture de clavicule",
            "Régurgitation"
          ],
          "explanation": "La maladie des membranes hyalines figure parmi les causes respiratoires néonatales citées chez le prématuré.",
          "source": "Cours de pédiatrie L2.",
          "answer": "Maladie des membranes hyalines",
          "correct": "Maladie des membranes hyalines"
        },
        {
          "type": "qcd",
          "text": "Le pneumothorax peut provoquer une détresse respiratoire néonatale.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "Le pneumothorax figure parmi les causes respiratoires citées dans le document.",
          "source": "Cours de pédiatrie L2.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "type": "qcm",
          "text": "Quelle cause extra-respiratoire est citée ? (Choisir 1 réponse.)",
          "options": [
            "Anémie",
            "Mérycisme",
            "Bosse sérosanguine",
            "Abrasion cutanée"
          ],
          "explanation": "L'anémie peut participer à une détresse respiratoire et est classée parmi les causes extra-respiratoires.",
          "source": "Cours de pédiatrie L2.",
          "answer": "Anémie",
          "correct": "Anémie"
        },
        {
          "type": "qcd",
          "text": "Une cardiopathie peut être associée à une détresse respiratoire du nouveau-né.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "Une origine cardiovasculaire doit être envisagée devant une détresse respiratoire.",
          "source": "Cours de pédiatrie L2.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "type": "qcm",
          "text": "Quelles complications graves sont citées pour la détresse respiratoire néonatale ? (Choisir 2 réponses.)",
          "options": [
            "Asphyxie",
            "Défaillance de plusieurs organes",
            "Fracture de clavicule",
            "Bosse sérosanguine"
          ],
          "explanation": "Une détresse respiratoire sévère compromet l'oxygénation et peut conduire à une asphyxie et à une défaillance multiviscérale.",
          "source": "Cours de pédiatrie L2.",
          "answers": [
            "Asphyxie",
            "Défaillance de plusieurs organes"
          ],
          "correct": [
            "Asphyxie",
            "Défaillance de plusieurs organes"
          ]
        },
        {
          "type": "qcd",
          "text": "La fréquence respiratoire est inutile à surveiller chez un nouveau-né présentant une détresse respiratoire.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "La fréquence respiratoire est une donnée essentielle à surveiller chez un nouveau-né en difficulté respiratoire.",
          "source": "Cours de pédiatrie L2.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "type": "qcm",
          "text": "Après un accouchement difficile, un nouveau-né présente une tuméfaction crânienne **bien limitée ne dépassant pas les sutures**. Quel diagnostic évoquez-vous ? (Choisir 1 réponse.)",
          "options": [
            "Céphalhématome",
            "Bosse sérosanguine",
            "Fracture du fémur",
            "Paralysie du plexus brachial"
          ],
          "explanation": "Le caractère bien limité et le respect des sutures orientent vers un céphalhématome.",
          "source": "Cours de pédiatrie L2.",
          "answer": "Céphalhématome",
          "correct": "Céphalhématome"
        },
        {
          "type": "qcm",
          "text": "Après un accouchement difficile, un nouveau-né bouge moins un bras et présente une tuméfaction sur le trajet de la clavicule. Quel diagnostic suspecter ? (Choisir 1 réponse.)",
          "options": [
            "Fracture de clavicule",
            "Hirschsprung",
            "Atrésie des choanes",
            "Péritonite"
          ],
          "explanation": "L'association de la diminution des mouvements du bras et d'une tuméfaction claviculaire évoque une fracture de clavicule.",
          "source": "Cours de pédiatrie L2.",
          "answer": "Fracture de clavicule",
          "correct": "Fracture de clavicule"
        },
        {
          "type": "qcm",
          "text": "Un bras est pratiquement immobile après une traction obstétricale. Quelle structure peut être lésée ? (Choisir 1 réponse.)",
          "options": [
            "Plexus brachial",
            "Pylore",
            "Péritoine",
            "Choanes"
          ],
          "explanation": "Une traction importante du membre supérieur peut léser le plexus brachial.",
          "source": "Cours de pédiatrie L2.",
          "answer": "Plexus brachial",
          "correct": "Plexus brachial"
        },
        {
          "type": "qcm",
          "text": "Un enfant présente des vomissements importants avec altération de son état général. Que faut-il faire ? (Choisir 3 réponses.)",
          "options": [
            "Rechercher les signes de danger",
            "Évaluer l'hydratation",
            "Organiser une référence spécialisée",
            "Considérer obligatoirement les vomissements comme bénins"
          ],
          "explanation": "Une altération importante de l'état général impose une évaluation clinique et une orientation adaptée.",
          "source": "Cours de pédiatrie L2.",
          "answers": [
            "Rechercher les signes de danger",
            "Évaluer l'hydratation",
            "Organiser une référence spécialisée"
          ],
          "correct": [
            "Rechercher les signes de danger",
            "Évaluer l'hydratation",
            "Organiser une référence spécialisée"
          ]
        },
        {
          "type": "qcd",
          "text": "Une défense abdominale doit être recherchée chez un enfant présentant des vomissements.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "Elle peut orienter vers une affection abdominale nécessitant une prise en charge adaptée.",
          "source": "Cours de pédiatrie L2.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "type": "qcd",
          "text": "L'absence de fièvre suffit à conclure que les vomissements sont bénins.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "Certaines causes importantes ou chirurgicales peuvent exister sans fièvre. Il faut considérer l'ensemble du tableau clinique.",
          "source": "Cours de pédiatrie L2.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "type": "qcm",
          "text": "Un nouveau-né présente une fracture du fémur liée à l'accouchement. Quelle conduite correspond au cours ? (Choisir 1 réponse.)",
          "options": [
            "Orientation en chirurgie pédiatrique",
            "Massage énergique du membre",
            "Mobilisation forcée",
            "Attendre sans surveillance"
          ],
          "explanation": "Une fracture du fémur nécessite une prise en charge spécialisée.",
          "source": "Cours de pédiatrie L2.",
          "answer": "Orientation en chirurgie pédiatrique",
          "correct": "Orientation en chirurgie pédiatrique"
        },
        {
          "type": "qcd",
          "text": "Une orientation en chirurgie pédiatrique signifie obligatoirement qu'une opération sera réalisée immédiatement.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "L'orientation spécialisée permet une évaluation et une prise en charge adaptées ; elle ne signifie pas automatiquement une intervention chirurgicale immédiate.",
          "source": "Cours de pédiatrie L2.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "type": "qcm",
          "text": "Quelles activités relèvent du rôle infirmier dans les situations étudiées ? (Choisir 4 réponses.)",
          "options": [
            "Observer et surveiller l'enfant",
            "Participer aux soins prescrits",
            "Informer les parents",
            "Contribuer à l'organisation de la référence",
            "Décider seul de toutes les interventions chirurgicales"
          ],
          "explanation": "L'infirmier participe à l'évaluation, à la surveillance, aux soins prescrits, à l'information et à l'organisation de la référence.",
          "source": "Cours de pédiatrie L2.",
          "answers": [
            "Observer et surveiller l'enfant",
            "Participer aux soins prescrits",
            "Informer les parents",
            "Contribuer à l'organisation de la référence"
          ],
          "correct": [
            "Observer et surveiller l'enfant",
            "Participer aux soins prescrits",
            "Informer les parents",
            "Contribuer à l'organisation de la référence"
          ]
        },
        {
          "type": "qcd",
          "text": "L'apparition d'une pâleur chez un nouveau-né présentant un hématome doit être prise en compte.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "Une modification de la coloration cutanée peut traduire une aggravation ou un retentissement de la collection sanguine et doit être surveillée.",
          "source": "Cours de pédiatrie L2.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "type": "qcm",
          "text": "Quel examen peut contribuer à rechercher une anémie chez un nouveau-né présentant une collection sanguine importante ? (Choisir 1 réponse.)",
          "options": [
            "Hémogramme",
            "Audiogramme",
            "Otoscopie",
            "Radiographie du pied"
          ],
          "explanation": "L'hémogramme permet notamment d'évaluer l'hémoglobine et donc de rechercher une anémie.",
          "source": "Cours de pédiatrie L2.",
          "answer": "Hémogramme",
          "correct": "Hémogramme"
        },
        {
          "type": "qcm",
          "text": "Un enfant doit être transféré vers une structure spécialisée. Quelle conduite infirmière reste nécessaire pendant l'organisation de la référence ? (Choisir 1 réponse.)",
          "options": [
            "Arrêter toute surveillance",
            "Continuer à surveiller l'état de l'enfant",
            "Supprimer les transmissions cliniques",
            "Abandonner les soins prescrits"
          ],
          "explanation": "Le transfert ne dispense pas de la surveillance. L'état de l'enfant doit continuer à être observé pendant l'organisation de la référence.",
          "source": "Cours de pédiatrie L2.",
          "answer": "Continuer à surveiller l'état de l'enfant",
          "correct": "Continuer à surveiller l'état de l'enfant"
        }
      ]
    }
  ]
};
    const STORAGE_SUBJECTS = "NEUROCHIRURGIE_L3_subjects_v1";
    const STORAGE_RESULTS = "NEUROCHIRURGIE_L3_results_v1";
    const STORAGE_ATTEMPTS = "NEUROCHIRURGIE_L3_attempts_v1";

    let subjects = [];
        let currentSubject = null;
    let currentStudent = null;
    let quizStartTime = null;
    let timerInterval = null;
    let currentQuestionIndex = 0;
    let savedQuestionAnswers = {};
    const QUESTION_DURATION_SECONDS = 30;
    const QUIZ_SETTINGS_KEY = "REANIMATION_quiz_settings_v1";
    const DEFAULT_QUIZ_SETTINGS = {
      questionCount: 60,
      displayMode: "one",
      questionType: "both",
      cameraEnabled: false,
      antiCheatEnabled: true
    };
    let quizSettings = loadQuizSettings();

    // Chaque évaluation démarre avec toutes les questions par défaut.
    // La banque complète reste disponible et l’ordre est renouvelé à chaque tentative.

    function shuffleQuestions(items) {
      const shuffled = items.slice();
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    }

    function getExpectedAnswers(question) {
      if (Array.isArray(question.answers)) return question.answers;
      if (Array.isArray(question.correct)) return question.correct;
      return [question.answer || question.correct].filter(Boolean);
    }

    function getQuestionCategory(question) {
      const options = Array.isArray(question.options) ? question.options : [];
      const isTrueFalse = options.length === 2 && options.includes("Vrai") && options.includes("Faux");
      if (isTrueFalse) return "trueFalse";
      return getExpectedAnswers(question).length > 1 ? "multipleAnswers" : "singleAnswer";
    }

    function getQuizQuestionCount() {
      return quizSettings.questionCount;
    }

    function loadQuizSettings() {
      try {
        const saved = { ...DEFAULT_QUIZ_SETTINGS, ...JSON.parse(localStorage.getItem(QUIZ_SETTINGS_KEY) || "{}") };
        saved.cameraEnabled = false;
        saved.displayMode = "one";
        saved.antiCheatEnabled = true;
        return saved;
      } catch (error) {
        return { ...DEFAULT_QUIZ_SETTINGS, cameraEnabled: false };
      }
    }

    function getQuestionsForSelectedType(questionBank) {
      if (quizSettings.questionType === "qcd") {
        return questionBank.filter(question => getQuestionCategory(question) === "trueFalse");
      }
      if (quizSettings.questionType === "qcm") {
        return questionBank.filter(question => getQuestionCategory(question) !== "trueFalse");
      }
      return questionBank.slice();
    }

    function selectQuizQuestions(questionBank) {
      const available = getQuestionsForSelectedType(questionBank);
      const quantity = Math.min(Number(quizSettings.questionCount) || 15, available.length);
      return shuffleQuestions(available).slice(0, quantity);
    }

    function getQuestionOrderSignature(questions) {
      return questions.map(question => question.text || "").join("||");
    }

    function shuffleForNewLearningSession(subjectId, questions) {
      const storageKey = `FORMATION_EVALUATION_last_question_order_${subjectId}`;
      const previousSignature = localStorage.getItem(storageKey);
      let shuffled = shuffleQuestions(questions);

      // Évite de présenter exactement le même ordre lors de deux sessions
      // consécutives, même si le tirage aléatoire produit par hasard le même résultat.
      if (shuffled.length > 1 && getQuestionOrderSignature(shuffled) === previousSignature) {
        shuffled = [...shuffled.slice(1), shuffled[0]];
      }

      localStorage.setItem(storageKey, getQuestionOrderSignature(shuffled));
      return shuffled;
    }

    function prepareSubjectForQuiz(subject) {
      const selectedQuestions = selectQuizQuestions(subject.questions);
      return {
        ...cloneData(subject),
        questions: shuffleForNewLearningSession(subject.id, selectedQuestions)
      };
    }

    /********************************************************************
     * SUIVI DE SORTIE DE PAGE / ONGLET
     * L'étudiant n'est pas bloqué et ne reçoit pas d'avertissement.
     * Si la page, l'onglet ou la fenêtre est quitté pendant l'évaluation,
     * l'information est enregistrée et apparaît dans le résultat final.
     ********************************************************************/
    const PAGE_EXIT_TRACKING_CONFIG = {
      enabled: true
    };

    function isAntiCheatEnabled() {
      return PAGE_EXIT_TRACKING_CONFIG.enabled && quizSettings.antiCheatEnabled !== false;
    }

    let pageExitTrackingActive = false;
    let pageExitCount = 0;
    let pageExitEvents = [];
    let lastPageExitAt = 0;
    let quizWasFullscreen = false;
    let pageExitDetectedDuringQuiz = false;

    /********************************************************************
     * PHOTO OBLIGATOIRE AVANT ACCÈS À L'ÉVALUATION
     ********************************************************************/
    let cameraStream = null;

    /********************************************************************
     * INITIALISATION
     ********************************************************************/
    document.addEventListener("DOMContentLoaded", () => {
      loadSubjects();
      renderSubjects();
      blockBackButton();
    });


    function cloneData(value) {
      if (typeof structuredClone === "function") return structuredClone(value);
      return JSON.parse(JSON.stringify(value));
    }

    function loadSubjects() {
      // Nouvelle version : on charge toujours le sujet intégré dans le fichier.
      // Cela évite que l’ancien cache du navigateur masque le nouveau sujet.
      subjects = cloneData(CONFIG.subjects).map(subject => ({
        ...subject,
        programmed: subject.programmed === true
      }));
      saveSubjects();
    }

    function saveSubjects() {
      localStorage.setItem(STORAGE_SUBJECTS, JSON.stringify(subjects));
    }

    function getResults() {
      return JSON.parse(localStorage.getItem(STORAGE_RESULTS) || "[]");
    }

    function saveResults(results) {
      localStorage.setItem(STORAGE_RESULTS, JSON.stringify(results));
    }

    function getAttempts() {
      return JSON.parse(localStorage.getItem(STORAGE_ATTEMPTS) || "{}");
    }

    function saveAttempts(attempts) {
      localStorage.setItem(STORAGE_ATTEMPTS, JSON.stringify(attempts));
    }

    /********************************************************************
     * GESTION DES DATES ET STATUTS
     ********************************************************************/
    function getDateTime(date, time) {
      return new Date(`${date}T${time || "00:00"}:00`);
    }

    function getSubjectStatus(subject) {
      const now = new Date();
      const open = getDateTime(subject.openDate, subject.openTime);
      const close = getDateTime(subject.closeDate, subject.closeTime);
      if (now < open) return { key: "locked", label: "Verrouillée", message: "Cette composition n’est pas encore disponible" };
      if (now > close) return { key: "closed", label: "Terminée", message: "La composition est terminée" };
      return { key: "available", label: "Disponible", message: "Composition disponible" };
    }

    function formatDateTime(date, time) {
      return `${date} à ${time}`;
    }


    /********************************************************************
     * SÉCURITÉ DE L'ÉVALUATION
     * L'étudiant continue son devoir jusqu'à la fin.
     * Tout incident détecté est enregistré et affichera "Auto envoi"
     * au résultat et dans l'administration.
     ********************************************************************/
    function isQuizVisible() {
      const quizView = document.getElementById("quizView");
      return pageExitTrackingActive && quizView && !quizView.classList.contains("hidden");
    }

    function registerPageExitEvent(reason, type = "incident") {
      if (!isAntiCheatEnabled() || !isQuizVisible()) return;

      const now = Date.now();

      // Évite de compter plusieurs fois le même incident en quelques secondes.
      if (now - lastPageExitAt < 1500) return;
      lastPageExitAt = now;

      pageExitDetectedDuringQuiz = true;
      pageExitCount++;
      pageExitEvents.push({
        type,
        reason,
        time: new Date().toLocaleString("fr-FR")
      });
    }

    function startPageExitTracking() {
      if (!isAntiCheatEnabled()) {
        stopPageExitTracking();
        pageExitDetectedDuringQuiz = false;
        pageExitCount = 0;
        pageExitEvents = [];
        return;
      }
      pageExitTrackingActive = true;
      pageExitDetectedDuringQuiz = false;
      pageExitCount = 0;
      pageExitEvents = [];
      lastPageExitAt = 0;
      quizWasFullscreen = Boolean(document.fullscreenElement);
    }

    function stopPageExitTracking() {
      pageExitTrackingActive = false;
    }

    function hasRealPageExitDuringQuiz() {
      return pageExitDetectedDuringQuiz === true && Number(pageExitCount || 0) > 0;
    }

    // Sortie réelle d'onglet, de page ou bascule vers une autre application.
    // On n'utilise plus window.blur, car sur téléphone il peut se déclencher
    // pendant des actions normales et mettait le résultat à zéro à tort.
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        registerPageExitEvent("L'étudiant a quitté l'onglet, la page ou l'application", "sortie_page");
      }
    });

    // Appel, notification, volet système ou changement temporaire d'application.
    // Sur téléphone, un appel ou une notification peut déclencher blur / visibilitychange.
    window.addEventListener("blur", () => {
      registerPageExitEvent("Appel, notification ou perte de focus détecté", "appel_notification");
    });

    // Tentative de capture d'écran ou d'action système détectable au clavier.
    // Important : les navigateurs ne permettent pas de détecter toutes les captures,
    // surtout sur téléphone. Les touches détectables sont enregistrées.
    document.addEventListener("keydown", (event) => {
      if (!isQuizVisible()) return;
      const key = String(event.key || "").toLowerCase();
      const code = String(event.code || "").toLowerCase();
      const isPrintScreen = key === "printscreen" || code === "printscreen";
      const isScreenShortcut =
        isPrintScreen ||
        (event.ctrlKey && key === "p") ||
        (event.metaKey && event.shiftKey && ["3", "4", "5"].includes(key)) ||
        (event.ctrlKey && event.shiftKey && ["i", "j", "c"].includes(key)) ||
        key === "f12";

      if (isScreenShortcut) {
        registerPageExitEvent("Tentative de capture d'écran ou raccourci système détecté", "capture_ecran");
      }
    });

    document.addEventListener("contextmenu", (event) => {
      if (!isQuizVisible()) return;
      registerPageExitEvent("Clic droit ou menu contextuel détecté", "menu_contextuel");
      event.preventDefault();
    });

    // Fermeture, actualisation ou navigation hors de la page.
    window.addEventListener("pagehide", () => {
      registerPageExitEvent("L'étudiant a quitté ou actualisé la page", "fermeture_actualisation");
    });

    // Sortie du mode plein écran, si l'évaluation était en plein écran.
    document.addEventListener("fullscreenchange", () => {
      if (!isQuizVisible()) return;

      if (document.fullscreenElement) {
        quizWasFullscreen = true;
        return;
      }

      if (quizWasFullscreen) {
        registerPageExitEvent("L'étudiant est sorti du mode plein écran", "plein_ecran");
      }
    });

    window.addEventListener("beforeunload", (event) => {
      if (!isQuizVisible()) return;
      registerPageExitEvent("L'étudiant a tenté de fermer ou actualiser la page", "fermeture_actualisation");
      event.preventDefault();
      event.returnValue = "Une évaluation est en cours. Quitter la page peut interrompre votre composition.";
      return event.returnValue;
    });


    /********************************************************************
     * PAGE ACCUEIL ÉTUDIANT
     ********************************************************************/
    function showHome() {
      clearInterval(timerInterval);
      stopPageExitTracking();
      document.getElementById("homeView").classList.remove("hidden");
      document.getElementById("quizView").classList.add("hidden");
      document.getElementById("resultView").classList.add("hidden");
      document.getElementById("adminView").classList.add("hidden");
      renderSubjects();
    }

    function getActiveMatricule() {
      return (window.activeStudentFullName || localStorage.getItem("REVISION_LICENCE_1_ACTIVE_FULL_NAME") || "").trim();
    }

    function getStudentProfile() {
      const nomComplet = getActiveMatricule() || "APPRENANT";
      return {
        nom: nomComplet,
        prenom: "",
        nomComplet,
        matricule: nomComplet
      };
    }

    function updateStudentHeader() {
      const node = document.getElementById("studentHeaderName");
      if (!node) return;
      node.textContent = getStudentProfile().nomComplet;
    }

    function getStudentResultsForDashboard() {
      const profile = getStudentProfile();
      return getResults().filter(item => {
        const matricule = String(item?.student?.matricule || "").trim();
        return matricule === profile.matricule;
      });
    }

    function renderStudentResultsTable() {
      const results = getStudentResultsForDashboard();
      if (results.length === 0) {
        return '<p class="student-empty-state">Aucune évaluation effectuée pour le moment.</p>';
      }

      const rows = results.slice().reverse().map(result => `
        <tr>
          <td>
            <strong>${escapeHTML(result.subjectTitle || "ÉVALUATION")}</strong>
            <div class="student-table-date">Terminée : ${escapeHTML(result.date || "")}</div>
          </td>
          <td><strong>${escapeHTML(result.note20 || "0.00")}</strong></td>
          <td>${Number(result.good || 0)}</td>
          <td>${Number(result.bad || 0)}</td>
        </tr>
      `).join("");

      return `
        <div class="student-table-wrap">
          <table class="student-results-table">
            <thead>
              <tr>
                <th>Évaluation</th>
                <th>Score</th>
                <th>Bonnes</th>
                <th>Mauvaises</th>
              </tr>
            </thead>
            <tbody>${rows}</tbody>
          </table>
        </div>
      `;
    }

    function renderSubjects() {
      const homeView = document.getElementById("homeView");
      if (!homeView) return;

      updateStudentHeader();

      const profile = getStudentProfile();
      const programmedSubjects = subjects.filter(subject => subject.programmed === true);
      const availableSubjects = programmedSubjects.filter(subject => getSubjectStatus(subject).key === "available");

      const availableHtml = availableSubjects.length ? availableSubjects.map(availableSubject => `
        <div class="student-evaluation-card">
          <div class="student-evaluation-head">
            <span class="student-status-pill available">Disponible</span>
            <h4>${escapeHTML(availableSubject.title)}</h4>
          </div>
          <p class="student-evaluation-meta"><strong>Matière :</strong> ${escapeHTML(availableSubject.matter)}</p>
          <p class="student-evaluation-meta"><strong>Durée :</strong> ${availableSubject.duration} min</p>
          <p class="student-evaluation-meta"><strong>Questions :</strong> ${getQuizQuestionCount()} — ${getQuizTypeLabel()} — ${quizSettings.displayMode === "all" ? "toutes sur une page" : "question par question"}</p>
          <p class="student-evaluation-meta"><strong>Fermeture :</strong> ${formatDateTime(availableSubject.closeDate, availableSubject.closeTime)}</p>
          <button class="student-start-btn" onclick="startQuickEvaluation('${availableSubject.id}')">Commencer</button>
        </div>
      `).join("") : `
        <div class="student-empty-state">Évaluation test sera disponible le dimanche 20 septembre 2026 de 21 h à 21 h 30.</div>
      `;

      homeView.innerHTML = `
        <div class="student-dashboard">
          <section class="student-profile-card">
            <h2>${escapeHTML(profile.nomComplet)}</h2>
            <p>
              <span>Nom et Prénoms :</span> <strong>${escapeHTML(profile.nomComplet)}</strong>
            </p>
            <button class="student-scroll-btn" onclick="document.getElementById('studentAvailableSection').scrollIntoView({behavior:'smooth', block:'start'})">Mes évaluations</button>
          </section>

          <section id="studentAvailableSection" class="student-section-card">
            <h3>Sujet disponible</h3>
            <p class="student-section-note">Évaluation test sera disponible le dimanche 20 septembre 2026 de 21 h à 21 h 30.</p>
            ${availableHtml}
          </section>

          <section class="student-section-card">
            <h3>Évaluations effectuées</h3>
            <p class="student-section-note">Vous pouvez consulter votre note et le résumé de l'évaluation.</p>
            ${renderStudentResultsTable()}
          </section>
        </div>
      `;
    }

    function getQuizTypeLabel() {
      if (quizSettings.questionType === "qcd") return "QCD seulement";
      if (quizSettings.questionType === "qcm") return "QCM seulement";
      return "QCM et QCD";
    }

    function getMaximumQuestionCount(type = quizSettings.questionType) {
      const bank = subjects[0]?.questions || CONFIG.subjects[0]?.questions || [];
      if (type === "qcd") return bank.filter(q => getQuestionCategory(q) === "trueFalse").length;
      if (type === "qcm") return bank.filter(q => getQuestionCategory(q) !== "trueFalse").length;
      return bank.length;
    }

    function openQuizSettings() {
      const modal = document.getElementById("modal");
      const max = getMaximumQuestionCount();
      modal.className = "modal";
      modal.innerHTML = `
        <div class="modal-content settings-modal-content">
          <h2>⚙ Paramètres du quiz</h2>
          <div class="settings-field">
            <label for="settingsQuestionCount"><strong>Nombre de questions</strong></label>
            <input id="settingsQuestionCount" type="number" min="1" max="${max}" value="${Math.min(quizSettings.questionCount, max)}">
            <small id="settingsQuestionLimit" class="muted">Maximum disponible : ${max}</small>
          </div>
          <div class="settings-field">
            <label for="settingsDisplayMode"><strong>Mode d’affichage</strong></label>
            <select id="settingsDisplayMode" disabled>
              <option value="one" ${quizSettings.displayMode === "one" ? "selected" : ""}>Question par question</option>
              <option value="all" ${quizSettings.displayMode === "all" ? "selected" : ""}>Toutes les questions</option>
            </select>
          </div>
          <div class="settings-field">
            <label for="settingsQuestionType"><strong>Type de questions</strong></label>
            <select id="settingsQuestionType" onchange="updateSettingsQuestionLimit()">
              <option value="both" ${quizSettings.questionType === "both" ? "selected" : ""}>QCM et QCD</option>
              <option value="qcm" ${quizSettings.questionType === "qcm" ? "selected" : ""}>QCM seulement</option>
              <option value="qcd" ${quizSettings.questionType === "qcd" ? "selected" : ""}>QCD seulement (Vrai/Faux)</option>
            </select>
          </div>
          <div class="settings-toggle-row">
            <div>
              <strong>Caméra</strong>
              <small>Désactivée pour ce site.</small>
            </div>
            <label class="settings-switch">
              <input id="settingsCameraEnabled" type="checkbox" disabled>
              <span class="settings-switch-slider"></span>
              <span class="settings-switch-state">Désactivée</span>
            </label>
          </div>
          <div class="settings-toggle-row">
            <div>
              <strong>Anti-triche</strong>
              <small>Détecter les sorties de page, changements d’application et raccourcis interdits.</small>
            </div>
            <label class="settings-switch">
              <input id="settingsAntiCheatEnabled" type="checkbox" disabled ${quizSettings.antiCheatEnabled !== false ? "checked" : ""}>
              <span class="settings-switch-slider"></span>
              <span class="settings-switch-state">${quizSettings.antiCheatEnabled !== false ? "Activé" : "Désactivé"}</span>
            </label>
          </div>
          <div class="actions settings-actions">
            <button class="btn-light" type="button" onclick="closeModal()">Annuler</button>
            <button class="btn-green" type="button" onclick="saveQuizSettings()">Enregistrer</button>
          </div>
        </div>`;
    }

    function updateSettingsQuestionLimit() {
      const type = document.getElementById("settingsQuestionType").value;
      const max = getMaximumQuestionCount(type);
      const input = document.getElementById("settingsQuestionCount");
      input.max = max;
      if (Number(input.value) > max) input.value = max;
      document.getElementById("settingsQuestionLimit").textContent = `Maximum disponible : ${max}`;
    }

    function saveQuizSettings() {
      const type = document.getElementById("settingsQuestionType").value;
      const max = getMaximumQuestionCount(type);
      const requested = Number(document.getElementById("settingsQuestionCount").value);
      quizSettings = {
        questionCount: Math.max(1, Math.min(max, Number.isFinite(requested) ? Math.floor(requested) : 50)),
        displayMode: "one",
        questionType: type,
        cameraEnabled: false,
        antiCheatEnabled: true
      };
      localStorage.setItem(QUIZ_SETTINGS_KEY, JSON.stringify(quizSettings));
      closeModal();
      renderSubjects();
    }

    function showStudentForm(subjectId) {
      const subject = subjects.find(s => s.id === subjectId);
      if (!subject) return alert("Sujet introuvable.");

      const status = getSubjectStatus(subject);
      if (status.key !== "available") return alert(status.message);

      document.querySelectorAll(".student-form").forEach(form => form.classList.add("hidden"));
      const form = document.getElementById(`student-form-${subjectId}`);
      const matriculeInput = document.getElementById(`matricule-${subjectId}`);
      if (matriculeInput) matriculeInput.value = getActiveMatricule();

      if (form) {
        form.classList.remove("hidden");
        form.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }


    function stopCameraStream() {
      if (cameraStream) {
        cameraStream.getTracks().forEach(track => track.stop());
        cameraStream = null;
      }
    }

    function closeCameraGate() {
      stopCameraStream();
      const modal = document.getElementById("cameraGateModal");
      if (modal) modal.remove();
    }

    function beginEvaluationAfterPhoto(subjectId, student, photoData) {
      const subject = subjects.find(s => s.id === subjectId);
      if (!subject) return alert("Sujet introuvable.");

      currentSubject = prepareSubjectForQuiz(subject);
      currentStudent = {
        ...student,
        photo: photoData || ""
      };
      quizStartTime = new Date();

      document.getElementById("homeView").classList.add("hidden");
      document.getElementById("adminView").classList.add("hidden");
      document.getElementById("resultView").classList.add("hidden");
      document.getElementById("quizView").classList.remove("hidden");

      currentQuestionIndex = 0;
      savedQuestionAnswers = {};
      renderQuiz();
      startTimer(QUESTION_DURATION_SECONDS);
      startPageExitTracking();
    }

    async function openCameraGate(subjectId, student) {
      const subject = subjects.find(s => s.id === subjectId);
      if (!subject) return alert("Sujet introuvable.");

      const status = getSubjectStatus(subject);
      if (status.key !== "available") return alert(status.message);

      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        alert("Votre navigateur ne permet pas l'utilisation de la caméra. Utilisez Chrome, Edge ou Firefox avec un lien HTTPS.");
        return;
      }

      closeCameraGate();

      const modal = document.createElement("div");
      modal.id = "cameraGateModal";
      modal.className = "camera-gate-modal";
      modal.innerHTML = `

</div>
      `;
      document.body.appendChild(modal);

      const video = document.getElementById("cameraGateVideo");
      const takeBtn = document.getElementById("takeCameraPhotoBtn");
      const preview = document.getElementById("cameraGatePreview");
      const canvas = document.getElementById("cameraGateCanvas");

      try {
        cameraStream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: "user" },
          audio: false
        });
        video.srcObject = cameraStream;
      } catch (error) {
        closeCameraGate();
        alert("Caméra non activée. Vous devez autoriser la caméra et prendre une photo avant d'accéder à l'évaluation.");
        return;
      }

      takeBtn.onclick = () => {
        const width = 320;
        const videoWidth = video.videoWidth || 640;
        const videoHeight = video.videoHeight || 480;
        const height = Math.round(width * (videoHeight / videoWidth));

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(video, 0, 0, width, height);
        const photoData = canvas.toDataURL("image/jpeg", 0.65);

        preview.classList.remove("hidden");
        preview.innerHTML = `
<p>Photo prise avec succès.</p>`;
        takeBtn.textContent = "Accéder à l'évaluation";
        takeBtn.onclick = () => {
          closeCameraGate();
          beginEvaluationAfterPhoto(subjectId, student, photoData);
        };
      };
    }


    function startQuickEvaluation(subjectId) {
      if (quizSettings.cameraEnabled === false) {
        beginQuizAfterCamera(subjectId, "");
        return;
      }
      openCameraBeforeQuiz(subjectId);
    }

    function openCameraBeforeQuiz(subjectId) {
      const subject = subjects.find(s => s.id === subjectId);
      if (!subject) return alert("Sujet introuvable.");

      const status = getSubjectStatus(subject);
      if (status.key !== "available") return alert(status.message);

      const modal = document.getElementById("modal");
      modal.className = "modal";
      modal.innerHTML = `
        <div class="modal-content camera-modal-content">
          <h2>Photo obligatoire avant l'évaluation</h2>
          <p class="muted">Autorisez la caméra, puis prenez une photo pour accéder à l'évaluation.</p>

          <div class="camera-box">
            <video id="cameraPreview" autoplay playsinline muted></video>
            <canvas id="cameraCanvas" class="hidden"></canvas>
            <img id="cameraPhotoPreview" class="camera-photo-preview hidden" alt="Photo prise">
            <div id="cameraFallbackBox" class="camera-fallback-box hidden">
              <p><strong>Caméra directe bloquée ou indisponible.</strong></p>
              <p>Utilisez le bouton ci-dessous pour prendre une photo avec votre téléphone ou choisir une photo.</p>
              <label class="camera-file-btn">
                Prendre / choisir une photo
                <input id="cameraFileInput" type="file" accept="image/*" capture="user" onchange="handleStudentPhotoFile('${subjectId}', this)">
              </label>
            </div>
          </div>

          <div class="actions camera-actions">
            <button id="captureCameraBtn" class="btn-green" onclick="captureStudentPhoto('${subjectId}')">Prendre la photo</button>
            <button class="btn-light" onclick="closeCameraModal()">Annuler</button>
          </div>
          <p id="cameraError" class="camera-error hidden"></p>
        </div>
      `;

      startCompatibleCamera(subjectId);
    }

    function getCompatibleGetUserMedia() {
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        return constraints => navigator.mediaDevices.getUserMedia(constraints);
      }

      const legacy =
        navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia ||
        navigator.msGetUserMedia;

      if (!legacy) return null;

      return constraints => new Promise((resolve, reject) => {
        legacy.call(navigator, constraints, resolve, reject);
      });
    }

    function startCompatibleCamera(subjectId) {
      const getMedia = getCompatibleGetUserMedia();
      const video = document.getElementById("cameraPreview");
      const captureBtn = document.getElementById("captureCameraBtn");

      if (!getMedia) {
        showCameraFallback(subjectId, "Votre navigateur ne permet pas la caméra directe.");
        return;
      }

      const attempts = [
        { video: { facingMode: "user" }, audio: false },
        { video: true, audio: false }
      ];

      function tryCamera(index) {
        if (index >= attempts.length) {
          showCameraFallback(subjectId, "La caméra directe est bloquée. Utilisez le bouton de photo proposé ci-dessous.");
          return;
        }

        getMedia(attempts[index])
          .then(stream => {
            window.currentCameraStream = stream;
            if (video) {
              video.srcObject = stream;
              video.classList.remove("hidden");
              video.play().catch(() => {});
            }
            if (captureBtn) captureBtn.disabled = false;
            const errorBox = document.getElementById("cameraError");
            if (errorBox) errorBox.classList.add("hidden");
          })
          .catch(() => tryCamera(index + 1));
      }

      if (captureBtn) captureBtn.disabled = false;
      tryCamera(0);
    }

    function showCameraFallback(subjectId, message = "") {
      const video = document.getElementById("cameraPreview");
      const fallback = document.getElementById("cameraFallbackBox");
      const captureBtn = document.getElementById("captureCameraBtn");
      const errorBox = document.getElementById("cameraError");

      if (window.currentCameraStream) {
        window.currentCameraStream.getTracks().forEach(track => track.stop());
        window.currentCameraStream = null;
      }

      if (video) {
        video.srcObject = null;
        video.classList.add("hidden");
      }
      if (fallback) fallback.classList.remove("hidden");
      if (captureBtn) captureBtn.disabled = true;

      if (message && errorBox) {
        errorBox.textContent = message + " Si possible, ouvrez le site en HTTPS ou en localhost.";
        errorBox.classList.remove("hidden");
      }
    }

    function handleStudentPhotoFile(subjectId, input) {
      const file = input && input.files && input.files[0];
      if (!file) return;

      if (!file.type || !file.type.startsWith("image/")) {
        alert("Veuillez sélectionner une image.");
        input.value = "";
        return;
      }

      const reader = new FileReader();
      reader.onload = event => {
        const photoData = event.target.result;
        window.currentStudentPhoto = photoData;

        const img = document.getElementById("cameraPhotoPreview");
        if (img) {
          img.src = photoData;
          img.classList.remove("hidden");
        }

        closeCameraModal();
        beginQuizAfterCamera(subjectId, photoData);
      };
      reader.onerror = () => alert("Impossible de lire la photo. Veuillez réessayer.");
      reader.readAsDataURL(file);
    }

    function closeCameraModal() {
      if (window.currentCameraStream) {
        window.currentCameraStream.getTracks().forEach(track => track.stop());
        window.currentCameraStream = null;
      }
      const modal = document.getElementById("modal");
      if (modal) {
        modal.className = "modal hidden";
        modal.innerHTML = "";
      }
    }

    function captureStudentPhoto(subjectId) {
      const video = document.getElementById("cameraPreview");
      const canvas = document.getElementById("cameraCanvas");
      const img = document.getElementById("cameraPhotoPreview");

      if (!video || !canvas || !video.srcObject) {
        showCameraFallback(subjectId, "Veuillez autoriser la caméra, puis reprendre la photo.");
        return;
      }

      const width = video.videoWidth || 640;
      const height = video.videoHeight || 480;
      canvas.width = width;
      canvas.height = height;

      const ctx = canvas.getContext("2d");
      ctx.drawImage(video, 0, 0, width, height);

      const photoData = canvas.toDataURL("image/jpeg", 0.85);
      window.currentStudentPhoto = photoData;

      if (img) {
        img.src = photoData;
        img.classList.remove("hidden");
      }

      closeCameraModal();
      beginQuizAfterCamera(subjectId, photoData);
    }

    function beginQuizAfterCamera(subjectId, photoData) {
      const subject = subjects.find(s => s.id === subjectId);
      if (!subject) return alert("Sujet introuvable.");

      const status = getSubjectStatus(subject);
      if (status.key !== "available") return alert(status.message);

      const profile = getStudentProfile();
      currentSubject = prepareSubjectForQuiz(subject);
      currentStudent = {
        nom: profile.nom,
        prenom: profile.prenom,
        matricule: profile.matricule,
        photo: photoData || ""
      };
      quizStartTime = new Date();

      document.getElementById("homeView").classList.add("hidden");
      document.getElementById("adminView").classList.add("hidden");
      document.getElementById("resultView").classList.add("hidden");
      document.getElementById("quizView").classList.remove("hidden");

      currentQuestionIndex = 0;
      savedQuestionAnswers = {};
      renderQuiz();
      startTimer(QUESTION_DURATION_SECONDS);
      startPageExitTracking();
    }

    function logoutStudent() {
      clearInterval(timerInterval);
      localStorage.removeItem("REVISION_LICENCE_1_ACTIVE_FULL_NAME");
      window.activeStudentFullName = "";

      const accessPage = document.getElementById("accessPage");
      const siteHeader = document.getElementById("siteHeader");
      const mainContent = document.getElementById("mainContent");
      const input = document.getElementById("accessFullName");

      if (siteHeader) siteHeader.style.display = "none";
      if (mainContent) mainContent.style.display = "none";
      if (accessPage) accessPage.style.display = "flex";
      if (input) {
        input.value = "";
        setTimeout(() => input.focus(), 50);
      }
    }

    function startQuiz(subjectId) {
      const subject = subjects.find(s => s.id === subjectId);
      const status = getSubjectStatus(subject);
      if (status.key !== "available") return alert(status.message);

      const nom = document.getElementById(`nom-${subjectId}`).value.trim();
      const prenom = document.getElementById(`prenom-${subjectId}`).value.trim();
      const matricule = (document.getElementById(`matricule-${subjectId}`).value || getActiveMatricule()).trim();

      if (!matricule) {
        alert("Veuillez entrer votre nom et vos prénoms sur la première page.");
        location.reload();
        return;
      }
      if (!nom || !prenom) return alert("Veuillez renseigner nom et prénom.");

      // Les étudiants peuvent reprendre le même sujet autant de fois qu’ils le souhaitent.
      if (quizSettings.cameraEnabled === false) {
        beginEvaluationAfterPhoto(subjectId, { nom, prenom, matricule }, "");
        return;
      }
      openCameraGate(subjectId, { nom, prenom, matricule });
    }

    /********************************************************************
     * INTERFACE QUIZ
     ********************************************************************/
    function renderQuiz() {
      const quizView = document.getElementById("quizView");
      const totalQuestions = currentSubject.questions.length;
      if (quizSettings.displayMode === "all") {
        quizView.innerHTML = `
          <div class="quiz-layout quiz-layout-single">
            <div class="panel quiz-panel quiz-panel-clean">
              <div class="question-timer-top question-timer-clean">
                <strong id="timer" class="timer question-timer">${String(Math.floor((totalQuestions * QUESTION_DURATION_SECONDS) / 60)).padStart(2, "0")}:00</strong>
                <div class="question-progress-wrap"><div id="questionProgressBar" class="question-progress-bar" style="width:100%"></div></div>
              </div>
              <form id="quizForm">
                <p class="muted all-questions-note">${totalQuestions} questions affichées sur cette page.</p>
                ${currentSubject.questions.map((question, index) => `
                  <section class="all-question-block">
                    <div class="all-question-number">Question ${index + 1} / ${totalQuestions}</div>
                    ${renderQuestion(question, index)}
                  </section>`).join("")}
                <div class="question-navigation">
                  <button type="button" class="btn-green" onclick="submitQuiz(false)">Valider ma composition</button>
                </div>
              </form>
            </div>
          </div>`;
        restoreAllQuestionAnswers();
        quizView.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
      const q = currentSubject.questions[currentQuestionIndex];
      const isLastQuestion = currentQuestionIndex >= totalQuestions - 1;

      quizView.innerHTML = `
        <div class="quiz-layout quiz-layout-single">
          <div class="panel quiz-panel quiz-panel-clean">
            <div class="question-timer-top question-timer-clean">
              <strong id="timer" class="timer question-timer">00:30</strong>
              <div class="question-progress-wrap" aria-label="Progression du temps restant">
                <div id="questionProgressBar" class="question-progress-bar" style="width:100%"></div>
              </div>
            </div>

            <form id="quizForm">
              ${renderQuestion(q, currentQuestionIndex)}
              <div class="question-navigation">
                <button type="button" class="btn-green" onclick="goToNextQuestion()">
                  ${isLastQuestion ? "Valider ma composition" : "Question suivante"}
                </button>
              </div>
            </form>
          </div>
        </div>
      `;
      restoreCurrentQuestionAnswer();
      quizView.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    function renderQuestion(q, index) {
      const isMultiple = Array.isArray(q.answers) || Array.isArray(q.correct);
      const inputType = isMultiple ? "checkbox" : "radio";
      const help = isMultiple ? `<p class="muted">Plusieurs réponses sont possibles.</p>` : "";
      const options = Array.isArray(q.options) ? q.options : [];
      const caseContext = q.caseContext ? `<div class="case-context"><div class="case-context-label">Texte de l’étude de cas</div><div class="case-context-text">${escapeHTML(q.caseContext).replace(/\n/g, "<br>")}</div></div>` : "";
      return `
        <div class="question question-clean">
          ${caseContext}
          <p class="question-text-only">${escapeHTML(q.text)}</p>
          ${help}
          ${options.map(option => `
            <label class="option">
              <input type="${inputType}" name="q-${index}" value="${escapeHTML(option)}">
              <span>${escapeHTML(option)}</span>
            </label>
          `).join("")}
        </div>
      `;
    }

    function saveCurrentQuestionAnswer() {
      const selectedNodes = Array.from(document.querySelectorAll(`input[name="q-${currentQuestionIndex}"]:checked`));
      savedQuestionAnswers[currentQuestionIndex] = selectedNodes.map(input => input.value);
    }

    function saveAllQuestionAnswers() {
      currentSubject.questions.forEach((question, index) => {
        const selectedNodes = Array.from(document.querySelectorAll(`input[name="q-${index}"]:checked`));
        savedQuestionAnswers[index] = selectedNodes.map(input => input.value);
      });
    }

    function restoreAllQuestionAnswers() {
      currentSubject.questions.forEach((question, index) => {
        (savedQuestionAnswers[index] || []).forEach(value => {
          const input = Array.from(document.querySelectorAll(`input[name="q-${index}"]`)).find(node => node.value === value);
          if (input) input.checked = true;
        });
      });
    }

    function restoreCurrentQuestionAnswer() {
      const savedAnswers = savedQuestionAnswers[currentQuestionIndex] || [];
      savedAnswers.forEach(value => {
        const input = Array.from(document.querySelectorAll(`input[name="q-${currentQuestionIndex}"]`))
          .find(node => node.value === value);
        if (input) input.checked = true;
      });
    }

    function goToNextQuestion() {
      saveCurrentQuestionAnswer();
      if (currentQuestionIndex >= currentSubject.questions.length - 1) {
        submitQuiz(false);
        return;
      }
      currentQuestionIndex++;
      renderQuiz();
      startTimer(QUESTION_DURATION_SECONDS);
    }

    function startTimer(seconds) {
      if (quizSettings.displayMode === "all") seconds = currentSubject.questions.length * QUESTION_DURATION_SECONDS;
      let remaining = seconds;
      updateTimerDisplay(remaining, seconds);
      clearInterval(timerInterval);
      timerInterval = setInterval(() => {
        remaining--;
        updateTimerDisplay(remaining, seconds);
        if (remaining <= 0) {
          clearInterval(timerInterval);
          if (quizSettings.displayMode === "all") submitQuiz(true);
          else goToNextQuestion();
        }
      }, 1000);
    }

    function updateTimerDisplay(seconds, totalSeconds = QUESTION_DURATION_SECONDS) {
      const safeSeconds = Math.max(0, seconds);
      const min = Math.floor(safeSeconds / 60).toString().padStart(2, "0");
      const sec = (safeSeconds % 60).toString().padStart(2, "0");
      const el = document.getElementById("timer");
      if (el) el.textContent = `${min}:${sec}`;

      const progress = document.getElementById("questionProgressBar");
      if (progress) {
        const percent = totalSeconds > 0 ? Math.max(0, Math.min(100, (safeSeconds / totalSeconds) * 100)) : 0;
        progress.style.width = `${percent}%`;
        progress.classList.toggle("warning", percent <= 35 && percent > 15);
        progress.classList.toggle("danger", percent <= 15);
      }
    }


    function sameAnswers(studentAnswers, expectedAnswers) {
      const normalize = arr => arr.filter(Boolean).map(v => String(v).trim()).sort();
      const a = normalize(studentAnswers);
      const b = normalize(expectedAnswers);
      return a.length === b.length && a.every((value, index) => value === b[index]);
    }

    function renderSecurityEvents(events) {
      if (!events || !events.length) return "Aucun incident détecté";
      return events.map(item => escapeHTML(`${item.time || ""} - ${item.reason || "Incident de sécurité"}`)).join("<br>");
    }

    function submitQuiz(auto = false) {
      clearInterval(timerInterval);

      let good = 0, bad = 0, empty = 0, score = 0;
      const marking = currentSubject.marking || CONFIG.defaultMarking;
      const answers = [];

      if (quizSettings.displayMode === "all") saveAllQuestionAnswers();
      else saveCurrentQuestionAnswer();

      currentSubject.questions.forEach((q, index) => {
        const expected = Array.isArray(q.answers) ? q.answers : (Array.isArray(q.correct) ? q.correct : [q.answer || q.correct]);
        const studentAnswers = savedQuestionAnswers[index] || [];
        const studentAnswer = studentAnswers.join(" ; ");
        const correctAnswer = expected.join(" ; ");
        let state = "empty";

        if (studentAnswers.length === 0) {
          empty++;
          score += Number(marking.empty);
        } else if (sameAnswers(studentAnswers, expected)) {
          good++;
          score += Number(marking.correct);
          state = "good";
        } else {
          bad++;
          // Barème : -1 uniquement pour une mauvaise réponse en QCD.
          // Une mauvaise réponse en QCM vaut 0 point.
          if (String(q.type || "").toLowerCase() === "qcd") {
            score += Number(marking.wrong);
          }
          state = "bad";
        }

        answers.push({
          question: q.text,
          options: Array.isArray(q.options) ? q.options : [],
          studentAnswer,
          correctAnswer,
          correction: q.correction || q.explanation || "",
          state
        });
      });

      const maxScore = currentSubject.questions.length * Number(marking.correct);
      let note20 = maxScore > 0 ? (score / maxScore) * 20 : 0;
      note20 = Math.max(0, note20).toFixed(2);

      // Si l'étudiant sort de la page, de l'onglet, de l'application ou du plein écran,
      // il continue son devoir jusqu'à la fin. Au résultat, on affiche seulement
      // la mention "Auto envoi" et l'information est enregistrée dans l'administration.
      const pageExitDetected = hasRealPageExitDuringQuiz();
      const autoSend = pageExitDetected === true;

      const usedSeconds = Math.round((new Date() - quizStartTime) / 1000);
      const result = {
        id: Date.now().toString(),
        date: new Date().toLocaleString("fr-FR"),
        student: currentStudent,
        studentPhoto: currentStudent.photo || "",
        photoTaken: Boolean(currentStudent.photo),
        subjectId: currentSubject.id,
        subjectTitle: currentSubject.title,
        matter: currentSubject.matter,
        score,
        note20,
        good,
        bad,
        empty,
        total: currentSubject.questions.length,
        answers,
        usedTime: formatDuration(usedSeconds),
        pageExitCount,
        pageExitEvents,
        securityEvents: pageExitEvents,
        pageExitDetected,
        autoSend,
        autoSendScoreZero: false
      };

      const results = getResults();
      results.push(result);
      saveResults(results);

      // Aucune tentative n’est verrouillée : le même matricule peut composer plusieurs fois le même sujet.

      renderResult(result);
    }

    function formatScoreForDisplay(value) {
      const numericValue = Number(value || 0);
      if (Number.isInteger(numericValue)) return String(numericValue);
      return numericValue.toFixed(2).replace(/\.00$/, "");
    }

    function renderResult(result) {
      stopPageExitTracking();
      // Afficher "Auto envoi" seulement si une sortie réelle a été détectée
      // pendant l'évaluation. La note calculée est conservée.
      const resultIsAutoSend = (result.autoSend === true || result.pageExitDetected === true);
      const displayedScore = Number(result.score || 0);
      const displayedResult = formatScoreForDisplay(displayedScore);
      const autoSendMessage = resultIsAutoSend ? '<div class="auto-send-message">Auto envoi</div>' : "";
      const mainContent = document.getElementById("mainContent");
      const resultPhoto = result.studentPhoto || result.student?.photo || "";
      const photoHtml = resultPhoto ? `
` : "";
      if (mainContent) mainContent.style.display = "block";
      const welcomePopup = document.getElementById("welcomePopup");
      if (welcomePopup) welcomePopup.style.display = "none";
      document.getElementById("homeView").classList.add("hidden");
      document.getElementById("quizView").classList.add("hidden");
      document.getElementById("adminView").classList.add("hidden");
      document.getElementById("resultView").classList.remove("hidden");
      document.getElementById("resultView").innerHTML = `
        <div class="panel result-card">
          <h2>Résultat de composition</h2>
          ${autoSendMessage}
          <p class="score-big">${displayedResult}</p>
          <div class="grid">
            <div><strong>Statut :</strong> ${resultIsAutoSend ? "Auto envoi" : "Envoi normal"}</div>
            <div><strong>Nom et Prénoms :</strong> ${escapeHTML(`${result.student.nom || ""} ${result.student.prenom || ""}`.trim())}</div>
            <div><strong>Sujet :</strong> ${escapeHTML(result.subjectTitle)}</div>
            <div><strong>Score :</strong> ${displayedScore}</div>
            <div><strong>Bonnes réponses :</strong> ${result.good}</div>
            <div><strong>Mauvaises réponses :</strong> ${result.bad}</div>
            <div><strong>Sans réponse :</strong> ${result.empty}</div>
            <div><strong>Temps utilisé :</strong> ${result.usedTime}</div>
            <div><strong>Incidents sécurité :</strong> ${Number(result.pageExitCount || 0)}</div>
            <div><strong>Détails sécurité :</strong><br>${renderSecurityEvents(result.pageExitEvents || result.securityEvents)}</div>
          </div>
          ${photoHtml}
          <br>
          <div class="actions">
            <button id="correctionToggleButton" type="button" class="btn-green" onclick="toggleCorrection()">Voir la correction</button>
            <button onclick="showHome()">Retour à l'accueil</button>
          </div>
          <div id="correctionBox" class="correction-box hidden">
            ${renderCorrection(result)}
          </div>
        </div>
      `;
      document.getElementById("resultView").scrollIntoView({ behavior: "smooth", block: "start" });
    }

    function toggleCorrection() {
      const box = document.getElementById("correctionBox");
      const button = document.getElementById("correctionToggleButton");
      if (!box) return;
      const willShow = box.classList.contains("hidden");
      box.classList.toggle("hidden");
      if (button) button.textContent = willShow ? "Masquer la correction" : "Voir la correction";
      if (willShow) box.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    function renderCorrection(result) {
      if (!result.answers || !result.answers.length) {
        return `<p class="muted">Aucune correction disponible pour cet ancien résultat.</p>`;
      }

      return `
        <h3>Correction détaillée</h3>
        <p class="muted">Comparez vos réponses avec les bonnes réponses et lisez l'explication de chaque question.</p>
        ${result.answers.map((a, index) => {
          const answerState = a.state === "good" ? "Trouvé" : (a.state === "empty" ? "Non répondu" : "Non trouvé");
          return `
          <div class="correction-item ${a.state}">
            <h4>Question ${index + 1}</h4>
            <p class="answer-status ${a.state}"><strong>${answerState}</strong></p>
            <p><strong>Énoncé :</strong> ${escapeHTML(a.question)}</p>
            <p><strong>Réponse donnée :</strong> ${a.studentAnswer ? escapeHTML(a.studentAnswer) : "Aucune réponse"}</p>
            <p><strong>Bonne réponse :</strong> ${escapeHTML(a.correctAnswer)}</p>
            ${a.correction ? `<p><strong>Explication :</strong> ${escapeHTML(a.correction)}</p>` : `<p><strong>Explication :</strong> La bonne réponse est ${escapeHTML(a.correctAnswer)}.</p>`}
          </div>
        `}).join("")}
      `;
    }

    /********************************************************************
     * ADMINISTRATION
     ********************************************************************/
    function openAdminLogin() {
      const password = prompt("Mot de passe ADMIN :");
      if (password === ADMIN_PASSWORD) showAdmin();
      else if (password !== null) alert("Mot de passe incorrect.");
    }

    function showAdmin() {
      clearInterval(timerInterval);
      document.getElementById("homeView").classList.add("hidden");
      document.getElementById("quizView").classList.add("hidden");
      document.getElementById("resultView").classList.add("hidden");
      document.getElementById("adminView").classList.remove("hidden");
      renderAdminSubjects();
    }

    function renderAdminSubjects() {
      const content = document.getElementById("adminContent");
      content.innerHTML = `
        <div class="table-wrap">
          <table>
            <thead><tr><th>Titre</th><th>Matière</th><th>Affichage accueil</th><th>Dates</th><th>Durée</th><th>Questions</th><th>Actions</th></tr></thead>
            <tbody>
              ${subjects.map(s => `
                <tr>
                  <td>${escapeHTML(s.title)}</td>
                  <td>${escapeHTML(s.matter)}</td>
                  <td><span class="badge ${s.programmed ? 'available' : 'locked'}">${s.programmed ? 'Programmé' : 'Non programmé'}</span></td>
                  <td>Du ${formatDateTime(s.openDate, s.openTime)}<br>au ${formatDateTime(s.closeDate, s.closeTime)}</td>
                  <td>${s.duration} min</td>
                  <td>${getQuizQuestionCount()} tirées sur ${s.questions.length}</td>
                  <td class="actions">
                    <button class="${s.programmed ? 'btn-dark' : 'btn-green'}" onclick="toggleProgrammed('${s.id}')">${s.programmed ? 'Retirer' : 'Programmer'}</button>
                    <button class="btn-orange" onclick="openSubjectEditor('${s.id}')">Modifier</button>
                    <button class="btn-red" onclick="deleteSubject('${s.id}')">Supprimer</button>
                  </td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      `;
    }

    function renderAdminResults() {
      const results = getResults().slice().reverse();
      const content = document.getElementById("adminContent");
      content.innerHTML = `
        <div class="topbar results-toolbar">
          <div>
            <h3>Résultats enregistrés</h3>
            <p class="muted">Importe les résultats d’un autre devoir ou exporte les résultats sauvegardés.</p>
          </div>
          <div class="actions">
            <label class="btn btn-light file-btn" for="importResultsFile">Choisir un fichier</label>
            <input id="importResultsFile" class="hidden" type="file" accept=".json,.csv,application/json,text/csv">
            <button class="btn-green" onclick="importResultsFromFile()">Importer les résultats</button>
            <button class="btn-dark" onclick="exportResultsJSON()">Exporter JSON</button>
            <button class="btn-orange" onclick="exportResultsCSV()">Exporter Excel/CSV</button>
          </div>
        </div>
        <div class="import-help">
          <strong>Formats acceptés :</strong> JSON exporté par la plateforme ou CSV avec les colonnes : nom, prenom, matricule, sujet, note20.
        </div>
        <div class="table-wrap">
          <table>
            <thead><tr><th>Date</th><th>Nom et Prénoms</th><th>Sujet</th><th>Note</th><th>Détails</th></tr></thead>
            <tbody>
              ${results.map(r => `
                <tr>
                  <td>${escapeHTML(r.date)}</td>
                  <td>${escapeHTML(`${r.student?.nom || ""} ${r.student?.prenom || ""}`.trim())}</td>
                  <td>${escapeHTML(r.subjectTitle || r.subjectId || "Devoir importé")}</td>
                  <td><strong>${escapeHTML(r.note20 ?? "")}</strong></td>
                  <td>Statut ${(r.autoSend === true || r.pageExitDetected === true) ? "Auto envoi" : "Normal"} | Score ${escapeHTML(r.score ?? "")} | Bonnes ${escapeHTML(r.good ?? "")} | Mauvaises ${escapeHTML(r.bad ?? "")} | Vides ${escapeHTML(r.empty ?? "")} | Temps ${escapeHTML(r.usedTime ?? "")} | Incidents sécurité ${escapeHTML(r.pageExitCount ?? 0)}<br>${renderSecurityEvents(r.pageExitEvents || r.securityEvents)}
</td>
                </tr>
              `).join("") || `<tr><td colspan="5">Aucun résultat pour le moment.</td></tr>`}
            </tbody>
          </table>
        </div>
      `;
    }

    /********************************************************************
     * IMPORTATION / EXPORTATION DES RÉSULTATS
     ********************************************************************/
    function importResultsFromFile() {
      const input = document.getElementById("importResultsFile");
      if (!input || !input.files.length) return alert("Veuillez choisir un fichier de résultats à importer.");

      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = function(event) {
        try {
          const text = event.target.result;
          const imported = file.name.toLowerCase().endsWith(".csv") ? parseResultsCSV(text) : JSON.parse(text);

          if (!Array.isArray(imported) || imported.length === 0) {
            return alert("Le fichier ne contient aucun résultat valide.");
          }

          const normalized = imported.map(normalizeImportedResult).filter(Boolean);
          if (!normalized.length) return alert("Aucun résultat valide n’a été trouvé dans le fichier.");

          const existing = getResults();
          const existingKeys = new Set(existing.map(resultUniqueKey));
          let added = 0;

          normalized.forEach(result => {
            const key = resultUniqueKey(result);
            if (!existingKeys.has(key)) {
              existing.push(result);
              existingKeys.add(key);
              added++;
            }
          });

          saveResults(existing);
          input.value = "";
          renderAdminResults();
          alert(`${added} résultat(s) importé(s). ${normalized.length - added} doublon(s) ignoré(s).`);
        } catch (error) {
          console.error(error);
          alert("Impossible d’importer ce fichier. Vérifiez qu’il s’agit d’un fichier JSON ou CSV valide.");
        }
      };

      reader.readAsText(file);
    }

    function normalizeImportedResult(item) {
      if (!item || typeof item !== "object") return null;
      const student = item.student || {};
      const nom = student.nom || item.nom || item.name || "";
      const prenom = student.prenom || item.prenom || item.firstname || "";
      const matricule = student.matricule || item.matricule || item.code || "";
      const note20 = item.note20 ?? item.note ?? item.note_sur_20 ?? "";
      if (!nom && !prenom && !matricule && note20 === "") return null;

      return {
        id: item.id || `import-${Date.now()}-${Math.random().toString(36).slice(2)}`,
        date: item.date || new Date().toLocaleString("fr-FR"),
        student: { nom: String(nom), prenom: String(prenom), matricule: String(matricule) },
        subjectId: item.subjectId || item.subject_id || "devoir-importe",
        subjectTitle: item.subjectTitle || item.sujet || item.subject || item.title || "Devoir importé",
        matter: item.matter || item.matiere || "",
        score: item.score ?? "",
        note20: note20 !== "" ? String(note20).replace(",", ".") : "",
        good: item.good ?? item.bonnes ?? "",
        bad: item.bad ?? item.mauvaises ?? "",
        empty: item.empty ?? item.vides ?? "",
        total: item.total ?? "",
        answers: Array.isArray(item.answers) ? item.answers : [],
        usedTime: item.usedTime || item.temps || ""
      };
    }

    function resultUniqueKey(result) {
      return [
        result.student?.matricule || "",
        result.subjectId || result.subjectTitle || "",
        result.note20 || "",
        result.date || ""
      ].join("|").toLowerCase();
    }

    function exportResultsJSON() {
      const results = getResults();
      if (!results.length) return alert("Aucun résultat à exporter.");
      downloadTextFile("resultats-composition.json", JSON.stringify(results, null, 2), "application/json");
    }

    function exportResultsCSV() {
      const results = getResults();
      if (!results.length) return alert("Aucun résultat à exporter.");
      const headers = ["date", "nom", "prenom", "matricule", "sujet", "matiere", "note20", "score", "bonnes", "mauvaises", "vides", "total", "temps"];
      const rows = results.map(r => [
        r.date,
        r.student?.nom,
        r.student?.prenom,
        r.student?.matricule,
        r.subjectTitle,
        r.matter,
        r.note20,
        r.score,
        r.good,
        r.bad,
        r.empty,
        r.total,
        r.usedTime
      ]);
      const csv = [headers, ...rows].map(row => row.map(csvEscape).join(";")).join("\n");
      downloadTextFile("resultats-composition.csv", "﻿" + csv, "text/csv;charset=utf-8");
    }

    function parseResultsCSV(text) {
      const lines = text.split(/\r?\n/).filter(line => line.trim());
      if (lines.length < 2) return [];
      const separator = lines[0].includes(";") ? ";" : ",";
      const headers = splitCSVLine(lines[0], separator).map(h => h.trim().toLowerCase());
      return lines.slice(1).map(line => {
        const values = splitCSVLine(line, separator);
        const obj = {};
        headers.forEach((h, i) => obj[h] = values[i] || "");
        return {
          date: obj.date,
          nom: obj.nom,
          prenom: obj.prenom || obj["prénom"],
          matricule: obj.matricule || obj.code,
          sujet: obj.sujet || obj.subject || obj.devoir,
          matiere: obj.matiere || obj["matière"],
          note20: obj.note20 || obj.note || obj["note"],
          score: obj.score,
          good: obj.bonnes,
          bad: obj.mauvaises,
          empty: obj.vides,
          total: obj.total,
          usedTime: obj.temps
        };
      });
    }

    function splitCSVLine(line, separator) {
      const values = [];
      let current = "";
      let inQuotes = false;
      for (let i = 0; i < line.length; i++) {
        const char = line[i];
        const next = line[i + 1];
        if (char === '"' && inQuotes && next === '"') {
          current += '"';
          i++;
        } else if (char === '"') {
          inQuotes = !inQuotes;
        } else if (char === separator && !inQuotes) {
          values.push(current);
          current = "";
        } else {
          current += char;
        }
      }
      values.push(current);
      return values;
    }

    function csvEscape(value) {
      const str = String(value ?? "");
      return `"${str.replaceAll('"', '""')}"`;
    }

    function downloadTextFile(filename, content, type) {
      const blob = new Blob([content], { type });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(link.href);
    }

    function openSubjectEditor(subjectId = null) {
      const subject = subjectId ? cloneData(subjects.find(s => s.id === subjectId)) : {
        id: "sujet-" + Date.now(),
        title: "Nouveau sujet",
        matter: "Soins infirmiers",
        description: "Description du sujet",
        instructions: "Répondez à toutes les questions.",
        duration: 30,
        programmed: false,
        openDate: new Date().toISOString().slice(0, 10),
        openTime: "08:00",
        closeDate: new Date().toISOString().slice(0, 10),
        closeTime: "18:00",
        marking: { correct: 1, wrong: -1, empty: 0 },
        questions: []
      };

      document.getElementById("modal").classList.remove("hidden");
      document.getElementById("modal").innerHTML = `
        <div class="modal-content">
          <div class="topbar">
            <h2>${subjectId ? "Modifier" : "Ajouter"} un sujet</h2>
            <button class="btn-red" onclick="closeModal()">Fermer</button>
          </div>
          <div class="form-grid">
            <div><label>Titre</label><input id="edit-title" value="${escapeAttr(subject.title)}"></div>
            <div><label>Matière</label><select id="edit-matter">
              ${["Soins infirmiers", "Santé publique", "Obstétrique", "Anatomie", "Pharmacologie"].map(m => `<option ${subject.matter === m ? "selected" : ""}>${m}</option>`).join("")}
            </select></div>
            <div><label>Durée en minutes</label><input id="edit-duration" type="number" min="1" value="${subject.duration}"></div>
            <div><label>Affichage accueil</label><select id="edit-programmed">
              <option value="false" ${subject.programmed !== true ? "selected" : ""}>Non programmé</option>
              <option value="true" ${subject.programmed === true ? "selected" : ""}>Programmé</option>
            </select></div>
            <div><label>Bonne réponse</label><input id="edit-correct" type="number" value="${subject.marking.correct}"></div>
            <div><label>Mauvaise réponse</label><input id="edit-wrong" type="number" value="${subject.marking.wrong}"></div>
            <div><label>Pas de réponse</label><input id="edit-empty" type="number" value="${subject.marking.empty}"></div>
            <div><label>Date ouverture</label><input id="edit-open-date" type="date" value="${subject.openDate}"></div>
            <div><label>Heure ouverture</label><input id="edit-open-time" type="time" value="${subject.openTime}"></div>
            <div><label>Date fermeture</label><input id="edit-close-date" type="date" value="${subject.closeDate}"></div>
            <div><label>Heure fermeture</label><input id="edit-close-time" type="time" value="${subject.closeTime}"></div>
          </div>
          <label>Description</label><textarea id="edit-description">${escapeHTML(subject.description)}</textarea>
          <label>Consignes</label><textarea id="edit-instructions">${escapeHTML(subject.instructions)}</textarea>
          <h3>Questions</h3>
          <div id="questionsEditor"></div>
          <button class="btn-green" onclick="addQuestionEditor()">+ Ajouter une question</button>
          <br><br>
          <button class="btn-green" onclick="saveSubjectFromEditor('${subject.id}')">Enregistrer le sujet</button>
        </div>
      `;

      window.editingQuestions = subject.questions;
      renderQuestionsEditor();
    }

    function renderQuestionsEditor() {
      const box = document.getElementById("questionsEditor");
      box.innerHTML = window.editingQuestions.map((q, index) => `
        <div class="question-editor">
          <div class="topbar">
            <h3>Question ${index + 1}</h3>
            <button class="btn-red" onclick="removeQuestionEditor(${index})">Supprimer</button>
          </div>
          <label>Type</label>
          <select onchange="updateQuestionField(${index}, 'type', this.value)">
            <option value="qcm" ${q.type === "qcm" ? "selected" : ""}>QCM</option>
            <option value="vf" ${q.type === "vf" ? "selected" : ""}>Vrai/Faux</option>
          </select>
          <label>Question</label>
          <textarea oninput="updateQuestionField(${index}, 'text', this.value)">${escapeHTML(q.text)}</textarea>
          <label>Options séparées par un point-virgule ;</label>
          <input value="${escapeAttr(q.options.join('; '))}" oninput="updateOptions(${index}, this.value)">
          <label>Réponse correcte</label>
          <input value="${escapeAttr(q.answer)}" oninput="updateQuestionField(${index}, 'answer', this.value)">
          <label>Correction / explication à afficher après le résultat</label>
          <textarea oninput="updateQuestionField(${index}, 'correction', this.value)">${escapeHTML(q.correction || "")}</textarea>
        </div>
      `).join("") || `<p class="muted">Aucune question. Clique sur “Ajouter une question”.</p>`;
    }

    function updateQuestionField(index, field, value) {
      window.editingQuestions[index][field] = value;
      if (field === "type" && value === "vf") {
        window.editingQuestions[index].options = ["Vrai", "Faux"];
        window.editingQuestions[index].answer = "Vrai";
        renderQuestionsEditor();
      }
    }

    function updateOptions(index, value) {
      window.editingQuestions[index].options = value.split(";").map(v => v.trim()).filter(Boolean);
    }

    function addQuestionEditor() {
      window.editingQuestions.push({ type: "qcm", text: "Nouvelle question", options: ["Réponse A", "Réponse B", "Réponse C"], answer: "Réponse A", correction: "Explication de la bonne réponse." });
      renderQuestionsEditor();
    }

    function removeQuestionEditor(index) {
      window.editingQuestions.splice(index, 1);
      renderQuestionsEditor();
    }

    function saveSubjectFromEditor(id) {
      const subject = {
        id,
        title: document.getElementById("edit-title").value.trim(),
        matter: document.getElementById("edit-matter").value,
        description: document.getElementById("edit-description").value.trim(),
        instructions: document.getElementById("edit-instructions").value.trim(),
        duration: Number(document.getElementById("edit-duration").value),
        programmed: document.getElementById("edit-programmed").value === "true",
        openDate: document.getElementById("edit-open-date").value,
        openTime: document.getElementById("edit-open-time").value,
        closeDate: document.getElementById("edit-close-date").value,
        closeTime: document.getElementById("edit-close-time").value,
        marking: {
          correct: Number(document.getElementById("edit-correct").value),
          wrong: Number(document.getElementById("edit-wrong").value),
          empty: Number(document.getElementById("edit-empty").value)
        },
        questions: window.editingQuestions
      };

      if (!subject.title || !subject.openDate || !subject.closeDate || !subject.duration) {
        return alert("Veuillez remplir les champs obligatoires.");
      }

      const index = subjects.findIndex(s => s.id === id);
      if (index >= 0) subjects[index] = subject;
      else subjects.push(subject);

      saveSubjects();
      closeModal();
      renderAdminSubjects();
      alert("Sujet sauvegardé avec succès.");
    }

    function toggleProgrammed(id) {
      const subject = subjects.find(s => s.id === id);
      if (!subject) return;
      subject.programmed = subject.programmed !== true;
      saveSubjects();
      renderAdminSubjects();
      renderSubjects();
    }

    function deleteSubject(id) {
      if (!confirm("Supprimer ce sujet ?")) return;
      subjects = subjects.filter(s => s.id !== id);
      saveSubjects();
      renderAdminSubjects();
    }

    function resetDefaultSubjects() {
      if (!confirm("Voulez-vous restaurer les sujets par défaut ? Les sujets modifiés seront supprimés.")) return;
      localStorage.removeItem(STORAGE_SUBJECTS);
      subjects = cloneData(CONFIG.subjects);
      saveSubjects();
      renderAdminSubjects();
      alert("Sujets par défaut restaurés.");
    }

    function closeModal() {
      document.getElementById("modal").classList.add("hidden");
      document.getElementById("modal").innerHTML = "";
    }

    /********************************************************************
     * SÉCURITÉ SIMPLE
     ********************************************************************/
    // Le suivi beforeunload est déjà géré plus haut avec le comptage des sorties.

    function blockBackButton() {
      history.pushState(null, null, location.href);
      window.addEventListener("popstate", function() {
        history.pushState(null, null, location.href);
        if (!document.getElementById("quizView").classList.contains("hidden")) {
          alert("Le retour est bloqué pendant la composition.");
        }
      });
    }

    /********************************************************************
     * OUTILS
     ********************************************************************/
    function formatDuration(seconds) {
      const min = Math.floor(seconds / 60);
      const sec = seconds % 60;
      return `${min} min ${sec} s`;
    }

    function escapeHTML(str) {
      return String(str ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
    }

    function escapeAttr(str) {
      return escapeHTML(str).replaceAll("\n", " ");
    }


/************************************************
 * MESSAGE AUCUN DEVOIR
 ************************************************/
function renderEmptySubjectsMessage(container){
    container.innerHTML = `
        <div class="empty-state">
            <div class="empty-icon">📝</div>

            <h2>Aucun devoir disponible pour le moment</h2>

            <p>
                Aucun devoir n’est actuellement programmé sur la plateforme.
                Veuillez revenir plus tard afin de consulter les prochaines compositions en ligne.
            </p>

            <div class="empty-info">
                La plateforme reste accessible 24h/24 pour les prochaines évaluations.
            </div>
        </div>
    `;
}








/* ============================================================
   PATCH - Bouton Commencer uniquement pour devoir disponible
   ============================================================ */
(function () {
  function cleanStartButtons() {
    const candidates = Array.from(document.querySelectorAll("button, a"));
    candidates.forEach(btn => {
      const label = (btn.innerText || btn.textContent || "").trim().toLowerCase();
      if (label.includes("choisir ce devoir")) {
        btn.textContent = "Commencer";
      }
      if (!label.includes("commencer") && !label.includes("choisir ce devoir")) return;

      let card = btn;
      for (let i = 0; i < 6 && card.parentElement; i++) {
        card = card.parentElement;
        const text = (card.innerText || card.textContent || "").toLowerCase();
        if (text.includes("verrouill") || text.includes("termin")) {
          btn.style.display = "none";
          btn.disabled = true;
          return;
        }
        if (text.includes("disponible")) {
          btn.style.display = "";
          btn.disabled = false;
          return;
        }
      }
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    setTimeout(cleanStartButtons, 100);
    setTimeout(cleanStartButtons, 500);
    setTimeout(cleanStartButtons, 1200);
  });

  new MutationObserver(function () {
    setTimeout(cleanStartButtons, 50);
  }).observe(document.documentElement, { childList: true, subtree: true });
})();
