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
      ],
      "filiere": "COMMUN"
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
      ],
      "filiere": "COMMUN"
    },
    {
      "id": "ide-1",
      "title": "Cardiologie L3 — Hypertension artérielle",
      "matter": "Cardiologie L3",
      "filiere": "IDE",
      "description": "Sujet 1 — 60 questions corrigées",
      "instructions": "QCD : Vrai ou Faux. QCM : sélectionner la ou les bonnes réponses.",
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
          "text": "L’HTA correspond à une PAS ≥ 140 mmHg et/ou une PAD ≥ 90 mmHg constatée à deux reprises et pas le même jour.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le diagnostic repose sur des chiffres élevés confirmés à deux reprises, hors situation d’urgence.",
          "source": "Cours de cardiologie L3, Chapitre 1  Hypertension artérielle, PDF pages 3 à 6.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "Une seule mesure de PA élevée suffit toujours pour affirmer une HTA.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le diagnostic repose sur des chiffres élevés confirmés à deux reprises, hors situation d’urgence.",
          "source": "Cours de cardiologie L3, Chapitre 1  Hypertension artérielle, PDF pages 3 à 6.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "La pression artérielle systolique correspond à la pression maximale lors de la contraction cardiaque.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "La PAS est mesurée pendant la systole, lorsque le cœur éjecte le sang.",
          "source": "Cours de cardiologie L3, Chapitre 1  Hypertension artérielle, PDF pages 3 à 6.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "La PAS correspond à la pression minimale observée pendant le remplissage cardiaque.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "La PAS est mesurée pendant la systole, lorsque le cœur éjecte le sang.",
          "source": "Cours de cardiologie L3, Chapitre 1  Hypertension artérielle, PDF pages 3 à 6.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "La pression artérielle diastolique correspond à la pression minimale pendant la relaxation du cœur.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "La PAD est la pression artérielle observée pendant la diastole.",
          "source": "Cours de cardiologie L3, Chapitre 1  Hypertension artérielle, PDF pages 3 à 6.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "La PAD est la pression maximale produite pendant la systole.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "La PAD est la pression artérielle observée pendant la diastole.",
          "source": "Cours de cardiologie L3, Chapitre 1  Hypertension artérielle, PDF pages 3 à 6.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "En cabinet, une pression artérielle inférieure à 140/90 mmHg est considérée comme normale dans le cours.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le seuil présenté dans le cours est 140/90 mmHg.",
          "source": "Cours de cardiologie L3, Chapitre 1  Hypertension artérielle, PDF pages 3 à 6.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "Une PA de 160/100 mmHg est considérée comme normale dans le cours.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le seuil présenté dans le cours est 140/90 mmHg.",
          "source": "Cours de cardiologie L3, Chapitre 1  Hypertension artérielle, PDF pages 3 à 6.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "La PA se mesure de préférence chez un patient assis ou couché au repos depuis au moins cinq minutes.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le repos préalable limite les erreurs de mesure.",
          "source": "Cours de cardiologie L3, Chapitre 1  Hypertension artérielle, PDF pages 3 à 6.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "La PA doit être mesurée immédiatement après un effort intense.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le repos préalable limite les erreurs de mesure.",
          "source": "Cours de cardiologie L3, Chapitre 1  Hypertension artérielle, PDF pages 3 à 6.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Le brassard doit être adapté à la taille du bras et placé environ 2 à 3 cm au-dessus du pli du coude.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Un brassard inadapté fausse la mesure.",
          "source": "Cours de cardiologie L3, Chapitre 1  Hypertension artérielle, PDF pages 3 à 6.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "La taille du brassard n’influence pas la mesure de la PA.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Un brassard inadapté fausse la mesure.",
          "source": "Cours de cardiologie L3, Chapitre 1  Hypertension artérielle, PDF pages 3 à 6.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Le bras du patient doit être soutenu à hauteur du cœur pendant la mesure.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "La position à hauteur du cœur améliore la fiabilité.",
          "source": "Cours de cardiologie L3, Chapitre 1  Hypertension artérielle, PDF pages 3 à 6.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "Le bras doit rester pendant librement sous le niveau du cœur.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "La position à hauteur du cœur améliore la fiabilité.",
          "source": "Cours de cardiologie L3, Chapitre 1  Hypertension artérielle, PDF pages 3 à 6.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Lors de la première consultation, la PA doit être mesurée aux deux bras.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Comparer les deux bras permet de repérer une différence tensionnelle.",
          "source": "Cours de cardiologie L3, Chapitre 1  Hypertension artérielle, PDF pages 3 à 6.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "Lors de la première consultation, la mesure doit obligatoirement se faire uniquement au bras gauche.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Comparer les deux bras permet de repérer une différence tensionnelle.",
          "source": "Cours de cardiologie L3, Chapitre 1  Hypertension artérielle, PDF pages 3 à 6.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "La recherche d’une hypotension orthostatique est particulièrement importante chez le sujet âgé et le diabétique.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Ces patients présentent un risque accru d’hypotension orthostatique.",
          "source": "Cours de cardiologie L3, Chapitre 1  Hypertension artérielle, PDF pages 3 à 6.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "L’hypotension orthostatique ne doit jamais être recherchée chez le diabétique.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Ces patients présentent un risque accru d’hypotension orthostatique.",
          "source": "Cours de cardiologie L3, Chapitre 1  Hypertension artérielle, PDF pages 3 à 6.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "La surveillance de la tolérance recherche notamment céphalées, troubles visuels, dyspnée et troubles de l’équilibre.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Ces signes peuvent traduire une mauvaise tolérance ou une complication.",
          "source": "Cours de cardiologie L3, Chapitre 1  Hypertension artérielle, PDF pages 3 à 6.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "La surveillance d’une HTA exclut l’évaluation des troubles visuels.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Ces signes peuvent traduire une mauvaise tolérance ou une complication.",
          "source": "Cours de cardiologie L3, Chapitre 1  Hypertension artérielle, PDF pages 3 à 6.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "L’ionogramme et la créatininémie participent à l’évaluation du retentissement rénal de l’HTA.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "L’HTA peut altérer la fonction rénale.",
          "source": "Cours de cardiologie L3, Chapitre 1  Hypertension artérielle, PDF pages 3 à 6.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "La créatininémie n’a aucun intérêt dans le bilan d’un patient hypertendu.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "L’HTA peut altérer la fonction rénale.",
          "source": "Cours de cardiologie L3, Chapitre 1  Hypertension artérielle, PDF pages 3 à 6.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "La bandelette urinaire permet notamment de rechercher protéinurie et hématurie.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Protéinurie et hématurie peuvent révéler un retentissement rénal.",
          "source": "Cours de cardiologie L3, Chapitre 1  Hypertension artérielle, PDF pages 3 à 6.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "La bandelette urinaire sert uniquement à mesurer la pression artérielle.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Protéinurie et hématurie peuvent révéler un retentissement rénal.",
          "source": "Cours de cardiologie L3, Chapitre 1  Hypertension artérielle, PDF pages 3 à 6.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Un environnement calme et propice au repos aide à éviter l’aggravation d’une poussée hypertensive.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le calme réduit les stimulations et favorise le repos.",
          "source": "Cours de cardiologie L3, Chapitre 1  Hypertension artérielle, PDF pages 3 à 6.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "Un environnement bruyant est recommandé pendant une poussée hypertensive.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le calme réduit les stimulations et favorise le repos.",
          "source": "Cours de cardiologie L3, Chapitre 1  Hypertension artérielle, PDF pages 3 à 6.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "L’éducation thérapeutique doit être adaptée aux connaissances et au mode de vie du patient.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "L’individualisation favorise la compréhension et l’observance.",
          "source": "Cours de cardiologie L3, Chapitre 1  Hypertension artérielle, PDF pages 3 à 6.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "L’éducation doit être identique pour tous sans tenir compte du mode de vie.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "L’individualisation favorise la compréhension et l’observance.",
          "source": "Cours de cardiologie L3, Chapitre 1  Hypertension artérielle, PDF pages 3 à 6.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Associer la prise du traitement à une habitude quotidienne peut améliorer l’observance.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Une routine stable facilite la régularité du traitement.",
          "source": "Cours de cardiologie L3, Chapitre 1  Hypertension artérielle, PDF pages 3 à 6.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "Changer volontairement chaque jour l’heure de prise améliore l’observance.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Une routine stable facilite la régularité du traitement.",
          "source": "Cours de cardiologie L3, Chapitre 1  Hypertension artérielle, PDF pages 3 à 6.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Concernant définition, quelle proposition est correcte ?",
          "options": [
            "L’HTA correspond à une PAS ≥ 140 mmHg et/ou une PAD ≥ 90 mmHg constatée à deux reprises et pas le même jour.",
            "La PAS correspond à la pression minimale observée pendant le remplissage cardiaque.",
            "La PAD est la pression maximale produite pendant la systole.",
            "Une PA de 160/100 mmHg est considérée comme normale dans le cours."
          ],
          "type": "qcm",
          "explanation": "Le diagnostic repose sur des chiffres élevés confirmés à deux reprises, hors situation d’urgence.",
          "source": "Cours de cardiologie L3, Chapitre 1  Hypertension artérielle, PDF pages 3 à 6.",
          "answers": [
            "L’HTA correspond à une PAS ≥ 140 mmHg et/ou une PAD ≥ 90 mmHg constatée à deux reprises et pas le même jour."
          ],
          "correct": [
            "L’HTA correspond à une PAS ≥ 140 mmHg et/ou une PAD ≥ 90 mmHg constatée à deux reprises et pas le même jour."
          ]
        },
        {
          "text": "Concernant PAS, quelle proposition est correcte ?",
          "options": [
            "La pression artérielle systolique correspond à la pression maximale lors de la contraction cardiaque.",
            "La PAD est la pression maximale produite pendant la systole.",
            "Une PA de 160/100 mmHg est considérée comme normale dans le cours.",
            "La PA doit être mesurée immédiatement après un effort intense."
          ],
          "type": "qcm",
          "explanation": "La PAS est mesurée pendant la systole, lorsque le cœur éjecte le sang.",
          "source": "Cours de cardiologie L3, Chapitre 1  Hypertension artérielle, PDF pages 3 à 6.",
          "answers": [
            "La pression artérielle systolique correspond à la pression maximale lors de la contraction cardiaque."
          ],
          "correct": [
            "La pression artérielle systolique correspond à la pression maximale lors de la contraction cardiaque."
          ]
        },
        {
          "text": "Concernant PAD, quelle proposition est correcte ?",
          "options": [
            "La pression artérielle diastolique correspond à la pression minimale pendant la relaxation du cœur.",
            "Une PA de 160/100 mmHg est considérée comme normale dans le cours.",
            "La PA doit être mesurée immédiatement après un effort intense.",
            "La taille du brassard n’influence pas la mesure de la PA."
          ],
          "type": "qcm",
          "explanation": "La PAD est la pression artérielle observée pendant la diastole.",
          "source": "Cours de cardiologie L3, Chapitre 1  Hypertension artérielle, PDF pages 3 à 6.",
          "answers": [
            "La pression artérielle diastolique correspond à la pression minimale pendant la relaxation du cœur."
          ],
          "correct": [
            "La pression artérielle diastolique correspond à la pression minimale pendant la relaxation du cœur."
          ]
        },
        {
          "text": "Concernant valeur normale, quelle proposition est correcte ?",
          "options": [
            "En cabinet, une pression artérielle inférieure à 140/90 mmHg est considérée comme normale dans le cours.",
            "La PA doit être mesurée immédiatement après un effort intense.",
            "La taille du brassard n’influence pas la mesure de la PA.",
            "Le bras doit rester pendant librement sous le niveau du cœur."
          ],
          "type": "qcm",
          "explanation": "Le seuil présenté dans le cours est 140/90 mmHg.",
          "source": "Cours de cardiologie L3, Chapitre 1  Hypertension artérielle, PDF pages 3 à 6.",
          "answers": [
            "En cabinet, une pression artérielle inférieure à 140/90 mmHg est considérée comme normale dans le cours."
          ],
          "correct": [
            "En cabinet, une pression artérielle inférieure à 140/90 mmHg est considérée comme normale dans le cours."
          ]
        },
        {
          "text": "Concernant repos, quelle proposition est correcte ?",
          "options": [
            "La PA se mesure de préférence chez un patient assis ou couché au repos depuis au moins cinq minutes.",
            "La taille du brassard n’influence pas la mesure de la PA.",
            "Le bras doit rester pendant librement sous le niveau du cœur.",
            "Lors de la première consultation, la mesure doit obligatoirement se faire uniquement au bras gauche."
          ],
          "type": "qcm",
          "explanation": "Le repos préalable limite les erreurs de mesure.",
          "source": "Cours de cardiologie L3, Chapitre 1  Hypertension artérielle, PDF pages 3 à 6.",
          "answers": [
            "La PA se mesure de préférence chez un patient assis ou couché au repos depuis au moins cinq minutes."
          ],
          "correct": [
            "La PA se mesure de préférence chez un patient assis ou couché au repos depuis au moins cinq minutes."
          ]
        },
        {
          "text": "Concernant brassard, quelle proposition est correcte ?",
          "options": [
            "Le brassard doit être adapté à la taille du bras et placé environ 2 à 3 cm au-dessus du pli du coude.",
            "Le bras doit rester pendant librement sous le niveau du cœur.",
            "Lors de la première consultation, la mesure doit obligatoirement se faire uniquement au bras gauche.",
            "L’hypotension orthostatique ne doit jamais être recherchée chez le diabétique."
          ],
          "type": "qcm",
          "explanation": "Un brassard inadapté fausse la mesure.",
          "source": "Cours de cardiologie L3, Chapitre 1  Hypertension artérielle, PDF pages 3 à 6.",
          "answers": [
            "Le brassard doit être adapté à la taille du bras et placé environ 2 à 3 cm au-dessus du pli du coude."
          ],
          "correct": [
            "Le brassard doit être adapté à la taille du bras et placé environ 2 à 3 cm au-dessus du pli du coude."
          ]
        },
        {
          "text": "Concernant position du bras, quelle proposition est correcte ?",
          "options": [
            "Le bras du patient doit être soutenu à hauteur du cœur pendant la mesure.",
            "Lors de la première consultation, la mesure doit obligatoirement se faire uniquement au bras gauche.",
            "L’hypotension orthostatique ne doit jamais être recherchée chez le diabétique.",
            "La surveillance d’une HTA exclut l’évaluation des troubles visuels."
          ],
          "type": "qcm",
          "explanation": "La position à hauteur du cœur améliore la fiabilité.",
          "source": "Cours de cardiologie L3, Chapitre 1  Hypertension artérielle, PDF pages 3 à 6.",
          "answers": [
            "Le bras du patient doit être soutenu à hauteur du cœur pendant la mesure."
          ],
          "correct": [
            "Le bras du patient doit être soutenu à hauteur du cœur pendant la mesure."
          ]
        },
        {
          "text": "Concernant première consultation, quelle proposition est correcte ?",
          "options": [
            "Lors de la première consultation, la PA doit être mesurée aux deux bras.",
            "L’hypotension orthostatique ne doit jamais être recherchée chez le diabétique.",
            "La surveillance d’une HTA exclut l’évaluation des troubles visuels.",
            "La créatininémie n’a aucun intérêt dans le bilan d’un patient hypertendu."
          ],
          "type": "qcm",
          "explanation": "Comparer les deux bras permet de repérer une différence tensionnelle.",
          "source": "Cours de cardiologie L3, Chapitre 1  Hypertension artérielle, PDF pages 3 à 6.",
          "answers": [
            "Lors de la première consultation, la PA doit être mesurée aux deux bras."
          ],
          "correct": [
            "Lors de la première consultation, la PA doit être mesurée aux deux bras."
          ]
        },
        {
          "text": "Concernant hypotension orthostatique, quelle proposition est correcte ?",
          "options": [
            "La recherche d’une hypotension orthostatique est particulièrement importante chez le sujet âgé et le diabétique.",
            "La surveillance d’une HTA exclut l’évaluation des troubles visuels.",
            "La créatininémie n’a aucun intérêt dans le bilan d’un patient hypertendu.",
            "La bandelette urinaire sert uniquement à mesurer la pression artérielle."
          ],
          "type": "qcm",
          "explanation": "Ces patients présentent un risque accru d’hypotension orthostatique.",
          "source": "Cours de cardiologie L3, Chapitre 1  Hypertension artérielle, PDF pages 3 à 6.",
          "answers": [
            "La recherche d’une hypotension orthostatique est particulièrement importante chez le sujet âgé et le diabétique."
          ],
          "correct": [
            "La recherche d’une hypotension orthostatique est particulièrement importante chez le sujet âgé et le diabétique."
          ]
        },
        {
          "text": "Concernant tolérance, quelle proposition est correcte ?",
          "options": [
            "La surveillance de la tolérance recherche notamment céphalées, troubles visuels, dyspnée et troubles de l’équilibre.",
            "La créatininémie n’a aucun intérêt dans le bilan d’un patient hypertendu.",
            "La bandelette urinaire sert uniquement à mesurer la pression artérielle.",
            "Un environnement bruyant est recommandé pendant une poussée hypertensive."
          ],
          "type": "qcm",
          "explanation": "Ces signes peuvent traduire une mauvaise tolérance ou une complication.",
          "source": "Cours de cardiologie L3, Chapitre 1  Hypertension artérielle, PDF pages 3 à 6.",
          "answers": [
            "La surveillance de la tolérance recherche notamment céphalées, troubles visuels, dyspnée et troubles de l’équilibre."
          ],
          "correct": [
            "La surveillance de la tolérance recherche notamment céphalées, troubles visuels, dyspnée et troubles de l’équilibre."
          ]
        },
        {
          "text": "Concernant bilan rénal, quelle proposition est correcte ?",
          "options": [
            "L’ionogramme et la créatininémie participent à l’évaluation du retentissement rénal de l’HTA.",
            "La bandelette urinaire sert uniquement à mesurer la pression artérielle.",
            "Un environnement bruyant est recommandé pendant une poussée hypertensive.",
            "L’éducation doit être identique pour tous sans tenir compte du mode de vie."
          ],
          "type": "qcm",
          "explanation": "L’HTA peut altérer la fonction rénale.",
          "source": "Cours de cardiologie L3, Chapitre 1  Hypertension artérielle, PDF pages 3 à 6.",
          "answers": [
            "L’ionogramme et la créatininémie participent à l’évaluation du retentissement rénal de l’HTA."
          ],
          "correct": [
            "L’ionogramme et la créatininémie participent à l’évaluation du retentissement rénal de l’HTA."
          ]
        },
        {
          "text": "Concernant bandelette urinaire, quelle proposition est correcte ?",
          "options": [
            "La bandelette urinaire permet notamment de rechercher protéinurie et hématurie.",
            "Un environnement bruyant est recommandé pendant une poussée hypertensive.",
            "L’éducation doit être identique pour tous sans tenir compte du mode de vie.",
            "Changer volontairement chaque jour l’heure de prise améliore l’observance."
          ],
          "type": "qcm",
          "explanation": "Protéinurie et hématurie peuvent révéler un retentissement rénal.",
          "source": "Cours de cardiologie L3, Chapitre 1  Hypertension artérielle, PDF pages 3 à 6.",
          "answers": [
            "La bandelette urinaire permet notamment de rechercher protéinurie et hématurie."
          ],
          "correct": [
            "La bandelette urinaire permet notamment de rechercher protéinurie et hématurie."
          ]
        },
        {
          "text": "Concernant environnement, quelle proposition est correcte ?",
          "options": [
            "Un environnement calme et propice au repos aide à éviter l’aggravation d’une poussée hypertensive.",
            "L’éducation doit être identique pour tous sans tenir compte du mode de vie.",
            "Changer volontairement chaque jour l’heure de prise améliore l’observance.",
            "Une seule mesure de PA élevée suffit toujours pour affirmer une HTA."
          ],
          "type": "qcm",
          "explanation": "Le calme réduit les stimulations et favorise le repos.",
          "source": "Cours de cardiologie L3, Chapitre 1  Hypertension artérielle, PDF pages 3 à 6.",
          "answers": [
            "Un environnement calme et propice au repos aide à éviter l’aggravation d’une poussée hypertensive."
          ],
          "correct": [
            "Un environnement calme et propice au repos aide à éviter l’aggravation d’une poussée hypertensive."
          ]
        },
        {
          "text": "Concernant éducation, quelle proposition est correcte ?",
          "options": [
            "L’éducation thérapeutique doit être adaptée aux connaissances et au mode de vie du patient.",
            "Changer volontairement chaque jour l’heure de prise améliore l’observance.",
            "Une seule mesure de PA élevée suffit toujours pour affirmer une HTA.",
            "La PAS correspond à la pression minimale observée pendant le remplissage cardiaque."
          ],
          "type": "qcm",
          "explanation": "L’individualisation favorise la compréhension et l’observance.",
          "source": "Cours de cardiologie L3, Chapitre 1  Hypertension artérielle, PDF pages 3 à 6.",
          "answers": [
            "L’éducation thérapeutique doit être adaptée aux connaissances et au mode de vie du patient."
          ],
          "correct": [
            "L’éducation thérapeutique doit être adaptée aux connaissances et au mode de vie du patient."
          ]
        },
        {
          "text": "Concernant observance, quelle proposition est correcte ?",
          "options": [
            "Associer la prise du traitement à une habitude quotidienne peut améliorer l’observance.",
            "Une seule mesure de PA élevée suffit toujours pour affirmer une HTA.",
            "La PAS correspond à la pression minimale observée pendant le remplissage cardiaque.",
            "La PAD est la pression maximale produite pendant la systole."
          ],
          "type": "qcm",
          "explanation": "Une routine stable facilite la régularité du traitement.",
          "source": "Cours de cardiologie L3, Chapitre 1  Hypertension artérielle, PDF pages 3 à 6.",
          "answers": [
            "Associer la prise du traitement à une habitude quotidienne peut améliorer l’observance."
          ],
          "correct": [
            "Associer la prise du traitement à une habitude quotidienne peut améliorer l’observance."
          ]
        },
        {
          "text": "À propos de définition, choisissez les deux propositions exactes.",
          "options": [
            "L’HTA correspond à une PAS ≥ 140 mmHg et/ou une PAD ≥ 90 mmHg constatée à deux reprises et pas le même jour.",
            "La pression artérielle systolique correspond à la pression maximale lors de la contraction cardiaque.",
            "La PAD est la pression maximale produite pendant la systole.",
            "Une PA de 160/100 mmHg est considérée comme normale dans le cours."
          ],
          "type": "qcm",
          "explanation": "Le diagnostic repose sur des chiffres élevés confirmés à deux reprises, hors situation d’urgence. La PAS est mesurée pendant la systole, lorsque le cœur éjecte le sang.",
          "source": "Cours de cardiologie L3, Chapitre 1  Hypertension artérielle, PDF pages 3 à 6.",
          "answers": [
            "L’HTA correspond à une PAS ≥ 140 mmHg et/ou une PAD ≥ 90 mmHg constatée à deux reprises et pas le même jour.",
            "La pression artérielle systolique correspond à la pression maximale lors de la contraction cardiaque."
          ],
          "correct": [
            "L’HTA correspond à une PAS ≥ 140 mmHg et/ou une PAD ≥ 90 mmHg constatée à deux reprises et pas le même jour.",
            "La pression artérielle systolique correspond à la pression maximale lors de la contraction cardiaque."
          ]
        },
        {
          "text": "À propos de PAS, choisissez les deux propositions exactes.",
          "options": [
            "La pression artérielle systolique correspond à la pression maximale lors de la contraction cardiaque.",
            "La pression artérielle diastolique correspond à la pression minimale pendant la relaxation du cœur.",
            "Une PA de 160/100 mmHg est considérée comme normale dans le cours.",
            "La PA doit être mesurée immédiatement après un effort intense."
          ],
          "type": "qcm",
          "explanation": "La PAS est mesurée pendant la systole, lorsque le cœur éjecte le sang. La PAD est la pression artérielle observée pendant la diastole.",
          "source": "Cours de cardiologie L3, Chapitre 1  Hypertension artérielle, PDF pages 3 à 6.",
          "answers": [
            "La pression artérielle systolique correspond à la pression maximale lors de la contraction cardiaque.",
            "La pression artérielle diastolique correspond à la pression minimale pendant la relaxation du cœur."
          ],
          "correct": [
            "La pression artérielle systolique correspond à la pression maximale lors de la contraction cardiaque.",
            "La pression artérielle diastolique correspond à la pression minimale pendant la relaxation du cœur."
          ]
        },
        {
          "text": "À propos de PAD, choisissez les deux propositions exactes.",
          "options": [
            "La pression artérielle diastolique correspond à la pression minimale pendant la relaxation du cœur.",
            "En cabinet, une pression artérielle inférieure à 140/90 mmHg est considérée comme normale dans le cours.",
            "La PA doit être mesurée immédiatement après un effort intense.",
            "La taille du brassard n’influence pas la mesure de la PA."
          ],
          "type": "qcm",
          "explanation": "La PAD est la pression artérielle observée pendant la diastole. Le seuil présenté dans le cours est 140/90 mmHg.",
          "source": "Cours de cardiologie L3, Chapitre 1  Hypertension artérielle, PDF pages 3 à 6.",
          "answers": [
            "La pression artérielle diastolique correspond à la pression minimale pendant la relaxation du cœur.",
            "En cabinet, une pression artérielle inférieure à 140/90 mmHg est considérée comme normale dans le cours."
          ],
          "correct": [
            "La pression artérielle diastolique correspond à la pression minimale pendant la relaxation du cœur.",
            "En cabinet, une pression artérielle inférieure à 140/90 mmHg est considérée comme normale dans le cours."
          ]
        },
        {
          "text": "À propos de valeur normale, choisissez les deux propositions exactes.",
          "options": [
            "En cabinet, une pression artérielle inférieure à 140/90 mmHg est considérée comme normale dans le cours.",
            "La PA se mesure de préférence chez un patient assis ou couché au repos depuis au moins cinq minutes.",
            "La taille du brassard n’influence pas la mesure de la PA.",
            "Le bras doit rester pendant librement sous le niveau du cœur."
          ],
          "type": "qcm",
          "explanation": "Le seuil présenté dans le cours est 140/90 mmHg. Le repos préalable limite les erreurs de mesure.",
          "source": "Cours de cardiologie L3, Chapitre 1  Hypertension artérielle, PDF pages 3 à 6.",
          "answers": [
            "En cabinet, une pression artérielle inférieure à 140/90 mmHg est considérée comme normale dans le cours.",
            "La PA se mesure de préférence chez un patient assis ou couché au repos depuis au moins cinq minutes."
          ],
          "correct": [
            "En cabinet, une pression artérielle inférieure à 140/90 mmHg est considérée comme normale dans le cours.",
            "La PA se mesure de préférence chez un patient assis ou couché au repos depuis au moins cinq minutes."
          ]
        },
        {
          "text": "À propos de repos, choisissez les deux propositions exactes.",
          "options": [
            "La PA se mesure de préférence chez un patient assis ou couché au repos depuis au moins cinq minutes.",
            "Le brassard doit être adapté à la taille du bras et placé environ 2 à 3 cm au-dessus du pli du coude.",
            "Le bras doit rester pendant librement sous le niveau du cœur.",
            "Lors de la première consultation, la mesure doit obligatoirement se faire uniquement au bras gauche."
          ],
          "type": "qcm",
          "explanation": "Le repos préalable limite les erreurs de mesure. Un brassard inadapté fausse la mesure.",
          "source": "Cours de cardiologie L3, Chapitre 1  Hypertension artérielle, PDF pages 3 à 6.",
          "answers": [
            "La PA se mesure de préférence chez un patient assis ou couché au repos depuis au moins cinq minutes.",
            "Le brassard doit être adapté à la taille du bras et placé environ 2 à 3 cm au-dessus du pli du coude."
          ],
          "correct": [
            "La PA se mesure de préférence chez un patient assis ou couché au repos depuis au moins cinq minutes.",
            "Le brassard doit être adapté à la taille du bras et placé environ 2 à 3 cm au-dessus du pli du coude."
          ]
        },
        {
          "text": "À propos de brassard, choisissez les deux propositions exactes.",
          "options": [
            "Le brassard doit être adapté à la taille du bras et placé environ 2 à 3 cm au-dessus du pli du coude.",
            "Le bras du patient doit être soutenu à hauteur du cœur pendant la mesure.",
            "Lors de la première consultation, la mesure doit obligatoirement se faire uniquement au bras gauche.",
            "L’hypotension orthostatique ne doit jamais être recherchée chez le diabétique."
          ],
          "type": "qcm",
          "explanation": "Un brassard inadapté fausse la mesure. La position à hauteur du cœur améliore la fiabilité.",
          "source": "Cours de cardiologie L3, Chapitre 1  Hypertension artérielle, PDF pages 3 à 6.",
          "answers": [
            "Le brassard doit être adapté à la taille du bras et placé environ 2 à 3 cm au-dessus du pli du coude.",
            "Le bras du patient doit être soutenu à hauteur du cœur pendant la mesure."
          ],
          "correct": [
            "Le brassard doit être adapté à la taille du bras et placé environ 2 à 3 cm au-dessus du pli du coude.",
            "Le bras du patient doit être soutenu à hauteur du cœur pendant la mesure."
          ]
        },
        {
          "text": "À propos de position du bras, choisissez les deux propositions exactes.",
          "options": [
            "Le bras du patient doit être soutenu à hauteur du cœur pendant la mesure.",
            "Lors de la première consultation, la PA doit être mesurée aux deux bras.",
            "L’hypotension orthostatique ne doit jamais être recherchée chez le diabétique.",
            "La surveillance d’une HTA exclut l’évaluation des troubles visuels."
          ],
          "type": "qcm",
          "explanation": "La position à hauteur du cœur améliore la fiabilité. Comparer les deux bras permet de repérer une différence tensionnelle.",
          "source": "Cours de cardiologie L3, Chapitre 1  Hypertension artérielle, PDF pages 3 à 6.",
          "answers": [
            "Le bras du patient doit être soutenu à hauteur du cœur pendant la mesure.",
            "Lors de la première consultation, la PA doit être mesurée aux deux bras."
          ],
          "correct": [
            "Le bras du patient doit être soutenu à hauteur du cœur pendant la mesure.",
            "Lors de la première consultation, la PA doit être mesurée aux deux bras."
          ]
        },
        {
          "text": "À propos de première consultation, choisissez les deux propositions exactes.",
          "options": [
            "Lors de la première consultation, la PA doit être mesurée aux deux bras.",
            "La recherche d’une hypotension orthostatique est particulièrement importante chez le sujet âgé et le diabétique.",
            "La surveillance d’une HTA exclut l’évaluation des troubles visuels.",
            "La créatininémie n’a aucun intérêt dans le bilan d’un patient hypertendu."
          ],
          "type": "qcm",
          "explanation": "Comparer les deux bras permet de repérer une différence tensionnelle. Ces patients présentent un risque accru d’hypotension orthostatique.",
          "source": "Cours de cardiologie L3, Chapitre 1  Hypertension artérielle, PDF pages 3 à 6.",
          "answers": [
            "Lors de la première consultation, la PA doit être mesurée aux deux bras.",
            "La recherche d’une hypotension orthostatique est particulièrement importante chez le sujet âgé et le diabétique."
          ],
          "correct": [
            "Lors de la première consultation, la PA doit être mesurée aux deux bras.",
            "La recherche d’une hypotension orthostatique est particulièrement importante chez le sujet âgé et le diabétique."
          ]
        },
        {
          "text": "À propos de hypotension orthostatique, choisissez les deux propositions exactes.",
          "options": [
            "La recherche d’une hypotension orthostatique est particulièrement importante chez le sujet âgé et le diabétique.",
            "La surveillance de la tolérance recherche notamment céphalées, troubles visuels, dyspnée et troubles de l’équilibre.",
            "La créatininémie n’a aucun intérêt dans le bilan d’un patient hypertendu.",
            "La bandelette urinaire sert uniquement à mesurer la pression artérielle."
          ],
          "type": "qcm",
          "explanation": "Ces patients présentent un risque accru d’hypotension orthostatique. Ces signes peuvent traduire une mauvaise tolérance ou une complication.",
          "source": "Cours de cardiologie L3, Chapitre 1  Hypertension artérielle, PDF pages 3 à 6.",
          "answers": [
            "La recherche d’une hypotension orthostatique est particulièrement importante chez le sujet âgé et le diabétique.",
            "La surveillance de la tolérance recherche notamment céphalées, troubles visuels, dyspnée et troubles de l’équilibre."
          ],
          "correct": [
            "La recherche d’une hypotension orthostatique est particulièrement importante chez le sujet âgé et le diabétique.",
            "La surveillance de la tolérance recherche notamment céphalées, troubles visuels, dyspnée et troubles de l’équilibre."
          ]
        },
        {
          "text": "À propos de tolérance, choisissez les deux propositions exactes.",
          "options": [
            "La surveillance de la tolérance recherche notamment céphalées, troubles visuels, dyspnée et troubles de l’équilibre.",
            "L’ionogramme et la créatininémie participent à l’évaluation du retentissement rénal de l’HTA.",
            "La bandelette urinaire sert uniquement à mesurer la pression artérielle.",
            "Un environnement bruyant est recommandé pendant une poussée hypertensive."
          ],
          "type": "qcm",
          "explanation": "Ces signes peuvent traduire une mauvaise tolérance ou une complication. L’HTA peut altérer la fonction rénale.",
          "source": "Cours de cardiologie L3, Chapitre 1  Hypertension artérielle, PDF pages 3 à 6.",
          "answers": [
            "La surveillance de la tolérance recherche notamment céphalées, troubles visuels, dyspnée et troubles de l’équilibre.",
            "L’ionogramme et la créatininémie participent à l’évaluation du retentissement rénal de l’HTA."
          ],
          "correct": [
            "La surveillance de la tolérance recherche notamment céphalées, troubles visuels, dyspnée et troubles de l’équilibre.",
            "L’ionogramme et la créatininémie participent à l’évaluation du retentissement rénal de l’HTA."
          ]
        },
        {
          "text": "À propos de bilan rénal, choisissez les deux propositions exactes.",
          "options": [
            "L’ionogramme et la créatininémie participent à l’évaluation du retentissement rénal de l’HTA.",
            "La bandelette urinaire permet notamment de rechercher protéinurie et hématurie.",
            "Un environnement bruyant est recommandé pendant une poussée hypertensive.",
            "L’éducation doit être identique pour tous sans tenir compte du mode de vie."
          ],
          "type": "qcm",
          "explanation": "L’HTA peut altérer la fonction rénale. Protéinurie et hématurie peuvent révéler un retentissement rénal.",
          "source": "Cours de cardiologie L3, Chapitre 1  Hypertension artérielle, PDF pages 3 à 6.",
          "answers": [
            "L’ionogramme et la créatininémie participent à l’évaluation du retentissement rénal de l’HTA.",
            "La bandelette urinaire permet notamment de rechercher protéinurie et hématurie."
          ],
          "correct": [
            "L’ionogramme et la créatininémie participent à l’évaluation du retentissement rénal de l’HTA.",
            "La bandelette urinaire permet notamment de rechercher protéinurie et hématurie."
          ]
        },
        {
          "text": "À propos de bandelette urinaire, choisissez les deux propositions exactes.",
          "options": [
            "La bandelette urinaire permet notamment de rechercher protéinurie et hématurie.",
            "Un environnement calme et propice au repos aide à éviter l’aggravation d’une poussée hypertensive.",
            "L’éducation doit être identique pour tous sans tenir compte du mode de vie.",
            "Changer volontairement chaque jour l’heure de prise améliore l’observance."
          ],
          "type": "qcm",
          "explanation": "Protéinurie et hématurie peuvent révéler un retentissement rénal. Le calme réduit les stimulations et favorise le repos.",
          "source": "Cours de cardiologie L3, Chapitre 1  Hypertension artérielle, PDF pages 3 à 6.",
          "answers": [
            "La bandelette urinaire permet notamment de rechercher protéinurie et hématurie.",
            "Un environnement calme et propice au repos aide à éviter l’aggravation d’une poussée hypertensive."
          ],
          "correct": [
            "La bandelette urinaire permet notamment de rechercher protéinurie et hématurie.",
            "Un environnement calme et propice au repos aide à éviter l’aggravation d’une poussée hypertensive."
          ]
        },
        {
          "text": "À propos de environnement, choisissez les deux propositions exactes.",
          "options": [
            "Un environnement calme et propice au repos aide à éviter l’aggravation d’une poussée hypertensive.",
            "L’éducation thérapeutique doit être adaptée aux connaissances et au mode de vie du patient.",
            "Changer volontairement chaque jour l’heure de prise améliore l’observance.",
            "Une seule mesure de PA élevée suffit toujours pour affirmer une HTA."
          ],
          "type": "qcm",
          "explanation": "Le calme réduit les stimulations et favorise le repos. L’individualisation favorise la compréhension et l’observance.",
          "source": "Cours de cardiologie L3, Chapitre 1  Hypertension artérielle, PDF pages 3 à 6.",
          "answers": [
            "Un environnement calme et propice au repos aide à éviter l’aggravation d’une poussée hypertensive.",
            "L’éducation thérapeutique doit être adaptée aux connaissances et au mode de vie du patient."
          ],
          "correct": [
            "Un environnement calme et propice au repos aide à éviter l’aggravation d’une poussée hypertensive.",
            "L’éducation thérapeutique doit être adaptée aux connaissances et au mode de vie du patient."
          ]
        },
        {
          "text": "À propos de éducation, choisissez les deux propositions exactes.",
          "options": [
            "L’éducation thérapeutique doit être adaptée aux connaissances et au mode de vie du patient.",
            "Associer la prise du traitement à une habitude quotidienne peut améliorer l’observance.",
            "Une seule mesure de PA élevée suffit toujours pour affirmer une HTA.",
            "La PAS correspond à la pression minimale observée pendant le remplissage cardiaque."
          ],
          "type": "qcm",
          "explanation": "L’individualisation favorise la compréhension et l’observance. Une routine stable facilite la régularité du traitement.",
          "source": "Cours de cardiologie L3, Chapitre 1  Hypertension artérielle, PDF pages 3 à 6.",
          "answers": [
            "L’éducation thérapeutique doit être adaptée aux connaissances et au mode de vie du patient.",
            "Associer la prise du traitement à une habitude quotidienne peut améliorer l’observance."
          ],
          "correct": [
            "L’éducation thérapeutique doit être adaptée aux connaissances et au mode de vie du patient.",
            "Associer la prise du traitement à une habitude quotidienne peut améliorer l’observance."
          ]
        },
        {
          "text": "À propos de observance, choisissez les deux propositions exactes.",
          "options": [
            "Associer la prise du traitement à une habitude quotidienne peut améliorer l’observance.",
            "L’HTA correspond à une PAS ≥ 140 mmHg et/ou une PAD ≥ 90 mmHg constatée à deux reprises et pas le même jour.",
            "La PAS correspond à la pression minimale observée pendant le remplissage cardiaque.",
            "La PAD est la pression maximale produite pendant la systole."
          ],
          "type": "qcm",
          "explanation": "Une routine stable facilite la régularité du traitement. Le diagnostic repose sur des chiffres élevés confirmés à deux reprises, hors situation d’urgence.",
          "source": "Cours de cardiologie L3, Chapitre 1  Hypertension artérielle, PDF pages 3 à 6.",
          "answers": [
            "Associer la prise du traitement à une habitude quotidienne peut améliorer l’observance.",
            "L’HTA correspond à une PAS ≥ 140 mmHg et/ou une PAD ≥ 90 mmHg constatée à deux reprises et pas le même jour."
          ],
          "correct": [
            "Associer la prise du traitement à une habitude quotidienne peut améliorer l’observance.",
            "L’HTA correspond à une PAS ≥ 140 mmHg et/ou une PAD ≥ 90 mmHg constatée à deux reprises et pas le même jour."
          ]
        }
      ]
    },
    {
      "id": "ide-2",
      "title": "Cardiologie L3 — Phlébite",
      "matter": "Cardiologie L3",
      "filiere": "IDE",
      "description": "Sujet 2 — 60 questions corrigées",
      "instructions": "QCD : Vrai ou Faux. QCM : sélectionner la ou les bonnes réponses.",
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
          "text": "La thrombose veineuse profonde est l’obstruction partielle ou totale d’une veine par un thrombus.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "La TVP concerne une veine, le plus souvent profonde, obstruée par un caillot.",
          "source": "Cours de cardiologie L3, Chapitre 2  Phlébite, PDF pages 7 à 10.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "La TVP est une infection exclusive des artères coronaires.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "La TVP concerne une veine, le plus souvent profonde, obstruée par un caillot.",
          "source": "Cours de cardiologie L3, Chapitre 2  Phlébite, PDF pages 7 à 10.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "La complication vitale majeure d’une TVP est l’embolie pulmonaire.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Un fragment du thrombus peut migrer vers l’artère pulmonaire.",
          "source": "Cours de cardiologie L3, Chapitre 2  Phlébite, PDF pages 7 à 10.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "La TVP ne peut jamais entraîner d’embolie pulmonaire.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Un fragment du thrombus peut migrer vers l’artère pulmonaire.",
          "source": "Cours de cardiologie L3, Chapitre 2  Phlébite, PDF pages 7 à 10.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "La maladie post-phlébitique peut entraîner douleurs, varices, œdème et troubles trophiques.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "L’obstruction veineuse persistante altère durablement le retour veineux.",
          "source": "Cours de cardiologie L3, Chapitre 2  Phlébite, PDF pages 7 à 10.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "La maladie post-phlébitique n’entraîne aucun trouble trophique.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "L’obstruction veineuse persistante altère durablement le retour veineux.",
          "source": "Cours de cardiologie L3, Chapitre 2  Phlébite, PDF pages 7 à 10.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Le thrombus se forme souvent au niveau d’une valve veineuse.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "La stase autour des valves favorise la thrombose.",
          "source": "Cours de cardiologie L3, Chapitre 2  Phlébite, PDF pages 7 à 10.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "Le thrombus veineux se forme toujours dans une alvéole pulmonaire.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "La stase autour des valves favorise la thrombose.",
          "source": "Cours de cardiologie L3, Chapitre 2  Phlébite, PDF pages 7 à 10.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "L’immobilisation prolongée favorise la stase veineuse et la TVP.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "La diminution de la pompe musculaire ralentit le retour veineux.",
          "source": "Cours de cardiologie L3, Chapitre 2  Phlébite, PDF pages 7 à 10.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "L’immobilisation prolongée protège contre la TVP.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "La diminution de la pompe musculaire ralentit le retour veineux.",
          "source": "Cours de cardiologie L3, Chapitre 2  Phlébite, PDF pages 7 à 10.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "L’insuffisance cardiaque droite peut favoriser une TVP par stase veineuse.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "La congestion veineuse favorise la thrombose.",
          "source": "Cours de cardiologie L3, Chapitre 2  Phlébite, PDF pages 7 à 10.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "L’insuffisance cardiaque droite exclut tout risque de stase veineuse.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "La congestion veineuse favorise la thrombose.",
          "source": "Cours de cardiologie L3, Chapitre 2  Phlébite, PDF pages 7 à 10.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Une compression veineuse, un cancer ou un long voyage peuvent favoriser la TVP.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Ces situations ralentissent le flux veineux.",
          "source": "Cours de cardiologie L3, Chapitre 2  Phlébite, PDF pages 7 à 10.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "Un long voyage avec immobilité ne constitue jamais un facteur de risque.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Ces situations ralentissent le flux veineux.",
          "source": "Cours de cardiologie L3, Chapitre 2  Phlébite, PDF pages 7 à 10.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "La grossesse, le post-partum et certains cancers peuvent augmenter le risque thrombotique.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Ces états peuvent favoriser l’hypercoagulabilité.",
          "source": "Cours de cardiologie L3, Chapitre 2  Phlébite, PDF pages 7 à 10.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "Le post-partum supprime le risque thrombotique.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Ces états peuvent favoriser l’hypercoagulabilité.",
          "source": "Cours de cardiologie L3, Chapitre 2  Phlébite, PDF pages 7 à 10.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Une TVP du membre inférieur peut se manifester par douleur et œdème unilatéral.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "L’atteinte est fréquemment unilatérale.",
          "source": "Cours de cardiologie L3, Chapitre 2  Phlébite, PDF pages 7 à 10.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "Une TVP provoque obligatoirement un œdème parfaitement symétrique des deux jambes.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "L’atteinte est fréquemment unilatérale.",
          "source": "Cours de cardiologie L3, Chapitre 2  Phlébite, PDF pages 7 à 10.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Une TVP peut être asymptomatique.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le tableau clinique peut être incomplet ou silencieux.",
          "source": "Cours de cardiologie L3, Chapitre 2  Phlébite, PDF pages 7 à 10.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "L’absence de douleur élimine formellement une TVP.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le tableau clinique peut être incomplet ou silencieux.",
          "source": "Cours de cardiologie L3, Chapitre 2  Phlébite, PDF pages 7 à 10.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Au stade aigu, le repos strict au lit peut être prescrit pour limiter la migration du thrombus.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "La mobilisation dépend de la prescription et du risque embolique.",
          "source": "Cours de cardiologie L3, Chapitre 2  Phlébite, PDF pages 7 à 10.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "La marche forcée immédiate est toujours indiquée au stade aigu.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "La mobilisation dépend de la prescription et du risque embolique.",
          "source": "Cours de cardiologie L3, Chapitre 2  Phlébite, PDF pages 7 à 10.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "La surélévation des pieds du lit favorise le retour veineux.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Elle aide à réduire la stase et l’œdème.",
          "source": "Cours de cardiologie L3, Chapitre 2  Phlébite, PDF pages 7 à 10.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "La surélévation des pieds du lit bloque volontairement le retour veineux.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Elle aide à réduire la stase et l’œdème.",
          "source": "Cours de cardiologie L3, Chapitre 2  Phlébite, PDF pages 7 à 10.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Le traitement héparinique vise à limiter l’extension et la migration du thrombus.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "L’anticoagulation prévient l’extension et l’embolie.",
          "source": "Cours de cardiologie L3, Chapitre 2  Phlébite, PDF pages 7 à 10.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "L’héparine a pour objectif principal de provoquer une thrombose.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "L’anticoagulation prévient l’extension et l’embolie.",
          "source": "Cours de cardiologie L3, Chapitre 2  Phlébite, PDF pages 7 à 10.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Sous héparine, la surveillance recherche notamment hématomes, épistaxis, gingivorragies, méléna et hématurie.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le risque principal du traitement anticoagulant est hémorragique.",
          "source": "Cours de cardiologie L3, Chapitre 2  Phlébite, PDF pages 7 à 10.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "La recherche de saignements est inutile sous héparine.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le risque principal du traitement anticoagulant est hémorragique.",
          "source": "Cours de cardiologie L3, Chapitre 2  Phlébite, PDF pages 7 à 10.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Sous AVK, le patient doit éviter l’automédication et signaler son traitement avant tout soin.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Les interactions et gestes invasifs augmentent le risque hémorragique.",
          "source": "Cours de cardiologie L3, Chapitre 2  Phlébite, PDF pages 7 à 10.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "Sous AVK, les injections intramusculaires sont recommandées sans précaution.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Les interactions et gestes invasifs augmentent le risque hémorragique.",
          "source": "Cours de cardiologie L3, Chapitre 2  Phlébite, PDF pages 7 à 10.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Concernant définition, quelle proposition est correcte ?",
          "options": [
            "La thrombose veineuse profonde est l’obstruction partielle ou totale d’une veine par un thrombus.",
            "La TVP ne peut jamais entraîner d’embolie pulmonaire.",
            "La maladie post-phlébitique n’entraîne aucun trouble trophique.",
            "Le thrombus veineux se forme toujours dans une alvéole pulmonaire."
          ],
          "type": "qcm",
          "explanation": "La TVP concerne une veine, le plus souvent profonde, obstruée par un caillot.",
          "source": "Cours de cardiologie L3, Chapitre 2  Phlébite, PDF pages 7 à 10.",
          "answers": [
            "La thrombose veineuse profonde est l’obstruction partielle ou totale d’une veine par un thrombus."
          ],
          "correct": [
            "La thrombose veineuse profonde est l’obstruction partielle ou totale d’une veine par un thrombus."
          ]
        },
        {
          "text": "Concernant gravité, quelle proposition est correcte ?",
          "options": [
            "La complication vitale majeure d’une TVP est l’embolie pulmonaire.",
            "La maladie post-phlébitique n’entraîne aucun trouble trophique.",
            "Le thrombus veineux se forme toujours dans une alvéole pulmonaire.",
            "L’immobilisation prolongée protège contre la TVP."
          ],
          "type": "qcm",
          "explanation": "Un fragment du thrombus peut migrer vers l’artère pulmonaire.",
          "source": "Cours de cardiologie L3, Chapitre 2  Phlébite, PDF pages 7 à 10.",
          "answers": [
            "La complication vitale majeure d’une TVP est l’embolie pulmonaire."
          ],
          "correct": [
            "La complication vitale majeure d’une TVP est l’embolie pulmonaire."
          ]
        },
        {
          "text": "Concernant séquelles, quelle proposition est correcte ?",
          "options": [
            "La maladie post-phlébitique peut entraîner douleurs, varices, œdème et troubles trophiques.",
            "Le thrombus veineux se forme toujours dans une alvéole pulmonaire.",
            "L’immobilisation prolongée protège contre la TVP.",
            "L’insuffisance cardiaque droite exclut tout risque de stase veineuse."
          ],
          "type": "qcm",
          "explanation": "L’obstruction veineuse persistante altère durablement le retour veineux.",
          "source": "Cours de cardiologie L3, Chapitre 2  Phlébite, PDF pages 7 à 10.",
          "answers": [
            "La maladie post-phlébitique peut entraîner douleurs, varices, œdème et troubles trophiques."
          ],
          "correct": [
            "La maladie post-phlébitique peut entraîner douleurs, varices, œdème et troubles trophiques."
          ]
        },
        {
          "text": "Concernant mécanisme, quelle proposition est correcte ?",
          "options": [
            "Le thrombus se forme souvent au niveau d’une valve veineuse.",
            "L’immobilisation prolongée protège contre la TVP.",
            "L’insuffisance cardiaque droite exclut tout risque de stase veineuse.",
            "Un long voyage avec immobilité ne constitue jamais un facteur de risque."
          ],
          "type": "qcm",
          "explanation": "La stase autour des valves favorise la thrombose.",
          "source": "Cours de cardiologie L3, Chapitre 2  Phlébite, PDF pages 7 à 10.",
          "answers": [
            "Le thrombus se forme souvent au niveau d’une valve veineuse."
          ],
          "correct": [
            "Le thrombus se forme souvent au niveau d’une valve veineuse."
          ]
        },
        {
          "text": "Concernant stase, quelle proposition est correcte ?",
          "options": [
            "L’immobilisation prolongée favorise la stase veineuse et la TVP.",
            "L’insuffisance cardiaque droite exclut tout risque de stase veineuse.",
            "Un long voyage avec immobilité ne constitue jamais un facteur de risque.",
            "Le post-partum supprime le risque thrombotique."
          ],
          "type": "qcm",
          "explanation": "La diminution de la pompe musculaire ralentit le retour veineux.",
          "source": "Cours de cardiologie L3, Chapitre 2  Phlébite, PDF pages 7 à 10.",
          "answers": [
            "L’immobilisation prolongée favorise la stase veineuse et la TVP."
          ],
          "correct": [
            "L’immobilisation prolongée favorise la stase veineuse et la TVP."
          ]
        },
        {
          "text": "Concernant facteur cardiaque, quelle proposition est correcte ?",
          "options": [
            "L’insuffisance cardiaque droite peut favoriser une TVP par stase veineuse.",
            "Un long voyage avec immobilité ne constitue jamais un facteur de risque.",
            "Le post-partum supprime le risque thrombotique.",
            "Une TVP provoque obligatoirement un œdème parfaitement symétrique des deux jambes."
          ],
          "type": "qcm",
          "explanation": "La congestion veineuse favorise la thrombose.",
          "source": "Cours de cardiologie L3, Chapitre 2  Phlébite, PDF pages 7 à 10.",
          "answers": [
            "L’insuffisance cardiaque droite peut favoriser une TVP par stase veineuse."
          ],
          "correct": [
            "L’insuffisance cardiaque droite peut favoriser une TVP par stase veineuse."
          ]
        },
        {
          "text": "Concernant compression, quelle proposition est correcte ?",
          "options": [
            "Une compression veineuse, un cancer ou un long voyage peuvent favoriser la TVP.",
            "Le post-partum supprime le risque thrombotique.",
            "Une TVP provoque obligatoirement un œdème parfaitement symétrique des deux jambes.",
            "L’absence de douleur élimine formellement une TVP."
          ],
          "type": "qcm",
          "explanation": "Ces situations ralentissent le flux veineux.",
          "source": "Cours de cardiologie L3, Chapitre 2  Phlébite, PDF pages 7 à 10.",
          "answers": [
            "Une compression veineuse, un cancer ou un long voyage peuvent favoriser la TVP."
          ],
          "correct": [
            "Une compression veineuse, un cancer ou un long voyage peuvent favoriser la TVP."
          ]
        },
        {
          "text": "Concernant hypercoagulabilité, quelle proposition est correcte ?",
          "options": [
            "La grossesse, le post-partum et certains cancers peuvent augmenter le risque thrombotique.",
            "Une TVP provoque obligatoirement un œdème parfaitement symétrique des deux jambes.",
            "L’absence de douleur élimine formellement une TVP.",
            "La marche forcée immédiate est toujours indiquée au stade aigu."
          ],
          "type": "qcm",
          "explanation": "Ces états peuvent favoriser l’hypercoagulabilité.",
          "source": "Cours de cardiologie L3, Chapitre 2  Phlébite, PDF pages 7 à 10.",
          "answers": [
            "La grossesse, le post-partum et certains cancers peuvent augmenter le risque thrombotique."
          ],
          "correct": [
            "La grossesse, le post-partum et certains cancers peuvent augmenter le risque thrombotique."
          ]
        },
        {
          "text": "Concernant signes, quelle proposition est correcte ?",
          "options": [
            "Une TVP du membre inférieur peut se manifester par douleur et œdème unilatéral.",
            "L’absence de douleur élimine formellement une TVP.",
            "La marche forcée immédiate est toujours indiquée au stade aigu.",
            "La surélévation des pieds du lit bloque volontairement le retour veineux."
          ],
          "type": "qcm",
          "explanation": "L’atteinte est fréquemment unilatérale.",
          "source": "Cours de cardiologie L3, Chapitre 2  Phlébite, PDF pages 7 à 10.",
          "answers": [
            "Une TVP du membre inférieur peut se manifester par douleur et œdème unilatéral."
          ],
          "correct": [
            "Une TVP du membre inférieur peut se manifester par douleur et œdème unilatéral."
          ]
        },
        {
          "text": "Concernant asymptomatique, quelle proposition est correcte ?",
          "options": [
            "Une TVP peut être asymptomatique.",
            "La marche forcée immédiate est toujours indiquée au stade aigu.",
            "La surélévation des pieds du lit bloque volontairement le retour veineux.",
            "L’héparine a pour objectif principal de provoquer une thrombose."
          ],
          "type": "qcm",
          "explanation": "Le tableau clinique peut être incomplet ou silencieux.",
          "source": "Cours de cardiologie L3, Chapitre 2  Phlébite, PDF pages 7 à 10.",
          "answers": [
            "Une TVP peut être asymptomatique."
          ],
          "correct": [
            "Une TVP peut être asymptomatique."
          ]
        },
        {
          "text": "Concernant repos, quelle proposition est correcte ?",
          "options": [
            "Au stade aigu, le repos strict au lit peut être prescrit pour limiter la migration du thrombus.",
            "La surélévation des pieds du lit bloque volontairement le retour veineux.",
            "L’héparine a pour objectif principal de provoquer une thrombose.",
            "La recherche de saignements est inutile sous héparine."
          ],
          "type": "qcm",
          "explanation": "La mobilisation dépend de la prescription et du risque embolique.",
          "source": "Cours de cardiologie L3, Chapitre 2  Phlébite, PDF pages 7 à 10.",
          "answers": [
            "Au stade aigu, le repos strict au lit peut être prescrit pour limiter la migration du thrombus."
          ],
          "correct": [
            "Au stade aigu, le repos strict au lit peut être prescrit pour limiter la migration du thrombus."
          ]
        },
        {
          "text": "Concernant surélévation, quelle proposition est correcte ?",
          "options": [
            "La surélévation des pieds du lit favorise le retour veineux.",
            "L’héparine a pour objectif principal de provoquer une thrombose.",
            "La recherche de saignements est inutile sous héparine.",
            "Sous AVK, les injections intramusculaires sont recommandées sans précaution."
          ],
          "type": "qcm",
          "explanation": "Elle aide à réduire la stase et l’œdème.",
          "source": "Cours de cardiologie L3, Chapitre 2  Phlébite, PDF pages 7 à 10.",
          "answers": [
            "La surélévation des pieds du lit favorise le retour veineux."
          ],
          "correct": [
            "La surélévation des pieds du lit favorise le retour veineux."
          ]
        },
        {
          "text": "Concernant héparine, quelle proposition est correcte ?",
          "options": [
            "Le traitement héparinique vise à limiter l’extension et la migration du thrombus.",
            "La recherche de saignements est inutile sous héparine.",
            "Sous AVK, les injections intramusculaires sont recommandées sans précaution.",
            "La TVP est une infection exclusive des artères coronaires."
          ],
          "type": "qcm",
          "explanation": "L’anticoagulation prévient l’extension et l’embolie.",
          "source": "Cours de cardiologie L3, Chapitre 2  Phlébite, PDF pages 7 à 10.",
          "answers": [
            "Le traitement héparinique vise à limiter l’extension et la migration du thrombus."
          ],
          "correct": [
            "Le traitement héparinique vise à limiter l’extension et la migration du thrombus."
          ]
        },
        {
          "text": "Concernant surveillance, quelle proposition est correcte ?",
          "options": [
            "Sous héparine, la surveillance recherche notamment hématomes, épistaxis, gingivorragies, méléna et hématurie.",
            "Sous AVK, les injections intramusculaires sont recommandées sans précaution.",
            "La TVP est une infection exclusive des artères coronaires.",
            "La TVP ne peut jamais entraîner d’embolie pulmonaire."
          ],
          "type": "qcm",
          "explanation": "Le risque principal du traitement anticoagulant est hémorragique.",
          "source": "Cours de cardiologie L3, Chapitre 2  Phlébite, PDF pages 7 à 10.",
          "answers": [
            "Sous héparine, la surveillance recherche notamment hématomes, épistaxis, gingivorragies, méléna et hématurie."
          ],
          "correct": [
            "Sous héparine, la surveillance recherche notamment hématomes, épistaxis, gingivorragies, méléna et hématurie."
          ]
        },
        {
          "text": "Concernant éducation AVK, quelle proposition est correcte ?",
          "options": [
            "Sous AVK, le patient doit éviter l’automédication et signaler son traitement avant tout soin.",
            "La TVP est une infection exclusive des artères coronaires.",
            "La TVP ne peut jamais entraîner d’embolie pulmonaire.",
            "La maladie post-phlébitique n’entraîne aucun trouble trophique."
          ],
          "type": "qcm",
          "explanation": "Les interactions et gestes invasifs augmentent le risque hémorragique.",
          "source": "Cours de cardiologie L3, Chapitre 2  Phlébite, PDF pages 7 à 10.",
          "answers": [
            "Sous AVK, le patient doit éviter l’automédication et signaler son traitement avant tout soin."
          ],
          "correct": [
            "Sous AVK, le patient doit éviter l’automédication et signaler son traitement avant tout soin."
          ]
        },
        {
          "text": "À propos de définition, choisissez les deux propositions exactes.",
          "options": [
            "La thrombose veineuse profonde est l’obstruction partielle ou totale d’une veine par un thrombus.",
            "La complication vitale majeure d’une TVP est l’embolie pulmonaire.",
            "La maladie post-phlébitique n’entraîne aucun trouble trophique.",
            "Le thrombus veineux se forme toujours dans une alvéole pulmonaire."
          ],
          "type": "qcm",
          "explanation": "La TVP concerne une veine, le plus souvent profonde, obstruée par un caillot. Un fragment du thrombus peut migrer vers l’artère pulmonaire.",
          "source": "Cours de cardiologie L3, Chapitre 2  Phlébite, PDF pages 7 à 10.",
          "answers": [
            "La thrombose veineuse profonde est l’obstruction partielle ou totale d’une veine par un thrombus.",
            "La complication vitale majeure d’une TVP est l’embolie pulmonaire."
          ],
          "correct": [
            "La thrombose veineuse profonde est l’obstruction partielle ou totale d’une veine par un thrombus.",
            "La complication vitale majeure d’une TVP est l’embolie pulmonaire."
          ]
        },
        {
          "text": "À propos de gravité, choisissez les deux propositions exactes.",
          "options": [
            "La complication vitale majeure d’une TVP est l’embolie pulmonaire.",
            "La maladie post-phlébitique peut entraîner douleurs, varices, œdème et troubles trophiques.",
            "Le thrombus veineux se forme toujours dans une alvéole pulmonaire.",
            "L’immobilisation prolongée protège contre la TVP."
          ],
          "type": "qcm",
          "explanation": "Un fragment du thrombus peut migrer vers l’artère pulmonaire. L’obstruction veineuse persistante altère durablement le retour veineux.",
          "source": "Cours de cardiologie L3, Chapitre 2  Phlébite, PDF pages 7 à 10.",
          "answers": [
            "La complication vitale majeure d’une TVP est l’embolie pulmonaire.",
            "La maladie post-phlébitique peut entraîner douleurs, varices, œdème et troubles trophiques."
          ],
          "correct": [
            "La complication vitale majeure d’une TVP est l’embolie pulmonaire.",
            "La maladie post-phlébitique peut entraîner douleurs, varices, œdème et troubles trophiques."
          ]
        },
        {
          "text": "À propos de séquelles, choisissez les deux propositions exactes.",
          "options": [
            "La maladie post-phlébitique peut entraîner douleurs, varices, œdème et troubles trophiques.",
            "Le thrombus se forme souvent au niveau d’une valve veineuse.",
            "L’immobilisation prolongée protège contre la TVP.",
            "L’insuffisance cardiaque droite exclut tout risque de stase veineuse."
          ],
          "type": "qcm",
          "explanation": "L’obstruction veineuse persistante altère durablement le retour veineux. La stase autour des valves favorise la thrombose.",
          "source": "Cours de cardiologie L3, Chapitre 2  Phlébite, PDF pages 7 à 10.",
          "answers": [
            "La maladie post-phlébitique peut entraîner douleurs, varices, œdème et troubles trophiques.",
            "Le thrombus se forme souvent au niveau d’une valve veineuse."
          ],
          "correct": [
            "La maladie post-phlébitique peut entraîner douleurs, varices, œdème et troubles trophiques.",
            "Le thrombus se forme souvent au niveau d’une valve veineuse."
          ]
        },
        {
          "text": "À propos de mécanisme, choisissez les deux propositions exactes.",
          "options": [
            "Le thrombus se forme souvent au niveau d’une valve veineuse.",
            "L’immobilisation prolongée favorise la stase veineuse et la TVP.",
            "L’insuffisance cardiaque droite exclut tout risque de stase veineuse.",
            "Un long voyage avec immobilité ne constitue jamais un facteur de risque."
          ],
          "type": "qcm",
          "explanation": "La stase autour des valves favorise la thrombose. La diminution de la pompe musculaire ralentit le retour veineux.",
          "source": "Cours de cardiologie L3, Chapitre 2  Phlébite, PDF pages 7 à 10.",
          "answers": [
            "Le thrombus se forme souvent au niveau d’une valve veineuse.",
            "L’immobilisation prolongée favorise la stase veineuse et la TVP."
          ],
          "correct": [
            "Le thrombus se forme souvent au niveau d’une valve veineuse.",
            "L’immobilisation prolongée favorise la stase veineuse et la TVP."
          ]
        },
        {
          "text": "À propos de stase, choisissez les deux propositions exactes.",
          "options": [
            "L’immobilisation prolongée favorise la stase veineuse et la TVP.",
            "L’insuffisance cardiaque droite peut favoriser une TVP par stase veineuse.",
            "Un long voyage avec immobilité ne constitue jamais un facteur de risque.",
            "Le post-partum supprime le risque thrombotique."
          ],
          "type": "qcm",
          "explanation": "La diminution de la pompe musculaire ralentit le retour veineux. La congestion veineuse favorise la thrombose.",
          "source": "Cours de cardiologie L3, Chapitre 2  Phlébite, PDF pages 7 à 10.",
          "answers": [
            "L’immobilisation prolongée favorise la stase veineuse et la TVP.",
            "L’insuffisance cardiaque droite peut favoriser une TVP par stase veineuse."
          ],
          "correct": [
            "L’immobilisation prolongée favorise la stase veineuse et la TVP.",
            "L’insuffisance cardiaque droite peut favoriser une TVP par stase veineuse."
          ]
        },
        {
          "text": "À propos de facteur cardiaque, choisissez les deux propositions exactes.",
          "options": [
            "L’insuffisance cardiaque droite peut favoriser une TVP par stase veineuse.",
            "Une compression veineuse, un cancer ou un long voyage peuvent favoriser la TVP.",
            "Le post-partum supprime le risque thrombotique.",
            "Une TVP provoque obligatoirement un œdème parfaitement symétrique des deux jambes."
          ],
          "type": "qcm",
          "explanation": "La congestion veineuse favorise la thrombose. Ces situations ralentissent le flux veineux.",
          "source": "Cours de cardiologie L3, Chapitre 2  Phlébite, PDF pages 7 à 10.",
          "answers": [
            "L’insuffisance cardiaque droite peut favoriser une TVP par stase veineuse.",
            "Une compression veineuse, un cancer ou un long voyage peuvent favoriser la TVP."
          ],
          "correct": [
            "L’insuffisance cardiaque droite peut favoriser une TVP par stase veineuse.",
            "Une compression veineuse, un cancer ou un long voyage peuvent favoriser la TVP."
          ]
        },
        {
          "text": "À propos de compression, choisissez les deux propositions exactes.",
          "options": [
            "Une compression veineuse, un cancer ou un long voyage peuvent favoriser la TVP.",
            "La grossesse, le post-partum et certains cancers peuvent augmenter le risque thrombotique.",
            "Une TVP provoque obligatoirement un œdème parfaitement symétrique des deux jambes.",
            "L’absence de douleur élimine formellement une TVP."
          ],
          "type": "qcm",
          "explanation": "Ces situations ralentissent le flux veineux. Ces états peuvent favoriser l’hypercoagulabilité.",
          "source": "Cours de cardiologie L3, Chapitre 2  Phlébite, PDF pages 7 à 10.",
          "answers": [
            "Une compression veineuse, un cancer ou un long voyage peuvent favoriser la TVP.",
            "La grossesse, le post-partum et certains cancers peuvent augmenter le risque thrombotique."
          ],
          "correct": [
            "Une compression veineuse, un cancer ou un long voyage peuvent favoriser la TVP.",
            "La grossesse, le post-partum et certains cancers peuvent augmenter le risque thrombotique."
          ]
        },
        {
          "text": "À propos de hypercoagulabilité, choisissez les deux propositions exactes.",
          "options": [
            "La grossesse, le post-partum et certains cancers peuvent augmenter le risque thrombotique.",
            "Une TVP du membre inférieur peut se manifester par douleur et œdème unilatéral.",
            "L’absence de douleur élimine formellement une TVP.",
            "La marche forcée immédiate est toujours indiquée au stade aigu."
          ],
          "type": "qcm",
          "explanation": "Ces états peuvent favoriser l’hypercoagulabilité. L’atteinte est fréquemment unilatérale.",
          "source": "Cours de cardiologie L3, Chapitre 2  Phlébite, PDF pages 7 à 10.",
          "answers": [
            "La grossesse, le post-partum et certains cancers peuvent augmenter le risque thrombotique.",
            "Une TVP du membre inférieur peut se manifester par douleur et œdème unilatéral."
          ],
          "correct": [
            "La grossesse, le post-partum et certains cancers peuvent augmenter le risque thrombotique.",
            "Une TVP du membre inférieur peut se manifester par douleur et œdème unilatéral."
          ]
        },
        {
          "text": "À propos de signes, choisissez les deux propositions exactes.",
          "options": [
            "Une TVP du membre inférieur peut se manifester par douleur et œdème unilatéral.",
            "Une TVP peut être asymptomatique.",
            "La marche forcée immédiate est toujours indiquée au stade aigu.",
            "La surélévation des pieds du lit bloque volontairement le retour veineux."
          ],
          "type": "qcm",
          "explanation": "L’atteinte est fréquemment unilatérale. Le tableau clinique peut être incomplet ou silencieux.",
          "source": "Cours de cardiologie L3, Chapitre 2  Phlébite, PDF pages 7 à 10.",
          "answers": [
            "Une TVP du membre inférieur peut se manifester par douleur et œdème unilatéral.",
            "Une TVP peut être asymptomatique."
          ],
          "correct": [
            "Une TVP du membre inférieur peut se manifester par douleur et œdème unilatéral.",
            "Une TVP peut être asymptomatique."
          ]
        },
        {
          "text": "À propos de asymptomatique, choisissez les deux propositions exactes.",
          "options": [
            "Une TVP peut être asymptomatique.",
            "Au stade aigu, le repos strict au lit peut être prescrit pour limiter la migration du thrombus.",
            "La surélévation des pieds du lit bloque volontairement le retour veineux.",
            "L’héparine a pour objectif principal de provoquer une thrombose."
          ],
          "type": "qcm",
          "explanation": "Le tableau clinique peut être incomplet ou silencieux. La mobilisation dépend de la prescription et du risque embolique.",
          "source": "Cours de cardiologie L3, Chapitre 2  Phlébite, PDF pages 7 à 10.",
          "answers": [
            "Une TVP peut être asymptomatique.",
            "Au stade aigu, le repos strict au lit peut être prescrit pour limiter la migration du thrombus."
          ],
          "correct": [
            "Une TVP peut être asymptomatique.",
            "Au stade aigu, le repos strict au lit peut être prescrit pour limiter la migration du thrombus."
          ]
        },
        {
          "text": "À propos de repos, choisissez les deux propositions exactes.",
          "options": [
            "Au stade aigu, le repos strict au lit peut être prescrit pour limiter la migration du thrombus.",
            "La surélévation des pieds du lit favorise le retour veineux.",
            "L’héparine a pour objectif principal de provoquer une thrombose.",
            "La recherche de saignements est inutile sous héparine."
          ],
          "type": "qcm",
          "explanation": "La mobilisation dépend de la prescription et du risque embolique. Elle aide à réduire la stase et l’œdème.",
          "source": "Cours de cardiologie L3, Chapitre 2  Phlébite, PDF pages 7 à 10.",
          "answers": [
            "Au stade aigu, le repos strict au lit peut être prescrit pour limiter la migration du thrombus.",
            "La surélévation des pieds du lit favorise le retour veineux."
          ],
          "correct": [
            "Au stade aigu, le repos strict au lit peut être prescrit pour limiter la migration du thrombus.",
            "La surélévation des pieds du lit favorise le retour veineux."
          ]
        },
        {
          "text": "À propos de surélévation, choisissez les deux propositions exactes.",
          "options": [
            "La surélévation des pieds du lit favorise le retour veineux.",
            "Le traitement héparinique vise à limiter l’extension et la migration du thrombus.",
            "La recherche de saignements est inutile sous héparine.",
            "Sous AVK, les injections intramusculaires sont recommandées sans précaution."
          ],
          "type": "qcm",
          "explanation": "Elle aide à réduire la stase et l’œdème. L’anticoagulation prévient l’extension et l’embolie.",
          "source": "Cours de cardiologie L3, Chapitre 2  Phlébite, PDF pages 7 à 10.",
          "answers": [
            "La surélévation des pieds du lit favorise le retour veineux.",
            "Le traitement héparinique vise à limiter l’extension et la migration du thrombus."
          ],
          "correct": [
            "La surélévation des pieds du lit favorise le retour veineux.",
            "Le traitement héparinique vise à limiter l’extension et la migration du thrombus."
          ]
        },
        {
          "text": "À propos de héparine, choisissez les deux propositions exactes.",
          "options": [
            "Le traitement héparinique vise à limiter l’extension et la migration du thrombus.",
            "Sous héparine, la surveillance recherche notamment hématomes, épistaxis, gingivorragies, méléna et hématurie.",
            "Sous AVK, les injections intramusculaires sont recommandées sans précaution.",
            "La TVP est une infection exclusive des artères coronaires."
          ],
          "type": "qcm",
          "explanation": "L’anticoagulation prévient l’extension et l’embolie. Le risque principal du traitement anticoagulant est hémorragique.",
          "source": "Cours de cardiologie L3, Chapitre 2  Phlébite, PDF pages 7 à 10.",
          "answers": [
            "Le traitement héparinique vise à limiter l’extension et la migration du thrombus.",
            "Sous héparine, la surveillance recherche notamment hématomes, épistaxis, gingivorragies, méléna et hématurie."
          ],
          "correct": [
            "Le traitement héparinique vise à limiter l’extension et la migration du thrombus.",
            "Sous héparine, la surveillance recherche notamment hématomes, épistaxis, gingivorragies, méléna et hématurie."
          ]
        },
        {
          "text": "À propos de surveillance, choisissez les deux propositions exactes.",
          "options": [
            "Sous héparine, la surveillance recherche notamment hématomes, épistaxis, gingivorragies, méléna et hématurie.",
            "Sous AVK, le patient doit éviter l’automédication et signaler son traitement avant tout soin.",
            "La TVP est une infection exclusive des artères coronaires.",
            "La TVP ne peut jamais entraîner d’embolie pulmonaire."
          ],
          "type": "qcm",
          "explanation": "Le risque principal du traitement anticoagulant est hémorragique. Les interactions et gestes invasifs augmentent le risque hémorragique.",
          "source": "Cours de cardiologie L3, Chapitre 2  Phlébite, PDF pages 7 à 10.",
          "answers": [
            "Sous héparine, la surveillance recherche notamment hématomes, épistaxis, gingivorragies, méléna et hématurie.",
            "Sous AVK, le patient doit éviter l’automédication et signaler son traitement avant tout soin."
          ],
          "correct": [
            "Sous héparine, la surveillance recherche notamment hématomes, épistaxis, gingivorragies, méléna et hématurie.",
            "Sous AVK, le patient doit éviter l’automédication et signaler son traitement avant tout soin."
          ]
        },
        {
          "text": "À propos de éducation AVK, choisissez les deux propositions exactes.",
          "options": [
            "Sous AVK, le patient doit éviter l’automédication et signaler son traitement avant tout soin.",
            "La thrombose veineuse profonde est l’obstruction partielle ou totale d’une veine par un thrombus.",
            "La TVP ne peut jamais entraîner d’embolie pulmonaire.",
            "La maladie post-phlébitique n’entraîne aucun trouble trophique."
          ],
          "type": "qcm",
          "explanation": "Les interactions et gestes invasifs augmentent le risque hémorragique. La TVP concerne une veine, le plus souvent profonde, obstruée par un caillot.",
          "source": "Cours de cardiologie L3, Chapitre 2  Phlébite, PDF pages 7 à 10.",
          "answers": [
            "Sous AVK, le patient doit éviter l’automédication et signaler son traitement avant tout soin.",
            "La thrombose veineuse profonde est l’obstruction partielle ou totale d’une veine par un thrombus."
          ],
          "correct": [
            "Sous AVK, le patient doit éviter l’automédication et signaler son traitement avant tout soin.",
            "La thrombose veineuse profonde est l’obstruction partielle ou totale d’une veine par un thrombus."
          ]
        }
      ]
    },
    {
      "id": "ide-3",
      "title": "Cardiologie L3 — Embolie pulmonaire",
      "matter": "Cardiologie L3",
      "filiere": "IDE",
      "description": "Sujet 3 — 60 questions corrigées",
      "instructions": "QCD : Vrai ou Faux. QCM : sélectionner la ou les bonnes réponses.",
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
          "text": "L’embolie pulmonaire est l’obstruction brutale d’une branche de l’artère pulmonaire par un ou plusieurs emboles.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "L’embole atteint la circulation pulmonaire après migration.",
          "source": "Cours de cardiologie L3, Chapitre 3  Embolie pulmonaire, PDF pages 11 et 12.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "L’embolie pulmonaire est une obstruction chronique exclusive de l’aorte.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "L’embole atteint la circulation pulmonaire après migration.",
          "source": "Cours de cardiologie L3, Chapitre 3  Embolie pulmonaire, PDF pages 11 et 12.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Dans la majorité des cas, l’embolie pulmonaire provient d’une thrombose veineuse profonde.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le thrombus veineux migre vers le cœur droit puis l’artère pulmonaire.",
          "source": "Cours de cardiologie L3, Chapitre 3  Embolie pulmonaire, PDF pages 11 et 12.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "L’embolie pulmonaire ne peut jamais provenir d’une TVP.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le thrombus veineux migre vers le cœur droit puis l’artère pulmonaire.",
          "source": "Cours de cardiologie L3, Chapitre 3  Embolie pulmonaire, PDF pages 11 et 12.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "L’embole se bloque lorsque le calibre artériel devient inférieur à celui du caillot.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "L’obstruction réduit ou abolit la perfusion du territoire concerné.",
          "source": "Cours de cardiologie L3, Chapitre 3  Embolie pulmonaire, PDF pages 11 et 12.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "Un embole ne modifie jamais le débit sanguin pulmonaire.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "L’obstruction réduit ou abolit la perfusion du territoire concerné.",
          "source": "Cours de cardiologie L3, Chapitre 3  Embolie pulmonaire, PDF pages 11 et 12.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "La douleur thoracique de l’EP peut être brutale et unilatérale, à type de coup de poignard.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "La douleur pleurale brutale est un signe évocateur.",
          "source": "Cours de cardiologie L3, Chapitre 3  Embolie pulmonaire, PDF pages 11 et 12.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "La douleur d’EP est toujours ancienne, progressive et uniquement abdominale.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "La douleur pleurale brutale est un signe évocateur.",
          "source": "Cours de cardiologie L3, Chapitre 3  Embolie pulmonaire, PDF pages 11 et 12.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Une dyspnée brutale peut révéler une embolie pulmonaire.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "L’altération de la perfusion pulmonaire provoque une gêne respiratoire.",
          "source": "Cours de cardiologie L3, Chapitre 3  Embolie pulmonaire, PDF pages 11 et 12.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "Une embolie pulmonaire n’entraîne jamais de dyspnée.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "L’altération de la perfusion pulmonaire provoque une gêne respiratoire.",
          "source": "Cours de cardiologie L3, Chapitre 3  Embolie pulmonaire, PDF pages 11 et 12.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "L’hémoptysie correspond à un crachat de sang rouge lors d’un effort de toux.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Ce signe respiratoire peut accompagner l’EP.",
          "source": "Cours de cardiologie L3, Chapitre 3  Embolie pulmonaire, PDF pages 11 et 12.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "L’hémoptysie désigne uniquement un saignement urinaire.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Ce signe respiratoire peut accompagner l’EP.",
          "source": "Cours de cardiologie L3, Chapitre 3  Embolie pulmonaire, PDF pages 11 et 12.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Des râles crépitants localisés peuvent être retrouvés à l’auscultation.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Des anomalies focales peuvent exister.",
          "source": "Cours de cardiologie L3, Chapitre 3  Embolie pulmonaire, PDF pages 11 et 12.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "L’auscultation pulmonaire est toujours normale dans toute EP.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Des anomalies focales peuvent exister.",
          "source": "Cours de cardiologie L3, Chapitre 3  Embolie pulmonaire, PDF pages 11 et 12.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Une EP grave peut provoquer hypotension et tachycardie.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "La baisse du retour veineux et du débit cardiaque explique l’hypotension.",
          "source": "Cours de cardiologie L3, Chapitre 3  Embolie pulmonaire, PDF pages 11 et 12.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "Une EP grave provoque obligatoirement hypertension et bradycardie.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "La baisse du retour veineux et du débit cardiaque explique l’hypotension.",
          "source": "Cours de cardiologie L3, Chapitre 3  Embolie pulmonaire, PDF pages 11 et 12.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Une angoisse intense avec impression de mort imminente peut accompagner l’EP.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "La détresse respiratoire aiguë peut provoquer une angoisse majeure.",
          "source": "Cours de cardiologie L3, Chapitre 3  Embolie pulmonaire, PDF pages 11 et 12.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "L’EP exclut toute manifestation anxieuse.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "La détresse respiratoire aiguë peut provoquer une angoisse majeure.",
          "source": "Cours de cardiologie L3, Chapitre 3  Embolie pulmonaire, PDF pages 11 et 12.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "La gazométrie peut montrer une hypoxémie et une hypocapnie.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "La zone ventilée mais non perfusée altère les échanges gazeux.",
          "source": "Cours de cardiologie L3, Chapitre 3  Embolie pulmonaire, PDF pages 11 et 12.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "La gazométrie montre obligatoirement une hyperoxémie.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "La zone ventilée mais non perfusée altère les échanges gazeux.",
          "source": "Cours de cardiologie L3, Chapitre 3  Embolie pulmonaire, PDF pages 11 et 12.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Une gazométrie normale n’exclut pas toujours une embolie pulmonaire.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le cours indique qu’elle peut être normale chez certains patients.",
          "source": "Cours de cardiologie L3, Chapitre 3  Embolie pulmonaire, PDF pages 11 et 12.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "Une gazométrie normale élimine formellement toute EP.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le cours indique qu’elle peut être normale chez certains patients.",
          "source": "Cours de cardiologie L3, Chapitre 3  Embolie pulmonaire, PDF pages 11 et 12.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Un ECG est systématique devant une douleur thoracique et évalue notamment le retentissement droit.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Il contribue au diagnostic différentiel et à l’évaluation cardiaque.",
          "source": "Cours de cardiologie L3, Chapitre 3  Embolie pulmonaire, PDF pages 11 et 12.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "L’ECG est interdit devant une douleur thoracique.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Il contribue au diagnostic différentiel et à l’évaluation cardiaque.",
          "source": "Cours de cardiologie L3, Chapitre 3  Embolie pulmonaire, PDF pages 11 et 12.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Une radiographie thoracique normale n’exclut pas le diagnostic d’EP.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "La radiographie peut être normale malgré une embolie.",
          "source": "Cours de cardiologie L3, Chapitre 3  Embolie pulmonaire, PDF pages 11 et 12.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "Une radiographie normale élimine toujours l’EP.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "La radiographie peut être normale malgré une embolie.",
          "source": "Cours de cardiologie L3, Chapitre 3  Embolie pulmonaire, PDF pages 11 et 12.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "L’échodoppler des membres inférieurs recherche une thrombose veineuse profonde.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Il recherche la source veineuse de l’embolie.",
          "source": "Cours de cardiologie L3, Chapitre 3  Embolie pulmonaire, PDF pages 11 et 12.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "L’échodoppler des membres inférieurs mesure uniquement la glycémie.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Il recherche la source veineuse de l’embolie.",
          "source": "Cours de cardiologie L3, Chapitre 3  Embolie pulmonaire, PDF pages 11 et 12.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "L’angioscanner spiralé avec injection iodée peut visualiser l’embolie pulmonaire.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "C’est un examen majeur de confirmation diagnostique.",
          "source": "Cours de cardiologie L3, Chapitre 3  Embolie pulmonaire, PDF pages 11 et 12.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "L’angioscanner ne peut jamais visualiser les artères pulmonaires.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "C’est un examen majeur de confirmation diagnostique.",
          "source": "Cours de cardiologie L3, Chapitre 3  Embolie pulmonaire, PDF pages 11 et 12.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Concernant définition, quelle proposition est correcte ?",
          "options": [
            "L’embolie pulmonaire est l’obstruction brutale d’une branche de l’artère pulmonaire par un ou plusieurs emboles.",
            "L’embolie pulmonaire ne peut jamais provenir d’une TVP.",
            "Un embole ne modifie jamais le débit sanguin pulmonaire.",
            "La douleur d’EP est toujours ancienne, progressive et uniquement abdominale."
          ],
          "type": "qcm",
          "explanation": "L’embole atteint la circulation pulmonaire après migration.",
          "source": "Cours de cardiologie L3, Chapitre 3  Embolie pulmonaire, PDF pages 11 et 12.",
          "answers": [
            "L’embolie pulmonaire est l’obstruction brutale d’une branche de l’artère pulmonaire par un ou plusieurs emboles."
          ],
          "correct": [
            "L’embolie pulmonaire est l’obstruction brutale d’une branche de l’artère pulmonaire par un ou plusieurs emboles."
          ]
        },
        {
          "text": "Concernant origine, quelle proposition est correcte ?",
          "options": [
            "Dans la majorité des cas, l’embolie pulmonaire provient d’une thrombose veineuse profonde.",
            "Un embole ne modifie jamais le débit sanguin pulmonaire.",
            "La douleur d’EP est toujours ancienne, progressive et uniquement abdominale.",
            "Une embolie pulmonaire n’entraîne jamais de dyspnée."
          ],
          "type": "qcm",
          "explanation": "Le thrombus veineux migre vers le cœur droit puis l’artère pulmonaire.",
          "source": "Cours de cardiologie L3, Chapitre 3  Embolie pulmonaire, PDF pages 11 et 12.",
          "answers": [
            "Dans la majorité des cas, l’embolie pulmonaire provient d’une thrombose veineuse profonde."
          ],
          "correct": [
            "Dans la majorité des cas, l’embolie pulmonaire provient d’une thrombose veineuse profonde."
          ]
        },
        {
          "text": "Concernant mécanique, quelle proposition est correcte ?",
          "options": [
            "L’embole se bloque lorsque le calibre artériel devient inférieur à celui du caillot.",
            "La douleur d’EP est toujours ancienne, progressive et uniquement abdominale.",
            "Une embolie pulmonaire n’entraîne jamais de dyspnée.",
            "L’hémoptysie désigne uniquement un saignement urinaire."
          ],
          "type": "qcm",
          "explanation": "L’obstruction réduit ou abolit la perfusion du territoire concerné.",
          "source": "Cours de cardiologie L3, Chapitre 3  Embolie pulmonaire, PDF pages 11 et 12.",
          "answers": [
            "L’embole se bloque lorsque le calibre artériel devient inférieur à celui du caillot."
          ],
          "correct": [
            "L’embole se bloque lorsque le calibre artériel devient inférieur à celui du caillot."
          ]
        },
        {
          "text": "Concernant douleur, quelle proposition est correcte ?",
          "options": [
            "La douleur thoracique de l’EP peut être brutale et unilatérale, à type de coup de poignard.",
            "Une embolie pulmonaire n’entraîne jamais de dyspnée.",
            "L’hémoptysie désigne uniquement un saignement urinaire.",
            "L’auscultation pulmonaire est toujours normale dans toute EP."
          ],
          "type": "qcm",
          "explanation": "La douleur pleurale brutale est un signe évocateur.",
          "source": "Cours de cardiologie L3, Chapitre 3  Embolie pulmonaire, PDF pages 11 et 12.",
          "answers": [
            "La douleur thoracique de l’EP peut être brutale et unilatérale, à type de coup de poignard."
          ],
          "correct": [
            "La douleur thoracique de l’EP peut être brutale et unilatérale, à type de coup de poignard."
          ]
        },
        {
          "text": "Concernant dyspnée, quelle proposition est correcte ?",
          "options": [
            "Une dyspnée brutale peut révéler une embolie pulmonaire.",
            "L’hémoptysie désigne uniquement un saignement urinaire.",
            "L’auscultation pulmonaire est toujours normale dans toute EP.",
            "Une EP grave provoque obligatoirement hypertension et bradycardie."
          ],
          "type": "qcm",
          "explanation": "L’altération de la perfusion pulmonaire provoque une gêne respiratoire.",
          "source": "Cours de cardiologie L3, Chapitre 3  Embolie pulmonaire, PDF pages 11 et 12.",
          "answers": [
            "Une dyspnée brutale peut révéler une embolie pulmonaire."
          ],
          "correct": [
            "Une dyspnée brutale peut révéler une embolie pulmonaire."
          ]
        },
        {
          "text": "Concernant hémoptysie, quelle proposition est correcte ?",
          "options": [
            "L’hémoptysie correspond à un crachat de sang rouge lors d’un effort de toux.",
            "L’auscultation pulmonaire est toujours normale dans toute EP.",
            "Une EP grave provoque obligatoirement hypertension et bradycardie.",
            "L’EP exclut toute manifestation anxieuse."
          ],
          "type": "qcm",
          "explanation": "Ce signe respiratoire peut accompagner l’EP.",
          "source": "Cours de cardiologie L3, Chapitre 3  Embolie pulmonaire, PDF pages 11 et 12.",
          "answers": [
            "L’hémoptysie correspond à un crachat de sang rouge lors d’un effort de toux."
          ],
          "correct": [
            "L’hémoptysie correspond à un crachat de sang rouge lors d’un effort de toux."
          ]
        },
        {
          "text": "Concernant auscultation, quelle proposition est correcte ?",
          "options": [
            "Des râles crépitants localisés peuvent être retrouvés à l’auscultation.",
            "Une EP grave provoque obligatoirement hypertension et bradycardie.",
            "L’EP exclut toute manifestation anxieuse.",
            "La gazométrie montre obligatoirement une hyperoxémie."
          ],
          "type": "qcm",
          "explanation": "Des anomalies focales peuvent exister.",
          "source": "Cours de cardiologie L3, Chapitre 3  Embolie pulmonaire, PDF pages 11 et 12.",
          "answers": [
            "Des râles crépitants localisés peuvent être retrouvés à l’auscultation."
          ],
          "correct": [
            "Des râles crépitants localisés peuvent être retrouvés à l’auscultation."
          ]
        },
        {
          "text": "Concernant circulation, quelle proposition est correcte ?",
          "options": [
            "Une EP grave peut provoquer hypotension et tachycardie.",
            "L’EP exclut toute manifestation anxieuse.",
            "La gazométrie montre obligatoirement une hyperoxémie.",
            "Une gazométrie normale élimine formellement toute EP."
          ],
          "type": "qcm",
          "explanation": "La baisse du retour veineux et du débit cardiaque explique l’hypotension.",
          "source": "Cours de cardiologie L3, Chapitre 3  Embolie pulmonaire, PDF pages 11 et 12.",
          "answers": [
            "Une EP grave peut provoquer hypotension et tachycardie."
          ],
          "correct": [
            "Une EP grave peut provoquer hypotension et tachycardie."
          ]
        },
        {
          "text": "Concernant angoisse, quelle proposition est correcte ?",
          "options": [
            "Une angoisse intense avec impression de mort imminente peut accompagner l’EP.",
            "La gazométrie montre obligatoirement une hyperoxémie.",
            "Une gazométrie normale élimine formellement toute EP.",
            "L’ECG est interdit devant une douleur thoracique."
          ],
          "type": "qcm",
          "explanation": "La détresse respiratoire aiguë peut provoquer une angoisse majeure.",
          "source": "Cours de cardiologie L3, Chapitre 3  Embolie pulmonaire, PDF pages 11 et 12.",
          "answers": [
            "Une angoisse intense avec impression de mort imminente peut accompagner l’EP."
          ],
          "correct": [
            "Une angoisse intense avec impression de mort imminente peut accompagner l’EP."
          ]
        },
        {
          "text": "Concernant gazométrie, quelle proposition est correcte ?",
          "options": [
            "La gazométrie peut montrer une hypoxémie et une hypocapnie.",
            "Une gazométrie normale élimine formellement toute EP.",
            "L’ECG est interdit devant une douleur thoracique.",
            "Une radiographie normale élimine toujours l’EP."
          ],
          "type": "qcm",
          "explanation": "La zone ventilée mais non perfusée altère les échanges gazeux.",
          "source": "Cours de cardiologie L3, Chapitre 3  Embolie pulmonaire, PDF pages 11 et 12.",
          "answers": [
            "La gazométrie peut montrer une hypoxémie et une hypocapnie."
          ],
          "correct": [
            "La gazométrie peut montrer une hypoxémie et une hypocapnie."
          ]
        },
        {
          "text": "Concernant gazométrie normale, quelle proposition est correcte ?",
          "options": [
            "Une gazométrie normale n’exclut pas toujours une embolie pulmonaire.",
            "L’ECG est interdit devant une douleur thoracique.",
            "Une radiographie normale élimine toujours l’EP.",
            "L’échodoppler des membres inférieurs mesure uniquement la glycémie."
          ],
          "type": "qcm",
          "explanation": "Le cours indique qu’elle peut être normale chez certains patients.",
          "source": "Cours de cardiologie L3, Chapitre 3  Embolie pulmonaire, PDF pages 11 et 12.",
          "answers": [
            "Une gazométrie normale n’exclut pas toujours une embolie pulmonaire."
          ],
          "correct": [
            "Une gazométrie normale n’exclut pas toujours une embolie pulmonaire."
          ]
        },
        {
          "text": "Concernant ECG, quelle proposition est correcte ?",
          "options": [
            "Un ECG est systématique devant une douleur thoracique et évalue notamment le retentissement droit.",
            "Une radiographie normale élimine toujours l’EP.",
            "L’échodoppler des membres inférieurs mesure uniquement la glycémie.",
            "L’angioscanner ne peut jamais visualiser les artères pulmonaires."
          ],
          "type": "qcm",
          "explanation": "Il contribue au diagnostic différentiel et à l’évaluation cardiaque.",
          "source": "Cours de cardiologie L3, Chapitre 3  Embolie pulmonaire, PDF pages 11 et 12.",
          "answers": [
            "Un ECG est systématique devant une douleur thoracique et évalue notamment le retentissement droit."
          ],
          "correct": [
            "Un ECG est systématique devant une douleur thoracique et évalue notamment le retentissement droit."
          ]
        },
        {
          "text": "Concernant radiographie, quelle proposition est correcte ?",
          "options": [
            "Une radiographie thoracique normale n’exclut pas le diagnostic d’EP.",
            "L’échodoppler des membres inférieurs mesure uniquement la glycémie.",
            "L’angioscanner ne peut jamais visualiser les artères pulmonaires.",
            "L’embolie pulmonaire est une obstruction chronique exclusive de l’aorte."
          ],
          "type": "qcm",
          "explanation": "La radiographie peut être normale malgré une embolie.",
          "source": "Cours de cardiologie L3, Chapitre 3  Embolie pulmonaire, PDF pages 11 et 12.",
          "answers": [
            "Une radiographie thoracique normale n’exclut pas le diagnostic d’EP."
          ],
          "correct": [
            "Une radiographie thoracique normale n’exclut pas le diagnostic d’EP."
          ]
        },
        {
          "text": "Concernant échodoppler, quelle proposition est correcte ?",
          "options": [
            "L’échodoppler des membres inférieurs recherche une thrombose veineuse profonde.",
            "L’angioscanner ne peut jamais visualiser les artères pulmonaires.",
            "L’embolie pulmonaire est une obstruction chronique exclusive de l’aorte.",
            "L’embolie pulmonaire ne peut jamais provenir d’une TVP."
          ],
          "type": "qcm",
          "explanation": "Il recherche la source veineuse de l’embolie.",
          "source": "Cours de cardiologie L3, Chapitre 3  Embolie pulmonaire, PDF pages 11 et 12.",
          "answers": [
            "L’échodoppler des membres inférieurs recherche une thrombose veineuse profonde."
          ],
          "correct": [
            "L’échodoppler des membres inférieurs recherche une thrombose veineuse profonde."
          ]
        },
        {
          "text": "Concernant angioscanner, quelle proposition est correcte ?",
          "options": [
            "L’angioscanner spiralé avec injection iodée peut visualiser l’embolie pulmonaire.",
            "L’embolie pulmonaire est une obstruction chronique exclusive de l’aorte.",
            "L’embolie pulmonaire ne peut jamais provenir d’une TVP.",
            "Un embole ne modifie jamais le débit sanguin pulmonaire."
          ],
          "type": "qcm",
          "explanation": "C’est un examen majeur de confirmation diagnostique.",
          "source": "Cours de cardiologie L3, Chapitre 3  Embolie pulmonaire, PDF pages 11 et 12.",
          "answers": [
            "L’angioscanner spiralé avec injection iodée peut visualiser l’embolie pulmonaire."
          ],
          "correct": [
            "L’angioscanner spiralé avec injection iodée peut visualiser l’embolie pulmonaire."
          ]
        },
        {
          "text": "À propos de définition, choisissez les deux propositions exactes.",
          "options": [
            "L’embolie pulmonaire est l’obstruction brutale d’une branche de l’artère pulmonaire par un ou plusieurs emboles.",
            "Dans la majorité des cas, l’embolie pulmonaire provient d’une thrombose veineuse profonde.",
            "Un embole ne modifie jamais le débit sanguin pulmonaire.",
            "La douleur d’EP est toujours ancienne, progressive et uniquement abdominale."
          ],
          "type": "qcm",
          "explanation": "L’embole atteint la circulation pulmonaire après migration. Le thrombus veineux migre vers le cœur droit puis l’artère pulmonaire.",
          "source": "Cours de cardiologie L3, Chapitre 3  Embolie pulmonaire, PDF pages 11 et 12.",
          "answers": [
            "L’embolie pulmonaire est l’obstruction brutale d’une branche de l’artère pulmonaire par un ou plusieurs emboles.",
            "Dans la majorité des cas, l’embolie pulmonaire provient d’une thrombose veineuse profonde."
          ],
          "correct": [
            "L’embolie pulmonaire est l’obstruction brutale d’une branche de l’artère pulmonaire par un ou plusieurs emboles.",
            "Dans la majorité des cas, l’embolie pulmonaire provient d’une thrombose veineuse profonde."
          ]
        },
        {
          "text": "À propos de origine, choisissez les deux propositions exactes.",
          "options": [
            "Dans la majorité des cas, l’embolie pulmonaire provient d’une thrombose veineuse profonde.",
            "L’embole se bloque lorsque le calibre artériel devient inférieur à celui du caillot.",
            "La douleur d’EP est toujours ancienne, progressive et uniquement abdominale.",
            "Une embolie pulmonaire n’entraîne jamais de dyspnée."
          ],
          "type": "qcm",
          "explanation": "Le thrombus veineux migre vers le cœur droit puis l’artère pulmonaire. L’obstruction réduit ou abolit la perfusion du territoire concerné.",
          "source": "Cours de cardiologie L3, Chapitre 3  Embolie pulmonaire, PDF pages 11 et 12.",
          "answers": [
            "Dans la majorité des cas, l’embolie pulmonaire provient d’une thrombose veineuse profonde.",
            "L’embole se bloque lorsque le calibre artériel devient inférieur à celui du caillot."
          ],
          "correct": [
            "Dans la majorité des cas, l’embolie pulmonaire provient d’une thrombose veineuse profonde.",
            "L’embole se bloque lorsque le calibre artériel devient inférieur à celui du caillot."
          ]
        },
        {
          "text": "À propos de mécanique, choisissez les deux propositions exactes.",
          "options": [
            "L’embole se bloque lorsque le calibre artériel devient inférieur à celui du caillot.",
            "La douleur thoracique de l’EP peut être brutale et unilatérale, à type de coup de poignard.",
            "Une embolie pulmonaire n’entraîne jamais de dyspnée.",
            "L’hémoptysie désigne uniquement un saignement urinaire."
          ],
          "type": "qcm",
          "explanation": "L’obstruction réduit ou abolit la perfusion du territoire concerné. La douleur pleurale brutale est un signe évocateur.",
          "source": "Cours de cardiologie L3, Chapitre 3  Embolie pulmonaire, PDF pages 11 et 12.",
          "answers": [
            "L’embole se bloque lorsque le calibre artériel devient inférieur à celui du caillot.",
            "La douleur thoracique de l’EP peut être brutale et unilatérale, à type de coup de poignard."
          ],
          "correct": [
            "L’embole se bloque lorsque le calibre artériel devient inférieur à celui du caillot.",
            "La douleur thoracique de l’EP peut être brutale et unilatérale, à type de coup de poignard."
          ]
        },
        {
          "text": "À propos de douleur, choisissez les deux propositions exactes.",
          "options": [
            "La douleur thoracique de l’EP peut être brutale et unilatérale, à type de coup de poignard.",
            "Une dyspnée brutale peut révéler une embolie pulmonaire.",
            "L’hémoptysie désigne uniquement un saignement urinaire.",
            "L’auscultation pulmonaire est toujours normale dans toute EP."
          ],
          "type": "qcm",
          "explanation": "La douleur pleurale brutale est un signe évocateur. L’altération de la perfusion pulmonaire provoque une gêne respiratoire.",
          "source": "Cours de cardiologie L3, Chapitre 3  Embolie pulmonaire, PDF pages 11 et 12.",
          "answers": [
            "La douleur thoracique de l’EP peut être brutale et unilatérale, à type de coup de poignard.",
            "Une dyspnée brutale peut révéler une embolie pulmonaire."
          ],
          "correct": [
            "La douleur thoracique de l’EP peut être brutale et unilatérale, à type de coup de poignard.",
            "Une dyspnée brutale peut révéler une embolie pulmonaire."
          ]
        },
        {
          "text": "À propos de dyspnée, choisissez les deux propositions exactes.",
          "options": [
            "Une dyspnée brutale peut révéler une embolie pulmonaire.",
            "L’hémoptysie correspond à un crachat de sang rouge lors d’un effort de toux.",
            "L’auscultation pulmonaire est toujours normale dans toute EP.",
            "Une EP grave provoque obligatoirement hypertension et bradycardie."
          ],
          "type": "qcm",
          "explanation": "L’altération de la perfusion pulmonaire provoque une gêne respiratoire. Ce signe respiratoire peut accompagner l’EP.",
          "source": "Cours de cardiologie L3, Chapitre 3  Embolie pulmonaire, PDF pages 11 et 12.",
          "answers": [
            "Une dyspnée brutale peut révéler une embolie pulmonaire.",
            "L’hémoptysie correspond à un crachat de sang rouge lors d’un effort de toux."
          ],
          "correct": [
            "Une dyspnée brutale peut révéler une embolie pulmonaire.",
            "L’hémoptysie correspond à un crachat de sang rouge lors d’un effort de toux."
          ]
        },
        {
          "text": "À propos de hémoptysie, choisissez les deux propositions exactes.",
          "options": [
            "L’hémoptysie correspond à un crachat de sang rouge lors d’un effort de toux.",
            "Des râles crépitants localisés peuvent être retrouvés à l’auscultation.",
            "Une EP grave provoque obligatoirement hypertension et bradycardie.",
            "L’EP exclut toute manifestation anxieuse."
          ],
          "type": "qcm",
          "explanation": "Ce signe respiratoire peut accompagner l’EP. Des anomalies focales peuvent exister.",
          "source": "Cours de cardiologie L3, Chapitre 3  Embolie pulmonaire, PDF pages 11 et 12.",
          "answers": [
            "L’hémoptysie correspond à un crachat de sang rouge lors d’un effort de toux.",
            "Des râles crépitants localisés peuvent être retrouvés à l’auscultation."
          ],
          "correct": [
            "L’hémoptysie correspond à un crachat de sang rouge lors d’un effort de toux.",
            "Des râles crépitants localisés peuvent être retrouvés à l’auscultation."
          ]
        },
        {
          "text": "À propos de auscultation, choisissez les deux propositions exactes.",
          "options": [
            "Des râles crépitants localisés peuvent être retrouvés à l’auscultation.",
            "Une EP grave peut provoquer hypotension et tachycardie.",
            "L’EP exclut toute manifestation anxieuse.",
            "La gazométrie montre obligatoirement une hyperoxémie."
          ],
          "type": "qcm",
          "explanation": "Des anomalies focales peuvent exister. La baisse du retour veineux et du débit cardiaque explique l’hypotension.",
          "source": "Cours de cardiologie L3, Chapitre 3  Embolie pulmonaire, PDF pages 11 et 12.",
          "answers": [
            "Des râles crépitants localisés peuvent être retrouvés à l’auscultation.",
            "Une EP grave peut provoquer hypotension et tachycardie."
          ],
          "correct": [
            "Des râles crépitants localisés peuvent être retrouvés à l’auscultation.",
            "Une EP grave peut provoquer hypotension et tachycardie."
          ]
        },
        {
          "text": "À propos de circulation, choisissez les deux propositions exactes.",
          "options": [
            "Une EP grave peut provoquer hypotension et tachycardie.",
            "Une angoisse intense avec impression de mort imminente peut accompagner l’EP.",
            "La gazométrie montre obligatoirement une hyperoxémie.",
            "Une gazométrie normale élimine formellement toute EP."
          ],
          "type": "qcm",
          "explanation": "La baisse du retour veineux et du débit cardiaque explique l’hypotension. La détresse respiratoire aiguë peut provoquer une angoisse majeure.",
          "source": "Cours de cardiologie L3, Chapitre 3  Embolie pulmonaire, PDF pages 11 et 12.",
          "answers": [
            "Une EP grave peut provoquer hypotension et tachycardie.",
            "Une angoisse intense avec impression de mort imminente peut accompagner l’EP."
          ],
          "correct": [
            "Une EP grave peut provoquer hypotension et tachycardie.",
            "Une angoisse intense avec impression de mort imminente peut accompagner l’EP."
          ]
        },
        {
          "text": "À propos de angoisse, choisissez les deux propositions exactes.",
          "options": [
            "Une angoisse intense avec impression de mort imminente peut accompagner l’EP.",
            "La gazométrie peut montrer une hypoxémie et une hypocapnie.",
            "Une gazométrie normale élimine formellement toute EP.",
            "L’ECG est interdit devant une douleur thoracique."
          ],
          "type": "qcm",
          "explanation": "La détresse respiratoire aiguë peut provoquer une angoisse majeure. La zone ventilée mais non perfusée altère les échanges gazeux.",
          "source": "Cours de cardiologie L3, Chapitre 3  Embolie pulmonaire, PDF pages 11 et 12.",
          "answers": [
            "Une angoisse intense avec impression de mort imminente peut accompagner l’EP.",
            "La gazométrie peut montrer une hypoxémie et une hypocapnie."
          ],
          "correct": [
            "Une angoisse intense avec impression de mort imminente peut accompagner l’EP.",
            "La gazométrie peut montrer une hypoxémie et une hypocapnie."
          ]
        },
        {
          "text": "À propos de gazométrie, choisissez les deux propositions exactes.",
          "options": [
            "La gazométrie peut montrer une hypoxémie et une hypocapnie.",
            "Une gazométrie normale n’exclut pas toujours une embolie pulmonaire.",
            "L’ECG est interdit devant une douleur thoracique.",
            "Une radiographie normale élimine toujours l’EP."
          ],
          "type": "qcm",
          "explanation": "La zone ventilée mais non perfusée altère les échanges gazeux. Le cours indique qu’elle peut être normale chez certains patients.",
          "source": "Cours de cardiologie L3, Chapitre 3  Embolie pulmonaire, PDF pages 11 et 12.",
          "answers": [
            "La gazométrie peut montrer une hypoxémie et une hypocapnie.",
            "Une gazométrie normale n’exclut pas toujours une embolie pulmonaire."
          ],
          "correct": [
            "La gazométrie peut montrer une hypoxémie et une hypocapnie.",
            "Une gazométrie normale n’exclut pas toujours une embolie pulmonaire."
          ]
        },
        {
          "text": "À propos de gazométrie normale, choisissez les deux propositions exactes.",
          "options": [
            "Une gazométrie normale n’exclut pas toujours une embolie pulmonaire.",
            "Un ECG est systématique devant une douleur thoracique et évalue notamment le retentissement droit.",
            "Une radiographie normale élimine toujours l’EP.",
            "L’échodoppler des membres inférieurs mesure uniquement la glycémie."
          ],
          "type": "qcm",
          "explanation": "Le cours indique qu’elle peut être normale chez certains patients. Il contribue au diagnostic différentiel et à l’évaluation cardiaque.",
          "source": "Cours de cardiologie L3, Chapitre 3  Embolie pulmonaire, PDF pages 11 et 12.",
          "answers": [
            "Une gazométrie normale n’exclut pas toujours une embolie pulmonaire.",
            "Un ECG est systématique devant une douleur thoracique et évalue notamment le retentissement droit."
          ],
          "correct": [
            "Une gazométrie normale n’exclut pas toujours une embolie pulmonaire.",
            "Un ECG est systématique devant une douleur thoracique et évalue notamment le retentissement droit."
          ]
        },
        {
          "text": "À propos de ECG, choisissez les deux propositions exactes.",
          "options": [
            "Un ECG est systématique devant une douleur thoracique et évalue notamment le retentissement droit.",
            "Une radiographie thoracique normale n’exclut pas le diagnostic d’EP.",
            "L’échodoppler des membres inférieurs mesure uniquement la glycémie.",
            "L’angioscanner ne peut jamais visualiser les artères pulmonaires."
          ],
          "type": "qcm",
          "explanation": "Il contribue au diagnostic différentiel et à l’évaluation cardiaque. La radiographie peut être normale malgré une embolie.",
          "source": "Cours de cardiologie L3, Chapitre 3  Embolie pulmonaire, PDF pages 11 et 12.",
          "answers": [
            "Un ECG est systématique devant une douleur thoracique et évalue notamment le retentissement droit.",
            "Une radiographie thoracique normale n’exclut pas le diagnostic d’EP."
          ],
          "correct": [
            "Un ECG est systématique devant une douleur thoracique et évalue notamment le retentissement droit.",
            "Une radiographie thoracique normale n’exclut pas le diagnostic d’EP."
          ]
        },
        {
          "text": "À propos de radiographie, choisissez les deux propositions exactes.",
          "options": [
            "Une radiographie thoracique normale n’exclut pas le diagnostic d’EP.",
            "L’échodoppler des membres inférieurs recherche une thrombose veineuse profonde.",
            "L’angioscanner ne peut jamais visualiser les artères pulmonaires.",
            "L’embolie pulmonaire est une obstruction chronique exclusive de l’aorte."
          ],
          "type": "qcm",
          "explanation": "La radiographie peut être normale malgré une embolie. Il recherche la source veineuse de l’embolie.",
          "source": "Cours de cardiologie L3, Chapitre 3  Embolie pulmonaire, PDF pages 11 et 12.",
          "answers": [
            "Une radiographie thoracique normale n’exclut pas le diagnostic d’EP.",
            "L’échodoppler des membres inférieurs recherche une thrombose veineuse profonde."
          ],
          "correct": [
            "Une radiographie thoracique normale n’exclut pas le diagnostic d’EP.",
            "L’échodoppler des membres inférieurs recherche une thrombose veineuse profonde."
          ]
        },
        {
          "text": "À propos de échodoppler, choisissez les deux propositions exactes.",
          "options": [
            "L’échodoppler des membres inférieurs recherche une thrombose veineuse profonde.",
            "L’angioscanner spiralé avec injection iodée peut visualiser l’embolie pulmonaire.",
            "L’embolie pulmonaire est une obstruction chronique exclusive de l’aorte.",
            "L’embolie pulmonaire ne peut jamais provenir d’une TVP."
          ],
          "type": "qcm",
          "explanation": "Il recherche la source veineuse de l’embolie. C’est un examen majeur de confirmation diagnostique.",
          "source": "Cours de cardiologie L3, Chapitre 3  Embolie pulmonaire, PDF pages 11 et 12.",
          "answers": [
            "L’échodoppler des membres inférieurs recherche une thrombose veineuse profonde.",
            "L’angioscanner spiralé avec injection iodée peut visualiser l’embolie pulmonaire."
          ],
          "correct": [
            "L’échodoppler des membres inférieurs recherche une thrombose veineuse profonde.",
            "L’angioscanner spiralé avec injection iodée peut visualiser l’embolie pulmonaire."
          ]
        },
        {
          "text": "À propos de angioscanner, choisissez les deux propositions exactes.",
          "options": [
            "L’angioscanner spiralé avec injection iodée peut visualiser l’embolie pulmonaire.",
            "L’embolie pulmonaire est l’obstruction brutale d’une branche de l’artère pulmonaire par un ou plusieurs emboles.",
            "L’embolie pulmonaire ne peut jamais provenir d’une TVP.",
            "Un embole ne modifie jamais le débit sanguin pulmonaire."
          ],
          "type": "qcm",
          "explanation": "C’est un examen majeur de confirmation diagnostique. L’embole atteint la circulation pulmonaire après migration.",
          "source": "Cours de cardiologie L3, Chapitre 3  Embolie pulmonaire, PDF pages 11 et 12.",
          "answers": [
            "L’angioscanner spiralé avec injection iodée peut visualiser l’embolie pulmonaire.",
            "L’embolie pulmonaire est l’obstruction brutale d’une branche de l’artère pulmonaire par un ou plusieurs emboles."
          ],
          "correct": [
            "L’angioscanner spiralé avec injection iodée peut visualiser l’embolie pulmonaire.",
            "L’embolie pulmonaire est l’obstruction brutale d’une branche de l’artère pulmonaire par un ou plusieurs emboles."
          ]
        }
      ]
    },
    {
      "id": "ide-4",
      "title": "Cardiologie L3 — Infarctus du myocarde",
      "matter": "Cardiologie L3",
      "filiere": "IDE",
      "description": "Sujet 4 — 60 questions corrigées",
      "instructions": "QCD : Vrai ou Faux. QCM : sélectionner la ou les bonnes réponses.",
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
          "text": "L’IDM correspond à la nécrose d’une partie du muscle cardiaque insuffisamment irriguée par une artère coronaire.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "L’occlusion coronaire prive le myocarde d’oxygène et provoque la nécrose.",
          "source": "Cours de cardiologie L3, Chapitre 4  Infarctus du myocarde, PDF pages 13 à 16.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "L’IDM est une inflammation isolée des veines superficielles.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "L’occlusion coronaire prive le myocarde d’oxygène et provoque la nécrose.",
          "source": "Cours de cardiologie L3, Chapitre 4  Infarctus du myocarde, PDF pages 13 à 16.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "L’infarctus du myocarde est une urgence vitale dès les premières minutes.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le pronostic dépend fortement de la rapidité de reperfusion.",
          "source": "Cours de cardiologie L3, Chapitre 4  Infarctus du myocarde, PDF pages 13 à 16.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "Un IDM peut attendre plusieurs jours avant toute prise en charge.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le pronostic dépend fortement de la rapidité de reperfusion.",
          "source": "Cours de cardiologie L3, Chapitre 4  Infarctus du myocarde, PDF pages 13 à 16.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "La douleur thoracique trinitrorésistante est un signe essentiel de l’IDM.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "La persistance malgré les nitrés est évocatrice.",
          "source": "Cours de cardiologie L3, Chapitre 4  Infarctus du myocarde, PDF pages 13 à 16.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "La douleur de l’IDM cède toujours définitivement après une seule prise de trinitrine.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "La persistance malgré les nitrés est évocatrice.",
          "source": "Cours de cardiologie L3, Chapitre 4  Infarctus du myocarde, PDF pages 13 à 16.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "La douleur peut être absente, notamment chez certains patients diabétiques.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Les formes silencieuses sont possibles.",
          "source": "Cours de cardiologie L3, Chapitre 4  Infarctus du myocarde, PDF pages 13 à 16.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "L’absence de douleur exclut toujours l’IDM chez le diabétique.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Les formes silencieuses sont possibles.",
          "source": "Cours de cardiologie L3, Chapitre 4  Infarctus du myocarde, PDF pages 13 à 16.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Toute douleur thoracique suspecte doit bénéficier rapidement d’un ECG.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "L’ECG contribue au diagnostic et à la localisation.",
          "source": "Cours de cardiologie L3, Chapitre 4  Infarctus du myocarde, PDF pages 13 à 16.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "L’ECG n’a aucun intérêt devant une douleur thoracique.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "L’ECG contribue au diagnostic et à la localisation.",
          "source": "Cours de cardiologie L3, Chapitre 4  Infarctus du myocarde, PDF pages 13 à 16.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "La nécrose myocardique devient complète autour de la sixième heure selon le cours.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le cours insiste sur les six heures d’or.",
          "source": "Cours de cardiologie L3, Chapitre 4  Infarctus du myocarde, PDF pages 13 à 16.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "Le délai de traitement n’a aucune influence sur la nécrose myocardique.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le cours insiste sur les six heures d’or.",
          "source": "Cours de cardiologie L3, Chapitre 4  Infarctus du myocarde, PDF pages 13 à 16.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Dans environ 90 % des cas, l’IDM est lié à l’occlusion brutale d’une coronaire par un thrombus.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "La thrombose survient souvent sur une plaque d’athérome rompue.",
          "source": "Cours de cardiologie L3, Chapitre 4  Infarctus du myocarde, PDF pages 13 à 16.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "L’IDM est toujours causé par une infection pulmonaire.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "La thrombose survient souvent sur une plaque d’athérome rompue.",
          "source": "Cours de cardiologie L3, Chapitre 4  Infarctus du myocarde, PDF pages 13 à 16.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "La rupture ou fissuration d’une plaque d’athérome favorise la thrombose coronaire.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "L’activation plaquettaire conduit à l’occlusion.",
          "source": "Cours de cardiologie L3, Chapitre 4  Infarctus du myocarde, PDF pages 13 à 16.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "Une plaque d’athérome ne peut jamais intervenir dans l’IDM.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "L’activation plaquettaire conduit à l’occlusion.",
          "source": "Cours de cardiologie L3, Chapitre 4  Infarctus du myocarde, PDF pages 13 à 16.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "La nécrose myocardique libère notamment troponine, CPK et myoglobine.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Ces marqueurs participent au diagnostic biologique.",
          "source": "Cours de cardiologie L3, Chapitre 4  Infarctus du myocarde, PDF pages 13 à 16.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "La troponine n’a aucun lien avec la nécrose myocardique.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Ces marqueurs participent au diagnostic biologique.",
          "source": "Cours de cardiologie L3, Chapitre 4  Infarctus du myocarde, PDF pages 13 à 16.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "La nécrose entraîne une perte irréversible de la fonction contractile du territoire atteint.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le territoire nécrosé devient akinétique.",
          "source": "Cours de cardiologie L3, Chapitre 4  Infarctus du myocarde, PDF pages 13 à 16.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "La nécrose améliore durablement la contractilité myocardique.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le territoire nécrosé devient akinétique.",
          "source": "Cours de cardiologie L3, Chapitre 4  Infarctus du myocarde, PDF pages 13 à 16.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Tabagisme, HTA, diabète, obésité, sédentarité et stress sont des facteurs de risque.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Ces facteurs favorisent l’athérosclérose et les événements coronaires.",
          "source": "Cours de cardiologie L3, Chapitre 4  Infarctus du myocarde, PDF pages 13 à 16.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "Le tabagisme protège contre l’IDM.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Ces facteurs favorisent l’athérosclérose et les événements coronaires.",
          "source": "Cours de cardiologie L3, Chapitre 4  Infarctus du myocarde, PDF pages 13 à 16.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "La douleur peut irradier vers les mâchoires et le membre supérieur.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Les irradiations cervico-brachiales sont classiques.",
          "source": "Cours de cardiologie L3, Chapitre 4  Infarctus du myocarde, PDF pages 13 à 16.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "La douleur d’IDM reste obligatoirement limitée à un point cutané du pied.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Les irradiations cervico-brachiales sont classiques.",
          "source": "Cours de cardiologie L3, Chapitre 4  Infarctus du myocarde, PDF pages 13 à 16.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Un patient présentant un IDM doit être transféré rapidement en unité de soins intensifs cardiologiques.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le risque de troubles du rythme impose une surveillance continue.",
          "source": "Cours de cardiologie L3, Chapitre 4  Infarctus du myocarde, PDF pages 13 à 16.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "Un IDM confirmé doit être surveillé uniquement à domicile.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le risque de troubles du rythme impose une surveillance continue.",
          "source": "Cours de cardiologie L3, Chapitre 4  Infarctus du myocarde, PDF pages 13 à 16.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "L’IDM peut se compliquer de tachycardie ventriculaire ou de fibrillation ventriculaire.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Les arythmies ventriculaires expliquent une partie des décès précoces.",
          "source": "Cours de cardiologie L3, Chapitre 4  Infarctus du myocarde, PDF pages 13 à 16.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "L’IDM ne provoque jamais de trouble du rythme.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Les arythmies ventriculaires expliquent une partie des décès précoces.",
          "source": "Cours de cardiologie L3, Chapitre 4  Infarctus du myocarde, PDF pages 13 à 16.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "L’épreuve d’effort peut être réalisée secondairement pour rechercher une ischémie résiduelle, selon indication.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Elle n’est pas réalisée pendant la phase aiguë instable.",
          "source": "Cours de cardiologie L3, Chapitre 4  Infarctus du myocarde, PDF pages 13 à 16.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "Une épreuve d’effort maximale est systématique pendant la douleur aiguë d’IDM.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Elle n’est pas réalisée pendant la phase aiguë instable.",
          "source": "Cours de cardiologie L3, Chapitre 4  Infarctus du myocarde, PDF pages 13 à 16.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Concernant définition, quelle proposition est correcte ?",
          "options": [
            "L’IDM correspond à la nécrose d’une partie du muscle cardiaque insuffisamment irriguée par une artère coronaire.",
            "Un IDM peut attendre plusieurs jours avant toute prise en charge.",
            "La douleur de l’IDM cède toujours définitivement après une seule prise de trinitrine.",
            "L’absence de douleur exclut toujours l’IDM chez le diabétique."
          ],
          "type": "qcm",
          "explanation": "L’occlusion coronaire prive le myocarde d’oxygène et provoque la nécrose.",
          "source": "Cours de cardiologie L3, Chapitre 4  Infarctus du myocarde, PDF pages 13 à 16.",
          "answers": [
            "L’IDM correspond à la nécrose d’une partie du muscle cardiaque insuffisamment irriguée par une artère coronaire."
          ],
          "correct": [
            "L’IDM correspond à la nécrose d’une partie du muscle cardiaque insuffisamment irriguée par une artère coronaire."
          ]
        },
        {
          "text": "Concernant urgence, quelle proposition est correcte ?",
          "options": [
            "L’infarctus du myocarde est une urgence vitale dès les premières minutes.",
            "La douleur de l’IDM cède toujours définitivement après une seule prise de trinitrine.",
            "L’absence de douleur exclut toujours l’IDM chez le diabétique.",
            "L’ECG n’a aucun intérêt devant une douleur thoracique."
          ],
          "type": "qcm",
          "explanation": "Le pronostic dépend fortement de la rapidité de reperfusion.",
          "source": "Cours de cardiologie L3, Chapitre 4  Infarctus du myocarde, PDF pages 13 à 16.",
          "answers": [
            "L’infarctus du myocarde est une urgence vitale dès les premières minutes."
          ],
          "correct": [
            "L’infarctus du myocarde est une urgence vitale dès les premières minutes."
          ]
        },
        {
          "text": "Concernant douleur, quelle proposition est correcte ?",
          "options": [
            "La douleur thoracique trinitrorésistante est un signe essentiel de l’IDM.",
            "L’absence de douleur exclut toujours l’IDM chez le diabétique.",
            "L’ECG n’a aucun intérêt devant une douleur thoracique.",
            "Le délai de traitement n’a aucune influence sur la nécrose myocardique."
          ],
          "type": "qcm",
          "explanation": "La persistance malgré les nitrés est évocatrice.",
          "source": "Cours de cardiologie L3, Chapitre 4  Infarctus du myocarde, PDF pages 13 à 16.",
          "answers": [
            "La douleur thoracique trinitrorésistante est un signe essentiel de l’IDM."
          ],
          "correct": [
            "La douleur thoracique trinitrorésistante est un signe essentiel de l’IDM."
          ]
        },
        {
          "text": "Concernant IDM silencieux, quelle proposition est correcte ?",
          "options": [
            "La douleur peut être absente, notamment chez certains patients diabétiques.",
            "L’ECG n’a aucun intérêt devant une douleur thoracique.",
            "Le délai de traitement n’a aucune influence sur la nécrose myocardique.",
            "L’IDM est toujours causé par une infection pulmonaire."
          ],
          "type": "qcm",
          "explanation": "Les formes silencieuses sont possibles.",
          "source": "Cours de cardiologie L3, Chapitre 4  Infarctus du myocarde, PDF pages 13 à 16.",
          "answers": [
            "La douleur peut être absente, notamment chez certains patients diabétiques."
          ],
          "correct": [
            "La douleur peut être absente, notamment chez certains patients diabétiques."
          ]
        },
        {
          "text": "Concernant ECG, quelle proposition est correcte ?",
          "options": [
            "Toute douleur thoracique suspecte doit bénéficier rapidement d’un ECG.",
            "Le délai de traitement n’a aucune influence sur la nécrose myocardique.",
            "L’IDM est toujours causé par une infection pulmonaire.",
            "Une plaque d’athérome ne peut jamais intervenir dans l’IDM."
          ],
          "type": "qcm",
          "explanation": "L’ECG contribue au diagnostic et à la localisation.",
          "source": "Cours de cardiologie L3, Chapitre 4  Infarctus du myocarde, PDF pages 13 à 16.",
          "answers": [
            "Toute douleur thoracique suspecte doit bénéficier rapidement d’un ECG."
          ],
          "correct": [
            "Toute douleur thoracique suspecte doit bénéficier rapidement d’un ECG."
          ]
        },
        {
          "text": "Concernant délai, quelle proposition est correcte ?",
          "options": [
            "La nécrose myocardique devient complète autour de la sixième heure selon le cours.",
            "L’IDM est toujours causé par une infection pulmonaire.",
            "Une plaque d’athérome ne peut jamais intervenir dans l’IDM.",
            "La troponine n’a aucun lien avec la nécrose myocardique."
          ],
          "type": "qcm",
          "explanation": "Le cours insiste sur les six heures d’or.",
          "source": "Cours de cardiologie L3, Chapitre 4  Infarctus du myocarde, PDF pages 13 à 16.",
          "answers": [
            "La nécrose myocardique devient complète autour de la sixième heure selon le cours."
          ],
          "correct": [
            "La nécrose myocardique devient complète autour de la sixième heure selon le cours."
          ]
        },
        {
          "text": "Concernant cause, quelle proposition est correcte ?",
          "options": [
            "Dans environ 90 % des cas, l’IDM est lié à l’occlusion brutale d’une coronaire par un thrombus.",
            "Une plaque d’athérome ne peut jamais intervenir dans l’IDM.",
            "La troponine n’a aucun lien avec la nécrose myocardique.",
            "La nécrose améliore durablement la contractilité myocardique."
          ],
          "type": "qcm",
          "explanation": "La thrombose survient souvent sur une plaque d’athérome rompue.",
          "source": "Cours de cardiologie L3, Chapitre 4  Infarctus du myocarde, PDF pages 13 à 16.",
          "answers": [
            "Dans environ 90 % des cas, l’IDM est lié à l’occlusion brutale d’une coronaire par un thrombus."
          ],
          "correct": [
            "Dans environ 90 % des cas, l’IDM est lié à l’occlusion brutale d’une coronaire par un thrombus."
          ]
        },
        {
          "text": "Concernant athérome, quelle proposition est correcte ?",
          "options": [
            "La rupture ou fissuration d’une plaque d’athérome favorise la thrombose coronaire.",
            "La troponine n’a aucun lien avec la nécrose myocardique.",
            "La nécrose améliore durablement la contractilité myocardique.",
            "Le tabagisme protège contre l’IDM."
          ],
          "type": "qcm",
          "explanation": "L’activation plaquettaire conduit à l’occlusion.",
          "source": "Cours de cardiologie L3, Chapitre 4  Infarctus du myocarde, PDF pages 13 à 16.",
          "answers": [
            "La rupture ou fissuration d’une plaque d’athérome favorise la thrombose coronaire."
          ],
          "correct": [
            "La rupture ou fissuration d’une plaque d’athérome favorise la thrombose coronaire."
          ]
        },
        {
          "text": "Concernant enzymes, quelle proposition est correcte ?",
          "options": [
            "La nécrose myocardique libère notamment troponine, CPK et myoglobine.",
            "La nécrose améliore durablement la contractilité myocardique.",
            "Le tabagisme protège contre l’IDM.",
            "La douleur d’IDM reste obligatoirement limitée à un point cutané du pied."
          ],
          "type": "qcm",
          "explanation": "Ces marqueurs participent au diagnostic biologique.",
          "source": "Cours de cardiologie L3, Chapitre 4  Infarctus du myocarde, PDF pages 13 à 16.",
          "answers": [
            "La nécrose myocardique libère notamment troponine, CPK et myoglobine."
          ],
          "correct": [
            "La nécrose myocardique libère notamment troponine, CPK et myoglobine."
          ]
        },
        {
          "text": "Concernant contractilité, quelle proposition est correcte ?",
          "options": [
            "La nécrose entraîne une perte irréversible de la fonction contractile du territoire atteint.",
            "Le tabagisme protège contre l’IDM.",
            "La douleur d’IDM reste obligatoirement limitée à un point cutané du pied.",
            "Un IDM confirmé doit être surveillé uniquement à domicile."
          ],
          "type": "qcm",
          "explanation": "Le territoire nécrosé devient akinétique.",
          "source": "Cours de cardiologie L3, Chapitre 4  Infarctus du myocarde, PDF pages 13 à 16.",
          "answers": [
            "La nécrose entraîne une perte irréversible de la fonction contractile du territoire atteint."
          ],
          "correct": [
            "La nécrose entraîne une perte irréversible de la fonction contractile du territoire atteint."
          ]
        },
        {
          "text": "Concernant facteurs de risque, quelle proposition est correcte ?",
          "options": [
            "Tabagisme, HTA, diabète, obésité, sédentarité et stress sont des facteurs de risque.",
            "La douleur d’IDM reste obligatoirement limitée à un point cutané du pied.",
            "Un IDM confirmé doit être surveillé uniquement à domicile.",
            "L’IDM ne provoque jamais de trouble du rythme."
          ],
          "type": "qcm",
          "explanation": "Ces facteurs favorisent l’athérosclérose et les événements coronaires.",
          "source": "Cours de cardiologie L3, Chapitre 4  Infarctus du myocarde, PDF pages 13 à 16.",
          "answers": [
            "Tabagisme, HTA, diabète, obésité, sédentarité et stress sont des facteurs de risque."
          ],
          "correct": [
            "Tabagisme, HTA, diabète, obésité, sédentarité et stress sont des facteurs de risque."
          ]
        },
        {
          "text": "Concernant irradiation, quelle proposition est correcte ?",
          "options": [
            "La douleur peut irradier vers les mâchoires et le membre supérieur.",
            "Un IDM confirmé doit être surveillé uniquement à domicile.",
            "L’IDM ne provoque jamais de trouble du rythme.",
            "Une épreuve d’effort maximale est systématique pendant la douleur aiguë d’IDM."
          ],
          "type": "qcm",
          "explanation": "Les irradiations cervico-brachiales sont classiques.",
          "source": "Cours de cardiologie L3, Chapitre 4  Infarctus du myocarde, PDF pages 13 à 16.",
          "answers": [
            "La douleur peut irradier vers les mâchoires et le membre supérieur."
          ],
          "correct": [
            "La douleur peut irradier vers les mâchoires et le membre supérieur."
          ]
        },
        {
          "text": "Concernant USIC, quelle proposition est correcte ?",
          "options": [
            "Un patient présentant un IDM doit être transféré rapidement en unité de soins intensifs cardiologiques.",
            "L’IDM ne provoque jamais de trouble du rythme.",
            "Une épreuve d’effort maximale est systématique pendant la douleur aiguë d’IDM.",
            "L’IDM est une inflammation isolée des veines superficielles."
          ],
          "type": "qcm",
          "explanation": "Le risque de troubles du rythme impose une surveillance continue.",
          "source": "Cours de cardiologie L3, Chapitre 4  Infarctus du myocarde, PDF pages 13 à 16.",
          "answers": [
            "Un patient présentant un IDM doit être transféré rapidement en unité de soins intensifs cardiologiques."
          ],
          "correct": [
            "Un patient présentant un IDM doit être transféré rapidement en unité de soins intensifs cardiologiques."
          ]
        },
        {
          "text": "Concernant complications rythmiques, quelle proposition est correcte ?",
          "options": [
            "L’IDM peut se compliquer de tachycardie ventriculaire ou de fibrillation ventriculaire.",
            "Une épreuve d’effort maximale est systématique pendant la douleur aiguë d’IDM.",
            "L’IDM est une inflammation isolée des veines superficielles.",
            "Un IDM peut attendre plusieurs jours avant toute prise en charge."
          ],
          "type": "qcm",
          "explanation": "Les arythmies ventriculaires expliquent une partie des décès précoces.",
          "source": "Cours de cardiologie L3, Chapitre 4  Infarctus du myocarde, PDF pages 13 à 16.",
          "answers": [
            "L’IDM peut se compliquer de tachycardie ventriculaire ou de fibrillation ventriculaire."
          ],
          "correct": [
            "L’IDM peut se compliquer de tachycardie ventriculaire ou de fibrillation ventriculaire."
          ]
        },
        {
          "text": "Concernant effort, quelle proposition est correcte ?",
          "options": [
            "L’épreuve d’effort peut être réalisée secondairement pour rechercher une ischémie résiduelle, selon indication.",
            "L’IDM est une inflammation isolée des veines superficielles.",
            "Un IDM peut attendre plusieurs jours avant toute prise en charge.",
            "La douleur de l’IDM cède toujours définitivement après une seule prise de trinitrine."
          ],
          "type": "qcm",
          "explanation": "Elle n’est pas réalisée pendant la phase aiguë instable.",
          "source": "Cours de cardiologie L3, Chapitre 4  Infarctus du myocarde, PDF pages 13 à 16.",
          "answers": [
            "L’épreuve d’effort peut être réalisée secondairement pour rechercher une ischémie résiduelle, selon indication."
          ],
          "correct": [
            "L’épreuve d’effort peut être réalisée secondairement pour rechercher une ischémie résiduelle, selon indication."
          ]
        },
        {
          "text": "À propos de définition, choisissez les deux propositions exactes.",
          "options": [
            "L’IDM correspond à la nécrose d’une partie du muscle cardiaque insuffisamment irriguée par une artère coronaire.",
            "L’infarctus du myocarde est une urgence vitale dès les premières minutes.",
            "La douleur de l’IDM cède toujours définitivement après une seule prise de trinitrine.",
            "L’absence de douleur exclut toujours l’IDM chez le diabétique."
          ],
          "type": "qcm",
          "explanation": "L’occlusion coronaire prive le myocarde d’oxygène et provoque la nécrose. Le pronostic dépend fortement de la rapidité de reperfusion.",
          "source": "Cours de cardiologie L3, Chapitre 4  Infarctus du myocarde, PDF pages 13 à 16.",
          "answers": [
            "L’IDM correspond à la nécrose d’une partie du muscle cardiaque insuffisamment irriguée par une artère coronaire.",
            "L’infarctus du myocarde est une urgence vitale dès les premières minutes."
          ],
          "correct": [
            "L’IDM correspond à la nécrose d’une partie du muscle cardiaque insuffisamment irriguée par une artère coronaire.",
            "L’infarctus du myocarde est une urgence vitale dès les premières minutes."
          ]
        },
        {
          "text": "À propos de urgence, choisissez les deux propositions exactes.",
          "options": [
            "L’infarctus du myocarde est une urgence vitale dès les premières minutes.",
            "La douleur thoracique trinitrorésistante est un signe essentiel de l’IDM.",
            "L’absence de douleur exclut toujours l’IDM chez le diabétique.",
            "L’ECG n’a aucun intérêt devant une douleur thoracique."
          ],
          "type": "qcm",
          "explanation": "Le pronostic dépend fortement de la rapidité de reperfusion. La persistance malgré les nitrés est évocatrice.",
          "source": "Cours de cardiologie L3, Chapitre 4  Infarctus du myocarde, PDF pages 13 à 16.",
          "answers": [
            "L’infarctus du myocarde est une urgence vitale dès les premières minutes.",
            "La douleur thoracique trinitrorésistante est un signe essentiel de l’IDM."
          ],
          "correct": [
            "L’infarctus du myocarde est une urgence vitale dès les premières minutes.",
            "La douleur thoracique trinitrorésistante est un signe essentiel de l’IDM."
          ]
        },
        {
          "text": "À propos de douleur, choisissez les deux propositions exactes.",
          "options": [
            "La douleur thoracique trinitrorésistante est un signe essentiel de l’IDM.",
            "La douleur peut être absente, notamment chez certains patients diabétiques.",
            "L’ECG n’a aucun intérêt devant une douleur thoracique.",
            "Le délai de traitement n’a aucune influence sur la nécrose myocardique."
          ],
          "type": "qcm",
          "explanation": "La persistance malgré les nitrés est évocatrice. Les formes silencieuses sont possibles.",
          "source": "Cours de cardiologie L3, Chapitre 4  Infarctus du myocarde, PDF pages 13 à 16.",
          "answers": [
            "La douleur thoracique trinitrorésistante est un signe essentiel de l’IDM.",
            "La douleur peut être absente, notamment chez certains patients diabétiques."
          ],
          "correct": [
            "La douleur thoracique trinitrorésistante est un signe essentiel de l’IDM.",
            "La douleur peut être absente, notamment chez certains patients diabétiques."
          ]
        },
        {
          "text": "À propos de IDM silencieux, choisissez les deux propositions exactes.",
          "options": [
            "La douleur peut être absente, notamment chez certains patients diabétiques.",
            "Toute douleur thoracique suspecte doit bénéficier rapidement d’un ECG.",
            "Le délai de traitement n’a aucune influence sur la nécrose myocardique.",
            "L’IDM est toujours causé par une infection pulmonaire."
          ],
          "type": "qcm",
          "explanation": "Les formes silencieuses sont possibles. L’ECG contribue au diagnostic et à la localisation.",
          "source": "Cours de cardiologie L3, Chapitre 4  Infarctus du myocarde, PDF pages 13 à 16.",
          "answers": [
            "La douleur peut être absente, notamment chez certains patients diabétiques.",
            "Toute douleur thoracique suspecte doit bénéficier rapidement d’un ECG."
          ],
          "correct": [
            "La douleur peut être absente, notamment chez certains patients diabétiques.",
            "Toute douleur thoracique suspecte doit bénéficier rapidement d’un ECG."
          ]
        },
        {
          "text": "À propos de ECG, choisissez les deux propositions exactes.",
          "options": [
            "Toute douleur thoracique suspecte doit bénéficier rapidement d’un ECG.",
            "La nécrose myocardique devient complète autour de la sixième heure selon le cours.",
            "L’IDM est toujours causé par une infection pulmonaire.",
            "Une plaque d’athérome ne peut jamais intervenir dans l’IDM."
          ],
          "type": "qcm",
          "explanation": "L’ECG contribue au diagnostic et à la localisation. Le cours insiste sur les six heures d’or.",
          "source": "Cours de cardiologie L3, Chapitre 4  Infarctus du myocarde, PDF pages 13 à 16.",
          "answers": [
            "Toute douleur thoracique suspecte doit bénéficier rapidement d’un ECG.",
            "La nécrose myocardique devient complète autour de la sixième heure selon le cours."
          ],
          "correct": [
            "Toute douleur thoracique suspecte doit bénéficier rapidement d’un ECG.",
            "La nécrose myocardique devient complète autour de la sixième heure selon le cours."
          ]
        },
        {
          "text": "À propos de délai, choisissez les deux propositions exactes.",
          "options": [
            "La nécrose myocardique devient complète autour de la sixième heure selon le cours.",
            "Dans environ 90 % des cas, l’IDM est lié à l’occlusion brutale d’une coronaire par un thrombus.",
            "Une plaque d’athérome ne peut jamais intervenir dans l’IDM.",
            "La troponine n’a aucun lien avec la nécrose myocardique."
          ],
          "type": "qcm",
          "explanation": "Le cours insiste sur les six heures d’or. La thrombose survient souvent sur une plaque d’athérome rompue.",
          "source": "Cours de cardiologie L3, Chapitre 4  Infarctus du myocarde, PDF pages 13 à 16.",
          "answers": [
            "La nécrose myocardique devient complète autour de la sixième heure selon le cours.",
            "Dans environ 90 % des cas, l’IDM est lié à l’occlusion brutale d’une coronaire par un thrombus."
          ],
          "correct": [
            "La nécrose myocardique devient complète autour de la sixième heure selon le cours.",
            "Dans environ 90 % des cas, l’IDM est lié à l’occlusion brutale d’une coronaire par un thrombus."
          ]
        },
        {
          "text": "À propos de cause, choisissez les deux propositions exactes.",
          "options": [
            "Dans environ 90 % des cas, l’IDM est lié à l’occlusion brutale d’une coronaire par un thrombus.",
            "La rupture ou fissuration d’une plaque d’athérome favorise la thrombose coronaire.",
            "La troponine n’a aucun lien avec la nécrose myocardique.",
            "La nécrose améliore durablement la contractilité myocardique."
          ],
          "type": "qcm",
          "explanation": "La thrombose survient souvent sur une plaque d’athérome rompue. L’activation plaquettaire conduit à l’occlusion.",
          "source": "Cours de cardiologie L3, Chapitre 4  Infarctus du myocarde, PDF pages 13 à 16.",
          "answers": [
            "Dans environ 90 % des cas, l’IDM est lié à l’occlusion brutale d’une coronaire par un thrombus.",
            "La rupture ou fissuration d’une plaque d’athérome favorise la thrombose coronaire."
          ],
          "correct": [
            "Dans environ 90 % des cas, l’IDM est lié à l’occlusion brutale d’une coronaire par un thrombus.",
            "La rupture ou fissuration d’une plaque d’athérome favorise la thrombose coronaire."
          ]
        },
        {
          "text": "À propos de athérome, choisissez les deux propositions exactes.",
          "options": [
            "La rupture ou fissuration d’une plaque d’athérome favorise la thrombose coronaire.",
            "La nécrose myocardique libère notamment troponine, CPK et myoglobine.",
            "La nécrose améliore durablement la contractilité myocardique.",
            "Le tabagisme protège contre l’IDM."
          ],
          "type": "qcm",
          "explanation": "L’activation plaquettaire conduit à l’occlusion. Ces marqueurs participent au diagnostic biologique.",
          "source": "Cours de cardiologie L3, Chapitre 4  Infarctus du myocarde, PDF pages 13 à 16.",
          "answers": [
            "La rupture ou fissuration d’une plaque d’athérome favorise la thrombose coronaire.",
            "La nécrose myocardique libère notamment troponine, CPK et myoglobine."
          ],
          "correct": [
            "La rupture ou fissuration d’une plaque d’athérome favorise la thrombose coronaire.",
            "La nécrose myocardique libère notamment troponine, CPK et myoglobine."
          ]
        },
        {
          "text": "À propos de enzymes, choisissez les deux propositions exactes.",
          "options": [
            "La nécrose myocardique libère notamment troponine, CPK et myoglobine.",
            "La nécrose entraîne une perte irréversible de la fonction contractile du territoire atteint.",
            "Le tabagisme protège contre l’IDM.",
            "La douleur d’IDM reste obligatoirement limitée à un point cutané du pied."
          ],
          "type": "qcm",
          "explanation": "Ces marqueurs participent au diagnostic biologique. Le territoire nécrosé devient akinétique.",
          "source": "Cours de cardiologie L3, Chapitre 4  Infarctus du myocarde, PDF pages 13 à 16.",
          "answers": [
            "La nécrose myocardique libère notamment troponine, CPK et myoglobine.",
            "La nécrose entraîne une perte irréversible de la fonction contractile du territoire atteint."
          ],
          "correct": [
            "La nécrose myocardique libère notamment troponine, CPK et myoglobine.",
            "La nécrose entraîne une perte irréversible de la fonction contractile du territoire atteint."
          ]
        },
        {
          "text": "À propos de contractilité, choisissez les deux propositions exactes.",
          "options": [
            "La nécrose entraîne une perte irréversible de la fonction contractile du territoire atteint.",
            "Tabagisme, HTA, diabète, obésité, sédentarité et stress sont des facteurs de risque.",
            "La douleur d’IDM reste obligatoirement limitée à un point cutané du pied.",
            "Un IDM confirmé doit être surveillé uniquement à domicile."
          ],
          "type": "qcm",
          "explanation": "Le territoire nécrosé devient akinétique. Ces facteurs favorisent l’athérosclérose et les événements coronaires.",
          "source": "Cours de cardiologie L3, Chapitre 4  Infarctus du myocarde, PDF pages 13 à 16.",
          "answers": [
            "La nécrose entraîne une perte irréversible de la fonction contractile du territoire atteint.",
            "Tabagisme, HTA, diabète, obésité, sédentarité et stress sont des facteurs de risque."
          ],
          "correct": [
            "La nécrose entraîne une perte irréversible de la fonction contractile du territoire atteint.",
            "Tabagisme, HTA, diabète, obésité, sédentarité et stress sont des facteurs de risque."
          ]
        },
        {
          "text": "À propos de facteurs de risque, choisissez les deux propositions exactes.",
          "options": [
            "Tabagisme, HTA, diabète, obésité, sédentarité et stress sont des facteurs de risque.",
            "La douleur peut irradier vers les mâchoires et le membre supérieur.",
            "Un IDM confirmé doit être surveillé uniquement à domicile.",
            "L’IDM ne provoque jamais de trouble du rythme."
          ],
          "type": "qcm",
          "explanation": "Ces facteurs favorisent l’athérosclérose et les événements coronaires. Les irradiations cervico-brachiales sont classiques.",
          "source": "Cours de cardiologie L3, Chapitre 4  Infarctus du myocarde, PDF pages 13 à 16.",
          "answers": [
            "Tabagisme, HTA, diabète, obésité, sédentarité et stress sont des facteurs de risque.",
            "La douleur peut irradier vers les mâchoires et le membre supérieur."
          ],
          "correct": [
            "Tabagisme, HTA, diabète, obésité, sédentarité et stress sont des facteurs de risque.",
            "La douleur peut irradier vers les mâchoires et le membre supérieur."
          ]
        },
        {
          "text": "À propos de irradiation, choisissez les deux propositions exactes.",
          "options": [
            "La douleur peut irradier vers les mâchoires et le membre supérieur.",
            "Un patient présentant un IDM doit être transféré rapidement en unité de soins intensifs cardiologiques.",
            "L’IDM ne provoque jamais de trouble du rythme.",
            "Une épreuve d’effort maximale est systématique pendant la douleur aiguë d’IDM."
          ],
          "type": "qcm",
          "explanation": "Les irradiations cervico-brachiales sont classiques. Le risque de troubles du rythme impose une surveillance continue.",
          "source": "Cours de cardiologie L3, Chapitre 4  Infarctus du myocarde, PDF pages 13 à 16.",
          "answers": [
            "La douleur peut irradier vers les mâchoires et le membre supérieur.",
            "Un patient présentant un IDM doit être transféré rapidement en unité de soins intensifs cardiologiques."
          ],
          "correct": [
            "La douleur peut irradier vers les mâchoires et le membre supérieur.",
            "Un patient présentant un IDM doit être transféré rapidement en unité de soins intensifs cardiologiques."
          ]
        },
        {
          "text": "À propos de USIC, choisissez les deux propositions exactes.",
          "options": [
            "Un patient présentant un IDM doit être transféré rapidement en unité de soins intensifs cardiologiques.",
            "L’IDM peut se compliquer de tachycardie ventriculaire ou de fibrillation ventriculaire.",
            "Une épreuve d’effort maximale est systématique pendant la douleur aiguë d’IDM.",
            "L’IDM est une inflammation isolée des veines superficielles."
          ],
          "type": "qcm",
          "explanation": "Le risque de troubles du rythme impose une surveillance continue. Les arythmies ventriculaires expliquent une partie des décès précoces.",
          "source": "Cours de cardiologie L3, Chapitre 4  Infarctus du myocarde, PDF pages 13 à 16.",
          "answers": [
            "Un patient présentant un IDM doit être transféré rapidement en unité de soins intensifs cardiologiques.",
            "L’IDM peut se compliquer de tachycardie ventriculaire ou de fibrillation ventriculaire."
          ],
          "correct": [
            "Un patient présentant un IDM doit être transféré rapidement en unité de soins intensifs cardiologiques.",
            "L’IDM peut se compliquer de tachycardie ventriculaire ou de fibrillation ventriculaire."
          ]
        },
        {
          "text": "À propos de complications rythmiques, choisissez les deux propositions exactes.",
          "options": [
            "L’IDM peut se compliquer de tachycardie ventriculaire ou de fibrillation ventriculaire.",
            "L’épreuve d’effort peut être réalisée secondairement pour rechercher une ischémie résiduelle, selon indication.",
            "L’IDM est une inflammation isolée des veines superficielles.",
            "Un IDM peut attendre plusieurs jours avant toute prise en charge."
          ],
          "type": "qcm",
          "explanation": "Les arythmies ventriculaires expliquent une partie des décès précoces. Elle n’est pas réalisée pendant la phase aiguë instable.",
          "source": "Cours de cardiologie L3, Chapitre 4  Infarctus du myocarde, PDF pages 13 à 16.",
          "answers": [
            "L’IDM peut se compliquer de tachycardie ventriculaire ou de fibrillation ventriculaire.",
            "L’épreuve d’effort peut être réalisée secondairement pour rechercher une ischémie résiduelle, selon indication."
          ],
          "correct": [
            "L’IDM peut se compliquer de tachycardie ventriculaire ou de fibrillation ventriculaire.",
            "L’épreuve d’effort peut être réalisée secondairement pour rechercher une ischémie résiduelle, selon indication."
          ]
        },
        {
          "text": "À propos de effort, choisissez les deux propositions exactes.",
          "options": [
            "L’épreuve d’effort peut être réalisée secondairement pour rechercher une ischémie résiduelle, selon indication.",
            "L’IDM correspond à la nécrose d’une partie du muscle cardiaque insuffisamment irriguée par une artère coronaire.",
            "Un IDM peut attendre plusieurs jours avant toute prise en charge.",
            "La douleur de l’IDM cède toujours définitivement après une seule prise de trinitrine."
          ],
          "type": "qcm",
          "explanation": "Elle n’est pas réalisée pendant la phase aiguë instable. L’occlusion coronaire prive le myocarde d’oxygène et provoque la nécrose.",
          "source": "Cours de cardiologie L3, Chapitre 4  Infarctus du myocarde, PDF pages 13 à 16.",
          "answers": [
            "L’épreuve d’effort peut être réalisée secondairement pour rechercher une ischémie résiduelle, selon indication.",
            "L’IDM correspond à la nécrose d’une partie du muscle cardiaque insuffisamment irriguée par une artère coronaire."
          ],
          "correct": [
            "L’épreuve d’effort peut être réalisée secondairement pour rechercher une ischémie résiduelle, selon indication.",
            "L’IDM correspond à la nécrose d’une partie du muscle cardiaque insuffisamment irriguée par une artère coronaire."
          ]
        }
      ]
    },
    {
      "id": "ide-5",
      "title": "Cardiologie L3 — Insuffisance cardiaque",
      "matter": "Cardiologie L3",
      "filiere": "IDE",
      "description": "Sujet 5 — 60 questions corrigées",
      "instructions": "QCD : Vrai ou Faux. QCM : sélectionner la ou les bonnes réponses.",
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
          "text": "L’insuffisance cardiaque correspond à l’incapacité du cœur à assurer un débit adapté aux besoins de l’organisme.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "La pompe cardiaque devient insuffisante.",
          "source": "Cours de cardiologie L3, Chapitre 5  Insuffisance cardiaque, PDF pages 16 à 18.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "L’insuffisance cardiaque correspond toujours à une augmentation parfaite du débit cardiaque.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "La pompe cardiaque devient insuffisante.",
          "source": "Cours de cardiologie L3, Chapitre 5  Insuffisance cardiaque, PDF pages 16 à 18.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "La défaillance ventriculaire entraîne une augmentation des pressions en amont et une baisse de perfusion en aval.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "La congestion et l’hypoperfusion expliquent les signes cliniques.",
          "source": "Cours de cardiologie L3, Chapitre 5  Insuffisance cardiaque, PDF pages 16 à 18.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "La défaillance ventriculaire améliore toujours la perfusion en aval.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "La congestion et l’hypoperfusion expliquent les signes cliniques.",
          "source": "Cours de cardiologie L3, Chapitre 5  Insuffisance cardiaque, PDF pages 16 à 18.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Dans l’insuffisance cardiaque gauche, les signes respiratoires dominent.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "La congestion pulmonaire entraîne dyspnée et toux.",
          "source": "Cours de cardiologie L3, Chapitre 5  Insuffisance cardiaque, PDF pages 16 à 18.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "L’insuffisance cardiaque gauche ne provoque jamais de dyspnée.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "La congestion pulmonaire entraîne dyspnée et toux.",
          "source": "Cours de cardiologie L3, Chapitre 5  Insuffisance cardiaque, PDF pages 16 à 18.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Dans l’insuffisance cardiaque droite, les œdèmes, l’hépatomégalie et la turgescence jugulaire sont fréquents.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "La congestion veineuse systémique explique ces signes.",
          "source": "Cours de cardiologie L3, Chapitre 5  Insuffisance cardiaque, PDF pages 16 à 18.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "L’insuffisance cardiaque droite se manifeste uniquement par une douleur dentaire.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "La congestion veineuse systémique explique ces signes.",
          "source": "Cours de cardiologie L3, Chapitre 5  Insuffisance cardiaque, PDF pages 16 à 18.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "L’insuffisance cardiaque globale associe des signes gauches et droits.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Les deux ventricules sont concernés.",
          "source": "Cours de cardiologie L3, Chapitre 5  Insuffisance cardiaque, PDF pages 16 à 18.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "L’insuffisance cardiaque globale exclut les signes respiratoires.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Les deux ventricules sont concernés.",
          "source": "Cours de cardiologie L3, Chapitre 5  Insuffisance cardiaque, PDF pages 16 à 18.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "La dyspnée peut évoluer de l’effort vers le repos puis l’orthopnée.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "L’orthopnée est une dyspnée aggravée en décubitus.",
          "source": "Cours de cardiologie L3, Chapitre 5  Insuffisance cardiaque, PDF pages 16 à 18.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "L’orthopnée correspond à une amélioration de la respiration en position couchée.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "L’orthopnée est une dyspnée aggravée en décubitus.",
          "source": "Cours de cardiologie L3, Chapitre 5  Insuffisance cardiaque, PDF pages 16 à 18.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Une insuffisance avancée peut évoluer vers une anasarque avec épanchements séreux.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "La rétention hydro-sodée peut devenir généralisée.",
          "source": "Cours de cardiologie L3, Chapitre 5  Insuffisance cardiaque, PDF pages 16 à 18.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "L’anasarque désigne uniquement une sécheresse cutanée localisée.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "La rétention hydro-sodée peut devenir généralisée.",
          "source": "Cours de cardiologie L3, Chapitre 5  Insuffisance cardiaque, PDF pages 16 à 18.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Le cours recommande un régime pauvre en sel, l’insuffisant cardiaque ne devant pas dépasser environ 6 g de sel par jour.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "La réduction sodée limite la rétention hydrique.",
          "source": "Cours de cardiologie L3, Chapitre 5  Insuffisance cardiaque, PDF pages 16 à 18.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "Un apport très élevé en sel est recommandé dans toute insuffisance cardiaque.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "La réduction sodée limite la rétention hydrique.",
          "source": "Cours de cardiologie L3, Chapitre 5  Insuffisance cardiaque, PDF pages 16 à 18.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "La surveillance régulière du poids aide à dépister une rétention hydrique.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Elle peut annoncer une décompensation.",
          "source": "Cours de cardiologie L3, Chapitre 5  Insuffisance cardiaque, PDF pages 16 à 18.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "Une prise de poids rapide n’a aucun intérêt dans la surveillance.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Elle peut annoncer une décompensation.",
          "source": "Cours de cardiologie L3, Chapitre 5  Insuffisance cardiaque, PDF pages 16 à 18.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "La diurèse doit être surveillée chez l’insuffisant cardiaque.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Elle renseigne sur la fonction rénale et l’efficacité thérapeutique.",
          "source": "Cours de cardiologie L3, Chapitre 5  Insuffisance cardiaque, PDF pages 16 à 18.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "La surveillance de la diurèse est inutile sous diurétique.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Elle renseigne sur la fonction rénale et l’efficacité thérapeutique.",
          "source": "Cours de cardiologie L3, Chapitre 5  Insuffisance cardiaque, PDF pages 16 à 18.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Les IEC diminuent la charge de travail du ventricule mais peuvent provoquer toux, hypotension et hyperkaliémie.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le cours cite ces effets indésirables et le risque rénal.",
          "source": "Cours de cardiologie L3, Chapitre 5  Insuffisance cardiaque, PDF pages 16 à 18.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "Les IEC provoquent systématiquement une hypokaliémie sans toux.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le cours cite ces effets indésirables et le risque rénal.",
          "source": "Cours de cardiologie L3, Chapitre 5  Insuffisance cardiaque, PDF pages 16 à 18.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Les bêtabloquants réduisent l’activité sympathique et la fréquence cardiaque.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Ils réduisent le travail et les besoins en oxygène du myocarde.",
          "source": "Cours de cardiologie L3, Chapitre 5  Insuffisance cardiaque, PDF pages 16 à 18.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "Les bêtabloquants ont pour objectif d’accélérer systématiquement le cœur.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Ils réduisent le travail et les besoins en oxygène du myocarde.",
          "source": "Cours de cardiologie L3, Chapitre 5  Insuffisance cardiaque, PDF pages 16 à 18.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Le furosémide augmente l’élimination hydro-sodée et peut provoquer déshydratation et mictions impérieuses.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "La déplétion diminue la congestion mais impose une surveillance.",
          "source": "Cours de cardiologie L3, Chapitre 5  Insuffisance cardiaque, PDF pages 16 à 18.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "Le furosémide augmente volontairement les œdèmes.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "La déplétion diminue la congestion mais impose une surveillance.",
          "source": "Cours de cardiologie L3, Chapitre 5  Insuffisance cardiaque, PDF pages 16 à 18.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "La digoxine renforce la contractilité et peut provoquer bradycardie, vertiges, nausées ou confusion en cas de surdosage.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Sa marge thérapeutique étroite impose une surveillance.",
          "source": "Cours de cardiologie L3, Chapitre 5  Insuffisance cardiaque, PDF pages 16 à 18.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "La digoxine ne nécessite aucune surveillance en raison d’une marge thérapeutique illimitée.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Sa marge thérapeutique étroite impose une surveillance.",
          "source": "Cours de cardiologie L3, Chapitre 5  Insuffisance cardiaque, PDF pages 16 à 18.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Prise de poids rapide, œdèmes et essoufflement peuvent annoncer une décompensation.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Ces signes doivent faire rechercher OAP ou aggravation cardiaque.",
          "source": "Cours de cardiologie L3, Chapitre 5  Insuffisance cardiaque, PDF pages 16 à 18.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "Une prise de poids rapide avec dyspnée est toujours rassurante.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Ces signes doivent faire rechercher OAP ou aggravation cardiaque.",
          "source": "Cours de cardiologie L3, Chapitre 5  Insuffisance cardiaque, PDF pages 16 à 18.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Concernant définition, quelle proposition est correcte ?",
          "options": [
            "L’insuffisance cardiaque correspond à l’incapacité du cœur à assurer un débit adapté aux besoins de l’organisme.",
            "La défaillance ventriculaire améliore toujours la perfusion en aval.",
            "L’insuffisance cardiaque gauche ne provoque jamais de dyspnée.",
            "L’insuffisance cardiaque droite se manifeste uniquement par une douleur dentaire."
          ],
          "type": "qcm",
          "explanation": "La pompe cardiaque devient insuffisante.",
          "source": "Cours de cardiologie L3, Chapitre 5  Insuffisance cardiaque, PDF pages 16 à 18.",
          "answers": [
            "L’insuffisance cardiaque correspond à l’incapacité du cœur à assurer un débit adapté aux besoins de l’organisme."
          ],
          "correct": [
            "L’insuffisance cardiaque correspond à l’incapacité du cœur à assurer un débit adapté aux besoins de l’organisme."
          ]
        },
        {
          "text": "Concernant conséquences, quelle proposition est correcte ?",
          "options": [
            "La défaillance ventriculaire entraîne une augmentation des pressions en amont et une baisse de perfusion en aval.",
            "L’insuffisance cardiaque gauche ne provoque jamais de dyspnée.",
            "L’insuffisance cardiaque droite se manifeste uniquement par une douleur dentaire.",
            "L’insuffisance cardiaque globale exclut les signes respiratoires."
          ],
          "type": "qcm",
          "explanation": "La congestion et l’hypoperfusion expliquent les signes cliniques.",
          "source": "Cours de cardiologie L3, Chapitre 5  Insuffisance cardiaque, PDF pages 16 à 18.",
          "answers": [
            "La défaillance ventriculaire entraîne une augmentation des pressions en amont et une baisse de perfusion en aval."
          ],
          "correct": [
            "La défaillance ventriculaire entraîne une augmentation des pressions en amont et une baisse de perfusion en aval."
          ]
        },
        {
          "text": "Concernant IC gauche, quelle proposition est correcte ?",
          "options": [
            "Dans l’insuffisance cardiaque gauche, les signes respiratoires dominent.",
            "L’insuffisance cardiaque droite se manifeste uniquement par une douleur dentaire.",
            "L’insuffisance cardiaque globale exclut les signes respiratoires.",
            "L’orthopnée correspond à une amélioration de la respiration en position couchée."
          ],
          "type": "qcm",
          "explanation": "La congestion pulmonaire entraîne dyspnée et toux.",
          "source": "Cours de cardiologie L3, Chapitre 5  Insuffisance cardiaque, PDF pages 16 à 18.",
          "answers": [
            "Dans l’insuffisance cardiaque gauche, les signes respiratoires dominent."
          ],
          "correct": [
            "Dans l’insuffisance cardiaque gauche, les signes respiratoires dominent."
          ]
        },
        {
          "text": "Concernant IC droite, quelle proposition est correcte ?",
          "options": [
            "Dans l’insuffisance cardiaque droite, les œdèmes, l’hépatomégalie et la turgescence jugulaire sont fréquents.",
            "L’insuffisance cardiaque globale exclut les signes respiratoires.",
            "L’orthopnée correspond à une amélioration de la respiration en position couchée.",
            "L’anasarque désigne uniquement une sécheresse cutanée localisée."
          ],
          "type": "qcm",
          "explanation": "La congestion veineuse systémique explique ces signes.",
          "source": "Cours de cardiologie L3, Chapitre 5  Insuffisance cardiaque, PDF pages 16 à 18.",
          "answers": [
            "Dans l’insuffisance cardiaque droite, les œdèmes, l’hépatomégalie et la turgescence jugulaire sont fréquents."
          ],
          "correct": [
            "Dans l’insuffisance cardiaque droite, les œdèmes, l’hépatomégalie et la turgescence jugulaire sont fréquents."
          ]
        },
        {
          "text": "Concernant IC globale, quelle proposition est correcte ?",
          "options": [
            "L’insuffisance cardiaque globale associe des signes gauches et droits.",
            "L’orthopnée correspond à une amélioration de la respiration en position couchée.",
            "L’anasarque désigne uniquement une sécheresse cutanée localisée.",
            "Un apport très élevé en sel est recommandé dans toute insuffisance cardiaque."
          ],
          "type": "qcm",
          "explanation": "Les deux ventricules sont concernés.",
          "source": "Cours de cardiologie L3, Chapitre 5  Insuffisance cardiaque, PDF pages 16 à 18.",
          "answers": [
            "L’insuffisance cardiaque globale associe des signes gauches et droits."
          ],
          "correct": [
            "L’insuffisance cardiaque globale associe des signes gauches et droits."
          ]
        },
        {
          "text": "Concernant orthopnée, quelle proposition est correcte ?",
          "options": [
            "La dyspnée peut évoluer de l’effort vers le repos puis l’orthopnée.",
            "L’anasarque désigne uniquement une sécheresse cutanée localisée.",
            "Un apport très élevé en sel est recommandé dans toute insuffisance cardiaque.",
            "Une prise de poids rapide n’a aucun intérêt dans la surveillance."
          ],
          "type": "qcm",
          "explanation": "L’orthopnée est une dyspnée aggravée en décubitus.",
          "source": "Cours de cardiologie L3, Chapitre 5  Insuffisance cardiaque, PDF pages 16 à 18.",
          "answers": [
            "La dyspnée peut évoluer de l’effort vers le repos puis l’orthopnée."
          ],
          "correct": [
            "La dyspnée peut évoluer de l’effort vers le repos puis l’orthopnée."
          ]
        },
        {
          "text": "Concernant anasarque, quelle proposition est correcte ?",
          "options": [
            "Une insuffisance avancée peut évoluer vers une anasarque avec épanchements séreux.",
            "Un apport très élevé en sel est recommandé dans toute insuffisance cardiaque.",
            "Une prise de poids rapide n’a aucun intérêt dans la surveillance.",
            "La surveillance de la diurèse est inutile sous diurétique."
          ],
          "type": "qcm",
          "explanation": "La rétention hydro-sodée peut devenir généralisée.",
          "source": "Cours de cardiologie L3, Chapitre 5  Insuffisance cardiaque, PDF pages 16 à 18.",
          "answers": [
            "Une insuffisance avancée peut évoluer vers une anasarque avec épanchements séreux."
          ],
          "correct": [
            "Une insuffisance avancée peut évoluer vers une anasarque avec épanchements séreux."
          ]
        },
        {
          "text": "Concernant régime, quelle proposition est correcte ?",
          "options": [
            "Le cours recommande un régime pauvre en sel, l’insuffisant cardiaque ne devant pas dépasser environ 6 g de sel par jour.",
            "Une prise de poids rapide n’a aucun intérêt dans la surveillance.",
            "La surveillance de la diurèse est inutile sous diurétique.",
            "Les IEC provoquent systématiquement une hypokaliémie sans toux."
          ],
          "type": "qcm",
          "explanation": "La réduction sodée limite la rétention hydrique.",
          "source": "Cours de cardiologie L3, Chapitre 5  Insuffisance cardiaque, PDF pages 16 à 18.",
          "answers": [
            "Le cours recommande un régime pauvre en sel, l’insuffisant cardiaque ne devant pas dépasser environ 6 g de sel par jour."
          ],
          "correct": [
            "Le cours recommande un régime pauvre en sel, l’insuffisant cardiaque ne devant pas dépasser environ 6 g de sel par jour."
          ]
        },
        {
          "text": "Concernant poids, quelle proposition est correcte ?",
          "options": [
            "La surveillance régulière du poids aide à dépister une rétention hydrique.",
            "La surveillance de la diurèse est inutile sous diurétique.",
            "Les IEC provoquent systématiquement une hypokaliémie sans toux.",
            "Les bêtabloquants ont pour objectif d’accélérer systématiquement le cœur."
          ],
          "type": "qcm",
          "explanation": "Elle peut annoncer une décompensation.",
          "source": "Cours de cardiologie L3, Chapitre 5  Insuffisance cardiaque, PDF pages 16 à 18.",
          "answers": [
            "La surveillance régulière du poids aide à dépister une rétention hydrique."
          ],
          "correct": [
            "La surveillance régulière du poids aide à dépister une rétention hydrique."
          ]
        },
        {
          "text": "Concernant diurèse, quelle proposition est correcte ?",
          "options": [
            "La diurèse doit être surveillée chez l’insuffisant cardiaque.",
            "Les IEC provoquent systématiquement une hypokaliémie sans toux.",
            "Les bêtabloquants ont pour objectif d’accélérer systématiquement le cœur.",
            "Le furosémide augmente volontairement les œdèmes."
          ],
          "type": "qcm",
          "explanation": "Elle renseigne sur la fonction rénale et l’efficacité thérapeutique.",
          "source": "Cours de cardiologie L3, Chapitre 5  Insuffisance cardiaque, PDF pages 16 à 18.",
          "answers": [
            "La diurèse doit être surveillée chez l’insuffisant cardiaque."
          ],
          "correct": [
            "La diurèse doit être surveillée chez l’insuffisant cardiaque."
          ]
        },
        {
          "text": "Concernant IEC, quelle proposition est correcte ?",
          "options": [
            "Les IEC diminuent la charge de travail du ventricule mais peuvent provoquer toux, hypotension et hyperkaliémie.",
            "Les bêtabloquants ont pour objectif d’accélérer systématiquement le cœur.",
            "Le furosémide augmente volontairement les œdèmes.",
            "La digoxine ne nécessite aucune surveillance en raison d’une marge thérapeutique illimitée."
          ],
          "type": "qcm",
          "explanation": "Le cours cite ces effets indésirables et le risque rénal.",
          "source": "Cours de cardiologie L3, Chapitre 5  Insuffisance cardiaque, PDF pages 16 à 18.",
          "answers": [
            "Les IEC diminuent la charge de travail du ventricule mais peuvent provoquer toux, hypotension et hyperkaliémie."
          ],
          "correct": [
            "Les IEC diminuent la charge de travail du ventricule mais peuvent provoquer toux, hypotension et hyperkaliémie."
          ]
        },
        {
          "text": "Concernant bêtabloquant, quelle proposition est correcte ?",
          "options": [
            "Les bêtabloquants réduisent l’activité sympathique et la fréquence cardiaque.",
            "Le furosémide augmente volontairement les œdèmes.",
            "La digoxine ne nécessite aucune surveillance en raison d’une marge thérapeutique illimitée.",
            "Une prise de poids rapide avec dyspnée est toujours rassurante."
          ],
          "type": "qcm",
          "explanation": "Ils réduisent le travail et les besoins en oxygène du myocarde.",
          "source": "Cours de cardiologie L3, Chapitre 5  Insuffisance cardiaque, PDF pages 16 à 18.",
          "answers": [
            "Les bêtabloquants réduisent l’activité sympathique et la fréquence cardiaque."
          ],
          "correct": [
            "Les bêtabloquants réduisent l’activité sympathique et la fréquence cardiaque."
          ]
        },
        {
          "text": "Concernant diurétique, quelle proposition est correcte ?",
          "options": [
            "Le furosémide augmente l’élimination hydro-sodée et peut provoquer déshydratation et mictions impérieuses.",
            "La digoxine ne nécessite aucune surveillance en raison d’une marge thérapeutique illimitée.",
            "Une prise de poids rapide avec dyspnée est toujours rassurante.",
            "L’insuffisance cardiaque correspond toujours à une augmentation parfaite du débit cardiaque."
          ],
          "type": "qcm",
          "explanation": "La déplétion diminue la congestion mais impose une surveillance.",
          "source": "Cours de cardiologie L3, Chapitre 5  Insuffisance cardiaque, PDF pages 16 à 18.",
          "answers": [
            "Le furosémide augmente l’élimination hydro-sodée et peut provoquer déshydratation et mictions impérieuses."
          ],
          "correct": [
            "Le furosémide augmente l’élimination hydro-sodée et peut provoquer déshydratation et mictions impérieuses."
          ]
        },
        {
          "text": "Concernant digitalique, quelle proposition est correcte ?",
          "options": [
            "La digoxine renforce la contractilité et peut provoquer bradycardie, vertiges, nausées ou confusion en cas de surdosage.",
            "Une prise de poids rapide avec dyspnée est toujours rassurante.",
            "L’insuffisance cardiaque correspond toujours à une augmentation parfaite du débit cardiaque.",
            "La défaillance ventriculaire améliore toujours la perfusion en aval."
          ],
          "type": "qcm",
          "explanation": "Sa marge thérapeutique étroite impose une surveillance.",
          "source": "Cours de cardiologie L3, Chapitre 5  Insuffisance cardiaque, PDF pages 16 à 18.",
          "answers": [
            "La digoxine renforce la contractilité et peut provoquer bradycardie, vertiges, nausées ou confusion en cas de surdosage."
          ],
          "correct": [
            "La digoxine renforce la contractilité et peut provoquer bradycardie, vertiges, nausées ou confusion en cas de surdosage."
          ]
        },
        {
          "text": "Concernant alerte, quelle proposition est correcte ?",
          "options": [
            "Prise de poids rapide, œdèmes et essoufflement peuvent annoncer une décompensation.",
            "L’insuffisance cardiaque correspond toujours à une augmentation parfaite du débit cardiaque.",
            "La défaillance ventriculaire améliore toujours la perfusion en aval.",
            "L’insuffisance cardiaque gauche ne provoque jamais de dyspnée."
          ],
          "type": "qcm",
          "explanation": "Ces signes doivent faire rechercher OAP ou aggravation cardiaque.",
          "source": "Cours de cardiologie L3, Chapitre 5  Insuffisance cardiaque, PDF pages 16 à 18.",
          "answers": [
            "Prise de poids rapide, œdèmes et essoufflement peuvent annoncer une décompensation."
          ],
          "correct": [
            "Prise de poids rapide, œdèmes et essoufflement peuvent annoncer une décompensation."
          ]
        },
        {
          "text": "À propos de définition, choisissez les deux propositions exactes.",
          "options": [
            "L’insuffisance cardiaque correspond à l’incapacité du cœur à assurer un débit adapté aux besoins de l’organisme.",
            "La défaillance ventriculaire entraîne une augmentation des pressions en amont et une baisse de perfusion en aval.",
            "L’insuffisance cardiaque gauche ne provoque jamais de dyspnée.",
            "L’insuffisance cardiaque droite se manifeste uniquement par une douleur dentaire."
          ],
          "type": "qcm",
          "explanation": "La pompe cardiaque devient insuffisante. La congestion et l’hypoperfusion expliquent les signes cliniques.",
          "source": "Cours de cardiologie L3, Chapitre 5  Insuffisance cardiaque, PDF pages 16 à 18.",
          "answers": [
            "L’insuffisance cardiaque correspond à l’incapacité du cœur à assurer un débit adapté aux besoins de l’organisme.",
            "La défaillance ventriculaire entraîne une augmentation des pressions en amont et une baisse de perfusion en aval."
          ],
          "correct": [
            "L’insuffisance cardiaque correspond à l’incapacité du cœur à assurer un débit adapté aux besoins de l’organisme.",
            "La défaillance ventriculaire entraîne une augmentation des pressions en amont et une baisse de perfusion en aval."
          ]
        },
        {
          "text": "À propos de conséquences, choisissez les deux propositions exactes.",
          "options": [
            "La défaillance ventriculaire entraîne une augmentation des pressions en amont et une baisse de perfusion en aval.",
            "Dans l’insuffisance cardiaque gauche, les signes respiratoires dominent.",
            "L’insuffisance cardiaque droite se manifeste uniquement par une douleur dentaire.",
            "L’insuffisance cardiaque globale exclut les signes respiratoires."
          ],
          "type": "qcm",
          "explanation": "La congestion et l’hypoperfusion expliquent les signes cliniques. La congestion pulmonaire entraîne dyspnée et toux.",
          "source": "Cours de cardiologie L3, Chapitre 5  Insuffisance cardiaque, PDF pages 16 à 18.",
          "answers": [
            "La défaillance ventriculaire entraîne une augmentation des pressions en amont et une baisse de perfusion en aval.",
            "Dans l’insuffisance cardiaque gauche, les signes respiratoires dominent."
          ],
          "correct": [
            "La défaillance ventriculaire entraîne une augmentation des pressions en amont et une baisse de perfusion en aval.",
            "Dans l’insuffisance cardiaque gauche, les signes respiratoires dominent."
          ]
        },
        {
          "text": "À propos de IC gauche, choisissez les deux propositions exactes.",
          "options": [
            "Dans l’insuffisance cardiaque gauche, les signes respiratoires dominent.",
            "Dans l’insuffisance cardiaque droite, les œdèmes, l’hépatomégalie et la turgescence jugulaire sont fréquents.",
            "L’insuffisance cardiaque globale exclut les signes respiratoires.",
            "L’orthopnée correspond à une amélioration de la respiration en position couchée."
          ],
          "type": "qcm",
          "explanation": "La congestion pulmonaire entraîne dyspnée et toux. La congestion veineuse systémique explique ces signes.",
          "source": "Cours de cardiologie L3, Chapitre 5  Insuffisance cardiaque, PDF pages 16 à 18.",
          "answers": [
            "Dans l’insuffisance cardiaque gauche, les signes respiratoires dominent.",
            "Dans l’insuffisance cardiaque droite, les œdèmes, l’hépatomégalie et la turgescence jugulaire sont fréquents."
          ],
          "correct": [
            "Dans l’insuffisance cardiaque gauche, les signes respiratoires dominent.",
            "Dans l’insuffisance cardiaque droite, les œdèmes, l’hépatomégalie et la turgescence jugulaire sont fréquents."
          ]
        },
        {
          "text": "À propos de IC droite, choisissez les deux propositions exactes.",
          "options": [
            "Dans l’insuffisance cardiaque droite, les œdèmes, l’hépatomégalie et la turgescence jugulaire sont fréquents.",
            "L’insuffisance cardiaque globale associe des signes gauches et droits.",
            "L’orthopnée correspond à une amélioration de la respiration en position couchée.",
            "L’anasarque désigne uniquement une sécheresse cutanée localisée."
          ],
          "type": "qcm",
          "explanation": "La congestion veineuse systémique explique ces signes. Les deux ventricules sont concernés.",
          "source": "Cours de cardiologie L3, Chapitre 5  Insuffisance cardiaque, PDF pages 16 à 18.",
          "answers": [
            "Dans l’insuffisance cardiaque droite, les œdèmes, l’hépatomégalie et la turgescence jugulaire sont fréquents.",
            "L’insuffisance cardiaque globale associe des signes gauches et droits."
          ],
          "correct": [
            "Dans l’insuffisance cardiaque droite, les œdèmes, l’hépatomégalie et la turgescence jugulaire sont fréquents.",
            "L’insuffisance cardiaque globale associe des signes gauches et droits."
          ]
        },
        {
          "text": "À propos de IC globale, choisissez les deux propositions exactes.",
          "options": [
            "L’insuffisance cardiaque globale associe des signes gauches et droits.",
            "La dyspnée peut évoluer de l’effort vers le repos puis l’orthopnée.",
            "L’anasarque désigne uniquement une sécheresse cutanée localisée.",
            "Un apport très élevé en sel est recommandé dans toute insuffisance cardiaque."
          ],
          "type": "qcm",
          "explanation": "Les deux ventricules sont concernés. L’orthopnée est une dyspnée aggravée en décubitus.",
          "source": "Cours de cardiologie L3, Chapitre 5  Insuffisance cardiaque, PDF pages 16 à 18.",
          "answers": [
            "L’insuffisance cardiaque globale associe des signes gauches et droits.",
            "La dyspnée peut évoluer de l’effort vers le repos puis l’orthopnée."
          ],
          "correct": [
            "L’insuffisance cardiaque globale associe des signes gauches et droits.",
            "La dyspnée peut évoluer de l’effort vers le repos puis l’orthopnée."
          ]
        },
        {
          "text": "À propos de orthopnée, choisissez les deux propositions exactes.",
          "options": [
            "La dyspnée peut évoluer de l’effort vers le repos puis l’orthopnée.",
            "Une insuffisance avancée peut évoluer vers une anasarque avec épanchements séreux.",
            "Un apport très élevé en sel est recommandé dans toute insuffisance cardiaque.",
            "Une prise de poids rapide n’a aucun intérêt dans la surveillance."
          ],
          "type": "qcm",
          "explanation": "L’orthopnée est une dyspnée aggravée en décubitus. La rétention hydro-sodée peut devenir généralisée.",
          "source": "Cours de cardiologie L3, Chapitre 5  Insuffisance cardiaque, PDF pages 16 à 18.",
          "answers": [
            "La dyspnée peut évoluer de l’effort vers le repos puis l’orthopnée.",
            "Une insuffisance avancée peut évoluer vers une anasarque avec épanchements séreux."
          ],
          "correct": [
            "La dyspnée peut évoluer de l’effort vers le repos puis l’orthopnée.",
            "Une insuffisance avancée peut évoluer vers une anasarque avec épanchements séreux."
          ]
        },
        {
          "text": "À propos de anasarque, choisissez les deux propositions exactes.",
          "options": [
            "Une insuffisance avancée peut évoluer vers une anasarque avec épanchements séreux.",
            "Le cours recommande un régime pauvre en sel, l’insuffisant cardiaque ne devant pas dépasser environ 6 g de sel par jour.",
            "Une prise de poids rapide n’a aucun intérêt dans la surveillance.",
            "La surveillance de la diurèse est inutile sous diurétique."
          ],
          "type": "qcm",
          "explanation": "La rétention hydro-sodée peut devenir généralisée. La réduction sodée limite la rétention hydrique.",
          "source": "Cours de cardiologie L3, Chapitre 5  Insuffisance cardiaque, PDF pages 16 à 18.",
          "answers": [
            "Une insuffisance avancée peut évoluer vers une anasarque avec épanchements séreux.",
            "Le cours recommande un régime pauvre en sel, l’insuffisant cardiaque ne devant pas dépasser environ 6 g de sel par jour."
          ],
          "correct": [
            "Une insuffisance avancée peut évoluer vers une anasarque avec épanchements séreux.",
            "Le cours recommande un régime pauvre en sel, l’insuffisant cardiaque ne devant pas dépasser environ 6 g de sel par jour."
          ]
        },
        {
          "text": "À propos de régime, choisissez les deux propositions exactes.",
          "options": [
            "Le cours recommande un régime pauvre en sel, l’insuffisant cardiaque ne devant pas dépasser environ 6 g de sel par jour.",
            "La surveillance régulière du poids aide à dépister une rétention hydrique.",
            "La surveillance de la diurèse est inutile sous diurétique.",
            "Les IEC provoquent systématiquement une hypokaliémie sans toux."
          ],
          "type": "qcm",
          "explanation": "La réduction sodée limite la rétention hydrique. Elle peut annoncer une décompensation.",
          "source": "Cours de cardiologie L3, Chapitre 5  Insuffisance cardiaque, PDF pages 16 à 18.",
          "answers": [
            "Le cours recommande un régime pauvre en sel, l’insuffisant cardiaque ne devant pas dépasser environ 6 g de sel par jour.",
            "La surveillance régulière du poids aide à dépister une rétention hydrique."
          ],
          "correct": [
            "Le cours recommande un régime pauvre en sel, l’insuffisant cardiaque ne devant pas dépasser environ 6 g de sel par jour.",
            "La surveillance régulière du poids aide à dépister une rétention hydrique."
          ]
        },
        {
          "text": "À propos de poids, choisissez les deux propositions exactes.",
          "options": [
            "La surveillance régulière du poids aide à dépister une rétention hydrique.",
            "La diurèse doit être surveillée chez l’insuffisant cardiaque.",
            "Les IEC provoquent systématiquement une hypokaliémie sans toux.",
            "Les bêtabloquants ont pour objectif d’accélérer systématiquement le cœur."
          ],
          "type": "qcm",
          "explanation": "Elle peut annoncer une décompensation. Elle renseigne sur la fonction rénale et l’efficacité thérapeutique.",
          "source": "Cours de cardiologie L3, Chapitre 5  Insuffisance cardiaque, PDF pages 16 à 18.",
          "answers": [
            "La surveillance régulière du poids aide à dépister une rétention hydrique.",
            "La diurèse doit être surveillée chez l’insuffisant cardiaque."
          ],
          "correct": [
            "La surveillance régulière du poids aide à dépister une rétention hydrique.",
            "La diurèse doit être surveillée chez l’insuffisant cardiaque."
          ]
        },
        {
          "text": "À propos de diurèse, choisissez les deux propositions exactes.",
          "options": [
            "La diurèse doit être surveillée chez l’insuffisant cardiaque.",
            "Les IEC diminuent la charge de travail du ventricule mais peuvent provoquer toux, hypotension et hyperkaliémie.",
            "Les bêtabloquants ont pour objectif d’accélérer systématiquement le cœur.",
            "Le furosémide augmente volontairement les œdèmes."
          ],
          "type": "qcm",
          "explanation": "Elle renseigne sur la fonction rénale et l’efficacité thérapeutique. Le cours cite ces effets indésirables et le risque rénal.",
          "source": "Cours de cardiologie L3, Chapitre 5  Insuffisance cardiaque, PDF pages 16 à 18.",
          "answers": [
            "La diurèse doit être surveillée chez l’insuffisant cardiaque.",
            "Les IEC diminuent la charge de travail du ventricule mais peuvent provoquer toux, hypotension et hyperkaliémie."
          ],
          "correct": [
            "La diurèse doit être surveillée chez l’insuffisant cardiaque.",
            "Les IEC diminuent la charge de travail du ventricule mais peuvent provoquer toux, hypotension et hyperkaliémie."
          ]
        },
        {
          "text": "À propos de IEC, choisissez les deux propositions exactes.",
          "options": [
            "Les IEC diminuent la charge de travail du ventricule mais peuvent provoquer toux, hypotension et hyperkaliémie.",
            "Les bêtabloquants réduisent l’activité sympathique et la fréquence cardiaque.",
            "Le furosémide augmente volontairement les œdèmes.",
            "La digoxine ne nécessite aucune surveillance en raison d’une marge thérapeutique illimitée."
          ],
          "type": "qcm",
          "explanation": "Le cours cite ces effets indésirables et le risque rénal. Ils réduisent le travail et les besoins en oxygène du myocarde.",
          "source": "Cours de cardiologie L3, Chapitre 5  Insuffisance cardiaque, PDF pages 16 à 18.",
          "answers": [
            "Les IEC diminuent la charge de travail du ventricule mais peuvent provoquer toux, hypotension et hyperkaliémie.",
            "Les bêtabloquants réduisent l’activité sympathique et la fréquence cardiaque."
          ],
          "correct": [
            "Les IEC diminuent la charge de travail du ventricule mais peuvent provoquer toux, hypotension et hyperkaliémie.",
            "Les bêtabloquants réduisent l’activité sympathique et la fréquence cardiaque."
          ]
        },
        {
          "text": "À propos de bêtabloquant, choisissez les deux propositions exactes.",
          "options": [
            "Les bêtabloquants réduisent l’activité sympathique et la fréquence cardiaque.",
            "Le furosémide augmente l’élimination hydro-sodée et peut provoquer déshydratation et mictions impérieuses.",
            "La digoxine ne nécessite aucune surveillance en raison d’une marge thérapeutique illimitée.",
            "Une prise de poids rapide avec dyspnée est toujours rassurante."
          ],
          "type": "qcm",
          "explanation": "Ils réduisent le travail et les besoins en oxygène du myocarde. La déplétion diminue la congestion mais impose une surveillance.",
          "source": "Cours de cardiologie L3, Chapitre 5  Insuffisance cardiaque, PDF pages 16 à 18.",
          "answers": [
            "Les bêtabloquants réduisent l’activité sympathique et la fréquence cardiaque.",
            "Le furosémide augmente l’élimination hydro-sodée et peut provoquer déshydratation et mictions impérieuses."
          ],
          "correct": [
            "Les bêtabloquants réduisent l’activité sympathique et la fréquence cardiaque.",
            "Le furosémide augmente l’élimination hydro-sodée et peut provoquer déshydratation et mictions impérieuses."
          ]
        },
        {
          "text": "À propos de diurétique, choisissez les deux propositions exactes.",
          "options": [
            "Le furosémide augmente l’élimination hydro-sodée et peut provoquer déshydratation et mictions impérieuses.",
            "La digoxine renforce la contractilité et peut provoquer bradycardie, vertiges, nausées ou confusion en cas de surdosage.",
            "Une prise de poids rapide avec dyspnée est toujours rassurante.",
            "L’insuffisance cardiaque correspond toujours à une augmentation parfaite du débit cardiaque."
          ],
          "type": "qcm",
          "explanation": "La déplétion diminue la congestion mais impose une surveillance. Sa marge thérapeutique étroite impose une surveillance.",
          "source": "Cours de cardiologie L3, Chapitre 5  Insuffisance cardiaque, PDF pages 16 à 18.",
          "answers": [
            "Le furosémide augmente l’élimination hydro-sodée et peut provoquer déshydratation et mictions impérieuses.",
            "La digoxine renforce la contractilité et peut provoquer bradycardie, vertiges, nausées ou confusion en cas de surdosage."
          ],
          "correct": [
            "Le furosémide augmente l’élimination hydro-sodée et peut provoquer déshydratation et mictions impérieuses.",
            "La digoxine renforce la contractilité et peut provoquer bradycardie, vertiges, nausées ou confusion en cas de surdosage."
          ]
        },
        {
          "text": "À propos de digitalique, choisissez les deux propositions exactes.",
          "options": [
            "La digoxine renforce la contractilité et peut provoquer bradycardie, vertiges, nausées ou confusion en cas de surdosage.",
            "Prise de poids rapide, œdèmes et essoufflement peuvent annoncer une décompensation.",
            "L’insuffisance cardiaque correspond toujours à une augmentation parfaite du débit cardiaque.",
            "La défaillance ventriculaire améliore toujours la perfusion en aval."
          ],
          "type": "qcm",
          "explanation": "Sa marge thérapeutique étroite impose une surveillance. Ces signes doivent faire rechercher OAP ou aggravation cardiaque.",
          "source": "Cours de cardiologie L3, Chapitre 5  Insuffisance cardiaque, PDF pages 16 à 18.",
          "answers": [
            "La digoxine renforce la contractilité et peut provoquer bradycardie, vertiges, nausées ou confusion en cas de surdosage.",
            "Prise de poids rapide, œdèmes et essoufflement peuvent annoncer une décompensation."
          ],
          "correct": [
            "La digoxine renforce la contractilité et peut provoquer bradycardie, vertiges, nausées ou confusion en cas de surdosage.",
            "Prise de poids rapide, œdèmes et essoufflement peuvent annoncer une décompensation."
          ]
        },
        {
          "text": "À propos de alerte, choisissez les deux propositions exactes.",
          "options": [
            "Prise de poids rapide, œdèmes et essoufflement peuvent annoncer une décompensation.",
            "L’insuffisance cardiaque correspond à l’incapacité du cœur à assurer un débit adapté aux besoins de l’organisme.",
            "La défaillance ventriculaire améliore toujours la perfusion en aval.",
            "L’insuffisance cardiaque gauche ne provoque jamais de dyspnée."
          ],
          "type": "qcm",
          "explanation": "Ces signes doivent faire rechercher OAP ou aggravation cardiaque. La pompe cardiaque devient insuffisante.",
          "source": "Cours de cardiologie L3, Chapitre 5  Insuffisance cardiaque, PDF pages 16 à 18.",
          "answers": [
            "Prise de poids rapide, œdèmes et essoufflement peuvent annoncer une décompensation.",
            "L’insuffisance cardiaque correspond à l’incapacité du cœur à assurer un débit adapté aux besoins de l’organisme."
          ],
          "correct": [
            "Prise de poids rapide, œdèmes et essoufflement peuvent annoncer une décompensation.",
            "L’insuffisance cardiaque correspond à l’incapacité du cœur à assurer un débit adapté aux besoins de l’organisme."
          ]
        }
      ]
    },
    {
      "id": "ide-6",
      "title": "Cardiologie L3 — Tubes de prélèvement",
      "matter": "Cardiologie L3",
      "filiere": "IDE",
      "description": "Sujet 6 — 60 questions corrigées",
      "instructions": "QCD : Vrai ou Faux. QCM : sélectionner la ou les bonnes réponses.",
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
          "text": "Les tubes doivent être prélevés selon un ordre défini afin de limiter les contaminations d’additifs.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le cours présente un ordre précis de prélèvement.",
          "source": "Cours de cardiologie L3, Chapitre 6  Tubes de prélèvement, PDF page 19.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "L’ordre de prélèvement des tubes n’a jamais d’importance.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le cours présente un ordre précis de prélèvement.",
          "source": "Cours de cardiologie L3, Chapitre 6  Tubes de prélèvement, PDF page 19.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Le tube sec est rouge et sert notamment à plusieurs examens de chimie et d’immunologie.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le cours associe le tube rouge au tube sec.",
          "source": "Cours de cardiologie L3, Chapitre 6  Tubes de prélèvement, PDF page 19.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "Le tube sec présenté dans le cours est obligatoirement noir.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le cours associe le tube rouge au tube sec.",
          "source": "Cours de cardiologie L3, Chapitre 6  Tubes de prélèvement, PDF page 19.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Le tube rouge doit être rempli au minimum à moitié.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Un volume suffisant est nécessaire pour l’analyse.",
          "source": "Cours de cardiologie L3, Chapitre 6  Tubes de prélèvement, PDF page 19.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "Le tube rouge doit rester vide après le prélèvement.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Un volume suffisant est nécessaire pour l’analyse.",
          "source": "Cours de cardiologie L3, Chapitre 6  Tubes de prélèvement, PDF page 19.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Le tube bleu contient du citrate de sodium et doit être rempli jusqu’au trait.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le rapport sang-anticoagulant doit être respecté.",
          "source": "Cours de cardiologie L3, Chapitre 6  Tubes de prélèvement, PDF page 19.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "Le tube bleu peut être rempli à n’importe quel niveau pour le bilan de coagulation.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le rapport sang-anticoagulant doit être respecté.",
          "source": "Cours de cardiologie L3, Chapitre 6  Tubes de prélèvement, PDF page 19.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Le tube bleu est utilisé notamment pour TP/INR, TCA/TCK, fibrinogène et D-dimères.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Ces examens explorent l’hémostase.",
          "source": "Cours de cardiologie L3, Chapitre 6  Tubes de prélèvement, PDF page 19.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "Le tube bleu est réservé uniquement à la glycémie différée.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Ces examens explorent l’hémostase.",
          "source": "Cours de cardiologie L3, Chapitre 6  Tubes de prélèvement, PDF page 19.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Le tube EDTA est violet.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le violet correspond à l’EDTA.",
          "source": "Cours de cardiologie L3, Chapitre 6  Tubes de prélèvement, PDF page 19.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "Le tube EDTA est noir dans le cours.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le violet correspond à l’EDTA.",
          "source": "Cours de cardiologie L3, Chapitre 6  Tubes de prélèvement, PDF page 19.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "La NFS et les plaquettes sont réalisées sur tube violet EDTA.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "L’EDTA conserve les éléments figurés du sang.",
          "source": "Cours de cardiologie L3, Chapitre 6  Tubes de prélèvement, PDF page 19.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "La NFS se réalise uniquement sur tube noir de VS.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "L’EDTA conserve les éléments figurés du sang.",
          "source": "Cours de cardiologie L3, Chapitre 6  Tubes de prélèvement, PDF page 19.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "L’hémoglobine glyquée peut être prélevée sur tube violet EDTA.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le cours la classe parmi les examens du tube violet.",
          "source": "Cours de cardiologie L3, Chapitre 6  Tubes de prélèvement, PDF page 19.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "L’HbA1c se prélève exclusivement sur un tube vide sans sang.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le cours la classe parmi les examens du tube violet.",
          "source": "Cours de cardiologie L3, Chapitre 6  Tubes de prélèvement, PDF page 19.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Le tube vert contient de l’héparine.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le vert correspond au tube hépariné.",
          "source": "Cours de cardiologie L3, Chapitre 6  Tubes de prélèvement, PDF page 19.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "Le tube vert contient obligatoirement du citrate pour la VS.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le vert correspond au tube hépariné.",
          "source": "Cours de cardiologie L3, Chapitre 6  Tubes de prélèvement, PDF page 19.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Le tube jaune avec gel SST doit être rempli au minimum à moitié.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le cours précise un remplissage minimal à moitié.",
          "source": "Cours de cardiologie L3, Chapitre 6  Tubes de prélèvement, PDF page 19.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "Le tube jaune doit toujours rester non rempli.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le cours précise un remplissage minimal à moitié.",
          "source": "Cours de cardiologie L3, Chapitre 6  Tubes de prélèvement, PDF page 19.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Le tube noir au citrate de sodium est utilisé pour la vitesse de sédimentation.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le tube noir est dédié à la VS dans ce cours.",
          "source": "Cours de cardiologie L3, Chapitre 6  Tubes de prélèvement, PDF page 19.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "La VS est réalisée uniquement sur tube gris fluoré.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le tube noir est dédié à la VS dans ce cours.",
          "source": "Cours de cardiologie L3, Chapitre 6  Tubes de prélèvement, PDF page 19.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Le tube gris contient du fluorure de sodium.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le fluorure inhibe la glycolyse.",
          "source": "Cours de cardiologie L3, Chapitre 6  Tubes de prélèvement, PDF page 19.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "Le tube gris est un tube EDTA violet.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le fluorure inhibe la glycolyse.",
          "source": "Cours de cardiologie L3, Chapitre 6  Tubes de prélèvement, PDF page 19.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Le tube gris est indiqué pour la glycémie lorsque l’analyse est différée de plus de quatre heures.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le fluorure stabilise la glycémie lors d’un délai prolongé.",
          "source": "Cours de cardiologie L3, Chapitre 6  Tubes de prélèvement, PDF page 19.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "Le tube gris est réservé uniquement au TP/INR.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le fluorure stabilise la glycémie lors d’un délai prolongé.",
          "source": "Cours de cardiologie L3, Chapitre 6  Tubes de prélèvement, PDF page 19.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Tous les tubes doivent être identifiés avec les informations du patient.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "L’identification prévient les erreurs d’attribution.",
          "source": "Cours de cardiologie L3, Chapitre 6  Tubes de prélèvement, PDF page 19.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "Il est recommandé de laisser les tubes sans identité.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "L’identification prévient les erreurs d’attribution.",
          "source": "Cours de cardiologie L3, Chapitre 6  Tubes de prélèvement, PDF page 19.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Les prélèvements d’un même patient doivent être placés dans un sachet individuel avec les documents dans la partie externe.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le conditionnement séparé sécurise le transport et la traçabilité.",
          "source": "Cours de cardiologie L3, Chapitre 6  Tubes de prélèvement, PDF page 19.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "Les prélèvements de plusieurs patients doivent être mélangés dans un sachet non identifié.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le conditionnement séparé sécurise le transport et la traçabilité.",
          "source": "Cours de cardiologie L3, Chapitre 6  Tubes de prélèvement, PDF page 19.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Concernant ordre, quelle proposition est correcte ?",
          "options": [
            "Les tubes doivent être prélevés selon un ordre défini afin de limiter les contaminations d’additifs.",
            "Le tube sec présenté dans le cours est obligatoirement noir.",
            "Le tube rouge doit rester vide après le prélèvement.",
            "Le tube bleu peut être rempli à n’importe quel niveau pour le bilan de coagulation."
          ],
          "type": "qcm",
          "explanation": "Le cours présente un ordre précis de prélèvement.",
          "source": "Cours de cardiologie L3, Chapitre 6  Tubes de prélèvement, PDF page 19.",
          "answers": [
            "Les tubes doivent être prélevés selon un ordre défini afin de limiter les contaminations d’additifs."
          ],
          "correct": [
            "Les tubes doivent être prélevés selon un ordre défini afin de limiter les contaminations d’additifs."
          ]
        },
        {
          "text": "Concernant tube sec, quelle proposition est correcte ?",
          "options": [
            "Le tube sec est rouge et sert notamment à plusieurs examens de chimie et d’immunologie.",
            "Le tube rouge doit rester vide après le prélèvement.",
            "Le tube bleu peut être rempli à n’importe quel niveau pour le bilan de coagulation.",
            "Le tube bleu est réservé uniquement à la glycémie différée."
          ],
          "type": "qcm",
          "explanation": "Le cours associe le tube rouge au tube sec.",
          "source": "Cours de cardiologie L3, Chapitre 6  Tubes de prélèvement, PDF page 19.",
          "answers": [
            "Le tube sec est rouge et sert notamment à plusieurs examens de chimie et d’immunologie."
          ],
          "correct": [
            "Le tube sec est rouge et sert notamment à plusieurs examens de chimie et d’immunologie."
          ]
        },
        {
          "text": "Concernant remplissage rouge, quelle proposition est correcte ?",
          "options": [
            "Le tube rouge doit être rempli au minimum à moitié.",
            "Le tube bleu peut être rempli à n’importe quel niveau pour le bilan de coagulation.",
            "Le tube bleu est réservé uniquement à la glycémie différée.",
            "Le tube EDTA est noir dans le cours."
          ],
          "type": "qcm",
          "explanation": "Un volume suffisant est nécessaire pour l’analyse.",
          "source": "Cours de cardiologie L3, Chapitre 6  Tubes de prélèvement, PDF page 19.",
          "answers": [
            "Le tube rouge doit être rempli au minimum à moitié."
          ],
          "correct": [
            "Le tube rouge doit être rempli au minimum à moitié."
          ]
        },
        {
          "text": "Concernant citrate bleu, quelle proposition est correcte ?",
          "options": [
            "Le tube bleu contient du citrate de sodium et doit être rempli jusqu’au trait.",
            "Le tube bleu est réservé uniquement à la glycémie différée.",
            "Le tube EDTA est noir dans le cours.",
            "La NFS se réalise uniquement sur tube noir de VS."
          ],
          "type": "qcm",
          "explanation": "Le rapport sang-anticoagulant doit être respecté.",
          "source": "Cours de cardiologie L3, Chapitre 6  Tubes de prélèvement, PDF page 19.",
          "answers": [
            "Le tube bleu contient du citrate de sodium et doit être rempli jusqu’au trait."
          ],
          "correct": [
            "Le tube bleu contient du citrate de sodium et doit être rempli jusqu’au trait."
          ]
        },
        {
          "text": "Concernant coagulation, quelle proposition est correcte ?",
          "options": [
            "Le tube bleu est utilisé notamment pour TP/INR, TCA/TCK, fibrinogène et D-dimères.",
            "Le tube EDTA est noir dans le cours.",
            "La NFS se réalise uniquement sur tube noir de VS.",
            "L’HbA1c se prélève exclusivement sur un tube vide sans sang."
          ],
          "type": "qcm",
          "explanation": "Ces examens explorent l’hémostase.",
          "source": "Cours de cardiologie L3, Chapitre 6  Tubes de prélèvement, PDF page 19.",
          "answers": [
            "Le tube bleu est utilisé notamment pour TP/INR, TCA/TCK, fibrinogène et D-dimères."
          ],
          "correct": [
            "Le tube bleu est utilisé notamment pour TP/INR, TCA/TCK, fibrinogène et D-dimères."
          ]
        },
        {
          "text": "Concernant EDTA, quelle proposition est correcte ?",
          "options": [
            "Le tube EDTA est violet.",
            "La NFS se réalise uniquement sur tube noir de VS.",
            "L’HbA1c se prélève exclusivement sur un tube vide sans sang.",
            "Le tube vert contient obligatoirement du citrate pour la VS."
          ],
          "type": "qcm",
          "explanation": "Le violet correspond à l’EDTA.",
          "source": "Cours de cardiologie L3, Chapitre 6  Tubes de prélèvement, PDF page 19.",
          "answers": [
            "Le tube EDTA est violet."
          ],
          "correct": [
            "Le tube EDTA est violet."
          ]
        },
        {
          "text": "Concernant NFS, quelle proposition est correcte ?",
          "options": [
            "La NFS et les plaquettes sont réalisées sur tube violet EDTA.",
            "L’HbA1c se prélève exclusivement sur un tube vide sans sang.",
            "Le tube vert contient obligatoirement du citrate pour la VS.",
            "Le tube jaune doit toujours rester non rempli."
          ],
          "type": "qcm",
          "explanation": "L’EDTA conserve les éléments figurés du sang.",
          "source": "Cours de cardiologie L3, Chapitre 6  Tubes de prélèvement, PDF page 19.",
          "answers": [
            "La NFS et les plaquettes sont réalisées sur tube violet EDTA."
          ],
          "correct": [
            "La NFS et les plaquettes sont réalisées sur tube violet EDTA."
          ]
        },
        {
          "text": "Concernant HbA1c, quelle proposition est correcte ?",
          "options": [
            "L’hémoglobine glyquée peut être prélevée sur tube violet EDTA.",
            "Le tube vert contient obligatoirement du citrate pour la VS.",
            "Le tube jaune doit toujours rester non rempli.",
            "La VS est réalisée uniquement sur tube gris fluoré."
          ],
          "type": "qcm",
          "explanation": "Le cours la classe parmi les examens du tube violet.",
          "source": "Cours de cardiologie L3, Chapitre 6  Tubes de prélèvement, PDF page 19.",
          "answers": [
            "L’hémoglobine glyquée peut être prélevée sur tube violet EDTA."
          ],
          "correct": [
            "L’hémoglobine glyquée peut être prélevée sur tube violet EDTA."
          ]
        },
        {
          "text": "Concernant héparine, quelle proposition est correcte ?",
          "options": [
            "Le tube vert contient de l’héparine.",
            "Le tube jaune doit toujours rester non rempli.",
            "La VS est réalisée uniquement sur tube gris fluoré.",
            "Le tube gris est un tube EDTA violet."
          ],
          "type": "qcm",
          "explanation": "Le vert correspond au tube hépariné.",
          "source": "Cours de cardiologie L3, Chapitre 6  Tubes de prélèvement, PDF page 19.",
          "answers": [
            "Le tube vert contient de l’héparine."
          ],
          "correct": [
            "Le tube vert contient de l’héparine."
          ]
        },
        {
          "text": "Concernant gel SST, quelle proposition est correcte ?",
          "options": [
            "Le tube jaune avec gel SST doit être rempli au minimum à moitié.",
            "La VS est réalisée uniquement sur tube gris fluoré.",
            "Le tube gris est un tube EDTA violet.",
            "Le tube gris est réservé uniquement au TP/INR."
          ],
          "type": "qcm",
          "explanation": "Le cours précise un remplissage minimal à moitié.",
          "source": "Cours de cardiologie L3, Chapitre 6  Tubes de prélèvement, PDF page 19.",
          "answers": [
            "Le tube jaune avec gel SST doit être rempli au minimum à moitié."
          ],
          "correct": [
            "Le tube jaune avec gel SST doit être rempli au minimum à moitié."
          ]
        },
        {
          "text": "Concernant VS, quelle proposition est correcte ?",
          "options": [
            "Le tube noir au citrate de sodium est utilisé pour la vitesse de sédimentation.",
            "Le tube gris est un tube EDTA violet.",
            "Le tube gris est réservé uniquement au TP/INR.",
            "Il est recommandé de laisser les tubes sans identité."
          ],
          "type": "qcm",
          "explanation": "Le tube noir est dédié à la VS dans ce cours.",
          "source": "Cours de cardiologie L3, Chapitre 6  Tubes de prélèvement, PDF page 19.",
          "answers": [
            "Le tube noir au citrate de sodium est utilisé pour la vitesse de sédimentation."
          ],
          "correct": [
            "Le tube noir au citrate de sodium est utilisé pour la vitesse de sédimentation."
          ]
        },
        {
          "text": "Concernant fluorure, quelle proposition est correcte ?",
          "options": [
            "Le tube gris contient du fluorure de sodium.",
            "Le tube gris est réservé uniquement au TP/INR.",
            "Il est recommandé de laisser les tubes sans identité.",
            "Les prélèvements de plusieurs patients doivent être mélangés dans un sachet non identifié."
          ],
          "type": "qcm",
          "explanation": "Le fluorure inhibe la glycolyse.",
          "source": "Cours de cardiologie L3, Chapitre 6  Tubes de prélèvement, PDF page 19.",
          "answers": [
            "Le tube gris contient du fluorure de sodium."
          ],
          "correct": [
            "Le tube gris contient du fluorure de sodium."
          ]
        },
        {
          "text": "Concernant glycémie différée, quelle proposition est correcte ?",
          "options": [
            "Le tube gris est indiqué pour la glycémie lorsque l’analyse est différée de plus de quatre heures.",
            "Il est recommandé de laisser les tubes sans identité.",
            "Les prélèvements de plusieurs patients doivent être mélangés dans un sachet non identifié.",
            "L’ordre de prélèvement des tubes n’a jamais d’importance."
          ],
          "type": "qcm",
          "explanation": "Le fluorure stabilise la glycémie lors d’un délai prolongé.",
          "source": "Cours de cardiologie L3, Chapitre 6  Tubes de prélèvement, PDF page 19.",
          "answers": [
            "Le tube gris est indiqué pour la glycémie lorsque l’analyse est différée de plus de quatre heures."
          ],
          "correct": [
            "Le tube gris est indiqué pour la glycémie lorsque l’analyse est différée de plus de quatre heures."
          ]
        },
        {
          "text": "Concernant identification, quelle proposition est correcte ?",
          "options": [
            "Tous les tubes doivent être identifiés avec les informations du patient.",
            "Les prélèvements de plusieurs patients doivent être mélangés dans un sachet non identifié.",
            "L’ordre de prélèvement des tubes n’a jamais d’importance.",
            "Le tube sec présenté dans le cours est obligatoirement noir."
          ],
          "type": "qcm",
          "explanation": "L’identification prévient les erreurs d’attribution.",
          "source": "Cours de cardiologie L3, Chapitre 6  Tubes de prélèvement, PDF page 19.",
          "answers": [
            "Tous les tubes doivent être identifiés avec les informations du patient."
          ],
          "correct": [
            "Tous les tubes doivent être identifiés avec les informations du patient."
          ]
        },
        {
          "text": "Concernant conditionnement, quelle proposition est correcte ?",
          "options": [
            "Les prélèvements d’un même patient doivent être placés dans un sachet individuel avec les documents dans la partie externe.",
            "L’ordre de prélèvement des tubes n’a jamais d’importance.",
            "Le tube sec présenté dans le cours est obligatoirement noir.",
            "Le tube rouge doit rester vide après le prélèvement."
          ],
          "type": "qcm",
          "explanation": "Le conditionnement séparé sécurise le transport et la traçabilité.",
          "source": "Cours de cardiologie L3, Chapitre 6  Tubes de prélèvement, PDF page 19.",
          "answers": [
            "Les prélèvements d’un même patient doivent être placés dans un sachet individuel avec les documents dans la partie externe."
          ],
          "correct": [
            "Les prélèvements d’un même patient doivent être placés dans un sachet individuel avec les documents dans la partie externe."
          ]
        },
        {
          "text": "À propos de ordre, choisissez les deux propositions exactes.",
          "options": [
            "Les tubes doivent être prélevés selon un ordre défini afin de limiter les contaminations d’additifs.",
            "Le tube sec est rouge et sert notamment à plusieurs examens de chimie et d’immunologie.",
            "Le tube rouge doit rester vide après le prélèvement.",
            "Le tube bleu peut être rempli à n’importe quel niveau pour le bilan de coagulation."
          ],
          "type": "qcm",
          "explanation": "Le cours présente un ordre précis de prélèvement. Le cours associe le tube rouge au tube sec.",
          "source": "Cours de cardiologie L3, Chapitre 6  Tubes de prélèvement, PDF page 19.",
          "answers": [
            "Les tubes doivent être prélevés selon un ordre défini afin de limiter les contaminations d’additifs.",
            "Le tube sec est rouge et sert notamment à plusieurs examens de chimie et d’immunologie."
          ],
          "correct": [
            "Les tubes doivent être prélevés selon un ordre défini afin de limiter les contaminations d’additifs.",
            "Le tube sec est rouge et sert notamment à plusieurs examens de chimie et d’immunologie."
          ]
        },
        {
          "text": "À propos de tube sec, choisissez les deux propositions exactes.",
          "options": [
            "Le tube sec est rouge et sert notamment à plusieurs examens de chimie et d’immunologie.",
            "Le tube rouge doit être rempli au minimum à moitié.",
            "Le tube bleu peut être rempli à n’importe quel niveau pour le bilan de coagulation.",
            "Le tube bleu est réservé uniquement à la glycémie différée."
          ],
          "type": "qcm",
          "explanation": "Le cours associe le tube rouge au tube sec. Un volume suffisant est nécessaire pour l’analyse.",
          "source": "Cours de cardiologie L3, Chapitre 6  Tubes de prélèvement, PDF page 19.",
          "answers": [
            "Le tube sec est rouge et sert notamment à plusieurs examens de chimie et d’immunologie.",
            "Le tube rouge doit être rempli au minimum à moitié."
          ],
          "correct": [
            "Le tube sec est rouge et sert notamment à plusieurs examens de chimie et d’immunologie.",
            "Le tube rouge doit être rempli au minimum à moitié."
          ]
        },
        {
          "text": "À propos de remplissage rouge, choisissez les deux propositions exactes.",
          "options": [
            "Le tube rouge doit être rempli au minimum à moitié.",
            "Le tube bleu contient du citrate de sodium et doit être rempli jusqu’au trait.",
            "Le tube bleu est réservé uniquement à la glycémie différée.",
            "Le tube EDTA est noir dans le cours."
          ],
          "type": "qcm",
          "explanation": "Un volume suffisant est nécessaire pour l’analyse. Le rapport sang-anticoagulant doit être respecté.",
          "source": "Cours de cardiologie L3, Chapitre 6  Tubes de prélèvement, PDF page 19.",
          "answers": [
            "Le tube rouge doit être rempli au minimum à moitié.",
            "Le tube bleu contient du citrate de sodium et doit être rempli jusqu’au trait."
          ],
          "correct": [
            "Le tube rouge doit être rempli au minimum à moitié.",
            "Le tube bleu contient du citrate de sodium et doit être rempli jusqu’au trait."
          ]
        },
        {
          "text": "À propos de citrate bleu, choisissez les deux propositions exactes.",
          "options": [
            "Le tube bleu contient du citrate de sodium et doit être rempli jusqu’au trait.",
            "Le tube bleu est utilisé notamment pour TP/INR, TCA/TCK, fibrinogène et D-dimères.",
            "Le tube EDTA est noir dans le cours.",
            "La NFS se réalise uniquement sur tube noir de VS."
          ],
          "type": "qcm",
          "explanation": "Le rapport sang-anticoagulant doit être respecté. Ces examens explorent l’hémostase.",
          "source": "Cours de cardiologie L3, Chapitre 6  Tubes de prélèvement, PDF page 19.",
          "answers": [
            "Le tube bleu contient du citrate de sodium et doit être rempli jusqu’au trait.",
            "Le tube bleu est utilisé notamment pour TP/INR, TCA/TCK, fibrinogène et D-dimères."
          ],
          "correct": [
            "Le tube bleu contient du citrate de sodium et doit être rempli jusqu’au trait.",
            "Le tube bleu est utilisé notamment pour TP/INR, TCA/TCK, fibrinogène et D-dimères."
          ]
        },
        {
          "text": "À propos de coagulation, choisissez les deux propositions exactes.",
          "options": [
            "Le tube bleu est utilisé notamment pour TP/INR, TCA/TCK, fibrinogène et D-dimères.",
            "Le tube EDTA est violet.",
            "La NFS se réalise uniquement sur tube noir de VS.",
            "L’HbA1c se prélève exclusivement sur un tube vide sans sang."
          ],
          "type": "qcm",
          "explanation": "Ces examens explorent l’hémostase. Le violet correspond à l’EDTA.",
          "source": "Cours de cardiologie L3, Chapitre 6  Tubes de prélèvement, PDF page 19.",
          "answers": [
            "Le tube bleu est utilisé notamment pour TP/INR, TCA/TCK, fibrinogène et D-dimères.",
            "Le tube EDTA est violet."
          ],
          "correct": [
            "Le tube bleu est utilisé notamment pour TP/INR, TCA/TCK, fibrinogène et D-dimères.",
            "Le tube EDTA est violet."
          ]
        },
        {
          "text": "À propos de EDTA, choisissez les deux propositions exactes.",
          "options": [
            "Le tube EDTA est violet.",
            "La NFS et les plaquettes sont réalisées sur tube violet EDTA.",
            "L’HbA1c se prélève exclusivement sur un tube vide sans sang.",
            "Le tube vert contient obligatoirement du citrate pour la VS."
          ],
          "type": "qcm",
          "explanation": "Le violet correspond à l’EDTA. L’EDTA conserve les éléments figurés du sang.",
          "source": "Cours de cardiologie L3, Chapitre 6  Tubes de prélèvement, PDF page 19.",
          "answers": [
            "Le tube EDTA est violet.",
            "La NFS et les plaquettes sont réalisées sur tube violet EDTA."
          ],
          "correct": [
            "Le tube EDTA est violet.",
            "La NFS et les plaquettes sont réalisées sur tube violet EDTA."
          ]
        },
        {
          "text": "À propos de NFS, choisissez les deux propositions exactes.",
          "options": [
            "La NFS et les plaquettes sont réalisées sur tube violet EDTA.",
            "L’hémoglobine glyquée peut être prélevée sur tube violet EDTA.",
            "Le tube vert contient obligatoirement du citrate pour la VS.",
            "Le tube jaune doit toujours rester non rempli."
          ],
          "type": "qcm",
          "explanation": "L’EDTA conserve les éléments figurés du sang. Le cours la classe parmi les examens du tube violet.",
          "source": "Cours de cardiologie L3, Chapitre 6  Tubes de prélèvement, PDF page 19.",
          "answers": [
            "La NFS et les plaquettes sont réalisées sur tube violet EDTA.",
            "L’hémoglobine glyquée peut être prélevée sur tube violet EDTA."
          ],
          "correct": [
            "La NFS et les plaquettes sont réalisées sur tube violet EDTA.",
            "L’hémoglobine glyquée peut être prélevée sur tube violet EDTA."
          ]
        },
        {
          "text": "À propos de HbA1c, choisissez les deux propositions exactes.",
          "options": [
            "L’hémoglobine glyquée peut être prélevée sur tube violet EDTA.",
            "Le tube vert contient de l’héparine.",
            "Le tube jaune doit toujours rester non rempli.",
            "La VS est réalisée uniquement sur tube gris fluoré."
          ],
          "type": "qcm",
          "explanation": "Le cours la classe parmi les examens du tube violet. Le vert correspond au tube hépariné.",
          "source": "Cours de cardiologie L3, Chapitre 6  Tubes de prélèvement, PDF page 19.",
          "answers": [
            "L’hémoglobine glyquée peut être prélevée sur tube violet EDTA.",
            "Le tube vert contient de l’héparine."
          ],
          "correct": [
            "L’hémoglobine glyquée peut être prélevée sur tube violet EDTA.",
            "Le tube vert contient de l’héparine."
          ]
        },
        {
          "text": "À propos de héparine, choisissez les deux propositions exactes.",
          "options": [
            "Le tube vert contient de l’héparine.",
            "Le tube jaune avec gel SST doit être rempli au minimum à moitié.",
            "La VS est réalisée uniquement sur tube gris fluoré.",
            "Le tube gris est un tube EDTA violet."
          ],
          "type": "qcm",
          "explanation": "Le vert correspond au tube hépariné. Le cours précise un remplissage minimal à moitié.",
          "source": "Cours de cardiologie L3, Chapitre 6  Tubes de prélèvement, PDF page 19.",
          "answers": [
            "Le tube vert contient de l’héparine.",
            "Le tube jaune avec gel SST doit être rempli au minimum à moitié."
          ],
          "correct": [
            "Le tube vert contient de l’héparine.",
            "Le tube jaune avec gel SST doit être rempli au minimum à moitié."
          ]
        },
        {
          "text": "À propos de gel SST, choisissez les deux propositions exactes.",
          "options": [
            "Le tube jaune avec gel SST doit être rempli au minimum à moitié.",
            "Le tube noir au citrate de sodium est utilisé pour la vitesse de sédimentation.",
            "Le tube gris est un tube EDTA violet.",
            "Le tube gris est réservé uniquement au TP/INR."
          ],
          "type": "qcm",
          "explanation": "Le cours précise un remplissage minimal à moitié. Le tube noir est dédié à la VS dans ce cours.",
          "source": "Cours de cardiologie L3, Chapitre 6  Tubes de prélèvement, PDF page 19.",
          "answers": [
            "Le tube jaune avec gel SST doit être rempli au minimum à moitié.",
            "Le tube noir au citrate de sodium est utilisé pour la vitesse de sédimentation."
          ],
          "correct": [
            "Le tube jaune avec gel SST doit être rempli au minimum à moitié.",
            "Le tube noir au citrate de sodium est utilisé pour la vitesse de sédimentation."
          ]
        },
        {
          "text": "À propos de VS, choisissez les deux propositions exactes.",
          "options": [
            "Le tube noir au citrate de sodium est utilisé pour la vitesse de sédimentation.",
            "Le tube gris contient du fluorure de sodium.",
            "Le tube gris est réservé uniquement au TP/INR.",
            "Il est recommandé de laisser les tubes sans identité."
          ],
          "type": "qcm",
          "explanation": "Le tube noir est dédié à la VS dans ce cours. Le fluorure inhibe la glycolyse.",
          "source": "Cours de cardiologie L3, Chapitre 6  Tubes de prélèvement, PDF page 19.",
          "answers": [
            "Le tube noir au citrate de sodium est utilisé pour la vitesse de sédimentation.",
            "Le tube gris contient du fluorure de sodium."
          ],
          "correct": [
            "Le tube noir au citrate de sodium est utilisé pour la vitesse de sédimentation.",
            "Le tube gris contient du fluorure de sodium."
          ]
        },
        {
          "text": "À propos de fluorure, choisissez les deux propositions exactes.",
          "options": [
            "Le tube gris contient du fluorure de sodium.",
            "Le tube gris est indiqué pour la glycémie lorsque l’analyse est différée de plus de quatre heures.",
            "Il est recommandé de laisser les tubes sans identité.",
            "Les prélèvements de plusieurs patients doivent être mélangés dans un sachet non identifié."
          ],
          "type": "qcm",
          "explanation": "Le fluorure inhibe la glycolyse. Le fluorure stabilise la glycémie lors d’un délai prolongé.",
          "source": "Cours de cardiologie L3, Chapitre 6  Tubes de prélèvement, PDF page 19.",
          "answers": [
            "Le tube gris contient du fluorure de sodium.",
            "Le tube gris est indiqué pour la glycémie lorsque l’analyse est différée de plus de quatre heures."
          ],
          "correct": [
            "Le tube gris contient du fluorure de sodium.",
            "Le tube gris est indiqué pour la glycémie lorsque l’analyse est différée de plus de quatre heures."
          ]
        },
        {
          "text": "À propos de glycémie différée, choisissez les deux propositions exactes.",
          "options": [
            "Le tube gris est indiqué pour la glycémie lorsque l’analyse est différée de plus de quatre heures.",
            "Tous les tubes doivent être identifiés avec les informations du patient.",
            "Les prélèvements de plusieurs patients doivent être mélangés dans un sachet non identifié.",
            "L’ordre de prélèvement des tubes n’a jamais d’importance."
          ],
          "type": "qcm",
          "explanation": "Le fluorure stabilise la glycémie lors d’un délai prolongé. L’identification prévient les erreurs d’attribution.",
          "source": "Cours de cardiologie L3, Chapitre 6  Tubes de prélèvement, PDF page 19.",
          "answers": [
            "Le tube gris est indiqué pour la glycémie lorsque l’analyse est différée de plus de quatre heures.",
            "Tous les tubes doivent être identifiés avec les informations du patient."
          ],
          "correct": [
            "Le tube gris est indiqué pour la glycémie lorsque l’analyse est différée de plus de quatre heures.",
            "Tous les tubes doivent être identifiés avec les informations du patient."
          ]
        },
        {
          "text": "À propos de identification, choisissez les deux propositions exactes.",
          "options": [
            "Tous les tubes doivent être identifiés avec les informations du patient.",
            "Les prélèvements d’un même patient doivent être placés dans un sachet individuel avec les documents dans la partie externe.",
            "L’ordre de prélèvement des tubes n’a jamais d’importance.",
            "Le tube sec présenté dans le cours est obligatoirement noir."
          ],
          "type": "qcm",
          "explanation": "L’identification prévient les erreurs d’attribution. Le conditionnement séparé sécurise le transport et la traçabilité.",
          "source": "Cours de cardiologie L3, Chapitre 6  Tubes de prélèvement, PDF page 19.",
          "answers": [
            "Tous les tubes doivent être identifiés avec les informations du patient.",
            "Les prélèvements d’un même patient doivent être placés dans un sachet individuel avec les documents dans la partie externe."
          ],
          "correct": [
            "Tous les tubes doivent être identifiés avec les informations du patient.",
            "Les prélèvements d’un même patient doivent être placés dans un sachet individuel avec les documents dans la partie externe."
          ]
        },
        {
          "text": "À propos de conditionnement, choisissez les deux propositions exactes.",
          "options": [
            "Les prélèvements d’un même patient doivent être placés dans un sachet individuel avec les documents dans la partie externe.",
            "Les tubes doivent être prélevés selon un ordre défini afin de limiter les contaminations d’additifs.",
            "Le tube sec présenté dans le cours est obligatoirement noir.",
            "Le tube rouge doit rester vide après le prélèvement."
          ],
          "type": "qcm",
          "explanation": "Le conditionnement séparé sécurise le transport et la traçabilité. Le cours présente un ordre précis de prélèvement.",
          "source": "Cours de cardiologie L3, Chapitre 6  Tubes de prélèvement, PDF page 19.",
          "answers": [
            "Les prélèvements d’un même patient doivent être placés dans un sachet individuel avec les documents dans la partie externe.",
            "Les tubes doivent être prélevés selon un ordre défini afin de limiter les contaminations d’additifs."
          ],
          "correct": [
            "Les prélèvements d’un même patient doivent être placés dans un sachet individuel avec les documents dans la partie externe.",
            "Les tubes doivent être prélevés selon un ordre défini afin de limiter les contaminations d’additifs."
          ]
        }
      ]
    },
    {
      "id": "sfm-1",
      "title": "SONU — Généralités sur les SONU",
      "matter": "SONU",
      "filiere": "SFM",
      "description": "Sujet 1 — 60 questions corrigées",
      "instructions": "QCD : Vrai ou Faux. QCM : sélectionner la ou les bonnes réponses.",
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
          "text": "Le paludisme aggravé par la grossesse est classé parmi les causes obstétricales directes.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Il fait partie des exemples de causes indirectes avec l’anémie et certaines infections.",
          "source": "Module PNSME, chap. 1, p. 13.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Une femme considérée sans risque pendant la grossesse ne peut pas présenter une urgence à l’accouchement.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Les complications ne sont pas toutes prévisibles ; l’accès rapide aux soins doit être préparé pour chaque femme.",
          "source": "Module PNSME, chap. 1, p. 13, 17-18.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Une fistule obstétricale peut établir une communication anormale entre le vagin et la vessie.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le cours décrit aussi la communication entre le vagin et le rectum, notamment après un travail dystocique.",
          "source": "Module PNSME, chap. 1, p. 14.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "La période retenue dans la définition classique du décès maternel s’arrête au septième jour après la fin de la grossesse.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "La limite indiquée est de 42 jours après la terminaison de la grossesse.",
          "source": "Module PNSME, chap. 1, p. 12.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Une omission de traitement approprié peut contribuer à un décès de cause obstétricale directe.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le cours inclut les interventions, omissions et enchaînements d’événements liés à une complication obstétricale.",
          "source": "Module PNSME, chap. 1, p. 13.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "Une hémorragie obstétricale est une cause directe de décès maternel.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Elle résulte directement d’une complication obstétricale, contrairement à une maladie préexistante aggravée par la grossesse.",
          "source": "Module PNSME, chap. 1, p. 13.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "Le décès maternel ne peut être défini qu’après un accouchement à terme.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "La définition s’applique quelle que soit la durée de la grossesse ; elle ne se limite pas aux grossesses à terme.",
          "source": "Module PNSME, chap. 1, p. 12.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Le premier retard correspond exclusivement au transport entre le domicile et la maternité.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le premier retard concerne la décision de chercher des soins ; le transport relève du deuxième.",
          "source": "Module PNSME, chap. 1, p. 14.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Les SONU s’adressent à la mère et au nouveau-né lorsqu’une complication nécessite des soins urgents.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Ils concernent les complications de la grossesse, du travail et des suites de couches, chez la femme et/ou son enfant.",
          "source": "Module PNSME, chap. 1, p. 15.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "Une cause aggravée par la grossesse peut entrer dans la définition du décès maternel.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le lien peut être direct ou indirect : une affection non obstétricale peut être aggravée par les effets physiologiques de la grossesse.",
          "source": "Module PNSME, chap. 1, p. 12-13.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "Une pénurie de médicaments après l’arrivée dans un centre peut entraîner un troisième retard.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le troisième retard concerne l’obtention de soins appropriés au sein des services.",
          "source": "Module PNSME, chap. 1, p. 14.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "L’absence d’un moyen de transport adéquat relève du troisième retard.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Elle contribue au deuxième retard, celui de l’accès à l’établissement.",
          "source": "Module PNSME, chap. 1, p. 14.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Les fonctions des SONU de base se limitent aux médicaments administrés par voie orale.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Elles comprennent des médicaments injectables et plusieurs gestes obstétricaux essentiels.",
          "source": "Module PNSME, chap. 1, p. 15-16.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Un établissement SONU complet doit pouvoir réaliser les fonctions de base.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Les capacités chirurgicales et transfusionnelles s’ajoutent aux fonctions de base.",
          "source": "Module PNSME, chap. 1, p. 16.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "L’absence de couverture maladie est un facteur économique pouvant gêner l’accès aux soins.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Elle peut s’ajouter à la pauvreté et à l’absence de préparation financière.",
          "source": "Module PNSME, chap. 1, p. 14.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "La délivrance artificielle figure dans les fonctions des SONU de base.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "L’extraction des produits retenus de la conception en fait également partie.",
          "source": "Module PNSME, chap. 1, p. 15.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "Les quatre « trop » désignent uniquement les grossesses trop nombreuses.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Ils regroupent les grossesses trop précoces, trop tardives, trop nombreuses et trop rapprochées.",
          "source": "Module PNSME, chap. 1, p. 14.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "La transfusion sanguine est l’une des sept fonctions spécifiques des SONU de base.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "La transfusion fait partie des capacités supplémentaires des SONU complets.",
          "source": "Module PNSME, chap. 1, p. 15-16.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "La césarienne suffit à elle seule pour qualifier un établissement de SONU complet.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "La qualification repose sur l’ensemble des fonctions, dont la transfusion et les fonctions de base.",
          "source": "Module PNSME, chap. 1, p. 16.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "La méconnaissance des signes de danger contribue au premier retard.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Si l’urgence n’est pas reconnue, la décision de consulter peut être différée.",
          "source": "Module PNSME, chap. 1, p. 14.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "La prématurité et les infections figurent parmi les causes de décès néonatals citées.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le cours mentionne également les complications liées à la période intrapartum.",
          "source": "Module PNSME, chap. 1, p. 15.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "Pour un indicateur exprimé en pourcentage, le rapport obtenu doit être multiplié par 100.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "La multiplication transforme une proportion décimale en pourcentage.",
          "source": "Module PNSME, chap. 1, p. 16-17.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "La létalité obstétricale est calculée en divisant les décès par le nombre total d’habitants.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Elle rapporte les décès chez les femmes présentant une complication aux femmes prises en charge pour ces complications.",
          "source": "Module PNSME, chap. 1, p. 17.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Un besoin satisfait de 100 % signifie que toutes les femmes estimées avoir besoin de SONU ont reçu ces soins.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le numérateur représente les complications prises en charge et le dénominateur les besoins estimés correspondants.",
          "source": "Module PNSME, chap. 1, p. 16.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "Les indicateurs de processus SONU ne servent qu’à compter les décès.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Ils explorent notamment l’accès, l’utilisation et la qualité des services.",
          "source": "Module PNSME, chap. 1, p. 16-17.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Un traitement efficace donné à temps peut éviter une grande partie des décès liés aux complications obstétricales.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "La disponibilité des soins et leur accessibilité rapide sont des objectifs centraux des SONU.",
          "source": "Module PNSME, chap. 1, p. 17.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "Le référentiel quantitatif du cours prévoit cinq établissements SONU pour 500 000 habitants.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Il associe quatre établissements de base à au moins un établissement complet.",
          "source": "Module PNSME, chap. 1, p. 16.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "L’organisation d’une référence commence seulement après l’apparition d’un choc.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Les obstacles et modalités de référence doivent être anticipés ; attendre l’aggravation fait perdre du temps.",
          "source": "Module PNSME, chap. 1, p. 14, 24-25.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Les valeurs statistiques de 2012 ou 2016 rapportées par le module décrivent nécessairement la situation de 2026.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Elles se rapportent aux enquêtes et années citées ; elles ne doivent pas être présentées comme des données actuelles.",
          "source": "Module PNSME, chap. 1, p. 12-15.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Une concentration de tous les établissements dans une seule zone garantit une bonne accessibilité géographique.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le nombre d’établissements doit être complété par une répartition permettant de desservir la population.",
          "source": "Module PNSME, chap. 1, p. 16.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Que signifie SONU ? (une réponse)",
          "options": [
            "Soins oculaires et neurologiques usuels",
            "Surveillance obligatoire nutritionnelle universelle",
            "Soins obstétricaux et néonataux d’urgence",
            "Service d’orientation non urgente"
          ],
          "type": "qcm",
          "explanation": "Le sigle associe les urgences obstétricales maternelles et les urgences néonatales.",
          "source": "Module PNSME, chap. 1, p. 15.",
          "answers": [
            "Soins obstétricaux et néonataux d’urgence"
          ],
          "correct": [
            "Soins obstétricaux et néonataux d’urgence"
          ]
        },
        {
          "text": "Quelle durée complète la définition classique du décès maternel après la terminaison de la grossesse ? (une réponse)",
          "options": [
            "6 mois",
            "42 jours",
            "24 heures",
            "7 jours"
          ],
          "type": "qcm",
          "explanation": "La définition du module retient les 42 jours suivant la fin de la grossesse, avec un lien causal à celle-ci.",
          "source": "Module PNSME, chap. 1, p. 12.",
          "answers": [
            "42 jours"
          ],
          "correct": [
            "42 jours"
          ]
        },
        {
          "text": "Quelles situations illustrent des causes directes de décès maternel ? (plusieurs réponses)",
          "options": [
            "Rupture utérine",
            "Paludisme aggravé par la grossesse",
            "Anémie préexistante aggravée par la grossesse",
            "Hémorragie obstétricale"
          ],
          "type": "qcm",
          "explanation": "L’hémorragie et la rupture sont des complications obstétricales ; les deux autres exemples relèvent des causes indirectes.",
          "source": "Module PNSME, chap. 1, p. 13.",
          "answers": [
            "Rupture utérine",
            "Hémorragie obstétricale"
          ],
          "correct": [
            "Rupture utérine",
            "Hémorragie obstétricale"
          ]
        },
        {
          "text": "Quelle situation illustre une cause indirecte de décès maternel ? (une réponse)",
          "options": [
            "Une rétention placentaire hémorragique",
            "Une maladie préexistante aggravée par la grossesse",
            "Une déchirure cervicale hémorragique",
            "Une rupture utérine"
          ],
          "type": "qcm",
          "explanation": "La maladie n’est pas initialement une complication obstétricale, mais ses conséquences sont aggravées par la grossesse.",
          "source": "Module PNSME, chap. 1, p. 13.",
          "answers": [
            "Une maladie préexistante aggravée par la grossesse"
          ],
          "correct": [
            "Une maladie préexistante aggravée par la grossesse"
          ]
        },
        {
          "text": "Une femme et sa famille ne reconnaissent pas la gravité d’un saignement et hésitent à consulter. Quel retard domine ? (une réponse)",
          "options": [
            "Retard de collecte statistique",
            "Deuxième retard",
            "Premier retard",
            "Troisième retard"
          ],
          "type": "qcm",
          "explanation": "Le problème initial est la reconnaissance de l’urgence et la décision de demander des soins.",
          "source": "Module PNSME, chap. 1, p. 14.",
          "answers": [
            "Premier retard"
          ],
          "correct": [
            "Premier retard"
          ]
        },
        {
          "text": "La famille décide de consulter, mais la route est impraticable. Quel retard domine ? (une réponse)",
          "options": [
            "Deuxième retard",
            "Retard de diagnostic biologique uniquement",
            "Troisième retard",
            "Premier retard"
          ],
          "type": "qcm",
          "explanation": "Le deuxième retard se situe entre la décision et l’arrivée dans une structure accessible.",
          "source": "Module PNSME, chap. 1, p. 14.",
          "answers": [
            "Deuxième retard"
          ],
          "correct": [
            "Deuxième retard"
          ]
        },
        {
          "text": "Une patiente arrive à l’hôpital mais attend un traitement faute de consommables. Quel retard domine ? (une réponse)",
          "options": [
            "Troisième retard",
            "Premier retard",
            "Aucun retard, puisqu’elle est arrivée",
            "Deuxième retard"
          ],
          "type": "qcm",
          "explanation": "L’arrivée ne garantit pas l’accès effectif à un traitement approprié.",
          "source": "Module PNSME, chap. 1, p. 14.",
          "answers": [
            "Troisième retard"
          ],
          "correct": [
            "Troisième retard"
          ]
        },
        {
          "text": "Quels éléments peuvent réduire le premier retard ? (plusieurs réponses)",
          "options": [
            "Exclure la femme de toute décision",
            "Attendre un coma avant de décider",
            "Préparer les décisions en cas d’urgence",
            "Reconnaître les signes de danger"
          ],
          "type": "qcm",
          "explanation": "L’information et l’anticipation des décisions facilitent un recours rapide aux soins.",
          "source": "Module PNSME, chap. 1, p. 14, 25.",
          "answers": [
            "Préparer les décisions en cas d’urgence",
            "Reconnaître les signes de danger"
          ],
          "correct": [
            "Préparer les décisions en cas d’urgence",
            "Reconnaître les signes de danger"
          ]
        },
        {
          "text": "Quels éléments agissent directement sur le deuxième retard ? (plusieurs réponses)",
          "options": [
            "Préparer un moyen de transport",
            "Supprimer la signalisation du centre",
            "Prévoir les frais de déplacement",
            "Reporter l’achat de consommables au bloc"
          ],
          "type": "qcm",
          "explanation": "Le transport et les moyens financiers contribuent à atteindre le lieu de soins.",
          "source": "Module PNSME, chap. 1, p. 14, 24.",
          "answers": [
            "Préparer un moyen de transport",
            "Prévoir les frais de déplacement"
          ],
          "correct": [
            "Préparer un moyen de transport",
            "Prévoir les frais de déplacement"
          ]
        },
        {
          "text": "Quelles mesures améliorent la réponse au troisième retard ? (plusieurs réponses)",
          "options": [
            "Assurer les médicaments et équipements",
            "Disposer de personnel compétent",
            "Réserver les soins aux consultations programmées",
            "Fermer la maternité la nuit"
          ],
          "type": "qcm",
          "explanation": "La capacité de traiter rapidement dépend des ressources humaines et matérielles disponibles.",
          "source": "Module PNSME, chap. 1, p. 14.",
          "answers": [
            "Assurer les médicaments et équipements",
            "Disposer de personnel compétent"
          ],
          "correct": [
            "Assurer les médicaments et équipements",
            "Disposer de personnel compétent"
          ]
        },
        {
          "text": "Quel ensemble correspond aux quatre « trop » ? (une réponse)",
          "options": [
            "Tardive, unique, normale, espacée",
            "Précoce, rapide, douloureuse, gémellaire",
            "Nombreuses, souhaitées, surveillées, espacées",
            "Précoce, tardive, nombreuses, rapprochées"
          ],
          "type": "qcm",
          "explanation": "Ce repère du cours classe des situations de procréation associées à une vulnérabilité accrue.",
          "source": "Module PNSME, chap. 1, p. 14.",
          "answers": [
            "Précoce, tardive, nombreuses, rapprochées"
          ],
          "correct": [
            "Précoce, tardive, nombreuses, rapprochées"
          ]
        },
        {
          "text": "Selon les repères du module, quel intervalle intergénésique est considéré court ? (une réponse)",
          "options": [
            "Au moins 4 ans",
            "Moins de 2 ans",
            "Plus de 5 ans",
            "Exactement 10 ans"
          ],
          "type": "qcm",
          "explanation": "Le cours retient un intervalle inférieur à deux ans parmi les grossesses trop rapprochées.",
          "source": "Module PNSME, chap. 1, p. 14-15.",
          "answers": [
            "Moins de 2 ans"
          ],
          "correct": [
            "Moins de 2 ans"
          ]
        },
        {
          "text": "Quels facteurs économiques sont cités ? (plusieurs réponses)",
          "options": [
            "Absence de couverture maladie",
            "Épargne déjà constituée pour l’urgence",
            "Disponibilité d’une assurance",
            "Pauvreté"
          ],
          "type": "qcm",
          "explanation": "Le manque de moyens ou de protection financière peut retarder la prise en charge.",
          "source": "Module PNSME, chap. 1, p. 14.",
          "answers": [
            "Absence de couverture maladie",
            "Pauvreté"
          ],
          "correct": [
            "Absence de couverture maladie",
            "Pauvreté"
          ]
        },
        {
          "text": "Quelle séquelle est particulièrement associée à un travail dystocique prolongé dans le cours ? (une réponse)",
          "options": [
            "Otite externe",
            "Appendicite",
            "Fistule obstétricale",
            "Myopie"
          ],
          "type": "qcm",
          "explanation": "Une fistule correspond à une communication anormale et peut entraîner une incontinence.",
          "source": "Module PNSME, chap. 1, p. 14.",
          "answers": [
            "Fistule obstétricale"
          ],
          "correct": [
            "Fistule obstétricale"
          ]
        },
        {
          "text": "Quels médicaments injectables font partie des fonctions SONU de base ? (plusieurs réponses)",
          "options": [
            "Vitamines uniquement",
            "Antibiotiques",
            "Antihistaminiques uniquement",
            "Anticonvulsivants"
          ],
          "type": "qcm",
          "explanation": "Les antibiotiques, les utérotoniques et les anticonvulsivants font partie des fonctions fondamentales.",
          "source": "Module PNSME, chap. 1, p. 15.",
          "answers": [
            "Antibiotiques",
            "Anticonvulsivants"
          ],
          "correct": [
            "Antibiotiques",
            "Anticonvulsivants"
          ]
        },
        {
          "text": "Quels gestes sont inclus dans les SONU de base ? (plusieurs réponses)",
          "options": [
            "Hystérectomie obligatoire",
            "Délivrance artificielle",
            "Transfusion obligatoire dans chaque structure de base",
            "Extraction de produits retenus de la conception"
          ],
          "type": "qcm",
          "explanation": "Les actes de retrait placentaire ou de tissus retenus sont des fonctions de base ; chirurgie majeure et transfusion caractérisent les complets.",
          "source": "Module PNSME, chap. 1, p. 15-16.",
          "answers": [
            "Délivrance artificielle",
            "Extraction de produits retenus de la conception"
          ],
          "correct": [
            "Délivrance artificielle",
            "Extraction de produits retenus de la conception"
          ]
        },
        {
          "text": "Quelles capacités distinguent les SONU complets des SONU de base ? (plusieurs réponses)",
          "options": [
            "Transfusion sanguine",
            "Chirurgie obstétricale majeure",
            "Conseils nutritionnels seulement",
            "Mesure de la température seulement"
          ],
          "type": "qcm",
          "explanation": "La disponibilité de la chirurgie et du sang permet de traiter des complications dépassant les capacités de base.",
          "source": "Module PNSME, chap. 1, p. 16.",
          "answers": [
            "Transfusion sanguine",
            "Chirurgie obstétricale majeure"
          ],
          "correct": [
            "Transfusion sanguine",
            "Chirurgie obstétricale majeure"
          ]
        },
        {
          "text": "Une structure possède un bloc mais aucune capacité de transfusion. Quelle conclusion est correcte ? (une réponse)",
          "options": [
            "Elle remplit automatiquement toutes les fonctions",
            "Le bloc seul ne démontre pas un fonctionnement SONU complet",
            "La transfusion est inutile en obstétrique",
            "Elle n’a plus besoin de personnel formé"
          ],
          "type": "qcm",
          "explanation": "La classification porte sur des fonctions effectivement réalisables et pas sur la seule présence d’un équipement.",
          "source": "Module PNSME, chap. 1, p. 16.",
          "answers": [
            "Le bloc seul ne démontre pas un fonctionnement SONU complet"
          ],
          "correct": [
            "Le bloc seul ne démontre pas un fonctionnement SONU complet"
          ]
        },
        {
          "text": "Quels problèmes néonatals sont mentionnés comme causes majeures dans le module ? (plusieurs réponses)",
          "options": [
            "Complications de la prématurité",
            "Infections",
            "Arthrose",
            "Carie dentaire"
          ],
          "type": "qcm",
          "explanation": "Le cours cite aussi les événements intrapartum ; les deux autres choix ne correspondent pas aux causes décrites.",
          "source": "Module PNSME, chap. 1, p. 15.",
          "answers": [
            "Complications de la prématurité",
            "Infections"
          ],
          "correct": [
            "Complications de la prématurité",
            "Infections"
          ]
        },
        {
          "text": "Quels domaines les indicateurs de processus permettent-ils d’explorer ? (plusieurs réponses)",
          "options": [
            "Accès aux services",
            "Couleur des bâtiments uniquement",
            "Qualité des services",
            "Nombre de parkings uniquement"
          ],
          "type": "qcm",
          "explanation": "L’utilisation des services complète l’accès et la qualité dans ce cadre d’évaluation.",
          "source": "Module PNSME, chap. 1, p. 16.",
          "answers": [
            "Accès aux services",
            "Qualité des services"
          ],
          "correct": [
            "Accès aux services",
            "Qualité des services"
          ]
        },
        {
          "text": "Pour 500 000 habitants, quelle combinaison correspond au repère du cours ? (une réponse)",
          "options": [
            "1 SONU de base et aucun complet",
            "4 SONU de base et 1 SONU complet",
            "1 structure quelconque",
            "5 complets sans aucune considération géographique"
          ],
          "type": "qcm",
          "explanation": "Le repère associe le nombre de services et leur niveau fonctionnel.",
          "source": "Module PNSME, chap. 1, p. 16.",
          "answers": [
            "4 SONU de base et 1 SONU complet"
          ],
          "correct": [
            "4 SONU de base et 1 SONU complet"
          ]
        },
        {
          "text": "En appliquant proportionnellement ce repère à 1 000 000 d’habitants, quelle combinaison obtient-on ? (une réponse)",
          "options": [
            "8 SONU de base et 2 SONU complets",
            "2 SONU de base et 8 complets",
            "4 SONU de base et 1 complet",
            "10 SONU de base et aucun complet"
          ],
          "type": "qcm",
          "explanation": "Un million est deux fois 500 000 : on double les deux composantes du repère.",
          "source": "Module PNSME, chap. 1, p. 16.",
          "answers": [
            "8 SONU de base et 2 SONU complets"
          ],
          "correct": [
            "8 SONU de base et 2 SONU complets"
          ]
        },
        {
          "text": "Quel élément doit compléter le simple dénombrement des établissements ? (une réponse)",
          "options": [
            "Leur couleur extérieure",
            "Leur répartition géographique",
            "Leur classement alphabétique",
            "Le nombre de panneaux publicitaires"
          ],
          "type": "qcm",
          "explanation": "Une population peut rester éloignée des soins malgré un nombre global suffisant de structures.",
          "source": "Module PNSME, chap. 1, p. 16.",
          "answers": [
            "Leur répartition géographique"
          ],
          "correct": [
            "Leur répartition géographique"
          ]
        },
        {
          "text": "Sur 1 000 complications obstétricales estimées, 800 sont traitées en SONU. Quel est le besoin satisfait ? (une réponse)",
          "options": [
            "8 %",
            "125 %",
            "20 %",
            "80 %"
          ],
          "type": "qcm",
          "explanation": "Le calcul est 800 / 1 000 × 100 = 80 % ; 200 besoins estimés restent non satisfaits.",
          "source": "Module PNSME, chap. 1, p. 16.",
          "answers": [
            "80 %"
          ],
          "correct": [
            "80 %"
          ]
        },
        {
          "text": "Dans un service, 4 femmes décèdent parmi 400 femmes traitées pour complications obstétricales. Quelle est la létalité ? (une réponse)",
          "options": [
            "1 %",
            "10 %",
            "0,1 %",
            "4 %"
          ],
          "type": "qcm",
          "explanation": "Le calcul est 4 / 400 × 100 = 1 % ; le dénominateur est constitué des complications prises en charge.",
          "source": "Module PNSME, chap. 1, p. 17.",
          "answers": [
            "1 %"
          ],
          "correct": [
            "1 %"
          ]
        },
        {
          "text": "Un service enregistre 3 décès parmi 600 complications prises en charge. Quelle est la létalité ? (une réponse)",
          "options": [
            "5 %",
            "50 %",
            "2 %",
            "0,5 %"
          ],
          "type": "qcm",
          "explanation": "Le calcul est 3 / 600 × 100 = 0,5 % ; il ne faut pas diviser par la population générale.",
          "source": "Module PNSME, chap. 1, p. 17.",
          "answers": [
            "0,5 %"
          ],
          "correct": [
            "0,5 %"
          ]
        },
        {
          "text": "Sur 2 000 naissances attendues, 400 ont lieu dans des établissements SONU. Quelle est la proportion ? (une réponse)",
          "options": [
            "80 %",
            "5 %",
            "20 %",
            "40 %"
          ],
          "type": "qcm",
          "explanation": "Le calcul est 400 / 2 000 × 100 = 20 % ; les deux nombres doivent concerner la même population et période.",
          "source": "Module PNSME, chap. 1, p. 16.",
          "answers": [
            "20 %"
          ],
          "correct": [
            "20 %"
          ]
        },
        {
          "text": "Le module présente 614 décès pour 100 000 naissances vivantes avec la mention EDS-2012. Comment utiliser cette valeur ? (une réponse)",
          "options": [
            "Comme un nombre de décès néonatals par jour",
            "Comme une proportion de 614 %",
            "Comme une donnée historique attribuée à l’EDS-2012",
            "Comme une mesure certaine de 2026"
          ],
          "type": "qcm",
          "explanation": "La date et la source font partie du sens de la donnée et empêchent de la présenter comme actuelle.",
          "source": "Module PNSME, chap. 1, p. 12.",
          "answers": [
            "Comme une donnée historique attribuée à l’EDS-2012"
          ],
          "correct": [
            "Comme une donnée historique attribuée à l’EDS-2012"
          ]
        },
        {
          "text": "Quel objectif est prioritaire lors d’une référence obstétricale urgente ? (une réponse)",
          "options": [
            "Éviter toute transmission d’informations",
            "Reporter le transfert jusqu’à disparition spontanée des signes",
            "Permettre l’accès rapide à un traitement adapté",
            "Attendre la fin de la garde"
          ],
          "type": "qcm",
          "explanation": "La référence vise à obtenir à temps les capacités nécessaires au traitement de la complication.",
          "source": "Module PNSME, chap. 1, p. 14, 17, 24.",
          "answers": [
            "Permettre l’accès rapide à un traitement adapté"
          ],
          "correct": [
            "Permettre l’accès rapide à un traitement adapté"
          ]
        },
        {
          "text": "Quelle affirmation traduit le mieux la prévention des décès maternels par les SONU ? (une réponse)",
          "options": [
            "Des soins efficaces accessibles à temps peuvent sauver une majorité de femmes avec complications",
            "Toute complication peut être prédite à la première CPN",
            "Seules les femmes déjà classées à risque doivent avoir accès aux urgences",
            "La disponibilité des soins est sans effet sur la survie"
          ],
          "type": "qcm",
          "explanation": "La stratégie repose sur l’accès et l’efficacité du traitement, même lorsqu’une complication n’était pas prévisible.",
          "source": "Module PNSME, chap. 1, p. 13, 17-18.",
          "answers": [
            "Des soins efficaces accessibles à temps peuvent sauver une majorité de femmes avec complications"
          ],
          "correct": [
            "Des soins efficaces accessibles à temps peuvent sauver une majorité de femmes avec complications"
          ]
        }
      ]
    },
    {
      "id": "sfm-2",
      "title": "SONU — Consultation prénatale recentrée",
      "matter": "SONU",
      "filiere": "SFM",
      "description": "Sujet 2 — 60 questions corrigées",
      "instructions": "QCD : Vrai ou Faux. QCM : sélectionner la ou les bonnes réponses.",
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
          "text": "Le counseling permet à la femme de participer activement aux décisions concernant ses soins.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le soutien et une communication adaptée renforcent sa compréhension et sa confiance.",
          "source": "Module PNSME, chap. 2, p. 19.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "Une grossesse dite sans risque dispense de préparer les complications possibles.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "L’approche selon le risque ne permet pas de prévoir toutes les urgences ; la préparation concerne chaque femme.",
          "source": "Module PNSME, chap. 2, p. 18, 24-25.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "La recherche de signes de danger doit être reprise à chaque visite prénatale.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Une complication peut apparaître entre deux contacts ; l’évaluation ne se limite donc pas à la première visite.",
          "source": "Module PNSME, chap. 2, p. 21.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "Une fièvre avec dysurie pendant la grossesse peut être ignorée jusqu’au prochain rendez-vous programmé.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Elle peut évoquer une infection urinaire et nécessite une évaluation ciblée.",
          "source": "Module PNSME, chap. 2, p. 20.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "La CPN recentrée consiste à répéter les mêmes gestes sans tenir compte des résultats.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le cours insiste sur l’analyse des résultats et sur des actions ciblées, plutôt que sur des pratiques mécaniques.",
          "source": "Module PNSME, chap. 2, p. 18.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "La préparation à l’accouchement est l’unique composante de la CPN recentrée.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le dépistage, la prévention et la promotion de la santé complètent cette préparation.",
          "source": "Module PNSME, chap. 2, p. 20.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Les soins centrés sur la femme prennent en compte ses droits et son contexte culturel.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Les messages doivent rester appropriés et réalisables, avec une communication respectueuse.",
          "source": "Module PNSME, chap. 2, p. 19.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "La CPN recentrée propose des soins individualisés orientés vers des objectifs.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Chaque contact doit répondre aux besoins de la femme et reposer sur une évaluation utile de sa situation.",
          "source": "Module PNSME, chap. 2, p. 18-19.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "L’examen des conjonctives et le dosage de l’hémoglobine contribuent à rechercher une anémie.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "La pâleur est un signe clinique d’orientation ; le dosage apporte une évaluation biologique.",
          "source": "Module PNSME, chap. 2, p. 20.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "Le dépistage de la prééclampsie repose uniquement sur la mesure du poids.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "La pression artérielle, les signes cliniques et les examens indiqués, dont la recherche de protéinurie, doivent être considérés.",
          "source": "Module PNSME, chap. 2, p. 20.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Le dépistage du VIH peut être imposé sans information ni consentement.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le cours précise que la sérologie VIH se fait après consentement éclairé.",
          "source": "Module PNSME, chap. 2, p. 23.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Dans le modèle OMS 2016 présenté, les contacts cessent à 30 semaines.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Des contacts sont encore programmés à 34, 36, 38 et 40 semaines.",
          "source": "Module PNSME, chap. 2, p. 22.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Le premier contact du modèle OMS 2016 est prévu jusqu’à 12 semaines.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Cette visite précoce ouvre le calendrier des huit contacts présenté dans le cours.",
          "source": "Module PNSME, chap. 2, p. 22.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "La consommation de sel iodé participe à la prévention des troubles liés à la carence en iode.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Il s’agit d’un conseil nutritionnel préventif intégré aux soins prénatals.",
          "source": "Module PNSME, chap. 2, p. 24.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "La supplémentation en fer et folates fait partie des mesures de prévention décrites.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Elle s’intègre à la prévention de l’anémie et des carences pendant la grossesse.",
          "source": "Module PNSME, chap. 2, p. 23.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "Le plan d’accouchement doit être improvisé une fois le travail très avancé.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le cours le définit comme un ensemble de dispositions prises à l’avance par la femme et sa famille.",
          "source": "Module PNSME, chap. 2, p. 24.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Le modèle OMS 2016 reproduit dans le module ne prévoit que quatre contacts prénatals.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le tableau OMS 2016 comporte huit contacts ; il doit être distingué du schéma ancien à quatre visites.",
          "source": "Module PNSME, chap. 2, p. 21-22.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "La prévention du paludisme se réduit au traitement d’une crise fébrile.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Elle inclut aussi des mesures préventives, notamment la moustiquaire et le traitement préventif selon les directives.",
          "source": "Module PNSME, chap. 2, p. 21-23.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "La hauteur utérine et les mouvements fœtaux renseignent sur l’évolution de la grossesse.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Ils font partie de l’évaluation fœtale décrite, avec les bruits du cœur fœtal.",
          "source": "Module PNSME, chap. 2, p. 20.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "La détermination du groupe ABO et du Rhésus figure dans le bilan prénatal du module.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Elle participe à l’identification des particularités sanguines utiles à la prise en charge.",
          "source": "Module PNSME, chap. 2, p. 23.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "L’allaitement précoce et exclusif est un thème de promotion de la santé pendant la grossesse.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le préparer avant la naissance permet d’anticiper les pratiques d’alimentation du nouveau-né.",
          "source": "Module PNSME, chap. 2, p. 26.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "Choisir le lieu d’accouchement et identifier un prestataire qualifié font partie du plan.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Cette anticipation facilite le recours à des soins appropriés au moment nécessaire.",
          "source": "Module PNSME, chap. 2, p. 24.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "Les médicaments traditionnels ne doivent jamais être abordés pendant le counseling.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le module recommande de discuter de l’utilisation de produits potentiellement nocifs, traditionnels ou modernes.",
          "source": "Module PNSME, chap. 2, p. 26.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Des céphalées intenses associées à des troubles visuels doivent alerter.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Ces signes figurent dans la liste des dangers à expliquer pendant la préparation à l’accouchement.",
          "source": "Module PNSME, chap. 2, p. 25.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "Prévoir le transport suffit, sans réfléchir aux moyens financiers.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le plan comprend aussi les ressources financières et les décisions en situation urgente.",
          "source": "Module PNSME, chap. 2, p. 24-25.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "La diminution des mouvements actifs fœtaux doit seulement être notée pour la visite du mois suivant.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Elle constitue un signe de danger justifiant un recours rapide à une évaluation.",
          "source": "Module PNSME, chap. 2, p. 25.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Un mécanisme de décision en l’absence du décideur habituel peut être prévu.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "L’anticipation évite de bloquer le recours aux soins lorsque cette personne n’est pas disponible.",
          "source": "Module PNSME, chap. 2, p. 25.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "Le soutien familial doit être organisé pour la femme et pour les personnes restant au domicile.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le plan prévoit un accompagnant à la maternité et une aide pour la famille pendant l’absence.",
          "source": "Module PNSME, chap. 2, p. 25.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "La promotion de la santé ne peut être réalisée qu’à l’hôpital.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le cours décrit aussi les activités communautaires et les moyens de communication locaux.",
          "source": "Module PNSME, chap. 2, p. 26.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Un saignement vaginal pendant la grossesse est toujours physiologique.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Il est cité parmi les signes de danger qui imposent une réaction appropriée.",
          "source": "Module PNSME, chap. 2, p. 25.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Quelle caractéristique définit le mieux la CPN recentrée ? (une réponse)",
          "options": [
            "L’absence d’analyse des examens",
            "L’accumulation de visites sans contenu",
            "Des actions ciblées selon les besoins de chaque femme",
            "Le remplissage administratif seul"
          ],
          "type": "qcm",
          "explanation": "La qualité du contact et la pertinence des actions priment dans l’approche décrite.",
          "source": "Module PNSME, chap. 2, p. 18.",
          "answers": [
            "Des actions ciblées selon les besoins de chaque femme"
          ],
          "correct": [
            "Des actions ciblées selon les besoins de chaque femme"
          ]
        },
        {
          "text": "Quelles propositions sont des composantes de la CPN recentrée ? (plusieurs réponses)",
          "options": [
            "Suppression de la prévention",
            "Dépistage et prise en charge des complications",
            "Attente systématique des urgences",
            "Promotion de la santé"
          ],
          "type": "qcm",
          "explanation": "La prévention et la préparation à l’accouchement sont les deux autres composantes.",
          "source": "Module PNSME, chap. 2, p. 20.",
          "answers": [
            "Dépistage et prise en charge des complications",
            "Promotion de la santé"
          ],
          "correct": [
            "Dépistage et prise en charge des complications",
            "Promotion de la santé"
          ]
        },
        {
          "text": "Quels comportements correspondent à des soins centrés sur la femme ? (plusieurs réponses)",
          "options": [
            "Adapter les conseils à son contexte",
            "Ignorer ses croyances lors des échanges",
            "Respecter ses droits",
            "Exclure ses questions"
          ],
          "type": "qcm",
          "explanation": "Le respect et une communication appropriée rendent les conseils compréhensibles et réalisables.",
          "source": "Module PNSME, chap. 2, p. 19.",
          "answers": [
            "Adapter les conseils à son contexte",
            "Respecter ses droits"
          ],
          "correct": [
            "Adapter les conseils à son contexte",
            "Respecter ses droits"
          ]
        },
        {
          "text": "Quel est l’objectif du counseling pendant la CPN ? (une réponse)",
          "options": [
            "Aider la femme à comprendre et à décider",
            "Remplacer l’ensemble de l’examen clinique",
            "Empêcher toute participation",
            "Décider systématiquement à sa place"
          ],
          "type": "qcm",
          "explanation": "Le counseling accompagne les soins et soutient la participation active de la femme.",
          "source": "Module PNSME, chap. 2, p. 19.",
          "answers": [
            "Aider la femme à comprendre et à décider"
          ],
          "correct": [
            "Aider la femme à comprendre et à décider"
          ]
        },
        {
          "text": "À quel moment doit-on rechercher rapidement des signes de danger ? (une réponse)",
          "options": [
            "Seulement après 40 semaines",
            "Uniquement à la demande de la famille",
            "À chaque visite prénatale",
            "Uniquement lors de l’inscription"
          ],
          "type": "qcm",
          "explanation": "L’évaluation répétée permet de repérer des problèmes apparus depuis le contact précédent.",
          "source": "Module PNSME, chap. 2, p. 21.",
          "answers": [
            "À chaque visite prénatale"
          ],
          "correct": [
            "À chaque visite prénatale"
          ]
        },
        {
          "text": "Une gestante présente dysurie, pollakiurie et fièvre. Quelle pathologie faut-il notamment rechercher ? (une réponse)",
          "options": [
            "Entorse de cheville",
            "Caries sans complication",
            "Infection urinaire",
            "Presbytie"
          ],
          "type": "qcm",
          "explanation": "Le cours associe ces signes à l’infection urinaire et mentionne l’ECBU dans son évaluation.",
          "source": "Module PNSME, chap. 2, p. 20.",
          "answers": [
            "Infection urinaire"
          ],
          "correct": [
            "Infection urinaire"
          ]
        },
        {
          "text": "Quels éléments contribuent au dépistage de l’anémie ? (plusieurs réponses)",
          "options": [
            "Pâleur des conjonctives",
            "Dosage de l’hémoglobine",
            "Couleur des cheveux seule",
            "Taille du conjoint"
          ],
          "type": "qcm",
          "explanation": "La recherche clinique et la mesure biologique sont complémentaires.",
          "source": "Module PNSME, chap. 2, p. 20.",
          "answers": [
            "Pâleur des conjonctives",
            "Dosage de l’hémoglobine"
          ],
          "correct": [
            "Pâleur des conjonctives",
            "Dosage de l’hémoglobine"
          ]
        },
        {
          "text": "Quels éléments renseignent sur l’état fœtal dans le module ? (plusieurs réponses)",
          "options": [
            "Mouvements actifs fœtaux",
            "Bruits du cœur fœtal",
            "Groupe sanguin du voisin",
            "Acuité visuelle maternelle seule"
          ],
          "type": "qcm",
          "explanation": "La hauteur utérine complète l’évaluation clinique de la croissance et de l’évolution de la grossesse.",
          "source": "Module PNSME, chap. 2, p. 20.",
          "answers": [
            "Mouvements actifs fœtaux",
            "Bruits du cœur fœtal"
          ],
          "correct": [
            "Mouvements actifs fœtaux",
            "Bruits du cœur fœtal"
          ]
        },
        {
          "text": "Combien de contacts comporte le modèle OMS 2016 reproduit dans le cours ? (une réponse)",
          "options": [
            "4",
            "12",
            "8",
            "2"
          ],
          "type": "qcm",
          "explanation": "Le tableau de la page 22 comporte huit contacts, à distinguer du schéma de quatre visites de la page précédente.",
          "source": "Module PNSME, chap. 2, p. 22.",
          "answers": [
            "8"
          ],
          "correct": [
            "8"
          ]
        },
        {
          "text": "Quel calendrier correspond aux trois premiers contacts du modèle OMS 2016 ? (une réponse)",
          "options": [
            "Après la naissance seulement",
            "6, 8 et 10 mois",
            "20, 30 et 40 semaines uniquement",
            "Jusqu’à 12 semaines, puis 20 et 26 semaines"
          ],
          "type": "qcm",
          "explanation": "Le premier trimestre est suivi de deux contacts au deuxième trimestre.",
          "source": "Module PNSME, chap. 2, p. 22.",
          "answers": [
            "Jusqu’à 12 semaines, puis 20 et 26 semaines"
          ],
          "correct": [
            "Jusqu’à 12 semaines, puis 20 et 26 semaines"
          ]
        },
        {
          "text": "Quel ensemble correspond aux contacts du troisième trimestre dans ce modèle ? (une réponse)",
          "options": [
            "28 et 40 semaines seulement",
            "30, 34, 36, 38 et 40 semaines",
            "12, 16 et 20 semaines",
            "Un seul contact à 36 semaines"
          ],
          "type": "qcm",
          "explanation": "Le modèle renforce les contacts en fin de grossesse.",
          "source": "Module PNSME, chap. 2, p. 22.",
          "answers": [
            "30, 34, 36, 38 et 40 semaines"
          ],
          "correct": [
            "30, 34, 36, 38 et 40 semaines"
          ]
        },
        {
          "text": "Quelle conduite correspond au principe de suivi prénatal devant un signe de danger ? (une réponse)",
          "options": [
            "Traiter uniquement par des conseils de repos",
            "Supprimer l’examen clinique",
            "Attendre la date fixée quel que soit le signe",
            "Évaluer rapidement sans attendre le prochain contact programmé"
          ],
          "type": "qcm",
          "explanation": "Le calendrier organise les soins de routine ; une complication nécessite une évaluation adaptée à son urgence.",
          "source": "Module PNSME, chap. 2, p. 21, 25.",
          "answers": [
            "Évaluer rapidement sans attendre le prochain contact programmé"
          ],
          "correct": [
            "Évaluer rapidement sans attendre le prochain contact programmé"
          ]
        },
        {
          "text": "Quels examens sont cités dans le bilan prénatal du module ? (plusieurs réponses)",
          "options": [
            "Ponction lombaire systématique",
            "Électroencéphalogramme systématique",
            "Groupe ABO-Rhésus",
            "Hémoglobine ou hématocrite"
          ],
          "type": "qcm",
          "explanation": "Le cours détaille un bilan ciblé comprenant aussi plusieurs dépistages infectieux.",
          "source": "Module PNSME, chap. 2, p. 23.",
          "answers": [
            "Groupe ABO-Rhésus",
            "Hémoglobine ou hématocrite"
          ],
          "correct": [
            "Groupe ABO-Rhésus",
            "Hémoglobine ou hématocrite"
          ]
        },
        {
          "text": "Quelle condition est explicitement associée à la sérologie VIH dans le cours ? (une réponse)",
          "options": [
            "Obligation de résultat public",
            "Accord secret du voisin",
            "Consentement éclairé",
            "Absence totale d’information"
          ],
          "type": "qcm",
          "explanation": "Le dépistage s’inscrit dans une démarche de conseil et de respect des droits.",
          "source": "Module PNSME, chap. 2, p. 23.",
          "answers": [
            "Consentement éclairé"
          ],
          "correct": [
            "Consentement éclairé"
          ]
        },
        {
          "text": "Des nitrites urinaires sont positifs. Quel examen est indiqué dans le module ? (une réponse)",
          "options": [
            "Audiogramme",
            "ECBU",
            "Électrocardiogramme fœtal systématique",
            "Radiographie systématique du crâne"
          ],
          "type": "qcm",
          "explanation": "Le cours propose un examen cytobactériologique des urines pour explorer une infection urinaire.",
          "source": "Module PNSME, chap. 2, p. 23.",
          "answers": [
            "ECBU"
          ],
          "correct": [
            "ECBU"
          ]
        },
        {
          "text": "Quelles mesures préventives sont mentionnées pendant la grossesse ? (plusieurs réponses)",
          "options": [
            "Suppression de toute vaccination indiquée",
            "Prise systématique d’alcool",
            "Supplémentation en fer et folates",
            "Prévention du paludisme"
          ],
          "type": "qcm",
          "explanation": "La vaccination selon le statut et les directives complète ces mesures.",
          "source": "Module PNSME, chap. 2, p. 23.",
          "answers": [
            "Supplémentation en fer et folates",
            "Prévention du paludisme"
          ],
          "correct": [
            "Supplémentation en fer et folates",
            "Prévention du paludisme"
          ]
        },
        {
          "text": "Que doit-on préparer concernant le lieu d’accouchement ? (une réponse)",
          "options": [
            "Identifier une structure adaptée et s’y familiariser avant le jour prévu",
            "Écarter les structures avec personnel qualifié",
            "Choisir au dernier moment sans information",
            "Prévoir uniquement une adresse sans possibilité d’accès"
          ],
          "type": "qcm",
          "explanation": "La préparation vise à réduire les obstacles pratiques au recours aux soins.",
          "source": "Module PNSME, chap. 2, p. 24.",
          "answers": [
            "Identifier une structure adaptée et s’y familiariser avant le jour prévu"
          ],
          "correct": [
            "Identifier une structure adaptée et s’y familiariser avant le jour prévu"
          ]
        },
        {
          "text": "Quels profils sont cités parmi les prestataires qualifiés ? (plusieurs réponses)",
          "options": [
            "Infirmier diplômé d’État compétent pour ces soins",
            "Sage-femme",
            "Vendeur sans formation sanitaire",
            "Chauffeur sans formation sanitaire"
          ],
          "type": "qcm",
          "explanation": "Le cours cite aussi le médecin ; la qualification suppose des compétences adaptées.",
          "source": "Module PNSME, chap. 2, p. 19, 24.",
          "answers": [
            "Infirmier diplômé d’État compétent pour ces soins",
            "Sage-femme"
          ],
          "correct": [
            "Infirmier diplômé d’État compétent pour ces soins",
            "Sage-femme"
          ]
        },
        {
          "text": "Quels éléments financiers peuvent entrer dans le plan d’accouchement ? (plusieurs réponses)",
          "options": [
            "Assurance ou mutuelle de santé",
            "Épargne préparée",
            "Attente d’un choc pour envisager le paiement",
            "Absence volontaire de ressources"
          ],
          "type": "qcm",
          "explanation": "Plusieurs mécanismes sont possibles ; l’essentiel est de les anticiper.",
          "source": "Module PNSME, chap. 2, p. 24.",
          "answers": [
            "Assurance ou mutuelle de santé",
            "Épargne préparée"
          ],
          "correct": [
            "Assurance ou mutuelle de santé",
            "Épargne préparée"
          ]
        },
        {
          "text": "Le décideur habituel est absent au début d’une urgence. Quelle disposition préparée est utile ? (une réponse)",
          "options": [
            "L’attente indéfinie du décideur",
            "L’annulation du transport disponible",
            "L’interdiction de consulter",
            "Un mécanisme de décision de remplacement"
          ],
          "type": "qcm",
          "explanation": "Le cours recommande d’envisager la délégation de décision pour éviter un retard.",
          "source": "Module PNSME, chap. 2, p. 25.",
          "answers": [
            "Un mécanisme de décision de remplacement"
          ],
          "correct": [
            "Un mécanisme de décision de remplacement"
          ]
        },
        {
          "text": "Quels signes doivent être expliqués comme signes de danger ? (plusieurs réponses)",
          "options": [
            "Saignement vaginal",
            "Convulsions ou perte de connaissance",
            "Sensation de faim isolée",
            "Envie de dormir après une journée ordinaire sans autre signe"
          ],
          "type": "qcm",
          "explanation": "Les signes de danger impliquent une réaction rapide et adaptée.",
          "source": "Module PNSME, chap. 2, p. 25.",
          "answers": [
            "Saignement vaginal",
            "Convulsions ou perte de connaissance"
          ],
          "correct": [
            "Saignement vaginal",
            "Convulsions ou perte de connaissance"
          ]
        },
        {
          "text": "Une femme enceinte rapporte des céphalées intenses et une vision trouble. Quelle attitude est adaptée ? (une réponse)",
          "options": [
            "Attendre l’accouchement",
            "Interdire toute mesure de pression artérielle",
            "Rassurer sans examen",
            "Rechercher rapidement une complication, notamment hypertensive"
          ],
          "type": "qcm",
          "explanation": "Ces manifestations sont des signes d’alerte et peuvent annoncer une complication grave.",
          "source": "Module PNSME, chap. 2, p. 20, 25.",
          "answers": [
            "Rechercher rapidement une complication, notamment hypertensive"
          ],
          "correct": [
            "Rechercher rapidement une complication, notamment hypertensive"
          ]
        },
        {
          "text": "Une gestante note une diminution inhabituelle des mouvements fœtaux. Quel conseil donner ? (une réponse)",
          "options": [
            "Attendre systématiquement un mois",
            "Prendre un médicament sans évaluation",
            "Cesser de surveiller les mouvements",
            "Consulter rapidement pour une évaluation"
          ],
          "type": "qcm",
          "explanation": "La diminution des mouvements fait partie des signes de danger cités.",
          "source": "Module PNSME, chap. 2, p. 25.",
          "answers": [
            "Consulter rapidement pour une évaluation"
          ],
          "correct": [
            "Consulter rapidement pour une évaluation"
          ]
        },
        {
          "text": "Quel soutien familial peut être anticipé ? (plusieurs réponses)",
          "options": [
            "L’isolement obligatoire de la femme",
            "Une personne pour s’occuper du foyer pendant son absence",
            "L’absence de toute personne ressource",
            "Une personne pour accompagner la femme"
          ],
          "type": "qcm",
          "explanation": "Cette organisation rend le séjour à la maternité et le recours aux soins plus faciles.",
          "source": "Module PNSME, chap. 2, p. 25.",
          "answers": [
            "Une personne pour s’occuper du foyer pendant son absence",
            "Une personne pour accompagner la femme"
          ],
          "correct": [
            "Une personne pour s’occuper du foyer pendant son absence",
            "Une personne pour accompagner la femme"
          ]
        },
        {
          "text": "Quels articles sont prévus dans la préparation matérielle décrite ? (plusieurs réponses)",
          "options": [
            "Linge propre pour le bébé",
            "Objets coupants non stériles pour les soins",
            "Produits inconnus à appliquer sur le cordon",
            "Garnitures propres pour la mère"
          ],
          "type": "qcm",
          "explanation": "Le cours recommande notamment des pagnes, du linge et des articles de toilette propres.",
          "source": "Module PNSME, chap. 2, p. 25.",
          "answers": [
            "Linge propre pour le bébé",
            "Garnitures propres pour la mère"
          ],
          "correct": [
            "Linge propre pour le bébé",
            "Garnitures propres pour la mère"
          ]
        },
        {
          "text": "Où peut-on mener la promotion de la santé ? (plusieurs réponses)",
          "options": [
            "Dans les centres de santé",
            "Uniquement au bloc opératoire",
            "Dans la communauté",
            "Uniquement après une complication"
          ],
          "type": "qcm",
          "explanation": "Causeries, counseling et activités communautaires sont des moyens complémentaires.",
          "source": "Module PNSME, chap. 2, p. 26.",
          "answers": [
            "Dans les centres de santé",
            "Dans la communauté"
          ],
          "correct": [
            "Dans les centres de santé",
            "Dans la communauté"
          ]
        },
        {
          "text": "Quels thèmes peuvent être abordés pendant la promotion de la santé ? (plusieurs réponses)",
          "options": [
            "Consommation d’alcool recommandée",
            "Planification familiale",
            "Allaitement précoce et exclusif",
            "Automédication abusive encouragée"
          ],
          "type": "qcm",
          "explanation": "Le cours inclut aussi l’hygiène, la prévention du paludisme et la prévention de l’anémie.",
          "source": "Module PNSME, chap. 2, p. 26.",
          "answers": [
            "Planification familiale",
            "Allaitement précoce et exclusif"
          ],
          "correct": [
            "Planification familiale",
            "Allaitement précoce et exclusif"
          ]
        },
        {
          "text": "Que faut-il faire face à l’usage de produits traditionnels ou modernes potentiellement nocifs ? (une réponse)",
          "options": [
            "Éviter toute question à ce sujet",
            "Encourager leur association systématique",
            "En discuter de façon ciblée pendant le counseling",
            "Supposer qu’ils sont tous inoffensifs"
          ],
          "type": "qcm",
          "explanation": "L’échange permet d’identifier des expositions et de donner des conseils adaptés.",
          "source": "Module PNSME, chap. 2, p. 26.",
          "answers": [
            "En discuter de façon ciblée pendant le counseling"
          ],
          "correct": [
            "En discuter de façon ciblée pendant le counseling"
          ]
        },
        {
          "text": "Quel lien existe entre CPN et préparation à une hémorragie obstétricale ? (une réponse)",
          "options": [
            "Le transport devient inutile après une CPN normale",
            "La CPN aide à anticiper le recours aux soins et les ressources nécessaires",
            "Seules les femmes anémiées doivent préparer l’accouchement",
            "La CPN garantit l’absence de toute hémorragie"
          ],
          "type": "qcm",
          "explanation": "La préparation ne prédit pas toutes les urgences mais réduit les retards lorsqu’elles surviennent.",
          "source": "Module PNSME, chap. 2, p. 24-25, 50.",
          "answers": [
            "La CPN aide à anticiper le recours aux soins et les ressources nécessaires"
          ],
          "correct": [
            "La CPN aide à anticiper le recours aux soins et les ressources nécessaires"
          ]
        },
        {
          "text": "Une femme vient régulièrement mais ne comprend aucun de ses résultats. Quel aspect faut-il améliorer ? (une réponse)",
          "options": [
            "L’arrêt des soins préventifs",
            "Uniquement le nombre de rendez-vous",
            "La suppression de ses questions",
            "Explication des résultats et counseling individualisé"
          ],
          "type": "qcm",
          "explanation": "La CPN recentrée exige un contenu utile et une communication qui permette la participation aux soins.",
          "source": "Module PNSME, chap. 2, p. 18-19.",
          "answers": [
            "Explication des résultats et counseling individualisé"
          ],
          "correct": [
            "Explication des résultats et counseling individualisé"
          ]
        }
      ]
    },
    {
      "id": "sfm-3",
      "title": "SONU — Alimentation de la femme enceinte et allaitante",
      "matter": "SONU",
      "filiere": "SFM",
      "description": "Sujet 3 — 60 questions corrigées",
      "instructions": "QCD : Vrai ou Faux. QCM : sélectionner la ou les bonnes réponses.",
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
          "text": "Les réserves maternelles participent au développement fœtal et à l’allaitement.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le cours relie les apports accrus à la croissance du fœtus et aux besoins de l’allaitement.",
          "source": "Module PNSME, chap. 3, p. 27.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "La nutrition maternelle n’a aucun lien avec le poids de naissance.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Une alimentation inadéquate peut contribuer à un faible poids de naissance.",
          "source": "Module PNSME, chap. 3, p. 27, 29.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Les besoins nutritionnels augmentent pendant la grossesse et l’allaitement.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Les apports soutiennent les besoins maternels, la croissance fœtale puis la production de lait.",
          "source": "Module PNSME, chap. 3, p. 27-28.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "Le fer et l’acide folique font partie des micronutriments cités.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le module mentionne aussi l’iode, le calcium et plusieurs vitamines.",
          "source": "Module PNSME, chap. 3, p. 27-28.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "Les fruits et légumes doivent être systématiquement supprimés pendant la grossesse.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le cours conseille d’augmenter leur consommation dans une alimentation diversifiée.",
          "source": "Module PNSME, chap. 3, p. 28.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "La diversification alimentaire améliore les apports en micronutriments.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Varier les groupes d’aliments améliore la qualité de la ration.",
          "source": "Module PNSME, chap. 3, p. 28.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "Les besoins alimentaires deviennent nuls chez une femme qui allaite exclusivement.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "La production de lait augmente au contraire les besoins nutritionnels.",
          "source": "Module PNSME, chap. 3, p. 28.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Une alimentation équilibrée doit apporter uniquement des calories.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Elle doit aussi fournir les nutriments essentiels en quantités et proportions appropriées.",
          "source": "Module PNSME, chap. 3, p. 29.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Le sel iodé apporte principalement du fer.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Son intérêt spécifique dans ce chapitre est l’apport d’iode.",
          "source": "Module PNSME, chap. 3, p. 28.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Une carence en iode peut affecter le développement cérébral du fœtus.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le cours relie l’iode à la croissance et au développement intellectuel de l’enfant.",
          "source": "Module PNSME, chap. 3, p. 28.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "Le faible poids de naissance désigne obligatoirement une grossesse prolongée.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le cours le décrit comme une conséquence possible d’apports inadéquats, sans l’assimiler à une grossesse prolongée.",
          "source": "Module PNSME, chap. 3, p. 29.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Les produits animaux peuvent participer aux apports en nutriments.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Ils constituent notamment des aliments de construction dans le tableau du cours.",
          "source": "Module PNSME, chap. 3, p. 28-29.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "Le riz et le maïs sont classés uniquement comme aliments de protection.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Ce sont des céréales, classées parmi les aliments énergétiques de base.",
          "source": "Module PNSME, chap. 3, p. 29.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Une maladie est sans conséquence possible sur l’alimentation maternelle.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Les maladies figurent parmi les facteurs de mauvaise alimentation cités.",
          "source": "Module PNSME, chap. 3, p. 28.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Le manioc et l’igname sont classés parmi les aliments énergétiques de base.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Ils appartiennent au groupe des racines et tubercules.",
          "source": "Module PNSME, chap. 3, p. 29.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "L’insécurité alimentaire est un facteur favorisant une alimentation inadéquate.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "L’accès insuffisant aux aliments limite la couverture des besoins.",
          "source": "Module PNSME, chap. 3, p. 28.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "Une alimentation insuffisante garantit une meilleure résistance aux infections.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le module décrit au contraire une diminution de cette résistance.",
          "source": "Module PNSME, chap. 3, p. 29.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "L’asthénie et l’anémie font partie des conséquences maternelles décrites.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le cours mentionne aussi la malnutrition et une moindre résistance aux infections.",
          "source": "Module PNSME, chap. 3, p. 29.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "Les interdits alimentaires ne peuvent jamais contribuer à une mauvaise alimentation.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Des interdits ou préjugés peuvent réduire la diversité et les apports disponibles.",
          "source": "Module PNSME, chap. 3, p. 28.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "La prématurité est citée parmi les conséquences possibles d’une alimentation inadéquate.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Il s’agit d’un facteur possible parmi d’autres, et non d’une cause unique de prématurité.",
          "source": "Module PNSME, chap. 3, p. 27, 29.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "Les conseils alimentaires doivent tenir compte des aliments disponibles.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le cours recommande d’associer judicieusement les ressources alimentaires accessibles.",
          "source": "Module PNSME, chap. 3, p. 29.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "Les haricots et les lentilles ne peuvent pas participer aux aliments de construction.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Les légumineuses figurent explicitement dans ce groupe.",
          "source": "Module PNSME, chap. 3, p. 29.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Une ration suffisante en quantité est toujours équilibrée, quelle que soit sa composition.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "La proportion et la diversité des nutriments comptent aussi.",
          "source": "Module PNSME, chap. 3, p. 29.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Les huiles constituent le groupe principal des aliments de construction.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le tableau les classe parmi les aliments énergétiques de complément.",
          "source": "Module PNSME, chap. 3, p. 29.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "La banane plantain est un fruit féculent dans le tableau du module.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Elle est regroupée avec les aliments énergétiques de base.",
          "source": "Module PNSME, chap. 3, p. 29.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "Le module conseille la consommation d’alcool pour stimuler l’appétit.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Il recommande d’éviter l’alcool, le tabac et les drogues.",
          "source": "Module PNSME, chap. 3, p. 30.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Une supplémentation peut être décidée sans tenir compte des besoins ni des recommandations.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Les besoins, les apports et les indications doivent guider le choix ; citer un nutriment ne justifie pas une automédication.",
          "source": "Module PNSME, chap. 3, p. 28.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Les mangues et les oranges sont classées parmi les aliments de protection.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Les fruits et légumes constituent ce groupe dans le carré alimentaire du cours.",
          "source": "Module PNSME, chap. 3, p. 29.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "Le poisson et les œufs sont des aliments de construction.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Ce groupe comprend des produits animaux et des sources végétales comme les légumineuses.",
          "source": "Module PNSME, chap. 3, p. 29.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "Le repos et la réduction d’activités excessives peuvent accompagner le conseil nutritionnel.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le cours associe alimentation adaptée et réduction des activités quotidiennes.",
          "source": "Module PNSME, chap. 3, p. 30.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "Quel objectif relève de la prise en charge nutritionnelle maternelle ? (plusieurs réponses)",
          "options": [
            "Remplacer les soins obstétricaux d’urgence",
            "Réduire le risque de faible poids de naissance",
            "Prévenir les carences",
            "Supprimer tout besoin d’allaitement"
          ],
          "type": "qcm",
          "explanation": "La nutrition contribue à la santé maternelle et infantile sans remplacer les autres soins.",
          "source": "Module PNSME, chap. 3, p. 27.",
          "answers": [
            "Réduire le risque de faible poids de naissance",
            "Prévenir les carences"
          ],
          "correct": [
            "Réduire le risque de faible poids de naissance",
            "Prévenir les carences"
          ]
        },
        {
          "text": "Pourquoi les besoins augmentent-ils pendant la grossesse ? (une réponse)",
          "options": [
            "Pour supprimer la prise de tous les micronutriments",
            "Parce que seul le fœtus doit être nourri",
            "Pour soutenir la croissance fœtale et les besoins maternels",
            "Parce que tous les repas deviennent inutiles"
          ],
          "type": "qcm",
          "explanation": "La mère et le fœtus ont des besoins qui justifient des apports adaptés.",
          "source": "Module PNSME, chap. 3, p. 27.",
          "answers": [
            "Pour soutenir la croissance fœtale et les besoins maternels"
          ],
          "correct": [
            "Pour soutenir la croissance fœtale et les besoins maternels"
          ]
        },
        {
          "text": "Quelle démarche améliore les apports en micronutriments ? (une réponse)",
          "options": [
            "Manger exclusivement du sucre",
            "Supprimer tous les produits frais",
            "Consommer un seul féculent à tous les repas",
            "Diversifier les aliments"
          ],
          "type": "qcm",
          "explanation": "La diversification augmente les sources de vitamines et minéraux.",
          "source": "Module PNSME, chap. 3, p. 28.",
          "answers": [
            "Diversifier les aliments"
          ],
          "correct": [
            "Diversifier les aliments"
          ]
        },
        {
          "text": "Quels nutriments sont explicitement cités dans le module ? (plusieurs réponses)",
          "options": [
            "Iode",
            "Nicotine",
            "Fer",
            "Éthanol"
          ],
          "type": "qcm",
          "explanation": "Le fer et l’iode sont des micronutriments utiles ; l’alcool et la nicotine ne sont pas des nutriments recommandés.",
          "source": "Module PNSME, chap. 3, p. 27-28.",
          "answers": [
            "Iode",
            "Fer"
          ],
          "correct": [
            "Iode",
            "Fer"
          ]
        },
        {
          "text": "Quel aliment est spécifiquement conseillé pour l’apport en iode ? (une réponse)",
          "options": [
            "Sel iodé",
            "Eau sucrée",
            "Sucre blanc",
            "Sel non iodé par principe"
          ],
          "type": "qcm",
          "explanation": "Le sel iodé contribue à prévenir la carence en iode, sans signifier qu’il faut augmenter la quantité totale de sel.",
          "source": "Module PNSME, chap. 3, p. 28, 30.",
          "answers": [
            "Sel iodé"
          ],
          "correct": [
            "Sel iodé"
          ]
        },
        {
          "text": "Quel développement peut être affecté par une carence en iode ? (une réponse)",
          "options": [
            "Seulement la poussée des ongles maternels",
            "Aucun développement décrit",
            "Développement cérébral fœtal",
            "Uniquement la couleur des cheveux"
          ],
          "type": "qcm",
          "explanation": "Le cours souligne les conséquences possibles sur la croissance et les capacités intellectuelles.",
          "source": "Module PNSME, chap. 3, p. 28.",
          "answers": [
            "Développement cérébral fœtal"
          ],
          "correct": [
            "Développement cérébral fœtal"
          ]
        },
        {
          "text": "Quelles habitudes sont proposées pour diversifier les apports ? (plusieurs réponses)",
          "options": [
            "Consommer des fruits et légumes",
            "Inclure des produits animaux selon les possibilités",
            "Éliminer toutes les légumineuses",
            "Limiter l’alimentation au thé"
          ],
          "type": "qcm",
          "explanation": "Ces groupes complètent les aliments énergétiques et améliorent les apports.",
          "source": "Module PNSME, chap. 3, p. 28-29.",
          "answers": [
            "Consommer des fruits et légumes",
            "Inclure des produits animaux selon les possibilités"
          ],
          "correct": [
            "Consommer des fruits et légumes",
            "Inclure des produits animaux selon les possibilités"
          ]
        },
        {
          "text": "Quels facteurs peuvent favoriser une alimentation insuffisante ? (plusieurs réponses)",
          "options": [
            "Accès régulier à des aliments variés",
            "Insécurité alimentaire",
            "Maladie",
            "Conseil nutritionnel adapté"
          ],
          "type": "qcm",
          "explanation": "Les difficultés d’accès et les maladies sont deux facteurs explicitement cités.",
          "source": "Module PNSME, chap. 3, p. 28.",
          "answers": [
            "Insécurité alimentaire",
            "Maladie"
          ],
          "correct": [
            "Insécurité alimentaire",
            "Maladie"
          ]
        },
        {
          "text": "Une femme évite plusieurs aliments nutritifs à cause de tabous. Quel facteur est en jeu ? (une réponse)",
          "options": [
            "Une meilleure diversification automatique",
            "Un facteur socioculturel",
            "Un excès obligatoire de protéines",
            "Une absence de toute influence alimentaire"
          ],
          "type": "qcm",
          "explanation": "Les interdits peuvent restreindre la ration ; l’échange doit rechercher des solutions acceptables.",
          "source": "Module PNSME, chap. 3, p. 28-29.",
          "answers": [
            "Un facteur socioculturel"
          ],
          "correct": [
            "Un facteur socioculturel"
          ]
        },
        {
          "text": "Quelles conséquences maternelles sont citées ? (plusieurs réponses)",
          "options": [
            "Asthénie",
            "Anémie",
            "Absence certaine de complication",
            "Immunité obligatoirement renforcée"
          ],
          "type": "qcm",
          "explanation": "Le cours associe les apports inadéquats à plusieurs conséquences maternelles possibles.",
          "source": "Module PNSME, chap. 3, p. 29.",
          "answers": [
            "Asthénie",
            "Anémie"
          ],
          "correct": [
            "Asthénie",
            "Anémie"
          ]
        },
        {
          "text": "Quelles conséquences pour l’enfant sont décrites ? (plusieurs réponses)",
          "options": [
            "Poids élevé garanti",
            "Petit poids de naissance",
            "Prématurité",
            "Absence certaine de malformation"
          ],
          "type": "qcm",
          "explanation": "Ces conséquences sont possibles et multifactorielles ; elles ne permettent pas d’affirmer une causalité unique.",
          "source": "Module PNSME, chap. 3, p. 29.",
          "answers": [
            "Petit poids de naissance",
            "Prématurité"
          ],
          "correct": [
            "Petit poids de naissance",
            "Prématurité"
          ]
        },
        {
          "text": "Comment définir une ration équilibrée selon le chapitre ? (une réponse)",
          "options": [
            "Des nutriments essentiels en quantité suffisante et en proportion convenable",
            "Uniquement des boissons",
            "Un seul aliment en grande quantité",
            "Uniquement des vitamines sans alimentation"
          ],
          "type": "qcm",
          "explanation": "L’équilibre associe quantité, qualité et proportions.",
          "source": "Module PNSME, chap. 3, p. 29.",
          "answers": [
            "Des nutriments essentiels en quantité suffisante et en proportion convenable"
          ],
          "correct": [
            "Des nutriments essentiels en quantité suffisante et en proportion convenable"
          ]
        },
        {
          "text": "Quels aliments appartiennent aux racines et tubercules du tableau ? (plusieurs réponses)",
          "options": [
            "Manioc",
            "Œuf",
            "Poisson",
            "Igname"
          ],
          "type": "qcm",
          "explanation": "Les racines et tubercules sont des aliments énergétiques de base.",
          "source": "Module PNSME, chap. 3, p. 29.",
          "answers": [
            "Manioc",
            "Igname"
          ],
          "correct": [
            "Manioc",
            "Igname"
          ]
        },
        {
          "text": "Quels aliments sont des céréales dans le tableau ? (plusieurs réponses)",
          "options": [
            "Tomate",
            "Lait",
            "Maïs",
            "Riz"
          ],
          "type": "qcm",
          "explanation": "Les céréales complètent le groupe des aliments énergétiques de base.",
          "source": "Module PNSME, chap. 3, p. 29.",
          "answers": [
            "Maïs",
            "Riz"
          ],
          "correct": [
            "Maïs",
            "Riz"
          ]
        },
        {
          "text": "Dans quel groupe le tableau classe-t-il la banane plantain ? (une réponse)",
          "options": [
            "Aliments énergétiques de base",
            "Produits antiseptiques",
            "Médicaments utérotoniques",
            "Produits animaux"
          ],
          "type": "qcm",
          "explanation": "Le plantain est cité comme fruit féculent.",
          "source": "Module PNSME, chap. 3, p. 29.",
          "answers": [
            "Aliments énergétiques de base"
          ],
          "correct": [
            "Aliments énergétiques de base"
          ]
        },
        {
          "text": "Quels aliments sont énergétiques de complément dans le tableau ? (plusieurs réponses)",
          "options": [
            "Huile",
            "Beurre",
            "Eau pure",
            "Sel iodé"
          ],
          "type": "qcm",
          "explanation": "Les matières grasses apportent de l’énergie ; cela ne les rend pas suffisantes pour équilibrer seules la ration.",
          "source": "Module PNSME, chap. 3, p. 29.",
          "answers": [
            "Huile",
            "Beurre"
          ],
          "correct": [
            "Huile",
            "Beurre"
          ]
        },
        {
          "text": "Quels produits animaux sont classés comme aliments de construction ? (plusieurs réponses)",
          "options": [
            "Poisson",
            "Œufs",
            "Huile seule",
            "Sucre"
          ],
          "type": "qcm",
          "explanation": "Le tableau comprend aussi viande et produits laitiers.",
          "source": "Module PNSME, chap. 3, p. 29.",
          "answers": [
            "Poisson",
            "Œufs"
          ],
          "correct": [
            "Poisson",
            "Œufs"
          ]
        },
        {
          "text": "Quelles sources végétales figurent dans le groupe de construction ? (plusieurs réponses)",
          "options": [
            "Lentilles",
            "Eau minérale",
            "Haricots",
            "Sucre blanc"
          ],
          "type": "qcm",
          "explanation": "Les légumineuses participent au groupe des aliments de construction.",
          "source": "Module PNSME, chap. 3, p. 29.",
          "answers": [
            "Lentilles",
            "Haricots"
          ],
          "correct": [
            "Lentilles",
            "Haricots"
          ]
        },
        {
          "text": "Quels aliments appartiennent au groupe de protection ? (plusieurs réponses)",
          "options": [
            "Beurre seul",
            "Oranges",
            "Tomates",
            "Sucre seul"
          ],
          "type": "qcm",
          "explanation": "Le groupe de protection comprend les fruits et les légumes.",
          "source": "Module PNSME, chap. 3, p. 29.",
          "answers": [
            "Oranges",
            "Tomates"
          ],
          "correct": [
            "Oranges",
            "Tomates"
          ]
        },
        {
          "text": "Une ration se compose seulement de riz et d’huile. Quelle amélioration est pertinente ? (une réponse)",
          "options": [
            "Ajouter des aliments de construction et de protection",
            "Remplacer l’eau par de l’alcool",
            "Augmenter uniquement l’huile",
            "Supprimer toute source protéique"
          ],
          "type": "qcm",
          "explanation": "L’énergie seule ne couvre pas l’ensemble des besoins nutritionnels.",
          "source": "Module PNSME, chap. 3, p. 28-29.",
          "answers": [
            "Ajouter des aliments de construction et de protection"
          ],
          "correct": [
            "Ajouter des aliments de construction et de protection"
          ]
        },
        {
          "text": "Une femme ne mange aucun produit animal. Quelle source de construction citée peut être explorée dans le conseil ? (une réponse)",
          "options": [
            "Haricots ou lentilles",
            "Sel seul",
            "Huile uniquement",
            "Sucre uniquement"
          ],
          "type": "qcm",
          "explanation": "Les légumineuses sont des sources végétales du groupe de construction.",
          "source": "Module PNSME, chap. 3, p. 29.",
          "answers": [
            "Haricots ou lentilles"
          ],
          "correct": [
            "Haricots ou lentilles"
          ]
        },
        {
          "text": "Quel objectif justifie le conseil sur les fruits et légumes ? (une réponse)",
          "options": [
            "Améliorer la diversité et les apports en micronutriments",
            "Éviter toute consommation d’eau",
            "Supprimer toutes les protéines",
            "Remplacer automatiquement tous les repas"
          ],
          "type": "qcm",
          "explanation": "Ils s’intègrent à l’équilibre global de la ration.",
          "source": "Module PNSME, chap. 3, p. 28-29.",
          "answers": [
            "Améliorer la diversité et les apports en micronutriments"
          ],
          "correct": [
            "Améliorer la diversité et les apports en micronutriments"
          ]
        },
        {
          "text": "Selon les repères énergétiques du module, quel supplément quotidien est cité pendant l’allaitement ? (une réponse)",
          "options": [
            "50 kcal",
            "5 000 kcal",
            "500 kcal",
            "0 kcal"
          ],
          "type": "qcm",
          "explanation": "Il s’agit d’un repère pédagogique du cours ; les besoins individuels dépendent du contexte et de l’évaluation nutritionnelle.",
          "source": "Module PNSME, chap. 3, p. 28.",
          "answers": [
            "500 kcal"
          ],
          "correct": [
            "500 kcal"
          ]
        },
        {
          "text": "Quel intervalle de supplément énergétique est cité pour la grossesse dans le module ? (une réponse)",
          "options": [
            "Aucun apport supplémentaire possible",
            "1 à 5 kcal par jour",
            "150 à 350 kcal par jour",
            "1 500 à 3 500 kcal supplémentaires systématiques"
          ],
          "type": "qcm",
          "explanation": "Le cours donne cet ordre de grandeur, qui ne remplace pas l’adaptation individuelle des apports.",
          "source": "Module PNSME, chap. 3, p. 28.",
          "answers": [
            "150 à 350 kcal par jour"
          ],
          "correct": [
            "150 à 350 kcal par jour"
          ]
        },
        {
          "text": "Quels conseils figurent à la fin du chapitre ? (plusieurs réponses)",
          "options": [
            "Éviter l’alcool et le tabac",
            "Alimentation équilibrée",
            "Réduire la ration à un seul aliment",
            "Consommer systématiquement des drogues"
          ],
          "type": "qcm",
          "explanation": "Les conseils associent alimentation, prévention des expositions nocives et adaptation des activités.",
          "source": "Module PNSME, chap. 3, p. 30.",
          "answers": [
            "Éviter l’alcool et le tabac",
            "Alimentation équilibrée"
          ],
          "correct": [
            "Éviter l’alcool et le tabac",
            "Alimentation équilibrée"
          ]
        },
        {
          "text": "Une femme travaille beaucoup et saute des repas. Quel conseil répond au problème décrit ? (une réponse)",
          "options": [
            "Attendre une complication pour discuter de nutrition",
            "Supprimer tout repos",
            "Organiser des prises alimentaires adaptées et réduire les efforts excessifs",
            "Remplacer les repas par du café"
          ],
          "type": "qcm",
          "explanation": "Le cours associe les conseils d’alimentation aux activités quotidiennes et au repos.",
          "source": "Module PNSME, chap. 3, p. 27-30.",
          "answers": [
            "Organiser des prises alimentaires adaptées et réduire les efforts excessifs"
          ],
          "correct": [
            "Organiser des prises alimentaires adaptées et réduire les efforts excessifs"
          ]
        },
        {
          "text": "Quel raisonnement est juste devant une asthénie et une alimentation très restreinte ? (une réponse)",
          "options": [
            "Prescrire au hasard tous les suppléments",
            "Conclure automatiquement à une grossesse normale sans examen",
            "Rechercher une insuffisance d’apports et une éventuelle anémie",
            "Affirmer que l’alimentation n’a aucun rôle"
          ],
          "type": "qcm",
          "explanation": "Les conséquences décrites justifient une évaluation, sans attribuer toute asthénie à une cause unique.",
          "source": "Module PNSME, chap. 3, p. 28-29.",
          "answers": [
            "Rechercher une insuffisance d’apports et une éventuelle anémie"
          ],
          "correct": [
            "Rechercher une insuffisance d’apports et une éventuelle anémie"
          ]
        },
        {
          "text": "Une femme affirme que le sel iodé remplace tous les autres micronutriments. Quelle réponse est correcte ? (une réponse)",
          "options": [
            "Il dispense de toute surveillance",
            "Il suffit à prévenir toute anémie",
            "Il remplace toutes les protéines",
            "Il apporte de l’iode mais ne remplace pas une alimentation variée"
          ],
          "type": "qcm",
          "explanation": "Un nutriment spécifique ne remplace pas l’ensemble des apports nécessaires.",
          "source": "Module PNSME, chap. 3, p. 28-29.",
          "answers": [
            "Il apporte de l’iode mais ne remplace pas une alimentation variée"
          ],
          "correct": [
            "Il apporte de l’iode mais ne remplace pas une alimentation variée"
          ]
        },
        {
          "text": "Quel principe appliquer aux conseils lorsqu’un aliment est coûteux ou indisponible ? (une réponse)",
          "options": [
            "Imposer un aliment inaccessible sans alternative",
            "Rechercher des associations adaptées parmi les aliments accessibles",
            "Supprimer le groupe alimentaire entier",
            "Éviter de parler des ressources de la famille"
          ],
          "type": "qcm",
          "explanation": "Le cours propose d’associer les aliments disponibles pour couvrir les différents groupes.",
          "source": "Module PNSME, chap. 3, p. 29.",
          "answers": [
            "Rechercher des associations adaptées parmi les aliments accessibles"
          ],
          "correct": [
            "Rechercher des associations adaptées parmi les aliments accessibles"
          ]
        },
        {
          "text": "Quel indicateur de qualité distingue deux rations aussi caloriques l’une que l’autre ? (une réponse)",
          "options": [
            "Uniquement la taille des assiettes",
            "Uniquement la couleur de la boisson",
            "Leur diversité et leur couverture des nutriments essentiels",
            "Uniquement le prix du repas"
          ],
          "type": "qcm",
          "explanation": "Deux rations de même énergie peuvent avoir des apports nutritionnels très différents.",
          "source": "Module PNSME, chap. 3, p. 28-29.",
          "answers": [
            "Leur diversité et leur couverture des nutriments essentiels"
          ],
          "correct": [
            "Leur diversité et leur couverture des nutriments essentiels"
          ]
        }
      ]
    },
    {
      "id": "sfm-4",
      "title": "SONU — Partogramme",
      "matter": "SONU",
      "filiere": "SFM",
      "description": "Sujet 4 — 60 questions corrigées",
      "instructions": "QCD : Vrai ou Faux. QCM : sélectionner la ou les bonnes réponses.",
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
          "text": "Le rythme cardiaque fœtal renseigne sur l’état du fœtus.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Il doit être interprété avec les autres observations, dont le liquide amniotique.",
          "source": "Module PNSME, chap. 4, p. 33.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "Un partogramme rempli après l’accouchement permet une surveillance prospective satisfaisante.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le remplissage rétrospectif est une pratique néfaste : il ne guide plus les décisions pendant le travail.",
          "source": "Module PNSME, chap. 4, p. 36.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Les lettres I et C désignent toutes deux un liquide méconial.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "I signifie membranes intactes et C liquide clair ; M correspond au méconium.",
          "source": "Module PNSME, chap. 4, p. 33.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Le partogramme facilite la transmission lors des changements d’équipe.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Les données chronologiques assurent la continuité de la surveillance.",
          "source": "Module PNSME, chap. 4, p. 31.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "Le partogramme permet de visualiser l’évolution du travail.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Il rassemble les observations pour repérer une anomalie et guider les décisions.",
          "source": "Module PNSME, chap. 4, p. 30.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "Le modelage crânien et la dilatation cervicale sont la même donnée.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le modelage concerne les rapports entre les os du crâne fœtal ; la dilatation concerne le col.",
          "source": "Module PNSME, chap. 4, p. 33.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Dans le graphique décrit, l’axe horizontal représente le temps.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "L’axe vertical représente la dilatation cervicale en centimètres.",
          "source": "Module PNSME, chap. 4, p. 33.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "La dilatation cervicale se note en kilogrammes.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Elle se mesure en centimètres.",
          "source": "Module PNSME, chap. 4, p. 33.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Le partogramme ne comporte aucune information sur l’état maternel.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le pouls, la température, la pression artérielle et les urines font partie des paramètres décrits.",
          "source": "Module PNSME, chap. 4, p. 31, 33.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "La lettre S indique un liquide teinté de sang dans le modèle du cours.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Ces codes doivent être utilisés conformément à la légende du document.",
          "source": "Module PNSME, chap. 4, p. 33.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "La dilatation complète correspond à 10 cm dans le cours.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Elle marque la fin de la dilatation cervicale décrite.",
          "source": "Module PNSME, chap. 4, p. 33.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "La descente de la présentation complète l’étude de la dilatation.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le travail doit être évalué sur plusieurs paramètres et non sur une seule courbe.",
          "source": "Module PNSME, chap. 4, p. 33-34.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "Le cours recommande de noter les médicaments administrés.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Cette traçabilité permet de relier traitements, évolution du travail et surveillance.",
          "source": "Module PNSME, chap. 4, p. 35.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "Le seuil de 1 cm par heure est une règle universelle imposant à lui seul une intervention selon l’OMS actuelle.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "L’OMS ne recommande pas ce seuil isolé pour décider d’une intervention ; il s’agit d’un repère de l’ancien graphique.",
          "source": "Module PNSME, chap. 4, p. 33 ; R2 (voir références officielles).",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "L’état maternel et l’état fœtal doivent être pris en compte avant toute décision sur le travail.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "La décision résulte de l’évaluation clinique globale et des capacités de prise en charge.",
          "source": "Module PNSME, chap. 4, p. 33-35.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "Le franchissement de la ligne d’alerte prouve à lui seul qu’une césarienne est obligatoire.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Dans le modèle du cours, il appelle une réévaluation et la réflexion sur la référence, sans imposer une seule intervention.",
          "source": "Module PNSME, chap. 4, p. 35.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Un utérus contractile suffit à exclure toute disproportion fœtopelvienne.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le cours inclut la disproportion parmi les anomalies à rechercher à l’aide de l’ensemble des données.",
          "source": "Module PNSME, chap. 4, p. 35.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "La ligne d’action du modèle classique est parallèle à la ligne d’alerte.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le module la place quatre heures à droite de celle-ci.",
          "source": "Module PNSME, chap. 4, p. 33.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "Dans le modèle classique du module, la phase active débute à 8 cm.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le modèle présenté débute à 4 cm ; ce repère doit être distingué des recommandations OMS plus récentes.",
          "source": "Module PNSME, chap. 4, p. 33.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Les contractions se comptent sur 60 minutes dans la rubrique décrite.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le cours demande de les compter sur dix minutes et de préciser leur durée en secondes.",
          "source": "Module PNSME, chap. 4, p. 34.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Le pouls et la température sont deux observations maternelles distinctes à tracer.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Ils permettent de suivre des dimensions différentes de l’état maternel.",
          "source": "Module PNSME, chap. 4, p. 33, 35.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "Une anomalie clinique grave impose d’agir sans attendre un tracé plus défavorable.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le graphique aide la surveillance mais ne doit pas retarder la réponse à une urgence clinique.",
          "source": "Module PNSME, chap. 4, p. 30, 33-35.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "Une parturiente en phase de latence ne nécessite aucune surveillance.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le module recommande expressément de la surveiller.",
          "source": "Module PNSME, chap. 4, p. 35-36.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Le choix de position de la parturiente doit être pris en compte.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le respect de ce choix est cité parmi les pratiques à encourager.",
          "source": "Module PNSME, chap. 4, p. 36.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "Une courbe de dilatation rassurante dispense d’observer les bruits du cœur fœtal.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "La surveillance de l’évolution du travail ne remplace pas celle de l’état fœtal.",
          "source": "Module PNSME, chap. 4, p. 33.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Les efforts expulsifs doivent être encouragés avant la dilatation complète.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le cours classe cette pratique parmi les gestes néfastes.",
          "source": "Module PNSME, chap. 4, p. 36.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "La notation des urines ne concerne que leur couleur.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le module demande notamment volume, protéines et acétone.",
          "source": "Module PNSME, chap. 4, p. 35.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "L’expression utérine est une pratique systématiquement recommandée dans le module.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Elle figure dans la liste des pratiques néfastes.",
          "source": "Module PNSME, chap. 4, p. 36.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "La communication avec la parturiente contribue à réduire son anxiété.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Elle figure parmi les pratiques à encourager.",
          "source": "Module PNSME, chap. 4, p. 36.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "Le module déconseille les cocktails à base d’ocytocine pendant le travail.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Un traitement ne doit pas être administré de manière non contrôlée.",
          "source": "Module PNSME, chap. 4, p. 36.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "Quel est le rôle principal du partogramme ? (une réponse)",
          "options": [
            "Mesurer uniquement le poids du nouveau-né",
            "Remplacer toute observation clinique",
            "Diagnostiquer une grossesse précoce",
            "Suivre le travail pour détecter les anomalies et guider les décisions"
          ],
          "type": "qcm",
          "explanation": "Le graphique organise les données recueillies pendant le travail.",
          "source": "Module PNSME, chap. 4, p. 30.",
          "answers": [
            "Suivre le travail pour détecter les anomalies et guider les décisions"
          ],
          "correct": [
            "Suivre le travail pour détecter les anomalies et guider les décisions"
          ]
        },
        {
          "text": "Quelles catégories de données sont suivies ? (plusieurs réponses)",
          "options": [
            "Uniquement les frais de séjour",
            "État maternel",
            "État fœtal",
            "Uniquement la taille du personnel"
          ],
          "type": "qcm",
          "explanation": "L’évolution du travail constitue la troisième grande dimension suivie.",
          "source": "Module PNSME, chap. 4, p. 33.",
          "answers": [
            "État maternel",
            "État fœtal"
          ],
          "correct": [
            "État maternel",
            "État fœtal"
          ]
        },
        {
          "text": "Quels paramètres décrivent l’évolution du travail ? (plusieurs réponses)",
          "options": [
            "Dilatation du col",
            "Groupe ABO seul",
            "Acuité visuelle du conjoint",
            "Descente de la présentation"
          ],
          "type": "qcm",
          "explanation": "Les contractions complètent ces données.",
          "source": "Module PNSME, chap. 4, p. 33.",
          "answers": [
            "Dilatation du col",
            "Descente de la présentation"
          ],
          "correct": [
            "Dilatation du col",
            "Descente de la présentation"
          ]
        },
        {
          "text": "Quels paramètres renseignent sur l’état maternel ? (plusieurs réponses)",
          "options": [
            "Couleur du liquide amniotique",
            "Pression artérielle",
            "Modelage de la tête fœtale",
            "Température"
          ],
          "type": "qcm",
          "explanation": "Les deux autres choix appartiennent à la surveillance fœtale.",
          "source": "Module PNSME, chap. 4, p. 33.",
          "answers": [
            "Pression artérielle",
            "Température"
          ],
          "correct": [
            "Pression artérielle",
            "Température"
          ]
        },
        {
          "text": "Quelles données renseignent sur l’état fœtal ? (plusieurs réponses)",
          "options": [
            "Pouls maternel seul",
            "Diurèse maternelle seule",
            "Couleur du liquide amniotique",
            "Rythme cardiaque fœtal"
          ],
          "type": "qcm",
          "explanation": "Le modelage crânien est également décrit dans cette surveillance.",
          "source": "Module PNSME, chap. 4, p. 33.",
          "answers": [
            "Couleur du liquide amniotique",
            "Rythme cardiaque fœtal"
          ],
          "correct": [
            "Couleur du liquide amniotique",
            "Rythme cardiaque fœtal"
          ]
        },
        {
          "text": "Quelle unité utilise-t-on pour la dilatation cervicale ? (une réponse)",
          "options": [
            "Centimètre",
            "Battement par minute",
            "Kilogramme",
            "Millilitre"
          ],
          "type": "qcm",
          "explanation": "Le col passe progressivement jusqu’à la dilatation complète de 10 cm.",
          "source": "Module PNSME, chap. 4, p. 33.",
          "answers": [
            "Centimètre"
          ],
          "correct": [
            "Centimètre"
          ]
        },
        {
          "text": "Que représente l’axe horizontal du graphique décrit ? (une réponse)",
          "options": [
            "La masse fœtale",
            "Les heures de travail",
            "La pression artérielle",
            "La température"
          ],
          "type": "qcm",
          "explanation": "La progression cervicale est mise en relation avec le temps.",
          "source": "Module PNSME, chap. 4, p. 33.",
          "answers": [
            "Les heures de travail"
          ],
          "correct": [
            "Les heures de travail"
          ]
        },
        {
          "text": "Dans la légende du module, que signifie I ? (une réponse)",
          "options": [
            "Injection reçue",
            "Membranes intactes",
            "Inversion utérine",
            "Infection certaine"
          ],
          "type": "qcm",
          "explanation": "La légende du liquide amniotique distingue membranes intactes et liquide observé après rupture.",
          "source": "Module PNSME, chap. 4, p. 33.",
          "answers": [
            "Membranes intactes"
          ],
          "correct": [
            "Membranes intactes"
          ]
        },
        {
          "text": "Dans cette légende, que signifie M ? (une réponse)",
          "options": [
            "Médicament administré",
            "Mort maternelle",
            "Membranes nécessairement intactes",
            "Liquide teinté de méconium"
          ],
          "type": "qcm",
          "explanation": "Ce code doit conduire à une appréciation adaptée de l’état fœtal.",
          "source": "Module PNSME, chap. 4, p. 33.",
          "answers": [
            "Liquide teinté de méconium"
          ],
          "correct": [
            "Liquide teinté de méconium"
          ]
        },
        {
          "text": "Dans cette légende, que signifie S ? (une réponse)",
          "options": [
            "Sommeil maternel",
            "Surveillance suspendue",
            "Liquide systématiquement clair",
            "Liquide teinté de sang"
          ],
          "type": "qcm",
          "explanation": "La présence de sang est une donnée à analyser cliniquement.",
          "source": "Module PNSME, chap. 4, p. 33.",
          "answers": [
            "Liquide teinté de sang"
          ],
          "correct": [
            "Liquide teinté de sang"
          ]
        },
        {
          "text": "Dans le modèle du cours, quel symbole trace la dilatation ? (une réponse)",
          "options": [
            "Un cercle O",
            "Une croix X",
            "Un triangle représentant la température",
            "Une lettre S"
          ],
          "type": "qcm",
          "explanation": "Le cercle O est utilisé pour la descente dans le schéma décrit.",
          "source": "Module PNSME, chap. 4, p. 33-34.",
          "answers": [
            "Une croix X"
          ],
          "correct": [
            "Une croix X"
          ]
        },
        {
          "text": "Quel symbole est proposé pour la descente à la palpation abdominale ? (une réponse)",
          "options": [
            "Une barre de pression artérielle",
            "Une étoile sans légende",
            "Un cercle O",
            "Une croix X"
          ],
          "type": "qcm",
          "explanation": "Le cours distingue volontairement la descente et la dilatation.",
          "source": "Module PNSME, chap. 4, p. 34.",
          "answers": [
            "Un cercle O"
          ],
          "correct": [
            "Un cercle O"
          ]
        },
        {
          "text": "Sur quelle durée compte-t-on les contractions dans la rubrique décrite ? (une réponse)",
          "options": [
            "24 heures",
            "1 heure",
            "10 secondes",
            "10 minutes"
          ],
          "type": "qcm",
          "explanation": "Il faut aussi noter leur durée individuelle en secondes.",
          "source": "Module PNSME, chap. 4, p. 34.",
          "answers": [
            "10 minutes"
          ],
          "correct": [
            "10 minutes"
          ]
        },
        {
          "text": "Le cours demande de réévaluer les contractions toutes les demi-heures. Combien d’évaluations séparées de 30 minutes y a-t-il entre 10 h et 12 h, bornes incluses ? (une réponse)",
          "options": [
            "2",
            "4",
            "3",
            "5"
          ],
          "type": "qcm",
          "explanation": "Les horaires sont 10 h, 10 h 30, 11 h, 11 h 30 et 12 h.",
          "source": "Module PNSME, chap. 4, p. 34.",
          "answers": [
            "5"
          ],
          "correct": [
            "5"
          ]
        },
        {
          "text": "Quelle donnée doit accompagner la quantité d’ocytocine dans la traçabilité décrite ? (une réponse)",
          "options": [
            "Le débit de perfusion et la dilution",
            "Uniquement le nom de la garde précédente",
            "Aucune donnée supplémentaire",
            "Uniquement la couleur du flacon"
          ],
          "type": "qcm",
          "explanation": "Le cours demande quantité par volume de liquide et débit ; cela permet de suivre l’administration.",
          "source": "Module PNSME, chap. 4, p. 35.",
          "answers": [
            "Le débit de perfusion et la dilution"
          ],
          "correct": [
            "Le débit de perfusion et la dilution"
          ]
        },
        {
          "text": "Dans le modèle du module, à quelle dilatation débute le tracé actif classique ? (une réponse)",
          "options": [
            "8 cm",
            "4 cm",
            "10 cm",
            "1 cm"
          ],
          "type": "qcm",
          "explanation": "C’est le repère historique du graphique fourni, à distinguer du seuil de 5 cm du modèle OMS plus récent.",
          "source": "Module PNSME, chap. 4, p. 33 ; R2 (voir références officielles).",
          "answers": [
            "4 cm"
          ],
          "correct": [
            "4 cm"
          ]
        },
        {
          "text": "Dans le modèle classique, à quelle distance temporelle est placée la ligne d’action ? (une réponse)",
          "options": [
            "4 heures à droite de la ligne d’alerte",
            "4 minutes à gauche",
            "Au même emplacement",
            "24 heures à droite"
          ],
          "type": "qcm",
          "explanation": "Les deux lignes sont parallèles sur le graphique présenté.",
          "source": "Module PNSME, chap. 4, p. 33.",
          "answers": [
            "4 heures à droite de la ligne d’alerte"
          ],
          "correct": [
            "4 heures à droite de la ligne d’alerte"
          ]
        },
        {
          "text": "Selon l’OMS, quelle conclusion tirer d’une progression inférieure à 1 cm par heure isolément ? (une réponse)",
          "options": [
            "Elle prouve toujours une obstruction",
            "Elle dispense d’évaluer la mère et le fœtus",
            "Elle ne suffit pas à imposer une intervention de routine",
            "Elle impose toute seule une césarienne"
          ],
          "type": "qcm",
          "explanation": "L’évaluation doit intégrer l’ensemble de la situation clinique.",
          "source": "R2 (voir références officielles).",
          "answers": [
            "Elle ne suffit pas à imposer une intervention de routine"
          ],
          "correct": [
            "Elle ne suffit pas à imposer une intervention de routine"
          ]
        },
        {
          "text": "Une courbe passe à droite de la ligne d’alerte dans le modèle classique. Quelle démarche est cohérente ? (une réponse)",
          "options": [
            "Injecter automatiquement un cocktail d’ocytocine",
            "Réévaluer et envisager la référence selon le contexte",
            "Attendre systématiquement 24 heures",
            "Interrompre toute surveillance"
          ],
          "type": "qcm",
          "explanation": "Le module invite à préparer l’accès au niveau de soins approprié.",
          "source": "Module PNSME, chap. 4, p. 35.",
          "answers": [
            "Réévaluer et envisager la référence selon le contexte"
          ],
          "correct": [
            "Réévaluer et envisager la référence selon le contexte"
          ]
        },
        {
          "text": "Quelle décision est correcte devant une détresse fœtale malgré une dilatation qui progresse ? (une réponse)",
          "options": [
            "Attendre obligatoirement la ligne d’action",
            "Ignorer le rythme fœtal",
            "Effacer les observations anormales",
            "Évaluer et prendre en charge la détresse sans attendre une stagnation"
          ],
          "type": "qcm",
          "explanation": "Le travail et l’état fœtal sont deux dimensions complémentaires.",
          "source": "Module PNSME, chap. 4, p. 30, 33-35.",
          "answers": [
            "Évaluer et prendre en charge la détresse sans attendre une stagnation"
          ],
          "correct": [
            "Évaluer et prendre en charge la détresse sans attendre une stagnation"
          ]
        },
        {
          "text": "Quelles anomalies le cours propose-t-il de repérer ? (plusieurs réponses)",
          "options": [
            "Groupe sanguin incompatible avec le papier",
            "Ralentissement du travail",
            "Signes de souffrance fœtale",
            "Presbytie du partenaire"
          ],
          "type": "qcm",
          "explanation": "La disproportion fœtopelvienne figure également dans les anomalies à rechercher.",
          "source": "Module PNSME, chap. 4, p. 35.",
          "answers": [
            "Ralentissement du travail",
            "Signes de souffrance fœtale"
          ],
          "correct": [
            "Ralentissement du travail",
            "Signes de souffrance fœtale"
          ]
        },
        {
          "text": "Quels comportements favorisent la qualité de la surveillance ? (plusieurs réponses)",
          "options": [
            "Transmettre les données au changement d’équipe",
            "Omettre les médicaments reçus",
            "Tracer les données au moment des observations",
            "Remplir de mémoire le lendemain"
          ],
          "type": "qcm",
          "explanation": "La chronologie et la continuité des informations rendent le partogramme utile.",
          "source": "Module PNSME, chap. 4, p. 30-31, 35-36.",
          "answers": [
            "Transmettre les données au changement d’équipe",
            "Tracer les données au moment des observations"
          ],
          "correct": [
            "Transmettre les données au changement d’équipe",
            "Tracer les données au moment des observations"
          ]
        },
        {
          "text": "Une parturiente est en phase de latence. Quelle attitude correspond au cours ? (une réponse)",
          "options": [
            "Maintenir une surveillance adaptée",
            "Administrer systématiquement de l’ocytocine",
            "Suspendre toute observation",
            "Imposer des efforts expulsifs"
          ],
          "type": "qcm",
          "explanation": "Le module précise qu’absence d’intervention systématique ne signifie pas absence de surveillance.",
          "source": "Module PNSME, chap. 4, p. 35-36.",
          "answers": [
            "Maintenir une surveillance adaptée"
          ],
          "correct": [
            "Maintenir une surveillance adaptée"
          ]
        },
        {
          "text": "Quelles pratiques sont classées comme néfastes ? (plusieurs réponses)",
          "options": [
            "Communication avec la femme",
            "Expression utérine",
            "Efforts expulsifs avant dilatation complète",
            "Respect de sa position choisie"
          ],
          "type": "qcm",
          "explanation": "Ces gestes ne doivent pas être confondus avec l’accompagnement de la parturiente.",
          "source": "Module PNSME, chap. 4, p. 36.",
          "answers": [
            "Expression utérine",
            "Efforts expulsifs avant dilatation complète"
          ],
          "correct": [
            "Expression utérine",
            "Efforts expulsifs avant dilatation complète"
          ]
        },
        {
          "text": "Quelle pratique est explicitement encouragée ? (une réponse)",
          "options": [
            "La laisser sans information",
            "Faire un cocktail d’ocytocine",
            "Communiquer avec la parturiente et son entourage",
            "Remplir le partogramme après la naissance"
          ],
          "type": "qcm",
          "explanation": "L’information et le soutien réduisent l’anxiété et accompagnent la surveillance.",
          "source": "Module PNSME, chap. 4, p. 36.",
          "answers": [
            "Communiquer avec la parturiente et son entourage"
          ],
          "correct": [
            "Communiquer avec la parturiente et son entourage"
          ]
        },
        {
          "text": "Quelles données urinaires sont prévues dans le modèle ? (plusieurs réponses)",
          "options": [
            "Protéines urinaires",
            "Volume urinaire",
            "Uniquement l’étiquette du récipient",
            "Uniquement l’heure du repas"
          ],
          "type": "qcm",
          "explanation": "Le cours mentionne aussi l’acétone.",
          "source": "Module PNSME, chap. 4, p. 35.",
          "answers": [
            "Protéines urinaires",
            "Volume urinaire"
          ],
          "correct": [
            "Protéines urinaires",
            "Volume urinaire"
          ]
        },
        {
          "text": "À 8 h la dilatation est de 4 cm et à 12 h de 6 cm. Quelle progression moyenne calcule-t-on ? (une réponse)",
          "options": [
            "2 cm par heure",
            "4 cm par heure",
            "8 cm par heure",
            "0,5 cm par heure"
          ],
          "type": "qcm",
          "explanation": "La différence est de 2 cm en 4 heures, soit 2 / 4 = 0,5 ; ce calcul seul ne décide pas d’une intervention.",
          "source": "Module PNSME, chap. 4, p. 33 ; R2 (voir références officielles).",
          "answers": [
            "0,5 cm par heure"
          ],
          "correct": [
            "0,5 cm par heure"
          ]
        },
        {
          "text": "Une dilatation passe de 6 à 10 cm entre 12 h et 14 h. Quelle progression moyenne obtient-on ? (une réponse)",
          "options": [
            "2 cm par heure",
            "0,5 cm par heure",
            "4 cm par heure",
            "1 cm par heure"
          ],
          "type": "qcm",
          "explanation": "On divise les 4 cm gagnés par les 2 heures écoulées.",
          "source": "Module PNSME, chap. 4, p. 33.",
          "answers": [
            "2 cm par heure"
          ],
          "correct": [
            "2 cm par heure"
          ]
        },
        {
          "text": "La température monte et le pouls maternel s’accélère. Que faut-il faire même si la courbe cervicale progresse ? (une réponse)",
          "options": [
            "Conclure que tout est normal",
            "Rechercher une complication maternelle",
            "Arrêter de noter les constantes",
            "Se limiter à compter les contractions"
          ],
          "type": "qcm",
          "explanation": "L’évolution du col ne suffit pas à apprécier la sécurité de la mère.",
          "source": "Module PNSME, chap. 4, p. 33, 35.",
          "answers": [
            "Rechercher une complication maternelle"
          ],
          "correct": [
            "Rechercher une complication maternelle"
          ]
        },
        {
          "text": "Quelle est la meilleure utilisation du partogramme ? (une réponse)",
          "options": [
            "Une prescription automatique de césarienne",
            "Un outil d’aide intégré à l’examen et au jugement clinique",
            "Un document administratif à compléter après coup",
            "Une garantie d’absence de toute complication"
          ],
          "type": "qcm",
          "explanation": "Il rend les informations visibles mais ne remplace pas l’évaluation et la décision clinique.",
          "source": "Module PNSME, chap. 4, p. 30-36.",
          "answers": [
            "Un outil d’aide intégré à l’examen et au jugement clinique"
          ],
          "correct": [
            "Un outil d’aide intégré à l’examen et au jugement clinique"
          ]
        }
      ]
    },
    {
      "id": "sfm-5",
      "title": "SONU — Hypertension artérielle, prééclampsie et éclampsie",
      "matter": "SONU",
      "filiere": "SFM",
      "description": "Sujet 5 — 60 questions corrigées",
      "instructions": "QCD : Vrai ou Faux. QCM : sélectionner la ou les bonnes réponses.",
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
          "text": "Une HTA découverte avant 20 semaines fait rechercher une HTA chronique.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le cours distingue cette situation de l’HTA apparaissant après 20 semaines.",
          "source": "Module PNSME, chap. 5, p. 38.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "L’éclampsie associe des convulsions à un contexte compatible de prééclampsie.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "C’est une urgence ; d’autres causes de convulsions doivent aussi être envisagées selon le contexte.",
          "source": "Module PNSME, chap. 5, p. 40-41.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "L’absence de protéinurie exclut toujours une prééclampsie malgré une atteinte d’organe compatible.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "La protéinurie n’est pas indispensable lorsqu’une autre atteinte répond aux critères diagnostiques.",
          "source": "R3 (voir références officielles).",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "La recherche d’une HTA pendant la grossesse repose uniquement sur la pression diastolique et peut ignorer une systolique très élevée.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Une élévation systolique ou diastolique doit être prise en compte ; une systolique isolément sévère est préoccupante.",
          "source": "Module PNSME, chap. 5, p. 38-39 ; R3 (voir références officielles).",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Une douleur épigastrique en barre est toujours un signe digestif bénin chez une femme hypertendue enceinte.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Elle peut faire partie des signes de gravité d’une prééclampsie.",
          "source": "Module PNSME, chap. 5, p. 40.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Une crise d’éclampsie impose d’attendre quatre heures avant de commencer les soins.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le cours qualifie les convulsions d’extrême urgence.",
          "source": "Module PNSME, chap. 5, p. 41.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "La mesure correcte de la pression artérielle nécessite un brassard adapté.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "La taille du brassard et la position du bras conditionnent la fiabilité de la mesure.",
          "source": "Module PNSME, chap. 5, p. 38-39.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "Les céphalées intenses et les troubles visuels sont des signes d’alerte.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le module les décrit parmi les manifestations pouvant annoncer une éclampsie.",
          "source": "Module PNSME, chap. 5, p. 40.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "La présence d’œdèmes des chevilles suffit à elle seule à diagnostiquer une prééclampsie.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Les œdèmes sont inconstants et ne constituent pas à eux seuls le diagnostic.",
          "source": "Module PNSME, chap. 5, p. 39.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Une prééclampsie peut associer une HTA après 20 semaines et une protéinurie.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le cours décrit cette association ; la présence de signes de gravité impose une évaluation complète.",
          "source": "Module PNSME, chap. 5, p. 39-40.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "Le gluconate de calcium est l’antagoniste à disposer lors du traitement par magnésium.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le cours le cite dans la conduite à tenir face à une toxicité grave.",
          "source": "Module PNSME, chap. 5, p. 47.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "Un arrêt respiratoire sous magnésium se traite seulement par l’observation.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Il impose l’arrêt du traitement, l’assistance ventilatoire et le traitement spécifique indiqué.",
          "source": "Module PNSME, chap. 5, p. 47.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "L’absence de réflexes rotuliens autorise automatiquement la dose d’entretien suivante de magnésium.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le module demande d’interrompre ou de différer le traitement si un paramètre de sécurité est altéré.",
          "source": "Module PNSME, chap. 5, p. 47.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "La protection des voies aériennes est une priorité pendant la prise en charge d’une crise.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Elle accompagne la prévention des récidives et la surveillance.",
          "source": "Module PNSME, chap. 5, p. 41-42.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "Les réflexes rotuliens sont inutiles à surveiller sous sulfate de magnésium.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Leur présence fait partie des vérifications de sécurité décrites avant le renouvellement.",
          "source": "Module PNSME, chap. 5, p. 47.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Une oligurie est un signe préoccupant dans ce contexte.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Elle peut traduire une atteinte rénale et influence la sécurité du traitement.",
          "source": "Module PNSME, chap. 5, p. 39, 47.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "La fréquence respiratoire doit être surveillée sous sulfate de magnésium.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Une altération respiratoire peut imposer l’interruption du traitement et une prise en charge urgente.",
          "source": "Module PNSME, chap. 5, p. 47.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "Le traitement anticonvulsivant a pour seul objectif de faire baisser la pression artérielle.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Il vise les convulsions ; le contrôle tensionnel est un autre volet de la prise en charge.",
          "source": "Module PNSME, chap. 5, p. 41-42, 46-47.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Le sulfate de magnésium est privilégié pour traiter l’éclampsie.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "L’OMS le recommande de préférence aux autres anticonvulsivants.",
          "source": "R4 (voir références officielles).",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "Une perfusion d’antihypertenseur dispense de surveiller la conscience.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "La surveillance neurologique reste nécessaire avec la pression artérielle et les autres constantes.",
          "source": "Module PNSME, chap. 5, p. 42, 46.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Une dyspnée et des râles pulmonaires chez une femme prééclamptique sont toujours rassurants.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Ils peuvent évoquer un œdème aigu pulmonaire.",
          "source": "Module PNSME, chap. 5, p. 41.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "La prématurité et la mort fœtale font partie des complications décrites.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "La surveillance doit donc considérer à la fois la mère et le fœtus.",
          "source": "Module PNSME, chap. 5, p. 41.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "Le HELLP syndrome associe hémolyse, atteinte hépatique et thrombopénie.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le module décrit une élévation des enzymes hépatiques et une baisse des plaquettes.",
          "source": "Module PNSME, chap. 5, p. 41.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "Le traitement obstétrical fait partie de la prise en charge de la prééclampsie.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le moment et les modalités de naissance dépendent de l’évaluation maternofœtale.",
          "source": "Module PNSME, chap. 5, p. 41, 46.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "L’hématome rétroplacentaire est une complication maternelle possible de l’HTA.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Il peut associer douleur abdominale, utérus dur et saignement.",
          "source": "Module PNSME, chap. 5, p. 40.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "Le cours prévoit une surveillance de la diurèse, de la conscience et des saignements.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Ces éléments complètent la mesure répétée de la pression artérielle.",
          "source": "Module PNSME, chap. 5, p. 42.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "Le risque lié à une HTA disparaît nécessairement dès que l’enfant est né.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le cours envisage des complications autour de l’accouchement ; la surveillance doit se poursuivre après la naissance.",
          "source": "Module PNSME, chap. 5, p. 38, 42, 75-77.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Toutes les patientes prééclamptiques doivent recevoir exactement la même décision obstétricale quel que soit le terme.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le module demande d’apprécier l’âge gestationnel, l’état fœtal et les conditions obstétricales.",
          "source": "Module PNSME, chap. 5, p. 46.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "L’HTA gravidique protège le fœtus du retard de croissance.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le retard de croissance intra-utérin figure parmi les complications fœtales.",
          "source": "Module PNSME, chap. 5, p. 41.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Le HELLP syndrome se définit par une augmentation isolée du nombre de plaquettes.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "La thrombopénie est une baisse des plaquettes, associée aux autres éléments du syndrome.",
          "source": "Module PNSME, chap. 5, p. 41.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Quelles conditions améliorent la fiabilité de la mesure tensionnelle ? (plusieurs réponses)",
          "options": [
            "Bras comprimé par un vêtement",
            "Bras soutenu à hauteur du cœur",
            "Brassard adapté",
            "Mesure faite sans tenir compte de la position"
          ],
          "type": "qcm",
          "explanation": "Le module prévoit repos, matériel adapté et position correcte.",
          "source": "Module PNSME, chap. 5, p. 38-39.",
          "answers": [
            "Bras soutenu à hauteur du cœur",
            "Brassard adapté"
          ],
          "correct": [
            "Bras soutenu à hauteur du cœur",
            "Brassard adapté"
          ]
        },
        {
          "text": "Une HTA est identifiée à 15 semaines. Quelle catégorie faut-il rechercher en premier ? (une réponse)",
          "options": [
            "HTA chronique",
            "HTA gestationnelle définie après 20 semaines",
            "Éclampsie certaine sans convulsion",
            "Hémorragie du post-partum"
          ],
          "type": "qcm",
          "explanation": "Une HTA antérieure à 20 semaines oriente vers une hypertension préexistante.",
          "source": "Module PNSME, chap. 5, p. 38.",
          "answers": [
            "HTA chronique"
          ],
          "correct": [
            "HTA chronique"
          ]
        },
        {
          "text": "Quels signes imposent une évaluation urgente chez une femme enceinte hypertendue ? (plusieurs réponses)",
          "options": [
            "Céphalées intenses",
            "Faim isolée",
            "Troubles visuels",
            "Absence de toute plainte avec paramètres normaux"
          ],
          "type": "qcm",
          "explanation": "Ces manifestations peuvent annoncer une complication neurologique.",
          "source": "Module PNSME, chap. 5, p. 40.",
          "answers": [
            "Céphalées intenses",
            "Troubles visuels"
          ],
          "correct": [
            "Céphalées intenses",
            "Troubles visuels"
          ]
        },
        {
          "text": "Quelle douleur est décrite parmi les signes prémonitoires d’éclampsie ? (une réponse)",
          "options": [
            "Douleur épigastrique en barre",
            "Douleur isolée d’un ongle",
            "Douleur ancienne du coude sans autre signe",
            "Démangeaison du cuir chevelu uniquement"
          ],
          "type": "qcm",
          "explanation": "Une douleur épigastrique ou de l’hypochondre droit peut traduire une atteinte grave.",
          "source": "Module PNSME, chap. 5, p. 40.",
          "answers": [
            "Douleur épigastrique en barre"
          ],
          "correct": [
            "Douleur épigastrique en barre"
          ]
        },
        {
          "text": "Quels éléments peuvent participer au diagnostic actuel de prééclampsie après 20 semaines avec HTA ? (plusieurs réponses)",
          "options": [
            "Couleur des cheveux",
            "Atteinte d’organe compatible",
            "Protéinurie",
            "Œdèmes isolés sans autre critère"
          ],
          "type": "qcm",
          "explanation": "La définition ne doit pas être réduite aux œdèmes ou à la protéinurie seule.",
          "source": "R3 (voir références officielles).",
          "answers": [
            "Atteinte d’organe compatible",
            "Protéinurie"
          ],
          "correct": [
            "Atteinte d’organe compatible",
            "Protéinurie"
          ]
        },
        {
          "text": "Une femme présente une HTA et une atteinte d’organe compatible, sans protéinurie. Quelle conclusion est juste ? (une réponse)",
          "options": [
            "L’absence de protéinurie garantit l’absence de gravité",
            "Il faut arrêter toute surveillance",
            "Une prééclampsie reste possible",
            "La prééclampsie est formellement exclue"
          ],
          "type": "qcm",
          "explanation": "La protéinurie n’est pas un critère obligatoire dans toutes les formes actuelles.",
          "source": "R3 (voir références officielles).",
          "answers": [
            "Une prééclampsie reste possible"
          ],
          "correct": [
            "Une prééclampsie reste possible"
          ]
        },
        {
          "text": "Une patiente à 32 semaines convulse dans un contexte de prééclampsie. Quelle urgence faut-il évoquer ? (une réponse)",
          "options": [
            "Allergie certaine sans évaluation",
            "Travail normal démontré",
            "Simple gêne physiologique",
            "Éclampsie"
          ],
          "type": "qcm",
          "explanation": "Des convulsions dans ce contexte imposent une prise en charge immédiate.",
          "source": "Module PNSME, chap. 5, p. 40-41.",
          "answers": [
            "Éclampsie"
          ],
          "correct": [
            "Éclampsie"
          ]
        },
        {
          "text": "Quels sont des objectifs immédiats de la prise en charge d’une éclampsie ? (plusieurs réponses)",
          "options": [
            "Contrôler les crises et leurs récidives",
            "Faire boire pendant les convulsions",
            "Attendre la consultation suivante",
            "Assurer la liberté des voies aériennes"
          ],
          "type": "qcm",
          "explanation": "La stabilisation maternelle et le contrôle des complications précèdent la décision obstétricale adaptée.",
          "source": "Module PNSME, chap. 5, p. 41-42.",
          "answers": [
            "Contrôler les crises et leurs récidives",
            "Assurer la liberté des voies aériennes"
          ],
          "correct": [
            "Contrôler les crises et leurs récidives",
            "Assurer la liberté des voies aériennes"
          ]
        },
        {
          "text": "Quel anticonvulsivant est recommandé de préférence par l’OMS ? (une réponse)",
          "options": [
            "Antibiotique seul",
            "Ocytocine",
            "Sulfate de magnésium",
            "Fer oral"
          ],
          "type": "qcm",
          "explanation": "Le magnésium est recommandé pour traiter l’éclampsie et prévenir les crises dans les formes sévères indiquées.",
          "source": "R4 (voir références officielles).",
          "answers": [
            "Sulfate de magnésium"
          ],
          "correct": [
            "Sulfate de magnésium"
          ]
        },
        {
          "text": "Quel médicament disponible permet de traiter une toxicité grave du magnésium selon le cours ? (une réponse)",
          "options": [
            "Moustiquaire imprégnée",
            "Ocytocine",
            "Gluconate de calcium",
            "Acide folique"
          ],
          "type": "qcm",
          "explanation": "L’antagoniste doit être prêt à l’emploi ; il accompagne les autres mesures de réanimation nécessaires.",
          "source": "Module PNSME, chap. 5, p. 47.",
          "answers": [
            "Gluconate de calcium"
          ],
          "correct": [
            "Gluconate de calcium"
          ]
        },
        {
          "text": "Quelles vérifications sont demandées avant de renouveler le magnésium ? (plusieurs réponses)",
          "options": [
            "Heure du repas uniquement",
            "Couleur du drap",
            "Réflexes rotuliens présents",
            "Respiration et diurèse satisfaisantes"
          ],
          "type": "qcm",
          "explanation": "Le module demande ces trois paramètres pour détecter une accumulation ou une toxicité.",
          "source": "Module PNSME, chap. 5, p. 47.",
          "answers": [
            "Réflexes rotuliens présents",
            "Respiration et diurèse satisfaisantes"
          ],
          "correct": [
            "Réflexes rotuliens présents",
            "Respiration et diurèse satisfaisantes"
          ]
        },
        {
          "text": "La fréquence respiratoire diminue et les réflexes disparaissent sous magnésium. Quelle attitude correspond au cours ? (une réponse)",
          "options": [
            "Suspendre la dose et prendre en charge une possible toxicité",
            "Retirer toute surveillance",
            "Ignorer les signes si la tension baisse",
            "Doubler automatiquement la dose"
          ],
          "type": "qcm",
          "explanation": "Une anomalie d’un paramètre de sécurité impose de différer ou interrompre le traitement et d’alerter.",
          "source": "Module PNSME, chap. 5, p. 47.",
          "answers": [
            "Suspendre la dose et prendre en charge une possible toxicité"
          ],
          "correct": [
            "Suspendre la dose et prendre en charge une possible toxicité"
          ]
        },
        {
          "text": "Selon les repères de sécurité du module, quelle fréquence respiratoire est requise avant renouvellement ? (une réponse)",
          "options": [
            "Au plus 6 mouvements par minute",
            "Au moins 16 mouvements par minute",
            "Exactement 4 mouvements par minute",
            "Aucune condition respiratoire"
          ],
          "type": "qcm",
          "explanation": "Il s’agit d’un critère de sécurité du protocole présenté, associé aux réflexes et à la diurèse.",
          "source": "Module PNSME, chap. 5, p. 47.",
          "answers": [
            "Au moins 16 mouvements par minute"
          ],
          "correct": [
            "Au moins 16 mouvements par minute"
          ]
        },
        {
          "text": "Quel débit urinaire minimal est cité dans ce même protocole avant renouvellement ? (une réponse)",
          "options": [
            "10 mL par semaine",
            "Aucun volume n’est surveillé",
            "3 mL par jour",
            "30 mL par heure pendant les quatre heures précédentes"
          ],
          "type": "qcm",
          "explanation": "Le magnésium nécessite une surveillance rénale attentive ; le module retient cette condition.",
          "source": "Module PNSME, chap. 5, p. 47.",
          "answers": [
            "30 mL par heure pendant les quatre heures précédentes"
          ],
          "correct": [
            "30 mL par heure pendant les quatre heures précédentes"
          ]
        },
        {
          "text": "Une patiente a émis 160 mL en quatre heures. Quel débit urinaire moyen calcule-t-on ? (une réponse)",
          "options": [
            "40 mL par heure",
            "160 mL par heure",
            "640 mL par heure",
            "10 mL par heure"
          ],
          "type": "qcm",
          "explanation": "Le calcul est 160 / 4 = 40 mL/h ; l’interprétation doit aussi considérer les autres paramètres.",
          "source": "Module PNSME, chap. 5, p. 47.",
          "answers": [
            "40 mL par heure"
          ],
          "correct": [
            "40 mL par heure"
          ]
        },
        {
          "text": "Une patiente a émis 80 mL en quatre heures. Quelle conclusion appliquer au critère du module ? (une réponse)",
          "options": [
            "Le débit est de 320 mL/h",
            "Le débit de 20 mL/h est inférieur au repère de 30 mL/h",
            "La diurèse suffit à autoriser la dose sans autre contrôle",
            "Le débit est de 80 mL/h"
          ],
          "type": "qcm",
          "explanation": "Le calcul est 80 / 4 = 20 mL/h ; ce résultat demande une évaluation avant poursuite du protocole.",
          "source": "Module PNSME, chap. 5, p. 47.",
          "answers": [
            "Le débit de 20 mL/h est inférieur au repère de 30 mL/h"
          ],
          "correct": [
            "Le débit de 20 mL/h est inférieur au repère de 30 mL/h"
          ]
        },
        {
          "text": "Selon le protocole du cours, comment déterminer le point de départ des 24 heures de poursuite du magnésium ? (une réponse)",
          "options": [
            "Retenir obligatoirement la première CPN",
            "Retenir le dernier événement entre dernière crise et accouchement",
            "Retenir toujours l’admission",
            "Arrêter à la première baisse de tension"
          ],
          "type": "qcm",
          "explanation": "Le cours retient l’événement le plus tardif pour limiter les récidives.",
          "source": "Module PNSME, chap. 5, p. 47.",
          "answers": [
            "Retenir le dernier événement entre dernière crise et accouchement"
          ],
          "correct": [
            "Retenir le dernier événement entre dernière crise et accouchement"
          ]
        },
        {
          "text": "Quels examens biologiques sont mentionnés dans les soins de la patiente avec éclampsie ? (plusieurs réponses)",
          "options": [
            "Audiogramme systématique",
            "Test cutané allergique systématique",
            "Bilan de coagulation",
            "NFS avec plaquettes"
          ],
          "type": "qcm",
          "explanation": "Le module prévoit aussi groupage et bilans adaptés à la situation.",
          "source": "Module PNSME, chap. 5, p. 46.",
          "answers": [
            "Bilan de coagulation",
            "NFS avec plaquettes"
          ],
          "correct": [
            "Bilan de coagulation",
            "NFS avec plaquettes"
          ]
        },
        {
          "text": "Que signifie le H de HELLP ? (une réponse)",
          "options": [
            "Hyperglycémie",
            "Hémorroïdes",
            "Hypothermie",
            "Hémolyse"
          ],
          "type": "qcm",
          "explanation": "Le syndrome associe hémolyse, élévation des enzymes hépatiques et baisse des plaquettes.",
          "source": "Module PNSME, chap. 5, p. 41.",
          "answers": [
            "Hémolyse"
          ],
          "correct": [
            "Hémolyse"
          ]
        },
        {
          "text": "Quels résultats sont compatibles avec le HELLP syndrome ? (plusieurs réponses)",
          "options": [
            "Plaquettes abaissées",
            "Absence nécessaire d’hémolyse",
            "Plaquettes obligatoirement augmentées",
            "Enzymes hépatiques élevées"
          ],
          "type": "qcm",
          "explanation": "Ces anomalies doivent être analysées avec la clinique et les autres examens.",
          "source": "Module PNSME, chap. 5, p. 41.",
          "answers": [
            "Plaquettes abaissées",
            "Enzymes hépatiques élevées"
          ],
          "correct": [
            "Plaquettes abaissées",
            "Enzymes hépatiques élevées"
          ]
        },
        {
          "text": "Une femme hypertendue présente douleur abdominale brutale et utérus dur en permanence. Quelle complication évoquer ? (une réponse)",
          "options": [
            "Entorse isolée",
            "Rhinite simple",
            "Hématome rétroplacentaire",
            "Carence en iode certaine"
          ],
          "type": "qcm",
          "explanation": "Le cours décrit ces manifestations dans le tableau d’un décollement placentaire.",
          "source": "Module PNSME, chap. 5, p. 40.",
          "answers": [
            "Hématome rétroplacentaire"
          ],
          "correct": [
            "Hématome rétroplacentaire"
          ]
        },
        {
          "text": "Quels signes peuvent évoquer un œdème aigu pulmonaire ? (plusieurs réponses)",
          "options": [
            "Dyspnée",
            "Faim isolée",
            "Prurit isolé du doigt",
            "Râles crépitants"
          ],
          "type": "qcm",
          "explanation": "L’œdème pulmonaire est une complication maternelle grave décrite.",
          "source": "Module PNSME, chap. 5, p. 41.",
          "answers": [
            "Dyspnée",
            "Râles crépitants"
          ],
          "correct": [
            "Dyspnée",
            "Râles crépitants"
          ]
        },
        {
          "text": "Quelles complications fœtales sont citées ? (plusieurs réponses)",
          "options": [
            "Absence garantie de souffrance fœtale",
            "Mort fœtale in utero",
            "Retard de croissance intra-utérin",
            "Protection certaine contre la prématurité"
          ],
          "type": "qcm",
          "explanation": "L’HTA peut altérer le bien-être fœtal et l’évolution de la grossesse.",
          "source": "Module PNSME, chap. 5, p. 41.",
          "answers": [
            "Mort fœtale in utero",
            "Retard de croissance intra-utérin"
          ],
          "correct": [
            "Mort fœtale in utero",
            "Retard de croissance intra-utérin"
          ]
        },
        {
          "text": "Quels éléments doivent être surveillés régulièrement ? (plusieurs réponses)",
          "options": [
            "Pression artérielle",
            "Uniquement le poids à l’inscription",
            "Uniquement l’aspect des vêtements",
            "État de conscience"
          ],
          "type": "qcm",
          "explanation": "La diurèse et les saignements complètent la surveillance clinique.",
          "source": "Module PNSME, chap. 5, p. 42.",
          "answers": [
            "Pression artérielle",
            "État de conscience"
          ],
          "correct": [
            "Pression artérielle",
            "État de conscience"
          ]
        },
        {
          "text": "Quel rôle a la mesure de la diurèse ? (une réponse)",
          "options": [
            "Déterminer le groupe sanguin",
            "Mesurer directement la dilatation du col",
            "Apprécier l’état rénal et la sécurité du traitement",
            "Remplacer toute mesure tensionnelle"
          ],
          "type": "qcm",
          "explanation": "L’oligurie est un signe de gravité et un paramètre de surveillance du magnésium.",
          "source": "Module PNSME, chap. 5, p. 39, 47.",
          "answers": [
            "Apprécier l’état rénal et la sécurité du traitement"
          ],
          "correct": [
            "Apprécier l’état rénal et la sécurité du traitement"
          ]
        },
        {
          "text": "Quels volets associe la prise en charge décrite ? (plusieurs réponses)",
          "options": [
            "Décision obstétricale adaptée",
            "Traitement médical",
            "Conseil alimentaire seul",
            "Attente sans évaluation"
          ],
          "type": "qcm",
          "explanation": "La stabilisation et le contrôle des complications s’articulent avec la décision sur la naissance.",
          "source": "Module PNSME, chap. 5, p. 41, 46.",
          "answers": [
            "Décision obstétricale adaptée",
            "Traitement médical"
          ],
          "correct": [
            "Décision obstétricale adaptée",
            "Traitement médical"
          ]
        },
        {
          "text": "Quels éléments orientent la décision obstétricale ? (plusieurs réponses)",
          "options": [
            "Nom du village uniquement",
            "État fœtal et conditions obstétricales",
            "Couleur du dossier",
            "Âge gestationnel"
          ],
          "type": "qcm",
          "explanation": "Le module demande une appréciation globale pour choisir la conduite adaptée.",
          "source": "Module PNSME, chap. 5, p. 46.",
          "answers": [
            "État fœtal et conditions obstétricales",
            "Âge gestationnel"
          ],
          "correct": [
            "État fœtal et conditions obstétricales",
            "Âge gestationnel"
          ]
        },
        {
          "text": "Une patiente convulse et l’équipe prépare une référence. Quelle action est prioritaire ? (une réponse)",
          "options": [
            "Commencer les mesures de stabilisation et organiser rapidement le transfert adapté",
            "Attendre le transport sans intervenir",
            "Différer toute alerte",
            "Faire marcher la patiente pendant la crise"
          ],
          "type": "qcm",
          "explanation": "La référence ne doit pas remplacer les gestes urgents réalisables sur place.",
          "source": "Module PNSME, chap. 5, p. 37, 41-42 ; R4 (voir références officielles).",
          "answers": [
            "Commencer les mesures de stabilisation et organiser rapidement le transfert adapté"
          ],
          "correct": [
            "Commencer les mesures de stabilisation et organiser rapidement le transfert adapté"
          ]
        },
        {
          "text": "Une femme vient d’accoucher après une prééclampsie. Quelle attitude est correcte ? (une réponse)",
          "options": [
            "Considérer tout risque immédiatement terminé",
            "Oublier les céphalées nouvelles",
            "Supprimer les mesures tensionnelles",
            "Poursuivre la surveillance maternelle"
          ],
          "type": "qcm",
          "explanation": "L’accouchement ne dispense pas de rechercher les complications du post-partum.",
          "source": "Module PNSME, chap. 5, p. 38, 42, 75-77.",
          "answers": [
            "Poursuivre la surveillance maternelle"
          ],
          "correct": [
            "Poursuivre la surveillance maternelle"
          ]
        },
        {
          "text": "Quel principe évite une erreur lors de l’utilisation des traitements du module ? (une réponse)",
          "options": [
            "Confondre anticonvulsivant et utérotonique",
            "Recopier une unité inhabituelle sans contrôle",
            "Vérifier le protocole, la dose, l’unité et les critères de surveillance",
            "Déduire la dose du seul volume de poche"
          ],
          "type": "qcm",
          "explanation": "La prise en charge associe plusieurs médicaments aux objectifs différents ; leur administration exige une vérification rigoureuse.",
          "source": "Module PNSME, chap. 5, p. 46-47.",
          "answers": [
            "Vérifier le protocole, la dose, l’unité et les critères de surveillance"
          ],
          "correct": [
            "Vérifier le protocole, la dose, l’unité et les critères de surveillance"
          ]
        }
      ]
    },
    {
      "id": "sfm-6",
      "title": "SONU — Hémorragie du post-partum",
      "matter": "SONU",
      "filiere": "SFM",
      "description": "Sujet 6 — 60 questions corrigées",
      "instructions": "QCD : Vrai ou Faux. QCM : sélectionner la ou les bonnes réponses.",
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
          "text": "L’examen du placenta permet de rechercher une délivrance incomplète.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Une partie manquante fait suspecter une rétention.",
          "source": "Module PNSME, chap. 6, p. 53-54.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "Une hémorragie du post-partum peut rapidement provoquer un état de choc.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "La perte sanguine impose une détection et une prise en charge précoces.",
          "source": "Module PNSME, chap. 6, p. 58.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "L’atonie utérine est une cause majeure d’HPP.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Un utérus insuffisamment contracté n’assure pas correctement l’hémostase du site placentaire.",
          "source": "Module PNSME, chap. 6, p. 50-51, 57.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "Une traction forte et incontrôlée sur le cordon est une méthode recommandée de délivrance.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le cours met en garde contre l’arrachement du cordon et l’inversion utérine.",
          "source": "Module PNSME, chap. 6, p. 52-53.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "La prévention de l’HPP commence seulement après l’expulsion du placenta.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le module la fait débuter pendant les consultations prénatales.",
          "source": "Module PNSME, chap. 6, p. 50.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Un utérus ferme exclut toute cause d’hémorragie génitale.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Des déchirures ou un trouble de coagulation peuvent saigner malgré une bonne tonicité utérine.",
          "source": "Module PNSME, chap. 6, p. 50, 54.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Une rétention placentaire peut provoquer une HPP.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Elle appartient à la catégorie « tissu » des quatre T.",
          "source": "Module PNSME, chap. 6, p. 50.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "La GATPA vise notamment à favoriser la contraction et la rétraction utérines.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Cette action contribue à réduire les pertes sanguines après la naissance.",
          "source": "Module PNSME, chap. 6, p. 51.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "L’HPP immédiate débute uniquement après le septième jour.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le module la situe dans les 24 premières heures suivant l’accouchement.",
          "source": "Module PNSME, chap. 6, p. 50.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Les quatre T désignent quatre traitements médicamenteux.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Ils classent les causes : tonus, traumatisme, tissu retenu et troubles de coagulation.",
          "source": "Module PNSME, chap. 6, p. 50.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Les utérotoniques réparent à eux seuls une déchirure cervicale.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Une lésion génitale doit être identifiée et traitée par un geste adapté.",
          "source": "Module PNSME, chap. 6, p. 50, 54.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "L’alerte doit mobiliser les compétences et ressources adaptées à l’HPP.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le module cite l’anesthésiste, le bloc opératoire et le dépôt ou la banque de sang.",
          "source": "Module PNSME, chap. 6, p. 58.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "Une hémorragie abondante doit attendre le résultat complet du bilan avant toute réanimation.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le cours demande de commencer la réanimation le plus tôt possible et d’alerter les équipes.",
          "source": "Module PNSME, chap. 6, p. 58.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "La stimulation des mamelons peut favoriser une libération d’ocytocine.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le cours relie la mise au sein précoce à une aide à la contraction utérine.",
          "source": "Module PNSME, chap. 6, p. 55.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "Une vessie pleine favorise toujours une bonne contraction de l’utérus.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Elle peut au contraire gêner la contraction ; il faut vérifier la vidange vésicale.",
          "source": "Module PNSME, chap. 6, p. 55.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "La compression utérine bimanuelle peut être une mesure temporaire contre l’HPP par atonie.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le cours la décrit en attendant l’effet des traitements ou une intervention adaptée.",
          "source": "Module PNSME, chap. 6, p. 60.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "Le ballonnet intra-utérin remplace automatiquement toute chirurgie quelle que soit la cause.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Il fait partie d’une stratégie, avec indications et limites ; un échec exige une escalade.",
          "source": "Module PNSME, chap. 6, p. 60-63.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "La traction contrôlée du cordon décrite associe une stabilisation sus-pubienne de l’utérus.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "La contre-traction accompagne la traction mesurée.",
          "source": "Module PNSME, chap. 6, p. 52.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "Une boisson orale suffit pour traiter un choc hémorragique obstétrical.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "L’HPP grave nécessite une réanimation adaptée, notamment intraveineuse et transfusionnelle selon la situation.",
          "source": "Module PNSME, chap. 6, p. 58.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Le traitement doit rechercher la cause en même temps qu’il soutient l’état circulatoire.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Traiter seulement le volume perdu ne corrige pas la source du saignement.",
          "source": "Module PNSME, chap. 6, p. 50, 57-58.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "La persistance du saignement après les mesures initiales impose de réévaluer la prise en charge.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le module prévoit des options mécaniques et chirurgicales selon la situation.",
          "source": "Module PNSME, chap. 6, p. 57, 60-63.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "L’absence de facteurs de risque pendant la grossesse exclut toute HPP.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Une HPP reste possible sans facteur de risque connu.",
          "source": "R5 (voir références officielles).",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Un ballonnet posé dispense de surveiller l’état de la patiente.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le module prévoit une surveillance rapprochée des saignements et des constantes.",
          "source": "Module PNSME, chap. 6, p. 63.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Une quantification objective des pertes sanguines aide à détecter précocement une HPP.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Mesurer les pertes aide au diagnostic précoce.",
          "source": "R5 (voir références officielles).",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "L’hystérectomie est une technique destinée à conserver intégralement l’utérus.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "C’est un traitement radical pouvant être nécessaire pour sauver la vie en cas d’hémorragie incontrôlée.",
          "source": "Module PNSME, chap. 6, p. 63.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "L’ergométrine est contre-indiquée chez une patiente présentant une HTA dans le module.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le cours mentionne également la prééclampsie et l’éclampsie parmi ses contre-indications.",
          "source": "Module PNSME, chap. 6, p. 54, 59.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "La technique de B-Lynch est un traitement chirurgical conservateur décrit.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Elle comprime l’utérus par des sutures pour réduire le saignement.",
          "source": "Module PNSME, chap. 6, p. 63.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "Le traitement actuel de l’HPP peut associer précocement massage, utérotonique, acide tranexamique et réanimation.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Les mesures sont associées rapidement et suivies d’une réévaluation.",
          "source": "R5 (voir références officielles).",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "En présence d’un saignement inquiétant et de signes de choc, il faut attendre 500 mL avant d’alerter.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Un état de choc impose une réponse immédiate.",
          "source": "R5 (voir références officielles).",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "L’acide tranexamique doit systématiquement attendre l’échec de toutes les autres mesures.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "L’OMS recommande son utilisation précoce dans le traitement de l’HPP, en complément des soins standards.",
          "source": "R6 (voir références officielles).",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Quand survient l’HPP immédiate selon le module ? (une réponse)",
          "options": [
            "Uniquement après six semaines",
            "Seulement avant l’accouchement",
            "Dans les 24 premières heures après la naissance",
            "Uniquement pendant la grossesse"
          ],
          "type": "qcm",
          "explanation": "L’HPP tardive est distinguée de cette période initiale.",
          "source": "Module PNSME, chap. 6, p. 50.",
          "answers": [
            "Dans les 24 premières heures après la naissance"
          ],
          "correct": [
            "Dans les 24 premières heures après la naissance"
          ]
        },
        {
          "text": "Quelles catégories font partie des quatre T ? (plusieurs réponses)",
          "options": [
            "Taille maternelle comme cause unique",
            "Température comme cause unique",
            "Tissu",
            "Tonus"
          ],
          "type": "qcm",
          "explanation": "Les deux autres catégories sont le traumatisme et les troubles de coagulation.",
          "source": "Module PNSME, chap. 6, p. 50.",
          "answers": [
            "Tissu",
            "Tonus"
          ],
          "correct": [
            "Tissu",
            "Tonus"
          ]
        },
        {
          "text": "Quelle cause relève du T « tonus » ? (une réponse)",
          "options": [
            "Atonie utérine",
            "Fragment placentaire retenu",
            "Trouble de coagulation",
            "Déchirure cervicale"
          ],
          "type": "qcm",
          "explanation": "Le problème principal est alors une contraction utérine insuffisante.",
          "source": "Module PNSME, chap. 6, p. 50.",
          "answers": [
            "Atonie utérine"
          ],
          "correct": [
            "Atonie utérine"
          ]
        },
        {
          "text": "Quelles causes relèvent du traumatisme ? (plusieurs réponses)",
          "options": [
            "Rupture utérine",
            "Déchirure du col",
            "Rétention de membranes seule",
            "Atonie seule"
          ],
          "type": "qcm",
          "explanation": "Le cours cite également l’inversion utérine dans les causes traumatiques.",
          "source": "Module PNSME, chap. 6, p. 50.",
          "answers": [
            "Rupture utérine",
            "Déchirure du col"
          ],
          "correct": [
            "Rupture utérine",
            "Déchirure du col"
          ]
        },
        {
          "text": "Une partie du placenta manque à l’examen. Quelle cause rechercher ? (une réponse)",
          "options": [
            "Absence certaine de complication",
            "Rétention de tissu placentaire",
            "Anémie comme seule source du saignement",
            "Atonie nécessairement isolée"
          ],
          "type": "qcm",
          "explanation": "Un examen incomplet du placenta fait rechercher une rétention.",
          "source": "Module PNSME, chap. 6, p. 53.",
          "answers": [
            "Rétention de tissu placentaire"
          ],
          "correct": [
            "Rétention de tissu placentaire"
          ]
        },
        {
          "text": "Une femme saigne abondamment avec un utérus ferme. Quelle recherche est particulièrement utile ? (une réponse)",
          "options": [
            "Interdire l’examen génital",
            "Supposer que l’utérus ferme arrête toutes les causes",
            "Lésions du col, du vagin ou du périnée",
            "Conclure à l’absence d’HPP"
          ],
          "type": "qcm",
          "explanation": "La tonicité n’exclut pas une lésion traumatique ou une coagulopathie.",
          "source": "Module PNSME, chap. 6, p. 50, 54.",
          "answers": [
            "Lésions du col, du vagin ou du périnée"
          ],
          "correct": [
            "Lésions du col, du vagin ou du périnée"
          ]
        },
        {
          "text": "Quelle situation évoque surtout une atonie utérine ? (une réponse)",
          "options": [
            "Dilatation du col à 2 cm avant naissance",
            "Douleur du poignet isolée",
            "Saignement avec utérus mou après l’accouchement",
            "Œil rouge isolé"
          ],
          "type": "qcm",
          "explanation": "La tonicité utérine est une donnée centrale de l’évaluation de l’HPP.",
          "source": "Module PNSME, chap. 6, p. 50, 53, 57.",
          "answers": [
            "Saignement avec utérus mou après l’accouchement"
          ],
          "correct": [
            "Saignement avec utérus mou après l’accouchement"
          ]
        },
        {
          "text": "Quel est l’objectif de la GATPA ? (une réponse)",
          "options": [
            "Provoquer systématiquement une inversion utérine",
            "Supprimer toute surveillance après la délivrance",
            "Réduire le risque d’HPP",
            "Remplacer la prise en charge d’un choc"
          ],
          "type": "qcm",
          "explanation": "La GATPA favorise les mécanismes de contraction et de rétraction utérines.",
          "source": "Module PNSME, chap. 6, p. 51.",
          "answers": [
            "Réduire le risque d’HPP"
          ],
          "correct": [
            "Réduire le risque d’HPP"
          ]
        },
        {
          "text": "Quelle vérification le module décrit-il avant l’utérotonique prophylactique après la naissance ? (une réponse)",
          "options": [
            "Attendre l’apparition d’un choc",
            "S’assurer de l’absence d’un autre bébé",
            "Attendre obligatoirement deux heures",
            "Oublier l’examen abdominal"
          ],
          "type": "qcm",
          "explanation": "Cette vérification fait partie de la séquence décrite par le cours.",
          "source": "Module PNSME, chap. 6, p. 51.",
          "answers": [
            "S’assurer de l’absence d’un autre bébé"
          ],
          "correct": [
            "S’assurer de l’absence d’un autre bébé"
          ]
        },
        {
          "text": "Quel utérotonique est cité en première place dans la prévention de l’HPP ? (une réponse)",
          "options": [
            "Diazépam",
            "Gluconate de calcium",
            "Ocytocine",
            "Fer oral"
          ],
          "type": "qcm",
          "explanation": "L’ocytocine stimule la contraction utérine ; elle n’est pas un anticonvulsivant.",
          "source": "Module PNSME, chap. 6, p. 51, 54.",
          "answers": [
            "Ocytocine"
          ],
          "correct": [
            "Ocytocine"
          ]
        },
        {
          "text": "Quel risque accompagne une traction intempestive sur le cordon ? (plusieurs réponses)",
          "options": [
            "Arrachement du cordon",
            "Inversion utérine",
            "Traitement des troubles de coagulation",
            "Prévention certaine de tout saignement"
          ],
          "type": "qcm",
          "explanation": "La traction doit rester contrôlée et être réalisée par un prestataire compétent.",
          "source": "Module PNSME, chap. 6, p. 52-53.",
          "answers": [
            "Arrachement du cordon",
            "Inversion utérine"
          ],
          "correct": [
            "Arrachement du cordon",
            "Inversion utérine"
          ]
        },
        {
          "text": "Que faut-il examiner après la délivrance ? (plusieurs réponses)",
          "options": [
            "Uniquement la couleur de la pince",
            "Région génitale à la recherche de lésions",
            "Uniquement le poids du drap",
            "Intégrité du placenta et des membranes"
          ],
          "type": "qcm",
          "explanation": "Les tissus retenus et les traumatismes sont deux causes importantes de saignement.",
          "source": "Module PNSME, chap. 6, p. 53-54.",
          "answers": [
            "Région génitale à la recherche de lésions",
            "Intégrité du placenta et des membranes"
          ],
          "correct": [
            "Région génitale à la recherche de lésions",
            "Intégrité du placenta et des membranes"
          ]
        },
        {
          "text": "Pourquoi vérifier la vidange vésicale ? (une réponse)",
          "options": [
            "Une vessie pleine peut gêner la contraction utérine",
            "Elle provoque toujours une coagulation parfaite",
            "Elle remplace le groupage sanguin",
            "Elle dispense de surveiller le pouls"
          ],
          "type": "qcm",
          "explanation": "Le cours recommande de permettre la miction ou d’utiliser les moyens indiqués selon la situation.",
          "source": "Module PNSME, chap. 6, p. 55.",
          "answers": [
            "Une vessie pleine peut gêner la contraction utérine"
          ],
          "correct": [
            "Une vessie pleine peut gêner la contraction utérine"
          ]
        },
        {
          "text": "Quel mécanisme relie la mise au sein et la contraction utérine ? (une réponse)",
          "options": [
            "Augmentation obligatoire du saignement",
            "Dissolution du placenta retenu",
            "Libération d’ocytocine par stimulation des mamelons",
            "Suppression de toute circulation utérine"
          ],
          "type": "qcm",
          "explanation": "Cet effet physiologique complète les soins et ne remplace pas un traitement urgent.",
          "source": "Module PNSME, chap. 6, p. 55.",
          "answers": [
            "Libération d’ocytocine par stimulation des mamelons"
          ],
          "correct": [
            "Libération d’ocytocine par stimulation des mamelons"
          ]
        },
        {
          "text": "Quelles ressources faut-il mobiliser lors d’une HPP importante ? (plusieurs réponses)",
          "options": [
            "Banque ou dépôt de sang",
            "Uniquement le secrétariat",
            "Équipe d’anesthésie et de chirurgie",
            "Uniquement le service de restauration"
          ],
          "type": "qcm",
          "explanation": "La prise en charge peut nécessiter réanimation, transfusion et intervention.",
          "source": "Module PNSME, chap. 6, p. 58.",
          "answers": [
            "Banque ou dépôt de sang",
            "Équipe d’anesthésie et de chirurgie"
          ],
          "correct": [
            "Banque ou dépôt de sang",
            "Équipe d’anesthésie et de chirurgie"
          ]
        },
        {
          "text": "Quel soluté de remplissage est cité dans le module ? (une réponse)",
          "options": [
            "Cristalloïde tel que Ringer lactate ou sérum physiologique",
            "Alcool oral",
            "Huile végétale",
            "Boisson énergisante seule"
          ],
          "type": "qcm",
          "explanation": "Le remplissage fait partie de la réanimation et se conduit selon l’état clinique et le protocole.",
          "source": "Module PNSME, chap. 6, p. 58.",
          "answers": [
            "Cristalloïde tel que Ringer lactate ou sérum physiologique"
          ],
          "correct": [
            "Cristalloïde tel que Ringer lactate ou sérum physiologique"
          ]
        },
        {
          "text": "Quels éléments doivent être suivis pendant le traitement ? (plusieurs réponses)",
          "options": [
            "État hémodynamique",
            "Uniquement l’ordre d’arrivée",
            "Persistance des pertes sanguines",
            "Uniquement l’heure de sortie prévue"
          ],
          "type": "qcm",
          "explanation": "L’efficacité doit être évaluée et la stratégie modifiée si nécessaire.",
          "source": "Module PNSME, chap. 6, p. 55-56, 58, 63.",
          "answers": [
            "État hémodynamique",
            "Persistance des pertes sanguines"
          ],
          "correct": [
            "État hémodynamique",
            "Persistance des pertes sanguines"
          ]
        },
        {
          "text": "Quel rôle peut avoir la compression bimanuelle ? (une réponse)",
          "options": [
            "Prévention du paludisme",
            "Contrôle temporaire du saignement par atonie",
            "Remplacement de toute surveillance",
            "Traitement définitif d’une déchirure non examinée"
          ],
          "type": "qcm",
          "explanation": "C’est une mesure d’attente au sein d’un ensemble de soins.",
          "source": "Module PNSME, chap. 6, p. 60.",
          "answers": [
            "Contrôle temporaire du saignement par atonie"
          ],
          "correct": [
            "Contrôle temporaire du saignement par atonie"
          ]
        },
        {
          "text": "Dans quel contexte le ballonnet est-il discuté dans le cours ? (une réponse)",
          "options": [
            "Toute fièvre isolée sans saignement",
            "Toute grossesse normale avant le travail",
            "Toute déchirure artérielle sans exploration",
            "HPP par atonie persistante malgré les premières mesures"
          ],
          "type": "qcm",
          "explanation": "L’indication doit être confirmée et la procédure réalisée dans un cadre permettant la surveillance et l’escalade.",
          "source": "Module PNSME, chap. 6, p. 60-62.",
          "answers": [
            "HPP par atonie persistante malgré les premières mesures"
          ],
          "correct": [
            "HPP par atonie persistante malgré les premières mesures"
          ]
        },
        {
          "text": "Le saignement persiste malgré un ballonnet. Quelle attitude est adaptée ? (une réponse)",
          "options": [
            "Déclarer le traitement efficace",
            "Retirer toute voie veineuse",
            "Réévaluer et escalader rapidement vers les soins nécessaires",
            "Attendre sans limite"
          ],
          "type": "qcm",
          "explanation": "Le module prévoit l’abandon d’une procédure inefficace et le recours à une intervention adaptée.",
          "source": "Module PNSME, chap. 6, p. 62-63.",
          "answers": [
            "Réévaluer et escalader rapidement vers les soins nécessaires"
          ],
          "correct": [
            "Réévaluer et escalader rapidement vers les soins nécessaires"
          ]
        },
        {
          "text": "Quels gestes sont conservateurs dans le traitement chirurgical décrit ? (plusieurs réponses)",
          "options": [
            "Sutures de compression de type B-Lynch",
            "Hystérectomie",
            "Ligatures vasculaires",
            "Arrêt de toute réanimation"
          ],
          "type": "qcm",
          "explanation": "Les deux premiers cherchent à contrôler le saignement en conservant l’utérus.",
          "source": "Module PNSME, chap. 6, p. 63.",
          "answers": [
            "Sutures de compression de type B-Lynch",
            "Hystérectomie",
            "Ligatures vasculaires"
          ],
          "correct": [
            "Sutures de compression de type B-Lynch",
            "Hystérectomie",
            "Ligatures vasculaires"
          ]
        },
        {
          "text": "Que représente l’hystérectomie dans ce contexte ? (une réponse)",
          "options": [
            "Une technique qui garde l’utérus intact",
            "Un utérotonique injectable",
            "Une option radicale pouvant sauver la vie",
            "Un examen biologique"
          ],
          "type": "qcm",
          "explanation": "Elle peut être nécessaire lorsque l’hémorragie demeure incontrôlée.",
          "source": "Module PNSME, chap. 6, p. 63.",
          "answers": [
            "Une option radicale pouvant sauver la vie"
          ],
          "correct": [
            "Une option radicale pouvant sauver la vie"
          ]
        },
        {
          "text": "Chez une femme hypertendue, quel utérotonique du module comporte une contre-indication importante ? (une réponse)",
          "options": [
            "Acide folique",
            "Ergométrine",
            "Vitamine K du nouveau-né",
            "Fer oral"
          ],
          "type": "qcm",
          "explanation": "Le cours cite HTA, prééclampsie et éclampsie parmi les contre-indications.",
          "source": "Module PNSME, chap. 6, p. 54, 59.",
          "answers": [
            "Ergométrine"
          ],
          "correct": [
            "Ergométrine"
          ]
        },
        {
          "text": "Selon l’actualisation OMS 2025, quelle combinaison peut déclencher une réponse à une HPP avant 500 mL ? (une réponse)",
          "options": [
            "Au moins 300 mL avec un signe vital anormal",
            "10 mL sans aucun signe clinique",
            "Tout changement de pansement isolé",
            "Uniquement 2 litres perdus"
          ],
          "type": "qcm",
          "explanation": "La combinaison vise à détecter plus tôt les formes cliniquement préoccupantes.",
          "source": "R5 (voir références officielles).",
          "answers": [
            "Au moins 300 mL avec un signe vital anormal"
          ],
          "correct": [
            "Au moins 300 mL avec un signe vital anormal"
          ]
        },
        {
          "text": "Quels moyens améliorent la détection précoce ? (plusieurs réponses)",
          "options": [
            "Surveiller les signes vitaux",
            "Quantifier les pertes sanguines",
            "Attendre une syncope",
            "Se fier uniquement à la couleur du linge"
          ],
          "type": "qcm",
          "explanation": "Les pertes et les constantes doivent être évaluées ensemble.",
          "source": "R5 (voir références officielles).",
          "answers": [
            "Surveiller les signes vitaux",
            "Quantifier les pertes sanguines"
          ],
          "correct": [
            "Surveiller les signes vitaux",
            "Quantifier les pertes sanguines"
          ]
        },
        {
          "text": "Quel est le rôle de l’acide tranexamique dans l’HPP ? (une réponse)",
          "options": [
            "Un traitement antifibrinolytique complémentaire",
            "Un remplacement de l’examen génital",
            "Un anticonvulsivant",
            "Un antibiotique"
          ],
          "type": "qcm",
          "explanation": "Il complète les mesures contre la cause et la réanimation ; il ne remplace pas l’ensemble du traitement.",
          "source": "R6 (voir références officielles).",
          "answers": [
            "Un traitement antifibrinolytique complémentaire"
          ],
          "correct": [
            "Un traitement antifibrinolytique complémentaire"
          ]
        },
        {
          "text": "Dans quelle fenêtre l’OMS recommande-t-elle de débuter l’acide tranexamique pour l’HPP ? (une réponse)",
          "options": [
            "Uniquement six semaines après",
            "Dans les trois heures suivant la naissance",
            "Uniquement après 24 heures",
            "Sans tenir compte du temps écoulé"
          ],
          "type": "qcm",
          "explanation": "L’administration est précoce et s’ajoute aux soins standards.",
          "source": "R6 (voir références officielles).",
          "answers": [
            "Dans les trois heures suivant la naissance"
          ],
          "correct": [
            "Dans les trois heures suivant la naissance"
          ]
        },
        {
          "text": "Quels éléments font partie du faisceau de traitement initial actuel ? (plusieurs réponses)",
          "options": [
            "Attente isolée",
            "Examen génital et réanimation adaptée",
            "Arrêt de toute surveillance",
            "Utérotonique et massage utérin"
          ],
          "type": "qcm",
          "explanation": "Ajouter l’acide tranexamique et escalader les soins selon la réponse.",
          "source": "R5 (voir références officielles).",
          "answers": [
            "Examen génital et réanimation adaptée",
            "Utérotonique et massage utérin"
          ],
          "correct": [
            "Examen génital et réanimation adaptée",
            "Utérotonique et massage utérin"
          ]
        },
        {
          "text": "Une patiente a perdu 350 mL, son pouls s’accélère et sa pression chute. Quelle conduite est correcte ? (une réponse)",
          "options": [
            "Attendre impérativement 500 mL",
            "Agir rapidement devant une HPP possible",
            "Se limiter à une boisson sucrée",
            "La faire sortir car le volume est inférieur à 1 litre"
          ],
          "type": "qcm",
          "explanation": "Le saignement avec instabilité impose une action immédiate.",
          "source": "R5 (voir références officielles).",
          "answers": [
            "Agir rapidement devant une HPP possible"
          ],
          "correct": [
            "Agir rapidement devant une HPP possible"
          ]
        },
        {
          "text": "Quel principe doit guider l’ensemble de la prise en charge ? (une réponse)",
          "options": [
            "Faire une seule mesure et ne plus contrôler",
            "Traiter simultanément la gravité et la cause, puis réévaluer",
            "Traiter seulement le chiffre de pression artérielle",
            "Attendre la disparition spontanée de tout saignement"
          ],
          "type": "qcm",
          "explanation": "La recherche causale, la réanimation et le contrôle de l’efficacité sont complémentaires.",
          "source": "Module PNSME, chap. 6, p. 50, 57-63.",
          "answers": [
            "Traiter simultanément la gravité et la cause, puis réévaluer"
          ],
          "correct": [
            "Traiter simultanément la gravité et la cause, puis réévaluer"
          ]
        }
      ]
    },
    {
      "id": "sfm-7",
      "title": "SONU — Détresse respiratoire et soins immédiats du nouveau-né",
      "matter": "SONU",
      "filiere": "SFM",
      "description": "Sujet 7 — 60 questions corrigées",
      "instructions": "QCD : Vrai ou Faux. QCM : sélectionner la ou les bonnes réponses.",
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
          "text": "Tous les nouveau-nés doivent être systématiquement aspirés à la naissance.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le module classe l’aspiration systématique parmi les gestes à éviter.",
          "source": "Module PNSME, chap. 7, p. 69.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "La désobstruction n’est indiquée que si elle est nécessaire pour libérer les voies aériennes.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Une aspiration inutile peut retarder les gestes efficaces ; elle ne doit pas remplacer la ventilation indiquée.",
          "source": "Module PNSME, chap. 7, p. 69, 72 ; R7 (voir références officielles).",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "La minute d’or correspond à la première minute de vie.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Elle souligne la rapidité nécessaire pour évaluer, effectuer les premiers gestes et commencer la ventilation si indiquée.",
          "source": "Module PNSME, chap. 7, p. 64, 69-73 ; R7 (voir références officielles).",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "Une personne formée à aider le bébé à respirer doit être disponible à chaque naissance.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "La préparation doit précéder l’accouchement, même lorsqu’aucun risque n’a été identifié.",
          "source": "Module PNSME, chap. 7, p. 64, 67.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "Un bébé qui halète a nécessairement une respiration efficace.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le halètement peut nécessiter une ventilation ; il ne doit pas être assimilé à une respiration normale.",
          "source": "Module PNSME, chap. 7, p. 71.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Le ballon et le masque peuvent être vérifiés seulement après la naissance d’un bébé apnéique.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le matériel doit être préparé et testé avant la naissance pour éviter une perte de temps.",
          "source": "Module PNSME, chap. 7, p. 67.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Le peau-à-peau contribue au maintien de la chaleur chez un bébé stable.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Il s’accompagne de la surveillance respiratoire et des autres soins essentiels.",
          "source": "Module PNSME, chap. 7, p. 70, 73.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "Le séchage et la protection thermique font partie des soins immédiats.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Ils aident à prévenir les pertes de chaleur dès la naissance.",
          "source": "Module PNSME, chap. 7, p. 68, 70, 73.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "Un linge humide doit être conservé autour du bébé pour le réchauffer.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Il faut privilégier un linge sec et chaud pour limiter le refroidissement.",
          "source": "Module PNSME, chap. 7, p. 68, 70.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Secouer le bébé est une méthode correcte de stimulation.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le cours décrit ce geste comme dangereux.",
          "source": "Module PNSME, chap. 7, p. 69.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Une stimulation tactile douce peut aider un bébé à commencer à respirer.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le module propose de frotter doucement le dos, sans prolonger inutilement la stimulation.",
          "source": "Module PNSME, chap. 7, p. 70.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "Le soulèvement thoracique aide à apprécier l’efficacité de la ventilation.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Si la poitrine ne bouge pas, des corrections doivent être effectuées.",
          "source": "Module PNSME, chap. 7, p. 72.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "Le masque de ventilation doit couvrir uniquement le nez en laissant la bouche découverte.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le cours décrit un masque couvrant la bouche et le nez avec une bonne étanchéité.",
          "source": "Module PNSME, chap. 7, p. 71.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Si la poitrine reste immobile, poursuivre exactement la même technique sans réévaluation est suffisant.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Il faut vérifier notamment l’étanchéité du masque et la position de la tête.",
          "source": "Module PNSME, chap. 7, p. 72.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Un retour de la respiration après ventilation autorise l’arrêt de toute surveillance.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le bébé doit continuer à être surveillé auprès de la mère et recevoir des soins adaptés.",
          "source": "Module PNSME, chap. 7, p. 71-73.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "La tête doit être positionnée pour maintenir les voies respiratoires ouvertes.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Une légère extension est décrite ; flexion ou hyperextension peuvent gêner le passage de l’air.",
          "source": "Module PNSME, chap. 7, p. 70-71.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "La respiration du bébé ne doit être évaluée qu’après le premier bain.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "L’évaluation du cri et de la respiration est immédiate ; le bain ne doit pas la retarder.",
          "source": "Module PNSME, chap. 7, p. 68-69, 73.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "On peut stimuler pendant plusieurs minutes un bébé toujours apnéique avant d’envisager la ventilation.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "La stimulation ne doit pas retarder la ventilation nécessaire.",
          "source": "Module PNSME, chap. 7, p. 70-71 ; R7 (voir références officielles).",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Demander de l’aide fait partie de la prise en charge d’une ventilation inefficace.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "L’aide permet d’améliorer la ventilation et d’organiser des soins avancés si nécessaires.",
          "source": "Module PNSME, chap. 7, p. 71-72.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "La ventilation au ballon et au masque est centrale chez le bébé qui ne respire pas efficacement.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le module la présente comme le geste le plus important pour aider ces bébés.",
          "source": "Module PNSME, chap. 7, p. 71.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "Léthargie et convulsions sont des signes de danger néonatals.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Ils imposent une évaluation urgente plutôt qu’une simple attente au domicile.",
          "source": "Module PNSME, chap. 7, p. 74.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "Un tirage sévère et un geignement expiratoire sont des signes respiratoires préoccupants.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Ils indiquent une difficulté respiratoire qui mérite une évaluation rapide.",
          "source": "Module PNSME, chap. 7, p. 73.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "La vitamine K néonatale sert principalement à traiter l’asphyxie.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Elle participe à la prévention de la maladie hémorragique, et non à la ventilation.",
          "source": "Module PNSME, chap. 7, p. 56, 73.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Une mauvaise prise du sein ne peut jamais être un signe de danger.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le cours l’inclut parmi les signes à rechercher.",
          "source": "Module PNSME, chap. 7, p. 74.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Les soins du cordon doivent respecter les règles de prévention des infections.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le matériel de section doit être stérile et les soins suivre les directives applicables.",
          "source": "Module PNSME, chap. 7, p. 56, 73.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "La première mise au sein est recommandée dans l’heure suivant la naissance chez le bébé stable.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le maintien de la respiration et la stabilisation sont prioritaires lorsqu’une réanimation est nécessaire.",
          "source": "Module PNSME, chap. 7, p. 56, 73.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "Le premier bain doit être différé pour éviter le refroidissement.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le module indique un bain après 24 heures lorsque la température est stable.",
          "source": "Module PNSME, chap. 7, p. 57, 69.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "L’identification et l’enregistrement du nouveau-né sont inutiles après stabilisation.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Ils figurent dans les composantes des soins immédiats.",
          "source": "Module PNSME, chap. 7, p. 73.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "L’allaitement exclusif signifie ajouter systématiquement de l’eau sucrée au lait maternel.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le conseil du module est de donner exclusivement le lait maternel pendant les six premiers mois.",
          "source": "Module PNSME, chap. 7, p. 56.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "La cyanose et la pâleur sont des couleurs toujours normales chez le nouveau-né.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le module les classe parmi les anomalies à rechercher.",
          "source": "Module PNSME, chap. 7, p. 73.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Quel élément doit être prêt avant chaque naissance ? (une réponse)",
          "options": [
            "Seulement un carnet vierge",
            "Uniquement le bain du bébé",
            "Personnel compétent et matériel fonctionnel de ventilation",
            "Uniquement les vêtements de sortie"
          ],
          "type": "qcm",
          "explanation": "La préparation permet une réponse immédiate si le bébé ne respire pas.",
          "source": "Module PNSME, chap. 7, p. 64, 67.",
          "answers": [
            "Personnel compétent et matériel fonctionnel de ventilation"
          ],
          "correct": [
            "Personnel compétent et matériel fonctionnel de ventilation"
          ]
        },
        {
          "text": "Quels éléments matériels sont cités ? (plusieurs réponses)",
          "options": [
            "Linges propres et secs",
            "Ballon autogonflable et masque",
            "Alcool pour frictionner systématiquement le bébé",
            "Objet pour le suspendre tête en bas"
          ],
          "type": "qcm",
          "explanation": "Le cours cite aussi une montre et un stéthoscope, parmi d’autres matériels.",
          "source": "Module PNSME, chap. 7, p. 67.",
          "answers": [
            "Linges propres et secs",
            "Ballon autogonflable et masque"
          ],
          "correct": [
            "Linges propres et secs",
            "Ballon autogonflable et masque"
          ]
        },
        {
          "text": "Quelle observation est prioritaire immédiatement après la naissance ? (une réponse)",
          "options": [
            "Capacité à marcher",
            "Couleur future des cheveux",
            "Premières dents",
            "Cri et respiration"
          ],
          "type": "qcm",
          "explanation": "L’évaluation initiale détermine le besoin d’aide respiratoire.",
          "source": "Module PNSME, chap. 7, p. 68, 73.",
          "answers": [
            "Cri et respiration"
          ],
          "correct": [
            "Cri et respiration"
          ]
        },
        {
          "text": "Que représente la minute d’or ? (une réponse)",
          "options": [
            "La première minute après la naissance",
            "La première heure de la CPN",
            "Le délai avant le premier bain",
            "La dernière minute de grossesse"
          ],
          "type": "qcm",
          "explanation": "Le repère sert à agir rapidement et à ne pas retarder la ventilation indiquée.",
          "source": "Module PNSME, chap. 7, p. 64, 69-73 ; R7 (voir références officielles).",
          "answers": [
            "La première minute après la naissance"
          ],
          "correct": [
            "La première minute après la naissance"
          ]
        },
        {
          "text": "Un bébé ne respire pas après les gestes initiaux. Quelle intervention est essentielle ? (une réponse)",
          "options": [
            "Eau sucrée par la bouche",
            "Stimulation prolongée sans ventilation",
            "Bain immédiat",
            "Ventilation au ballon et au masque"
          ],
          "type": "qcm",
          "explanation": "La ventilation apporte l’air nécessaire lorsque la respiration reste absente ou inefficace.",
          "source": "Module PNSME, chap. 7, p. 71.",
          "answers": [
            "Ventilation au ballon et au masque"
          ],
          "correct": [
            "Ventilation au ballon et au masque"
          ]
        },
        {
          "text": "Un nouveau-né présente des gasps. Quelle interprétation est correcte ? (une réponse)",
          "options": [
            "Le bébé respire forcément normalement",
            "La respiration peut être inefficace et nécessite une aide adaptée",
            "Le bain corrige toujours cette situation",
            "Il faut attendre le prochain repas"
          ],
          "type": "qcm",
          "explanation": "Le module inclut le bébé qui halète parmi ceux qui peuvent avoir besoin de ventilation.",
          "source": "Module PNSME, chap. 7, p. 71.",
          "answers": [
            "La respiration peut être inefficace et nécessite une aide adaptée"
          ],
          "correct": [
            "La respiration peut être inefficace et nécessite une aide adaptée"
          ]
        },
        {
          "text": "Quels gestes assurent la protection thermique ? (plusieurs réponses)",
          "options": [
            "Conserver les linges mouillés",
            "Utiliser un linge sec et chaud",
            "Sécher soigneusement",
            "Laisser le bébé dans un courant d’air"
          ],
          "type": "qcm",
          "explanation": "Le peau-à-peau et une zone de soins chaude complètent ces mesures.",
          "source": "Module PNSME, chap. 7, p. 67-70.",
          "answers": [
            "Utiliser un linge sec et chaud",
            "Sécher soigneusement"
          ],
          "correct": [
            "Utiliser un linge sec et chaud",
            "Sécher soigneusement"
          ]
        },
        {
          "text": "Quel bénéfice du peau-à-peau est recherché dans les soins immédiats ? (une réponse)",
          "options": [
            "Remplacement de toute surveillance",
            "Traitement de toute apnée sans ventilation",
            "Maintien de la chaleur",
            "Suppression des soins du cordon"
          ],
          "type": "qcm",
          "explanation": "Le peau-à-peau s’intègre aux soins du bébé stable.",
          "source": "Module PNSME, chap. 7, p. 70, 73.",
          "answers": [
            "Maintien de la chaleur"
          ],
          "correct": [
            "Maintien de la chaleur"
          ]
        },
        {
          "text": "Quelle pratique respiratoire doit être évitée chez tous les bébés sans indication ? (une réponse)",
          "options": [
            "Vérification du matériel avant naissance",
            "Observation de la respiration",
            "Aspiration systématique",
            "Évaluation du cri"
          ],
          "type": "qcm",
          "explanation": "La désobstruction doit répondre à un besoin, et non être un geste automatique.",
          "source": "Module PNSME, chap. 7, p. 69 ; R7 (voir références officielles).",
          "answers": [
            "Aspiration systématique"
          ],
          "correct": [
            "Aspiration systématique"
          ]
        },
        {
          "text": "Quel geste constitue une stimulation douce décrite ? (une réponse)",
          "options": [
            "Frotter doucement le dos",
            "Secouer vigoureusement",
            "Frapper fortement la poitrine",
            "Suspendre tête en bas"
          ],
          "type": "qcm",
          "explanation": "La stimulation doit rester brève et ne pas retarder la ventilation.",
          "source": "Module PNSME, chap. 7, p. 69-70.",
          "answers": [
            "Frotter doucement le dos"
          ],
          "correct": [
            "Frotter doucement le dos"
          ]
        },
        {
          "text": "Quelles pratiques sont dangereuses selon le module ? (plusieurs réponses)",
          "options": [
            "Vérifier sa respiration",
            "Le soulever tête en bas",
            "Le sécher",
            "Secouer le nouveau-né"
          ],
          "type": "qcm",
          "explanation": "Les gestes agressifs ne constituent pas une réanimation correcte.",
          "source": "Module PNSME, chap. 7, p. 69.",
          "answers": [
            "Le soulever tête en bas",
            "Secouer le nouveau-né"
          ],
          "correct": [
            "Le soulever tête en bas",
            "Secouer le nouveau-né"
          ]
        },
        {
          "text": "Quelle position de tête favorise la perméabilité des voies aériennes ? (une réponse)",
          "options": [
            "Une hyperextension forcée",
            "Une rotation extrême imposée",
            "Une flexion marquée menton sur thorax",
            "Une position neutre à légèrement étendue adaptée au bébé"
          ],
          "type": "qcm",
          "explanation": "Le cours décrit une légère extension pour maintenir le passage de l’air.",
          "source": "Module PNSME, chap. 7, p. 70-71.",
          "answers": [
            "Une position neutre à légèrement étendue adaptée au bébé"
          ],
          "correct": [
            "Une position neutre à légèrement étendue adaptée au bébé"
          ]
        },
        {
          "text": "Quelles régions le masque doit-il couvrir ? (une réponse)",
          "options": [
            "Cou et menton seuls",
            "Yeux seuls",
            "Bouche et nez",
            "Nez seul en laissant la bouche libre"
          ],
          "type": "qcm",
          "explanation": "Une couverture correcte doit s’accompagner d’une bonne étanchéité.",
          "source": "Module PNSME, chap. 7, p. 71.",
          "answers": [
            "Bouche et nez"
          ],
          "correct": [
            "Bouche et nez"
          ]
        },
        {
          "text": "Quel signe observable aide à juger la ventilation ? (une réponse)",
          "options": [
            "Présence d’un bracelet seule",
            "Couleur de la couverture",
            "Soulèvement de la poitrine",
            "Nombre de personnes dans la salle"
          ],
          "type": "qcm",
          "explanation": "L’absence de mouvement thoracique fait rechercher une ventilation inefficace.",
          "source": "Module PNSME, chap. 7, p. 72.",
          "answers": [
            "Soulèvement de la poitrine"
          ],
          "correct": [
            "Soulèvement de la poitrine"
          ]
        },
        {
          "text": "La poitrine ne se soulève pas. Quelles corrections sont pertinentes ? (plusieurs réponses)",
          "options": [
            "Faire boire le bébé",
            "Repositionner la tête",
            "Attendre sans rien changer",
            "Revoir l’étanchéité du masque"
          ],
          "type": "qcm",
          "explanation": "Le cours propose une séquence de correction incluant ces vérifications et la recherche d’une obstruction si nécessaire.",
          "source": "Module PNSME, chap. 7, p. 72.",
          "answers": [
            "Repositionner la tête",
            "Revoir l’étanchéité du masque"
          ],
          "correct": [
            "Repositionner la tête",
            "Revoir l’étanchéité du masque"
          ]
        },
        {
          "text": "Le masque fuit. Quel problème faut-il corriger ? (une réponse)",
          "options": [
            "Le calendrier vaccinal maternel",
            "Le groupe sanguin du père",
            "La taille du carnet",
            "L’étanchéité du contact visage-masque"
          ],
          "type": "qcm",
          "explanation": "Une fuite empêche une partie de l’air d’atteindre les poumons.",
          "source": "Module PNSME, chap. 7, p. 71-72.",
          "answers": [
            "L’étanchéité du contact visage-masque"
          ],
          "correct": [
            "L’étanchéité du contact visage-masque"
          ]
        },
        {
          "text": "Malgré la correction du masque, le bébé ne respire pas. Quelle attitude correspond au cours ? (une réponse)",
          "options": [
            "Attendre la première tétée",
            "Cesser tous les gestes",
            "Poursuivre la ventilation adaptée et demander de l’aide",
            "Faire un bain froid"
          ],
          "type": "qcm",
          "explanation": "L’aide permet l’évaluation cardiaque et l’accès à des soins plus avancés.",
          "source": "Module PNSME, chap. 7, p. 71-72.",
          "answers": [
            "Poursuivre la ventilation adaptée et demander de l’aide"
          ],
          "correct": [
            "Poursuivre la ventilation adaptée et demander de l’aide"
          ]
        },
        {
          "text": "Le bébé recommence à bien respirer après ventilation. Quelle suite est correcte ? (une réponse)",
          "options": [
            "Poursuivre la surveillance et les soins adaptés",
            "Le faire sortir immédiatement sans examen",
            "Supprimer la protection thermique",
            "Le laisser sans surveillance"
          ],
          "type": "qcm",
          "explanation": "Le retour de la respiration ne garantit pas l’absence de complication secondaire.",
          "source": "Module PNSME, chap. 7, p. 71-73.",
          "answers": [
            "Poursuivre la surveillance et les soins adaptés"
          ],
          "correct": [
            "Poursuivre la surveillance et les soins adaptés"
          ]
        },
        {
          "text": "Pourquoi appeler un autre soignant pour la mère pendant une réanimation du bébé ? (une réponse)",
          "options": [
            "Parce que la mère ne peut plus saigner",
            "Maintenir une surveillance simultanée de la mère",
            "Pour remplacer la ventilation par un examen maternel",
            "Pour interrompre tous les soins maternels"
          ],
          "type": "qcm",
          "explanation": "Le module souligne la nécessité de ne pas négliger l’autre patient pendant l’urgence.",
          "source": "Module PNSME, chap. 7, p. 72.",
          "answers": [
            "Maintenir une surveillance simultanée de la mère"
          ],
          "correct": [
            "Maintenir une surveillance simultanée de la mère"
          ]
        },
        {
          "text": "Quand le module propose-t-il le premier bain si le bébé est stable ? (une réponse)",
          "options": [
            "Après 24 heures et stabilité thermique",
            "Dès la première minute sans condition",
            "Pendant la ventilation",
            "Immédiatement avant toute évaluation"
          ],
          "type": "qcm",
          "explanation": "Le bain précoce favorise les pertes de chaleur et ne doit pas perturber les soins initiaux.",
          "source": "Module PNSME, chap. 7, p. 57, 69.",
          "answers": [
            "Après 24 heures et stabilité thermique"
          ],
          "correct": [
            "Après 24 heures et stabilité thermique"
          ]
        },
        {
          "text": "Quand proposer la première mise au sein chez un nouveau-né stable ? (une réponse)",
          "options": [
            "Uniquement après le premier bain",
            "Dans l’heure suivant la naissance",
            "Après sept jours",
            "Après arrêt de tout contact maternel"
          ],
          "type": "qcm",
          "explanation": "Le cours encourage l’allaitement précoce et à la demande.",
          "source": "Module PNSME, chap. 7, p. 56, 73.",
          "answers": [
            "Dans l’heure suivant la naissance"
          ],
          "correct": [
            "Dans l’heure suivant la naissance"
          ]
        },
        {
          "text": "Quelle durée d’allaitement exclusif est citée ? (une réponse)",
          "options": [
            "Six semaines obligatoirement seulement",
            "Les six premières minutes uniquement",
            "Les six premiers mois",
            "Un mois avec eau sucrée systématique"
          ],
          "type": "qcm",
          "explanation": "L’exclusivité concerne le lait maternel comme alimentation, sans ajout routinier d’eau ou d’autres aliments.",
          "source": "Module PNSME, chap. 7, p. 56.",
          "answers": [
            "Les six premiers mois"
          ],
          "correct": [
            "Les six premiers mois"
          ]
        },
        {
          "text": "Quelle prévention est associée à la vitamine K ? (une réponse)",
          "options": [
            "Paludisme maternel",
            "Rétention placentaire",
            "Maladie hémorragique du nouveau-né",
            "Toutes les détresses respiratoires"
          ],
          "type": "qcm",
          "explanation": "La vitamine K est un soin préventif distinct des gestes respiratoires.",
          "source": "Module PNSME, chap. 7, p. 56, 73.",
          "answers": [
            "Maladie hémorragique du nouveau-né"
          ],
          "correct": [
            "Maladie hémorragique du nouveau-né"
          ]
        },
        {
          "text": "Quels éléments figurent dans les soins immédiats après stabilisation ? (plusieurs réponses)",
          "options": [
            "Cesser toute observation de respiration",
            "Identifier le nouveau-né",
            "L’examiner et conseiller la mère",
            "Omettre l’enregistrement"
          ],
          "type": "qcm",
          "explanation": "Les soins comprennent prévention, identification, examen et accompagnement.",
          "source": "Module PNSME, chap. 7, p. 73.",
          "answers": [
            "Identifier le nouveau-né",
            "L’examiner et conseiller la mère"
          ],
          "correct": [
            "Identifier le nouveau-né",
            "L’examiner et conseiller la mère"
          ]
        },
        {
          "text": "Quels signes respiratoires sont préoccupants ? (plusieurs réponses)",
          "options": [
            "Cri vigoureux isolé",
            "Geignement expiratoire",
            "Tirage intercostal sévère",
            "Respiration régulière sans effort"
          ],
          "type": "qcm",
          "explanation": "Ils peuvent traduire une détresse respiratoire.",
          "source": "Module PNSME, chap. 7, p. 73.",
          "answers": [
            "Geignement expiratoire",
            "Tirage intercostal sévère"
          ],
          "correct": [
            "Geignement expiratoire",
            "Tirage intercostal sévère"
          ]
        },
        {
          "text": "Une fréquence respiratoire de 72 cycles par minute est constatée au repos. Quelle lecture correspond au cours ? (une réponse)",
          "options": [
            "Elle dépasse le seuil de 60 cycles par minute cité comme alerte",
            "Elle prouve une bonne ventilation",
            "Elle dispense d’examen",
            "Elle est toujours normale"
          ],
          "type": "qcm",
          "explanation": "La mesure doit être interprétée avec l’ensemble de l’état du bébé et conduit à une évaluation.",
          "source": "Module PNSME, chap. 7, p. 73.",
          "answers": [
            "Elle dépasse le seuil de 60 cycles par minute cité comme alerte"
          ],
          "correct": [
            "Elle dépasse le seuil de 60 cycles par minute cité comme alerte"
          ]
        },
        {
          "text": "Quels signes neurologiques figurent parmi les dangers ? (plusieurs réponses)",
          "options": [
            "Convulsions",
            "Léthargie",
            "Réaction normale au contact",
            "Éveil adapté"
          ],
          "type": "qcm",
          "explanation": "Ces manifestations imposent une évaluation urgente.",
          "source": "Module PNSME, chap. 7, p. 74.",
          "answers": [
            "Convulsions",
            "Léthargie"
          ],
          "correct": [
            "Convulsions",
            "Léthargie"
          ]
        },
        {
          "text": "Quels signes infectieux doivent alerter ? (plusieurs réponses)",
          "options": [
            "Pustules cutanées multiples",
            "Cordon propre sans rougeur",
            "Peau d’aspect normal",
            "Ombilic rouge ou purulent"
          ],
          "type": "qcm",
          "explanation": "Ces anomalies sont citées dans la liste des signes de danger.",
          "source": "Module PNSME, chap. 7, p. 74.",
          "answers": [
            "Pustules cutanées multiples",
            "Ombilic rouge ou purulent"
          ],
          "correct": [
            "Pustules cutanées multiples",
            "Ombilic rouge ou purulent"
          ]
        },
        {
          "text": "Un bébé devient léthargique et tète mal après une naissance apparemment normale. Quelle conduite est pertinente ? (une réponse)",
          "options": [
            "Attendre systématiquement six semaines",
            "Ajouter de l’alcool au lait",
            "Conclure que l’adaptation est parfaite",
            "Demander rapidement une évaluation médicale"
          ],
          "type": "qcm",
          "explanation": "Léthargie et mauvaise prise du sein sont des signaux de danger.",
          "source": "Module PNSME, chap. 7, p. 74.",
          "answers": [
            "Demander rapidement une évaluation médicale"
          ],
          "correct": [
            "Demander rapidement une évaluation médicale"
          ]
        },
        {
          "text": "Quel principe améliore le maintien des compétences de réanimation néonatale ? (une réponse)",
          "options": [
            "Lecture unique sans pratique",
            "Absence de contrôle du matériel",
            "Attente de la prochaine urgence pour découvrir le ballon",
            "Pratique et entraînement réguliers"
          ],
          "type": "qcm",
          "explanation": "Le module conclut que la maîtrise de la ventilation exige une pratique continuelle.",
          "source": "Module PNSME, chap. 7, p. 74.",
          "answers": [
            "Pratique et entraînement réguliers"
          ],
          "correct": [
            "Pratique et entraînement réguliers"
          ]
        }
      ]
    },
    {
      "id": "sfm-8",
      "title": "SONU — Suivi postnatal de la mère et du nouveau-né",
      "matter": "SONU",
      "filiere": "SFM",
      "description": "Sujet 8 — 60 questions corrigées",
      "instructions": "QCD : Vrai ou Faux. QCM : sélectionner la ou les bonnes réponses.",
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
          "text": "La quantité de saignement vaginal doit être surveillée.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Une augmentation importante ou soudaine est un signe d’alerte.",
          "source": "Module PNSME, chap. 8, p. 76-77.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "Le suivi postnatal concerne la mère et le nouveau-né.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le cours le définit comme l’ensemble des soins offerts à la femme après l’accouchement et à son enfant.",
          "source": "Module PNSME, chap. 8, p. 75.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "Après six heures d’observation, le module impose la sortie automatique au domicile.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Il décrit un transfert en suites de couches si la mère et le bébé vont bien, et non une sortie automatique.",
          "source": "Module PNSME, chap. 8, p. 75.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Les premières heures après la naissance nécessitent une surveillance attentive.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le module insiste particulièrement sur les six premières heures.",
          "source": "Module PNSME, chap. 8, p. 75-76.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "Le globe de sécurité désigne un dispositif de ventilation néonatale.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Il désigne ici la fermeté de l’utérus après l’accouchement.",
          "source": "Module PNSME, chap. 8, p. 76.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "La température, le pouls et la pression artérielle font partie des constantes à suivre.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Leur évolution aide à identifier une complication du post-partum.",
          "source": "Module PNSME, chap. 8, p. 76.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "Une vessie distendue et une rétention urinaire peuvent être ignorées après l’accouchement.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "L’appareil urinaire fait partie des éléments de surveillance décrits.",
          "source": "Module PNSME, chap. 8, p. 76.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Les conjonctives n’ont aucun intérêt dans l’observation postnatale.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Leur examen figure dans la surveillance, notamment pour repérer une pâleur.",
          "source": "Module PNSME, chap. 8, p. 76.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Le cours prévoit une surveillance de la conscience maternelle.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Une modification peut signaler une dégradation et doit être analysée avec les autres paramètres.",
          "source": "Module PNSME, chap. 8, p. 76.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "Un accouchement sans incident supprime le besoin de surveillance postnatale.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Des complications peuvent apparaître secondairement ; la surveillance reste nécessaire.",
          "source": "Module PNSME, chap. 8, p. 75-77.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "L’examen des seins fait partie du suivi maternel.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Des seins chauds ou douloureux peuvent nécessiter une évaluation.",
          "source": "Module PNSME, chap. 8, p. 76-77.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "La consultation de la sixième semaine interdit de revenir plus tôt.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Les signes d’alerte imposent de consulter sans attendre le rendez-vous prévu.",
          "source": "Module PNSME, chap. 8, p. 77.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Le conseil sur la moustiquaire imprégnée concerne aussi la période postnatale.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le cours recommande à la mère de dormir avec son enfant sous une moustiquaire.",
          "source": "Module PNSME, chap. 8, p. 76.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "Dans le calendrier du module, les contrôles sont rapprochés pendant les deux premières heures.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le cours prévoit des contrôles toutes les quinze minutes.",
          "source": "Module PNSME, chap. 8, p. 76.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "La surveillance postnatale se limite aux organes génitaux.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Elle porte aussi sur l’état général, les constantes, les seins, l’appareil urinaire et les mollets.",
          "source": "Module PNSME, chap. 8, p. 76.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Le conseil sur l’allaitement doit attendre que la mère quitte la maternité.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le module prévoit une aide dès la première heure après la naissance.",
          "source": "Module PNSME, chap. 8, p. 76.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Le calendrier du cours passe à des contrôles toutes les trente minutes pendant la troisième heure.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Les fréquences doivent être renforcées si l’état clinique le nécessite.",
          "source": "Module PNSME, chap. 8, p. 76.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "Une anomalie apparue entre deux horaires doit attendre le contrôle programmé suivant.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Les horaires de routine ne justifient pas de retarder l’évaluation d’un signe inquiétant.",
          "source": "Module PNSME, chap. 8, p. 76-77.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Le module recommande un seul contrôle au cours de la première journée.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Il prévoit plusieurs contrôles rapprochés, puis une poursuite de la surveillance.",
          "source": "Module PNSME, chap. 8, p. 76.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Le module cite un suivi au sixième jour puis à la sixième semaine.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Ce calendrier du cours doit être distingué des autres recommandations de suivi.",
          "source": "Module PNSME, chap. 8, p. 76.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "Une fatigue excessive doit toujours être considérée normale sans aucun examen.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le cours la classe parmi les signes d’alerte à contextualiser.",
          "source": "Module PNSME, chap. 8, p. 77.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Un bébé restant froid malgré le réchauffement nécessite une évaluation.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "La persistance du problème thermique est un signe d’alerte.",
          "source": "Module PNSME, chap. 8, p. 77.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "De violents maux de tête après l’accouchement nécessitent une évaluation.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Ils sont mentionnés dans les signes d’alerte, notamment en raison des complications hypertensives possibles.",
          "source": "Module PNSME, chap. 8, p. 77.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "L’éducation postnatale doit permettre à la famille de reconnaître les signes de danger.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "La surveillance ne repose pas uniquement sur les consultations programmées.",
          "source": "Module PNSME, chap. 8, p. 77.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "Une augmentation soudaine des saignements maternels est un signal d’alerte.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Elle doit faire rechercher une complication hémorragique.",
          "source": "Module PNSME, chap. 8, p. 77.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "Une fièvre avec pertes malodorantes est un signe habituel à banaliser.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Ces deux manifestations figurent parmi les signes d’alerte maternels.",
          "source": "Module PNSME, chap. 8, p. 77.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Les convulsions du nouveau-né peuvent attendre systématiquement la visite de routine.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Elles constituent un signe de danger nécessitant des soins urgents.",
          "source": "Module PNSME, chap. 8, p. 77.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "La stabilité de la mère garantit toujours celle du nouveau-né.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Les deux patients doivent être évalués séparément et recevoir les soins nécessaires.",
          "source": "Module PNSME, chap. 8, p. 75-77.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Un cordon rouge avec du pus est un signe rassurant de cicatrisation.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Le cours le classe parmi les signes d’alerte du nouveau-né.",
          "source": "Module PNSME, chap. 8, p. 77.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "text": "Des yeux néonatals gonflés ou purulents doivent alerter.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "type": "qcd",
          "explanation": "Ils font partie des signes justifiant une évaluation.",
          "source": "Module PNSME, chap. 8, p. 77.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "text": "Qui doit bénéficier du suivi postnatal ? (plusieurs réponses)",
          "options": [
            "La mère",
            "Uniquement la mère si le bébé a crié",
            "Le nouveau-né",
            "Uniquement l’accompagnant"
          ],
          "type": "qcm",
          "explanation": "Le suivi porte sur le couple mère-enfant, sans exclure l’évaluation propre à chacun.",
          "source": "Module PNSME, chap. 8, p. 75.",
          "answers": [
            "La mère",
            "Le nouveau-né"
          ],
          "correct": [
            "La mère",
            "Le nouveau-né"
          ]
        },
        {
          "text": "Quel est l’objectif principal de la surveillance postnatale immédiate ? (une réponse)",
          "options": [
            "Détecter et prendre en charge les complications",
            "Garantir l’absence définitive de maladie",
            "Remplir uniquement les registres",
            "Supprimer les visites ultérieures"
          ],
          "type": "qcm",
          "explanation": "Le cours l’associe à la réduction de la mortalité maternelle et infantile.",
          "source": "Module PNSME, chap. 8, p. 75.",
          "answers": [
            "Détecter et prendre en charge les complications"
          ],
          "correct": [
            "Détecter et prendre en charge les complications"
          ]
        },
        {
          "text": "Dans le module, que se passe-t-il après six heures si la mère et l’enfant vont bien ? (une réponse)",
          "options": [
            "Sortie automatique sans examen",
            "Séparation obligatoire de la mère et du bébé",
            "Arrêt de toute surveillance",
            "Transfert de la salle d’observation vers les suites de couches"
          ],
          "type": "qcm",
          "explanation": "Le texte prévoit une poursuite du séjour et de la surveillance.",
          "source": "Module PNSME, chap. 8, p. 75.",
          "answers": [
            "Transfert de la salle d’observation vers les suites de couches"
          ],
          "correct": [
            "Transfert de la salle d’observation vers les suites de couches"
          ]
        },
        {
          "text": "Quels paramètres généraux surveille-t-on chez la mère ? (plusieurs réponses)",
          "options": [
            "Uniquement le prénom du bébé",
            "Conscience",
            "Température et pouls",
            "Uniquement le contenu du sac"
          ],
          "type": "qcm",
          "explanation": "L’observation associe l’état général et les différentes constantes.",
          "source": "Module PNSME, chap. 8, p. 76.",
          "answers": [
            "Conscience",
            "Température et pouls"
          ],
          "correct": [
            "Conscience",
            "Température et pouls"
          ]
        },
        {
          "text": "Pourquoi observer les conjonctives ? (une réponse)",
          "options": [
            "Rechercher notamment une pâleur",
            "Déterminer le groupe sanguin",
            "Évaluer uniquement l’audition",
            "Mesurer directement la dilatation"
          ],
          "type": "qcm",
          "explanation": "La pâleur doit être interprétée dans le contexte clinique et avec les examens nécessaires.",
          "source": "Module PNSME, chap. 8, p. 76.",
          "answers": [
            "Rechercher notamment une pâleur"
          ],
          "correct": [
            "Rechercher notamment une pâleur"
          ]
        },
        {
          "text": "Que désigne le globe de sécurité dans ce chapitre ? (une réponse)",
          "options": [
            "Un utérus ferme après l’accouchement",
            "Le bonnet du bébé",
            "Un ballon de ventilation",
            "Un dispositif de perfusion"
          ],
          "type": "qcm",
          "explanation": "La fermeté utérine est un des éléments de surveillance des saignements.",
          "source": "Module PNSME, chap. 8, p. 76.",
          "answers": [
            "Un utérus ferme après l’accouchement"
          ],
          "correct": [
            "Un utérus ferme après l’accouchement"
          ]
        },
        {
          "text": "Quelles observations locales font partie de la surveillance ? (plusieurs réponses)",
          "options": [
            "Saignement vaginal",
            "Uniquement longueur des cheveux",
            "État de l’appareil urinaire",
            "Uniquement aspect du carnet"
          ],
          "type": "qcm",
          "explanation": "Le cours inclut notamment rétention ou incontinence urinaire et état de la vulve.",
          "source": "Module PNSME, chap. 8, p. 76.",
          "answers": [
            "Saignement vaginal",
            "État de l’appareil urinaire"
          ],
          "correct": [
            "Saignement vaginal",
            "État de l’appareil urinaire"
          ]
        },
        {
          "text": "Quels éléments des seins peuvent nécessiter une évaluation ? (plusieurs réponses)",
          "options": [
            "Absence de plainte avec examen normal",
            "Mise au sein efficace sans douleur inhabituelle",
            "Chaleur anormale",
            "Douleur"
          ],
          "type": "qcm",
          "explanation": "Des seins chauds ou douloureux figurent parmi les alertes maternelles.",
          "source": "Module PNSME, chap. 8, p. 77.",
          "answers": [
            "Chaleur anormale",
            "Douleur"
          ],
          "correct": [
            "Chaleur anormale",
            "Douleur"
          ]
        },
        {
          "text": "Quelle fréquence de contrôle est indiquée pendant les deux premières heures dans le module ? (une réponse)",
          "options": [
            "Toutes les quinze minutes",
            "Une fois seulement à la sortie",
            "Toutes les douze heures uniquement",
            "Une fois par semaine"
          ],
          "type": "qcm",
          "explanation": "La surveillance rapprochée vise la détection rapide d’une complication.",
          "source": "Module PNSME, chap. 8, p. 76.",
          "answers": [
            "Toutes les quinze minutes"
          ],
          "correct": [
            "Toutes les quinze minutes"
          ]
        },
        {
          "text": "Quelle fréquence est prévue pendant la troisième heure ? (une réponse)",
          "options": [
            "Toutes les trente minutes",
            "Toutes les six heures",
            "Une fois par jour",
            "Aucun contrôle"
          ],
          "type": "qcm",
          "explanation": "Le calendrier du module espace progressivement les observations chez une patiente stable.",
          "source": "Module PNSME, chap. 8, p. 76.",
          "answers": [
            "Toutes les trente minutes"
          ],
          "correct": [
            "Toutes les trente minutes"
          ]
        },
        {
          "text": "Quelle fréquence est prévue pendant les trois heures suivantes dans ce même calendrier ? (une réponse)",
          "options": [
            "Une fois par mois",
            "Aucune observation avant six semaines",
            "Toutes les heures",
            "Toutes les douze heures"
          ],
          "type": "qcm",
          "explanation": "Le calendrier doit rester adapté à l’état de la patiente.",
          "source": "Module PNSME, chap. 8, p. 76.",
          "answers": [
            "Toutes les heures"
          ],
          "correct": [
            "Toutes les heures"
          ]
        },
        {
          "text": "Des contrôles sont prévus de 8 h à 10 h toutes les quinze minutes, bornes incluses. Combien de contrôles sont prévus ? (une réponse)",
          "options": [
            "4",
            "9",
            "6",
            "8"
          ],
          "type": "qcm",
          "explanation": "Les deux heures comportent huit intervalles de quinze minutes ; avec le contrôle initial, il y a neuf observations.",
          "source": "Module PNSME, chap. 8, p. 76.",
          "answers": [
            "9"
          ],
          "correct": [
            "9"
          ]
        },
        {
          "text": "Une femme saigne davantage dix minutes après un contrôle normal. Que faire ? (une réponse)",
          "options": [
            "Réduire la surveillance",
            "Attendre obligatoirement le prochain horaire",
            "La réévaluer immédiatement",
            "Ignorer le saignement"
          ],
          "type": "qcm",
          "explanation": "Une nouvelle anomalie prime sur le calendrier de routine.",
          "source": "Module PNSME, chap. 8, p. 76-77.",
          "answers": [
            "La réévaluer immédiatement"
          ],
          "correct": [
            "La réévaluer immédiatement"
          ]
        },
        {
          "text": "Quels rendez-vous le module cite-t-il après les premières 48 heures ? (plusieurs réponses)",
          "options": [
            "Sixième semaine",
            "Aucun suivi si la naissance était normale",
            "Sixième jour",
            "Uniquement sixième année"
          ],
          "type": "qcm",
          "explanation": "Le cours utilise la règle des trois « six » pour son calendrier.",
          "source": "Module PNSME, chap. 8, p. 76.",
          "answers": [
            "Sixième semaine",
            "Sixième jour"
          ],
          "correct": [
            "Sixième semaine",
            "Sixième jour"
          ]
        },
        {
          "text": "Quel message associer aux rendez-vous programmés ? (une réponse)",
          "options": [
            "Revenir plus tôt en présence d’un signe de danger",
            "Attendre le rendez-vous quel que soit le symptôme",
            "Éviter toute nouvelle consultation",
            "Consulter seulement en cas de demande du voisin"
          ],
          "type": "qcm",
          "explanation": "Le calendrier ne remplace pas l’accès aux soins urgents.",
          "source": "Module PNSME, chap. 8, p. 77.",
          "answers": [
            "Revenir plus tôt en présence d’un signe de danger"
          ],
          "correct": [
            "Revenir plus tôt en présence d’un signe de danger"
          ]
        },
        {
          "text": "Quels conseils sont explicitement décrits en postnatal ? (plusieurs réponses)",
          "options": [
            "Utiliser une moustiquaire imprégnée",
            "Aider à la mise au sein précoce",
            "Supprimer toute information à la famille",
            "Arrêter tout allaitement sans motif"
          ],
          "type": "qcm",
          "explanation": "Le cours prévoit aussi des soins complémentaires selon les besoins.",
          "source": "Module PNSME, chap. 8, p. 76.",
          "answers": [
            "Utiliser une moustiquaire imprégnée",
            "Aider à la mise au sein précoce"
          ],
          "correct": [
            "Utiliser une moustiquaire imprégnée",
            "Aider à la mise au sein précoce"
          ]
        },
        {
          "text": "Jusqu’à quel jour le module prévoit-il le fer et les folates maternels ? (une réponse)",
          "options": [
            "45e jour",
            "7e jour dans tous les cas",
            "365e jour obligatoirement",
            "2e jour uniquement"
          ],
          "type": "qcm",
          "explanation": "C’est le repère indiqué dans le cours ; la prise en charge doit rester adaptée à la prescription et à l’état maternel.",
          "source": "Module PNSME, chap. 8, p. 76.",
          "answers": [
            "45e jour"
          ],
          "correct": [
            "45e jour"
          ]
        },
        {
          "text": "Quel symptôme évoque une alerte hémorragique maternelle ? (une réponse)",
          "options": [
            "Sommeil réparateur",
            "Faim isolée",
            "Appétit conservé sans autre plainte",
            "Augmentation soudaine importante des saignements"
          ],
          "type": "qcm",
          "explanation": "Ce changement nécessite une évaluation rapide.",
          "source": "Module PNSME, chap. 8, p. 77.",
          "answers": [
            "Augmentation soudaine importante des saignements"
          ],
          "correct": [
            "Augmentation soudaine importante des saignements"
          ]
        },
        {
          "text": "Quels signes peuvent faire rechercher une infection du post-partum ? (plusieurs réponses)",
          "options": [
            "Température normale sans plainte",
            "Utérus ferme sans autre anomalie",
            "Fièvre",
            "Pertes vaginales malodorantes"
          ],
          "type": "qcm",
          "explanation": "Ces symptômes sont cités parmi les alertes maternelles.",
          "source": "Module PNSME, chap. 8, p. 77.",
          "answers": [
            "Fièvre",
            "Pertes vaginales malodorantes"
          ],
          "correct": [
            "Fièvre",
            "Pertes vaginales malodorantes"
          ]
        },
        {
          "text": "Une femme rapporte de violents maux de tête et des œdèmes du visage. Quelle conduite est correcte ? (une réponse)",
          "options": [
            "Attendre six semaines",
            "Conclure à une simple faim",
            "Rechercher rapidement une complication, notamment hypertensive",
            "Rassurer sans mesure tensionnelle"
          ],
          "type": "qcm",
          "explanation": "Le cours liste ces manifestations parmi les signes d’alerte maternels.",
          "source": "Module PNSME, chap. 8, p. 77.",
          "answers": [
            "Rechercher rapidement une complication, notamment hypertensive"
          ],
          "correct": [
            "Rechercher rapidement une complication, notamment hypertensive"
          ]
        },
        {
          "text": "Une fatigue excessive avec pâleur apparaît après l’accouchement. Que faut-il faire ? (une réponse)",
          "options": [
            "Conclure automatiquement à une situation normale",
            "Évaluer l’état général et rechercher notamment une anémie ou un saignement",
            "Attendre un mois sans examen",
            "Supprimer les contrôles du pouls"
          ],
          "type": "qcm",
          "explanation": "La fatigue excessive est un signal d’alerte ; la cause nécessite une évaluation.",
          "source": "Module PNSME, chap. 8, p. 76-77.",
          "answers": [
            "Évaluer l’état général et rechercher notamment une anémie ou un saignement"
          ],
          "correct": [
            "Évaluer l’état général et rechercher notamment une anémie ou un saignement"
          ]
        },
        {
          "text": "Quels signes ombilicaux nécessitent une consultation ? (plusieurs réponses)",
          "options": [
            "Cordon propre sans rougeur",
            "Écoulement purulent",
            "Absence d’écoulement et bon état général",
            "Rougeur"
          ],
          "type": "qcm",
          "explanation": "Le cordon rouge ou purulent figure parmi les alertes du nouveau-né.",
          "source": "Module PNSME, chap. 8, p. 77.",
          "answers": [
            "Écoulement purulent",
            "Rougeur"
          ],
          "correct": [
            "Écoulement purulent",
            "Rougeur"
          ]
        },
        {
          "text": "Quels signes oculaires sont préoccupants chez le nouveau-né ? (plusieurs réponses)",
          "options": [
            "Aspect normal des deux yeux",
            "Ouverture normale sans écoulement",
            "Yeux gonflés",
            "Sécrétions purulentes"
          ],
          "type": "qcm",
          "explanation": "Le module signale les yeux gonflés, collants ou avec pus.",
          "source": "Module PNSME, chap. 8, p. 77.",
          "answers": [
            "Yeux gonflés",
            "Sécrétions purulentes"
          ],
          "correct": [
            "Yeux gonflés",
            "Sécrétions purulentes"
          ]
        },
        {
          "text": "Un bébé reste froid malgré le réchauffement. Que conseiller ? (une réponse)",
          "options": [
            "Le laisser dans un linge humide",
            "Une évaluation rapide",
            "Attendre systématiquement six semaines",
            "Un bain froid"
          ],
          "type": "qcm",
          "explanation": "La persistance du froid est explicitement citée comme signe d’alerte.",
          "source": "Module PNSME, chap. 8, p. 77.",
          "answers": [
            "Une évaluation rapide"
          ],
          "correct": [
            "Une évaluation rapide"
          ]
        },
        {
          "text": "Un bébé reste chaud malgré une adaptation des vêtements. Quelle attitude adopter ? (une réponse)",
          "options": [
            "Banaliser sans mesure ni examen",
            "Faire rechercher une anomalie thermique et sa cause",
            "Lui donner de l’alcool",
            "Retarder toute consultation de plusieurs jours"
          ],
          "type": "qcm",
          "explanation": "Une chaleur persistante nécessite une évaluation, comme le froid persistant.",
          "source": "Module PNSME, chap. 8, p. 77.",
          "answers": [
            "Faire rechercher une anomalie thermique et sa cause"
          ],
          "correct": [
            "Faire rechercher une anomalie thermique et sa cause"
          ]
        },
        {
          "text": "Quels signes imposent une évaluation urgente du nouveau-né ? (plusieurs réponses)",
          "options": [
            "Difficultés respiratoires",
            "Éveil adapté entre les périodes de sommeil",
            "Tétées efficaces sans autre plainte",
            "Convulsions"
          ],
          "type": "qcm",
          "explanation": "Les signes respiratoires et neurologiques sont des dangers cités.",
          "source": "Module PNSME, chap. 8, p. 77.",
          "answers": [
            "Difficultés respiratoires",
            "Convulsions"
          ],
          "correct": [
            "Difficultés respiratoires",
            "Convulsions"
          ]
        },
        {
          "text": "La mère va bien mais le bébé devient léthargique. Quelle décision est correcte ? (une réponse)",
          "options": [
            "Arrêter le suivi néonatal",
            "Évaluer rapidement le bébé",
            "Conclure que les deux vont bien",
            "Attendre la consultation maternelle"
          ],
          "type": "qcm",
          "explanation": "Les états de santé de la mère et de l’enfant doivent être appréciés séparément.",
          "source": "Module PNSME, chap. 8, p. 75, 77.",
          "answers": [
            "Évaluer rapidement le bébé"
          ],
          "correct": [
            "Évaluer rapidement le bébé"
          ]
        },
        {
          "text": "La famille ne connaît aucun signe d’alerte au moment du retour à domicile. Quel volet manque ? (une réponse)",
          "options": [
            "Éducation et conseils de reconnaissance des dangers",
            "Uniquement achat d’un nouveau sac",
            "Changement du prénom",
            "Suppression des rendez-vous"
          ],
          "type": "qcm",
          "explanation": "La famille doit savoir quels signes nécessitent une consultation rapide.",
          "source": "Module PNSME, chap. 8, p. 77.",
          "answers": [
            "Éducation et conseils de reconnaissance des dangers"
          ],
          "correct": [
            "Éducation et conseils de reconnaissance des dangers"
          ]
        },
        {
          "text": "Selon les recommandations OMS 2022 pour un couple mère-enfant en bonne santé, quels contacts s’ajoutent aux soins initiaux ? (plusieurs réponses)",
          "options": [
            "Entre 48 et 72 heures",
            "Uniquement si une complication survient",
            "Entre 7 et 14 jours et pendant la sixième semaine",
            "Uniquement au premier anniversaire"
          ],
          "type": "qcm",
          "explanation": "Le calendrier OMS complète les soins initiaux et doit être distingué de celui du module.",
          "source": "R8 (voir références officielles).",
          "answers": [
            "Entre 48 et 72 heures",
            "Entre 7 et 14 jours et pendant la sixième semaine"
          ],
          "correct": [
            "Entre 48 et 72 heures",
            "Entre 7 et 14 jours et pendant la sixième semaine"
          ]
        },
        {
          "text": "Quelle condition doit guider une décision de sortie ou de poursuite des soins ? (une réponse)",
          "options": [
            "L’heure seule, indépendamment de l’examen",
            "La disponibilité d’un taxi seulement",
            "L’évaluation de la mère et du bébé, avec l’organisation du suivi",
            "L’absence de plainte de l’accompagnant uniquement"
          ],
          "type": "qcm",
          "explanation": "Le cours conditionne le transfert à un bon état clinique ; les recommandations OMS précisent une sortie adaptée aux besoins.",
          "source": "Module PNSME, chap. 8, p. 75-77 ; R8 (voir références officielles).",
          "answers": [
            "L’évaluation de la mère et du bébé, avec l’organisation du suivi"
          ],
          "correct": [
            "L’évaluation de la mère et du bébé, avec l’organisation du suivi"
          ]
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
      const programmedSubjects = subjects.filter(subject => subject.programmed === true && window.selectedFiliere && (subject.filiere === window.selectedFiliere || subject.filiere === "COMMUN"));
      const availableSubjects = programmedSubjects.filter(subject => getSubjectStatus(subject).key === "available");

      const availableHtml = availableSubjects.length ? availableSubjects.map(availableSubject => `
        <div class="student-evaluation-card">
          <div class="student-evaluation-head">
            <span class="student-status-pill available">Disponible</span>
            <h4>${escapeHTML(availableSubject.title)}</h4>
          </div>
          <p class="student-evaluation-meta"><strong>Matière :</strong> ${escapeHTML(availableSubject.matter)}</p>
          <p class="student-evaluation-meta"><strong>Durée :</strong> ${availableSubject.duration} min</p>
          <p class="student-evaluation-meta"><strong>Questions :</strong> ${availableSubject.questions.length} dans le sujet — ${getQuizTypeLabel()} — ${quizSettings.displayMode === "all" ? "toutes sur une page" : "question par question"}</p>
          <p class="student-evaluation-meta"><strong>Fermeture :</strong> ${formatDateTime(availableSubject.closeDate, availableSubject.closeTime)}</p>
          <button class="student-start-btn" onclick="startQuickEvaluation('${availableSubject.id}')">Commencer</button>
        </div>
      `).join("") : `
        <div class="student-empty-state">Choisissez votre chapitre pour commencer votre entraînement.</div>
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
            <h3>Choisissez votre filière</h3>
            <div class="filiere-buttons"><button class="student-start-btn" aria-pressed="${window.selectedFiliere === 'IDE'}" onclick="selectFiliere('IDE')">IDE · Infirmier</button><button class="student-start-btn" aria-pressed="${window.selectedFiliere === 'SFM'}" onclick="selectFiliere('SFM')">SFM · Sage-femme / Maïeuticien</button></div>
            <h3>${window.selectedFiliere ? 'Sujets · ' + window.selectedFiliere : 'Sélectionnez IDE ou SFM pour afficher les sujets'}</h3>
            <p class="student-section-note">Choisissez votre chapitre pour commencer votre entraînement.</p>
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

function selectFiliere(value) { if (!["IDE", "SFM"].includes(value)) return; window.selectedFiliere = value; renderSubjects(); }
