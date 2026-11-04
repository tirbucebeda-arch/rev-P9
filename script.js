const ADMIN_PASSWORD = "admin123";
const CONFIG = {
  "defaultMarking": {
    "correct": 1,
    "wrong": -1,
    "empty": 0
  },
  "subjects": [
    {
      "id": "hepato-chapitre-01",
      "title": "Sujet 1 — Œsophagites et troubles de la déglutition",
      "matter": "Hépatogastroentérologie",
      "description": "30 questions corrigées",
      "instructions": "QCD : choisir Vrai ou Faux. QCM : choisir toutes les réponses exactes.",
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
      "filiere": "IDE",
      "questions": [
        {
          "originalNumber": 1,
          "type": "qcd",
          "text": "L’œsophagite est une inflammation de la muqueuse œsophagienne.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Elle touche la muqueuse de l’œsophage.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 4.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 2,
          "type": "qcd",
          "text": "Le reflux gastro œsophagien est une cause fréquente d’œsophagite.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Le cours le présente comme la cause la plus fréquente.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 4.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 3,
          "type": "qcd",
          "text": "Une défaillance du sphincter inférieur peut favoriser le reflux.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Elle facilite la remontée du contenu gastrique.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 4.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 4,
          "type": "qcd",
          "text": "Candida albicans peut provoquer une œsophagite infectieuse.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Cette cause est citée chez les immunodéprimés.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 4.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 5,
          "type": "qcd",
          "text": "Les œsophagites médicamenteuses sont impossibles.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "B Faux. Les tétracyclines et les biphosphonates sont notamment cités.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 4.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "originalNumber": 6,
          "type": "qcd",
          "text": "La soude peut entraîner une œsophagite caustique.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Il s’agit d’une substance corrosive.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 5.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 7,
          "type": "qcd",
          "text": "Le pyrosis désigne une brûlure rétrosternale.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. C’est un symptôme décrit dans l’œsophagite.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 5.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 8,
          "type": "qcd",
          "text": "L’odynophagie correspond à une douleur à la déglutition.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Elle se distingue d’une simple difficulté à avaler.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 5.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 9,
          "type": "qcd",
          "text": "La dysphagie concerne uniquement les aliments solides.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "B Faux. Elle peut concerner les solides ou les liquides.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 6.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "originalNumber": 10,
          "type": "qcd",
          "text": "La déglutition comporte des phases buccale, pharyngée et œsophagienne.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Ces trois phases sont décrites dans le cours.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 6.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 11,
          "type": "qcd",
          "text": "Un AVC peut provoquer une dysphagie oropharyngée.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Il figure parmi les causes neurologiques citées.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 6.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 12,
          "type": "qcd",
          "text": "L’achalasie est une cause possible de dysphagie œsophagienne.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Elle associe un trouble moteur et une relaxation insuffisante.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 6.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 13,
          "type": "qcd",
          "text": "Une dysphagie exclut une tumeur de l’œsophage.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "B Faux. Une tumeur fait partie des causes à rechercher.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 6.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "originalNumber": 14,
          "type": "qcd",
          "text": "Les fausses routes répétées peuvent compliquer une dysphagie.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Elles exposent notamment à l’inhalation.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 7.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 15,
          "type": "qcd",
          "text": "La manométrie étudie surtout l’acidité du reflux.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "B Faux. Elle étudie la motricité ; la pH métrie mesure l’acidité.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 5.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "originalNumber": 16,
          "type": "qcd",
          "text": "La sténose œsophagienne est une complication possible d’œsophagite.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Elle peut gêner le passage alimentaire.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 5.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 17,
          "type": "qcd",
          "text": "Fractionner les repas est une mesure citée contre le reflux.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Cette mesure appartient aux conseils hygiéno diététiques.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 5.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 18,
          "type": "qcd",
          "text": "Le suivi du poids est inutile devant une dysphagie.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "B Faux. Il aide à repérer le retentissement nutritionnel.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 7.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "originalNumber": 19,
          "type": "qcd",
          "text": "Une alimentation adaptée participe à la prévention des complications.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Les soins visent aussi à prévenir les fausses routes.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 7.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 20,
          "type": "qcd",
          "text": "Le rôle infirmier se limite à donner les médicaments.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "B Faux. Il comprend surveillance, alimentation et éducation.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 7.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "originalNumber": 21,
          "type": "qcm",
          "text": "Quel examen permet de visualiser des lésions et de réaliser des biopsies ?",
          "options": [
            "Manométrie",
            "Transit œsophagien",
            "Glycémie",
            "Endoscopie digestive haute"
          ],
          "explanation": "D Endoscopie digestive haute. L’endoscopie est l’examen de référence décrit.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 5.",
          "answers": [
            "Endoscopie digestive haute"
          ],
          "correct": [
            "Endoscopie digestive haute"
          ]
        },
        {
          "originalNumber": 22,
          "type": "qcm",
          "text": "Quel examen évalue le reflux acide ?",
          "options": [
            "Bilan hépatique",
            "NFS",
            "pH métrie œsophagienne",
            "Dosage de lipase"
          ],
          "explanation": "C pH métrie œsophagienne. La pH métrie mesure l’exposition acide.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 5.",
          "answers": [
            "pH métrie œsophagienne"
          ],
          "correct": [
            "pH métrie œsophagienne"
          ]
        },
        {
          "originalNumber": 23,
          "type": "qcm",
          "text": "Quelle classe médicamenteuse est citée dans le traitement de l’œsophagite de reflux ?",
          "options": [
            "IPP",
            "Diurétiques",
            "Anticoagulants",
            "Enzymes pancréatiques"
          ],
          "explanation": "A IPP. Les IPP réduisent la sécrétion acide gastrique.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 5.",
          "answers": [
            "IPP"
          ],
          "correct": [
            "IPP"
          ]
        },
        {
          "originalNumber": 24,
          "type": "qcm",
          "text": "Quelles causes infectieuses sont citées ?",
          "options": [
            "Candida",
            "Déficit en vitamine B12",
            "Herpès simplex",
            "Cytomégalovirus"
          ],
          "explanation": "A Candida ; C Herpès simplex ; D Cytomégalovirus. Les trois agents sont listés dans le chapitre.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 4.",
          "answers": [
            "Candida",
            "Herpès simplex",
            "Cytomégalovirus"
          ],
          "correct": [
            "Candida",
            "Herpès simplex",
            "Cytomégalovirus"
          ]
        },
        {
          "originalNumber": 25,
          "type": "qcm",
          "text": "Quelles complications nutritionnelles peut entraîner une dysphagie ?",
          "options": [
            "Déshydratation",
            "Dénutrition",
            "Pancréatite spécifique",
            "Obstruction biliaire isolée"
          ],
          "explanation": "A Déshydratation ; B Dénutrition. La réduction des apports expose à ces complications.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 7.",
          "answers": [
            "Déshydratation",
            "Dénutrition"
          ],
          "correct": [
            "Déshydratation",
            "Dénutrition"
          ]
        },
        {
          "originalNumber": 26,
          "type": "qcm",
          "text": "Quel symptôme pendant les repas évoque une difficulté de déglutition ?",
          "options": [
            "Toux lors des repas",
            "Ascite isolée",
            "Prurit isolé sans gêne alimentaire",
            "Stéatorrhée isolée"
          ],
          "explanation": "A Toux lors des repas. La toux pendant l’alimentation figure parmi les signes.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 6.",
          "answers": [
            "Toux lors des repas"
          ],
          "correct": [
            "Toux lors des repas"
          ]
        },
        {
          "originalNumber": 27,
          "type": "qcm",
          "text": "Quelles mesures sont citées dans l’éducation contre le reflux ?",
          "options": [
            "Repas unique très abondant avant le coucher",
            "Arrêt du tabac",
            "Surélévation de la tête du lit",
            "Éviction de l’alcool"
          ],
          "explanation": "B Arrêt du tabac ; C Surélévation de la tête du lit ; D Éviction de l’alcool. Ces mesures sont recommandées dans le cours.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 5 et 7.",
          "answers": [
            "Arrêt du tabac",
            "Surélévation de la tête du lit",
            "Éviction de l’alcool"
          ],
          "correct": [
            "Arrêt du tabac",
            "Surélévation de la tête du lit",
            "Éviction de l’alcool"
          ]
        },
        {
          "originalNumber": 28,
          "type": "qcm",
          "text": "Quel élément appartient à la surveillance infirmière d’une dysphagie ?",
          "options": [
            "Recherche isolée de cholestase sans autre suivi",
            "Poids",
            "Difficultés alimentaires",
            "Douleur"
          ],
          "explanation": "B Poids ; C Difficultés alimentaires ; D Douleur. La surveillance recherche le retentissement clinique et nutritionnel.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 7.",
          "answers": [
            "Poids",
            "Difficultés alimentaires",
            "Douleur"
          ],
          "correct": [
            "Poids",
            "Difficultés alimentaires",
            "Douleur"
          ]
        },
        {
          "originalNumber": 29,
          "type": "qcm",
          "text": "Quelle affection est une cause oropharyngée citée ?",
          "options": [
            "Calcul biliaire",
            "Ascite",
            "Gastrite isolée",
            "Maladie de Parkinson"
          ],
          "explanation": "D Maladie de Parkinson. La maladie de Parkinson peut altérer la déglutition.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 6.",
          "answers": [
            "Maladie de Parkinson"
          ],
          "correct": [
            "Maladie de Parkinson"
          ]
        },
        {
          "originalNumber": 30,
          "type": "qcm",
          "text": "Quel couple examen et fonction est correct ?",
          "options": [
            "NFS et pression œsophagienne",
            "Endoscopie et glycémie",
            "Manométrie et motricité",
            "pH métrie et analyse des selles"
          ],
          "explanation": "C Manométrie et motricité. La manométrie explore le fonctionnement moteur œsophagien.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 5.",
          "answers": [
            "Manométrie et motricité"
          ],
          "correct": [
            "Manométrie et motricité"
          ]
        }
      ]
    },
    {
      "id": "hepato-chapitre-02",
      "title": "Sujet 2 — Gastrites aiguës et chroniques",
      "matter": "Hépatogastroentérologie",
      "description": "30 questions corrigées",
      "instructions": "QCD : choisir Vrai ou Faux. QCM : choisir toutes les réponses exactes.",
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
      "filiere": "IDE",
      "questions": [
        {
          "originalNumber": 1,
          "type": "qcd",
          "text": "La gastrite est une inflammation de la muqueuse gastrique.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Elle concerne l’estomac.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 8.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 2,
          "type": "qcd",
          "text": "La gastrite aiguë a une installation brutale.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Le cours la décrit comme brutale et transitoire.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 9.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 3,
          "type": "qcd",
          "text": "La gastrite chronique évolue uniquement pendant quelques minutes.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "B Faux. Elle persiste sur plusieurs mois ou années.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 9.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "originalNumber": 4,
          "type": "qcd",
          "text": "Les AINS figurent parmi les facteurs de gastrite aiguë.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Ils sont cités avec l’aspirine parmi les causes médicamenteuses.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 9.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 5,
          "type": "qcd",
          "text": "L’alcool peut agresser la muqueuse gastrique.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. C’est une cause toxique citée.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 9.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 6,
          "type": "qcd",
          "text": "Des brûlures étendues peuvent favoriser une gastrite de stress.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Le stress sévère est décrit dans les étiologies.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 9.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 7,
          "type": "qcd",
          "text": "Helicobacter pylori est une cause fréquente de gastrite chronique.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Le cours le présente comme la cause principale.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 9.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 8,
          "type": "qcd",
          "text": "Une gastrite auto immune peut détruire les cellules pariétales.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Elle peut altérer les sécrétions gastriques.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 9.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 9,
          "type": "qcd",
          "text": "L’estomac produit le facteur intrinsèque.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Cette fonction est mentionnée dans le rappel physiologique.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 8.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 10,
          "type": "qcd",
          "text": "Une baisse du facteur intrinsèque peut favoriser une carence en vitamine B12.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. La carence peut provoquer une anémie.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 10.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 11,
          "type": "qcd",
          "text": "Toute gastrite chronique provoque une douleur intense permanente.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "B Faux. Elle peut être asymptomatique.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 10.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "originalNumber": 12,
          "type": "qcd",
          "text": "Une gastrite aiguë hémorragique peut se manifester par une hématémèse.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Le saignement peut apparaître dans les vomissements.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 9.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 13,
          "type": "qcd",
          "text": "La FOGD permet des biopsies gastriques.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Elle associe observation et prélèvements.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 10.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 14,
          "type": "qcd",
          "text": "Le test respiratoire à l’urée peut rechercher H. pylori.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Il figure parmi les examens cités.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 10.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 15,
          "type": "qcd",
          "text": "La recherche d’antigène dans les selles est sans intérêt pour H. pylori.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "B Faux. Elle est citée comme méthode diagnostique.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 10.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "originalNumber": 16,
          "type": "qcd",
          "text": "Le cancer gastrique est une complication possible de certaines gastrites chroniques.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Le cours cite l’adénocarcinome et le lymphome.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 11.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 17,
          "type": "qcd",
          "text": "L’oméprazole appartient aux IPP.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Il est donné comme exemple thérapeutique.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 11.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 18,
          "type": "qcd",
          "text": "L’automédication par AINS doit être encouragée devant des épigastralgies.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "B Faux. L’éducation recommande au contraire de l’éviter.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 11.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "originalNumber": 19,
          "type": "qcd",
          "text": "La surveillance infirmière comprend la recherche de saignement digestif.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Elle permet de repérer une complication.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 11 et 12.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 20,
          "type": "qcd",
          "text": "Le respect du traitement anti H. pylori fait partie de l’éducation.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. L’observance est explicitement recommandée.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 11.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 21,
          "type": "qcm",
          "text": "Quelle région douloureuse est typiquement citée dans la gastrite ?",
          "options": [
            "Oreille",
            "Épigastre",
            "Poignet",
            "Cheville"
          ],
          "explanation": "B Épigastre. Les épigastralgies sont décrites dans les deux formes.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 9 et 10.",
          "answers": [
            "Épigastre"
          ],
          "correct": [
            "Épigastre"
          ]
        },
        {
          "originalNumber": 22,
          "type": "qcm",
          "text": "Quel examen est la référence pour visualiser et biopsier la muqueuse gastrique ?",
          "options": [
            "FOGD",
            "Cholangio IRM",
            "Manométrie œsophagienne",
            "ECG"
          ],
          "explanation": "A FOGD. La FOGD permet l’examen de la muqueuse.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 10.",
          "answers": [
            "FOGD"
          ],
          "correct": [
            "FOGD"
          ]
        },
        {
          "originalNumber": 23,
          "type": "qcm",
          "text": "Quels examens recherchent H. pylori dans le cours ?",
          "options": [
            "Dosage de lipase",
            "Biopsies gastriques",
            "Test respiratoire à l’urée",
            "Antigène fécal"
          ],
          "explanation": "B Biopsies gastriques ; C Test respiratoire à l’urée ; D Antigène fécal. Ces trois méthodes sont citées.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 10.",
          "answers": [
            "Biopsies gastriques",
            "Test respiratoire à l’urée",
            "Antigène fécal"
          ],
          "correct": [
            "Biopsies gastriques",
            "Test respiratoire à l’urée",
            "Antigène fécal"
          ]
        },
        {
          "originalNumber": 24,
          "type": "qcm",
          "text": "Quelles manifestations sont décrites dans la gastrite aiguë ?",
          "options": [
            "Vomissements",
            "Nausées",
            "Douleur épigastrique",
            "Ictère progressif spécifique"
          ],
          "explanation": "A Vomissements ; B Nausées ; C Douleur épigastrique. Les manifestations sont principalement digestives.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 9.",
          "answers": [
            "Vomissements",
            "Nausées",
            "Douleur épigastrique"
          ],
          "correct": [
            "Vomissements",
            "Nausées",
            "Douleur épigastrique"
          ]
        },
        {
          "originalNumber": 25,
          "type": "qcm",
          "text": "Quel déficit est associé à l’anémie de la gastrite atrophique dans le cours ?",
          "options": [
            "Sodium uniquement",
            "Oxygène atmosphérique",
            "Vitamine K uniquement",
            "Vitamine B12"
          ],
          "explanation": "D Vitamine B12. La diminution du facteur intrinsèque favorise cette carence.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 10.",
          "answers": [
            "Vitamine B12"
          ],
          "correct": [
            "Vitamine B12"
          ]
        },
        {
          "originalNumber": 26,
          "type": "qcm",
          "text": "Quelles complications sont citées pour les gastrites chroniques ?",
          "options": [
            "Anémie mégaloblastique",
            "Lymphome gastrique",
            "Adénocarcinome gastrique",
            "Diabète obligatoire"
          ],
          "explanation": "A Anémie mégaloblastique ; B Lymphome gastrique ; C Adénocarcinome gastrique. Ces complications sont listées dans le chapitre.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 11.",
          "answers": [
            "Anémie mégaloblastique",
            "Lymphome gastrique",
            "Adénocarcinome gastrique"
          ],
          "correct": [
            "Anémie mégaloblastique",
            "Lymphome gastrique",
            "Adénocarcinome gastrique"
          ]
        },
        {
          "originalNumber": 27,
          "type": "qcm",
          "text": "Quels médicaments cités sont des IPP ?",
          "options": [
            "Furosémide",
            "Pantoprazole",
            "Ésoméprazole",
            "Oméprazole"
          ],
          "explanation": "B Pantoprazole ; C Ésoméprazole ; D Oméprazole. Ces trois médicaments sont des exemples du cours.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 11.",
          "answers": [
            "Pantoprazole",
            "Ésoméprazole",
            "Oméprazole"
          ],
          "correct": [
            "Pantoprazole",
            "Ésoméprazole",
            "Oméprazole"
          ]
        },
        {
          "originalNumber": 28,
          "type": "qcm",
          "text": "Quels paramètres relèvent de la surveillance infirmière ?",
          "options": [
            "Douleur",
            "État nutritionnel",
            "Pression canalaire pancréatique comme seul suivi",
            "Vomissements"
          ],
          "explanation": "A Douleur ; B État nutritionnel ; D Vomissements. Ils aident à suivre l’évolution et les complications.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 11.",
          "answers": [
            "Douleur",
            "État nutritionnel",
            "Vomissements"
          ],
          "correct": [
            "Douleur",
            "État nutritionnel",
            "Vomissements"
          ]
        },
        {
          "originalNumber": 29,
          "type": "qcm",
          "text": "Quelle conduite éducative est adaptée ?",
          "options": [
            "Négliger les signes hémorragiques",
            "Arrêter seul toute antibiothérapie",
            "Augmenter l’alcool",
            "Éviter l’automédication par AINS"
          ],
          "explanation": "D Éviter l’automédication par AINS. La prévention vise à supprimer les facteurs agressifs.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 11.",
          "answers": [
            "Éviter l’automédication par AINS"
          ],
          "correct": [
            "Éviter l’automédication par AINS"
          ]
        },
        {
          "originalNumber": 30,
          "type": "qcm",
          "text": "Quelle structure appartient à l’estomac ?",
          "options": [
            "Iléon terminal",
            "Canal cholédoque",
            "Antre pylorique",
            "Rectum"
          ],
          "explanation": "C Antre pylorique. L’antre fait partie des régions gastriques citées.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 8.",
          "answers": [
            "Antre pylorique"
          ],
          "correct": [
            "Antre pylorique"
          ]
        }
      ]
    },
    {
      "id": "hepato-chapitre-03",
      "title": "Sujet 3 — Maladies inflammatoires chroniques de l’intestin",
      "matter": "Hépatogastroentérologie",
      "description": "30 questions corrigées",
      "instructions": "QCD : choisir Vrai ou Faux. QCM : choisir toutes les réponses exactes.",
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
      "filiere": "IDE",
      "questions": [
        {
          "originalNumber": 1,
          "type": "qcd",
          "text": "Crohn et la RCH sont les deux principales MICI étudiées.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Le cours distingue ces deux formes.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 14.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 2,
          "type": "qcd",
          "text": "La maladie de Crohn peut toucher tout le tube digestif.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Son extension peut aller de la bouche à l’anus.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 14.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 3,
          "type": "qcd",
          "text": "Les lésions de Crohn sont toujours continues à partir du rectum.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "B Faux. Elles sont discontinues ; la continuité rectale caractérise la RCH.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 14.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "originalNumber": 4,
          "type": "qcd",
          "text": "L’inflammation de Crohn peut être transmurale.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Elle peut intéresser toutes les couches de la paroi.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 14.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 5,
          "type": "qcd",
          "text": "La RCH touche principalement le rectum et le côlon.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Son atteinte digestive est limitée à ces régions.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 14.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 6,
          "type": "qcd",
          "text": "La RCH est décrite comme une inflammation superficielle de la muqueuse.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Le cours l’oppose à l’atteinte transmurale de Crohn.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 14.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 7,
          "type": "qcd",
          "text": "La dysbiose désigne un déséquilibre du microbiote intestinal.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Elle est citée dans les mécanismes des MICI.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 14.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 8,
          "type": "qcd",
          "text": "L’origine des MICI est uniquement mécanique.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "B Faux. Elle associe facteurs génétiques, immunitaires et environnementaux.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 14.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "originalNumber": 9,
          "type": "qcd",
          "text": "Des rectorragies peuvent accompagner une MICI.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Les émissions glairo sanglantes sont également citées.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 14.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 10,
          "type": "qcd",
          "text": "Les MICI n’ont jamais de manifestations extra digestives.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "B Faux. Des atteintes articulaires, cutanées et oculaires sont décrites.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 15.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "originalNumber": 11,
          "type": "qcd",
          "text": "Une uvéite peut être associée à une MICI.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. C’est une manifestation oculaire citée.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 15.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 12,
          "type": "qcd",
          "text": "Une CRP élevée peut accompagner une MICI active.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. La CRP fait partie des marqueurs inflammatoires du cours.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 15.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 13,
          "type": "qcd",
          "text": "La coloscopie avec biopsies est un examen de référence des MICI.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Elle précise les lésions et leur extension.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 15.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 14,
          "type": "qcd",
          "text": "Une fistule est une complication possible de Crohn.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Le caractère transmural favorise cette complication.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 15.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 15,
          "type": "qcd",
          "text": "Les sténoses intestinales ne concernent jamais Crohn.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "B Faux. Elles peuvent entraîner une occlusion.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 16.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "originalNumber": 16,
          "type": "qcd",
          "text": "Le mégacôlon toxique est une complication de RCH citée.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Il fait partie des complications digestives graves.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 16.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 17,
          "type": "qcd",
          "text": "La dénutrition peut compliquer une MICI.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Les carences nécessitent une prise en charge nutritionnelle.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 16.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 18,
          "type": "qcd",
          "text": "Une chirurgie peut être envisagée après échec du traitement médical.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Elle est aussi indiquée dans certaines complications.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 16.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 19,
          "type": "qcd",
          "text": "Le nombre de selles est inutile à surveiller.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "B Faux. La fréquence des selles est un élément central de surveillance.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 16.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "originalNumber": 20,
          "type": "qcd",
          "text": "La présence de sang dans les selles doit être recherchée.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Elle participe au suivi clinique infirmier.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 16.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 21,
          "type": "qcm",
          "text": "Quelle localisation est fréquente dans Crohn ?",
          "options": [
            "Iléon terminal",
            "Estomac exclusivement",
            "Vésicule exclusivement",
            "Voies biliaires uniquement"
          ],
          "explanation": "A Iléon terminal. Le cours cite l’iléon, le côlon et la région ano périnéale.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 14.",
          "answers": [
            "Iléon terminal"
          ],
          "correct": [
            "Iléon terminal"
          ]
        },
        {
          "originalNumber": 22,
          "type": "qcm",
          "text": "Quelle description correspond à la RCH ?",
          "options": [
            "Lésions uniquement pancréatiques",
            "Atteinte obligatoire de la bouche",
            "Atteinte exclusivement gastrique",
            "Atteinte colique continue depuis le rectum"
          ],
          "explanation": "D Atteinte colique continue depuis le rectum. L’atteinte continue rectocolique est caractéristique dans le cours.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 14.",
          "answers": [
            "Atteinte colique continue depuis le rectum"
          ],
          "correct": [
            "Atteinte colique continue depuis le rectum"
          ]
        },
        {
          "originalNumber": 23,
          "type": "qcm",
          "text": "Quelles manifestations extra digestives sont citées ?",
          "options": [
            "Ictère obstructif obligatoire",
            "Uvéite",
            "Arthrite",
            "Érythème noueux"
          ],
          "explanation": "B Uvéite ; C Arthrite ; D Érythème noueux. Ces trois manifestations sont listées.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 15.",
          "answers": [
            "Uvéite",
            "Arthrite",
            "Érythème noueux"
          ],
          "correct": [
            "Uvéite",
            "Arthrite",
            "Érythème noueux"
          ]
        },
        {
          "originalNumber": 24,
          "type": "qcm",
          "text": "Quels examens biologiques figurent au bilan ?",
          "options": [
            "Manométrie",
            "Albuminémie",
            "CRP",
            "NFS"
          ],
          "explanation": "B Albuminémie ; C CRP ; D NFS. Le bilan recherche inflammation, anémie et retentissement nutritionnel.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 15.",
          "answers": [
            "Albuminémie",
            "CRP",
            "NFS"
          ],
          "correct": [
            "Albuminémie",
            "CRP",
            "NFS"
          ]
        },
        {
          "originalNumber": 25,
          "type": "qcm",
          "text": "Quelles complications sont liées à Crohn dans le cours ?",
          "options": [
            "Abcès",
            "Sténoses",
            "Insuffisance endocrine constante",
            "Fistules"
          ],
          "explanation": "A Abcès ; B Sténoses ; D Fistules. Ces complications traduisent l’atteinte pariétale.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 15 et 16.",
          "answers": [
            "Abcès",
            "Sténoses",
            "Fistules"
          ],
          "correct": [
            "Abcès",
            "Sténoses",
            "Fistules"
          ]
        },
        {
          "originalNumber": 26,
          "type": "qcm",
          "text": "Quelle molécule est un aminosalicylé cité ?",
          "options": [
            "Furosémide",
            "Mésalazine",
            "Lactulose",
            "Insuline"
          ],
          "explanation": "B Mésalazine. La mésalazine figure dans le traitement médical des MICI.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 16.",
          "answers": [
            "Mésalazine"
          ],
          "correct": [
            "Mésalazine"
          ]
        },
        {
          "originalNumber": 27,
          "type": "qcm",
          "text": "Quelles classes sont mentionnées parmi les traitements des MICI ?",
          "options": [
            "Anticoagulants systématiques",
            "Biothérapies",
            "Corticoïdes",
            "Immunosuppresseurs"
          ],
          "explanation": "B Biothérapies ; C Corticoïdes ; D Immunosuppresseurs. Le traitement dépend de la forme et de l’activité.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 16.",
          "answers": [
            "Biothérapies",
            "Corticoïdes",
            "Immunosuppresseurs"
          ],
          "correct": [
            "Biothérapies",
            "Corticoïdes",
            "Immunosuppresseurs"
          ]
        },
        {
          "originalNumber": 28,
          "type": "qcm",
          "text": "Quel élément est une complication générale décrite ?",
          "options": [
            "Retard de croissance",
            "Guérison spontanée constante",
            "Amélioration obligatoire des apports",
            "Absence de carence"
          ],
          "explanation": "A Retard de croissance. Le retard de croissance figure dans les complications générales.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 16.",
          "answers": [
            "Retard de croissance"
          ],
          "correct": [
            "Retard de croissance"
          ]
        },
        {
          "originalNumber": 29,
          "type": "qcm",
          "text": "Que faut il surveiller chez un patient atteint de MICI ?",
          "options": [
            "Douleur",
            "État nutritionnel",
            "Uniquement le dosage de lipase",
            "Selles"
          ],
          "explanation": "A Douleur ; B État nutritionnel ; D Selles. La surveillance associe activité digestive et retentissement général.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 16.",
          "answers": [
            "Douleur",
            "État nutritionnel",
            "Selles"
          ],
          "correct": [
            "Douleur",
            "État nutritionnel",
            "Selles"
          ]
        },
        {
          "originalNumber": 30,
          "type": "qcm",
          "text": "Quelle association est correcte ?",
          "options": [
            "Crohn et lésions en saut",
            "RCH et atteinte exclusivement œsophagienne",
            "Crohn et absence de fistules",
            "RCH et absence de rectorragies"
          ],
          "explanation": "A Crohn et lésions en saut. Les lésions discontinues sont décrites dans Crohn.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 14.",
          "answers": [
            "Crohn et lésions en saut"
          ],
          "correct": [
            "Crohn et lésions en saut"
          ]
        }
      ]
    },
    {
      "id": "hepato-chapitre-04",
      "title": "Sujet 4 — Insuffisance hépatique",
      "matter": "Hépatogastroentérologie",
      "description": "30 questions corrigées",
      "instructions": "QCD : choisir Vrai ou Faux. QCM : choisir toutes les réponses exactes.",
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
      "filiere": "IDE",
      "questions": [
        {
          "originalNumber": 1,
          "type": "qcd",
          "text": "L’insuffisance hépatique altère les fonctions métaboliques, de synthèse et de détoxication.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Elle correspond à une défaillance fonctionnelle du foie.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 18.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 2,
          "type": "qcd",
          "text": "Le foie synthétise l’albumine.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. La synthèse protéique fait partie de ses fonctions.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 18.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 3,
          "type": "qcd",
          "text": "Le foie ne participe pas à la coagulation.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "B Faux. Il synthétise plusieurs facteurs de coagulation.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 18.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "originalNumber": 4,
          "type": "qcd",
          "text": "Un surdosage en paracétamol peut causer une insuffisance hépatique aiguë.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Cette étiologie médicamenteuse est citée.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 19.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 5,
          "type": "qcd",
          "text": "La cirrhose est une cause majeure d’insuffisance hépatique chronique.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Le cours la présente comme la cause chronique principale.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 19.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 6,
          "type": "qcd",
          "text": "Les hépatites B et C ne peuvent jamais provoquer de maladie hépatique chronique.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "B Faux. Elles figurent parmi les causes chroniques.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 19.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "originalNumber": 7,
          "type": "qcd",
          "text": "L’hypoalbuminémie peut favoriser les œdèmes et l’ascite.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. La baisse de synthèse protéique participe à ces manifestations.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 19 et 20.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 8,
          "type": "qcd",
          "text": "L’accumulation d’ammoniac participe à l’encéphalopathie hépatique.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. La détoxication hépatique est altérée.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 20 et 21.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 9,
          "type": "qcd",
          "text": "L’astérixis est un signe neurologique cité dans l’insuffisance hépatique.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Le cours le nomme également flapping tremor.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 20.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 10,
          "type": "qcd",
          "text": "L’encéphalopathie hépatique se manifeste toujours par une conscience parfaitement normale.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "B Faux. Confusion, somnolence et coma sont possibles.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 20.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "originalNumber": 11,
          "type": "qcd",
          "text": "L’ictère peut être une manifestation d’insuffisance hépatique.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Il figure parmi les signes cutanés.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 20.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 12,
          "type": "qcd",
          "text": "ASAT et ALAT sont des marqueurs de cytolyse cités.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Ils reflètent une atteinte cellulaire hépatique.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 20.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 13,
          "type": "qcd",
          "text": "Un TP diminué et un INR augmenté peuvent accompagner la défaillance hépatique.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Ils traduisent notamment l’atteinte de synthèse des facteurs.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 21.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 14,
          "type": "qcd",
          "text": "Le syndrome hépatorénal est une complication rénale grave.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Il associe une atteinte fonctionnelle rénale à la maladie hépatique.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 21.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 15,
          "type": "qcd",
          "text": "Le lactulose est cité dans le traitement de l’encéphalopathie hépatique.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Il fait partie des traitements symptomatiques présentés.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 21.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 16,
          "type": "qcd",
          "text": "Les diurétiques servent à traiter directement une fracture chez l’insuffisant hépatique.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "B Faux. Ils sont cités pour l’ascite.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 21.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "originalNumber": 17,
          "type": "qcd",
          "text": "Une transplantation peut être envisagée dans certaines formes sévères.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Le cours la mentionne dans les formes graves et irréversibles.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 22.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 18,
          "type": "qcd",
          "text": "La surveillance de la conscience fait partie du rôle infirmier.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Elle aide à dépister une encéphalopathie.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 22.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 19,
          "type": "qcd",
          "text": "Le périmètre abdominal peut être utile à la surveillance.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Il permet de suivre la distension liée à l’ascite.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 22.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 20,
          "type": "qcd",
          "text": "L’arrêt de l’alcool et le suivi médical font partie de l’éducation.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Ils sont explicitement recommandés dans le chapitre.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 22.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 21,
          "type": "qcm",
          "text": "Quelles substances relèvent de la détoxication hépatique ?",
          "options": [
            "Ammoniac",
            "Sécrétion de facteur intrinsèque",
            "Médicaments",
            "Alcool"
          ],
          "explanation": "A Ammoniac ; C Médicaments ; D Alcool. Le cours cite ces trois substances.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 19.",
          "answers": [
            "Ammoniac",
            "Médicaments",
            "Alcool"
          ],
          "correct": [
            "Ammoniac",
            "Médicaments",
            "Alcool"
          ]
        },
        {
          "originalNumber": 22,
          "type": "qcm",
          "text": "Quelles maladies génétiques sont citées parmi les causes chroniques ?",
          "options": [
            "Ulcère duodénal isolé",
            "Hémochromatose",
            "Gastrite superficielle isolée",
            "Maladie de Wilson"
          ],
          "explanation": "B Hémochromatose ; D Maladie de Wilson. Ces deux maladies peuvent atteindre le foie.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 19.",
          "answers": [
            "Hémochromatose",
            "Maladie de Wilson"
          ],
          "correct": [
            "Hémochromatose",
            "Maladie de Wilson"
          ]
        },
        {
          "originalNumber": 23,
          "type": "qcm",
          "text": "Quels signes évoquent une encéphalopathie ?",
          "options": [
            "Somnolence",
            "Confusion",
            "Astérixis",
            "Amélioration obligatoire de la vigilance"
          ],
          "explanation": "A Somnolence ; B Confusion ; C Astérixis. Ces manifestations neurologiques nécessitent une surveillance rapprochée.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 20.",
          "answers": [
            "Somnolence",
            "Confusion",
            "Astérixis"
          ],
          "correct": [
            "Somnolence",
            "Confusion",
            "Astérixis"
          ]
        },
        {
          "originalNumber": 24,
          "type": "qcm",
          "text": "Quels examens sont classés parmi les marqueurs de cholestase ?",
          "options": [
            "Cholangio IRM",
            "Phosphatases alcalines",
            "Gamma GT",
            "Épreuve d’effort"
          ],
          "explanation": "B Phosphatases alcalines ; C Gamma GT. Ces enzymes sont citées dans le bilan hépatique.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 20.",
          "answers": [
            "Phosphatases alcalines",
            "Gamma GT"
          ],
          "correct": [
            "Phosphatases alcalines",
            "Gamma GT"
          ]
        },
        {
          "originalNumber": 25,
          "type": "qcm",
          "text": "Quel profil biologique est décrit dans l’insuffisance hépatique ?",
          "options": [
            "Albumine toujours élevée et INR nul",
            "Aucun bilan perturbé possible",
            "Glycémie toujours normale",
            "Albumine basse et TP diminué"
          ],
          "explanation": "D Albumine basse et TP diminué. La baisse de synthèse affecte l’albumine et la coagulation.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 21.",
          "answers": [
            "Albumine basse et TP diminué"
          ],
          "correct": [
            "Albumine basse et TP diminué"
          ]
        },
        {
          "originalNumber": 26,
          "type": "qcm",
          "text": "Quelles complications sont citées ?",
          "options": [
            "Achalasie obligatoire",
            "Encéphalopathie",
            "Syndrome hépatorénal",
            "Ascite"
          ],
          "explanation": "B Encéphalopathie ; C Syndrome hépatorénal ; D Ascite. Elles traduisent une maladie potentiellement grave.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 21.",
          "answers": [
            "Encéphalopathie",
            "Syndrome hépatorénal",
            "Ascite"
          ],
          "correct": [
            "Encéphalopathie",
            "Syndrome hépatorénal",
            "Ascite"
          ]
        },
        {
          "originalNumber": 27,
          "type": "qcm",
          "text": "Quel traitement est cité contre l’ascite ?",
          "options": [
            "Antalgique comme seul traitement causal",
            "Augmentation systématique du sel",
            "Aucun suivi du poids",
            "Restriction sodée prescrite et diurétiques"
          ],
          "explanation": "D Restriction sodée prescrite et diurétiques. La prise en charge vise notamment la rétention hydrosodée.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 21.",
          "answers": [
            "Restriction sodée prescrite et diurétiques"
          ],
          "correct": [
            "Restriction sodée prescrite et diurétiques"
          ]
        },
        {
          "originalNumber": 28,
          "type": "qcm",
          "text": "Quels éléments surveiller au lit du patient ?",
          "options": [
            "Conscience",
            "Uniquement le dosage d’amylase",
            "Poids",
            "Diurèse"
          ],
          "explanation": "A Conscience ; C Poids ; D Diurèse. Ils font partie de la surveillance clinique infirmière.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 22.",
          "answers": [
            "Conscience",
            "Poids",
            "Diurèse"
          ],
          "correct": [
            "Conscience",
            "Poids",
            "Diurèse"
          ]
        },
        {
          "originalNumber": 29,
          "type": "qcm",
          "text": "Quel signe cutané est mentionné ?",
          "options": [
            "Angiome stellaire",
            "Stéatorrhée isolée",
            "Rectorragie obligatoire",
            "Pyrosis constant"
          ],
          "explanation": "A Angiome stellaire. Le cours cite aussi l’ictère et l’érythrose palmaire.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 20.",
          "answers": [
            "Angiome stellaire"
          ],
          "correct": [
            "Angiome stellaire"
          ]
        },
        {
          "originalNumber": 30,
          "type": "qcm",
          "text": "Quel objectif éducatif est adapté ?",
          "options": [
            "Reprendre l’alcool",
            "Supprimer le suivi médical",
            "Multiplier l’automédication",
            "Respecter le régime prescrit"
          ],
          "explanation": "D Respecter le régime prescrit. L’éducation vise l’observance et la réduction des agressions hépatiques.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 22.",
          "answers": [
            "Respecter le régime prescrit"
          ],
          "correct": [
            "Respecter le régime prescrit"
          ]
        }
      ]
    },
    {
      "id": "hepato-chapitre-05",
      "title": "Sujet 5 — Cholécystite aiguë et chronique",
      "matter": "Hépatogastroentérologie",
      "description": "30 questions corrigées",
      "instructions": "QCD : choisir Vrai ou Faux. QCM : choisir toutes les réponses exactes.",
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
      "filiere": "IDE",
      "questions": [
        {
          "originalNumber": 1,
          "type": "qcd",
          "text": "La cholécystite est une inflammation de la vésicule biliaire.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Elle concerne la vésicule et non uniquement le cholédoque.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 23.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 2,
          "type": "qcd",
          "text": "Le canal cystique relie la vésicule aux voies biliaires.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Ce rapport anatomique est décrit dans le cours.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 23.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 3,
          "type": "qcd",
          "text": "La bile est produite principalement par la vésicule biliaire.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "B Faux. Elle est produite par le foie ; la vésicule la stocke.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 23.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "originalNumber": 4,
          "type": "qcd",
          "text": "La vésicule concentre la bile.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Il s’agit d’une fonction physiologique citée.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 23.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 5,
          "type": "qcd",
          "text": "L’obstruction du canal cystique par un calcul peut provoquer une cholécystite.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. C’est le mécanisme le plus fréquent décrit.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 24.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 6,
          "type": "qcd",
          "text": "Toute cholécystite nécessite obligatoirement la présence d’un calcul.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "B Faux. Il existe des formes alithiasiques.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 24.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "originalNumber": 7,
          "type": "qcd",
          "text": "Une cholécystite alithiasique peut survenir en réanimation.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Les patients graves sont un terrain cité.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 24.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 8,
          "type": "qcd",
          "text": "La stase biliaire favorise la distension vésiculaire.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. L’obstacle empêche l’écoulement normal de la bile.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 24.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 9,
          "type": "qcd",
          "text": "La douleur de l’hypochondre droit est un signe majeur.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Elle peut s’associer aux nausées et vomissements.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 24.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 10,
          "type": "qcd",
          "text": "La fièvre et les frissons sont incompatibles avec une cholécystite.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "B Faux. Ils font partie des signes généraux décrits.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 25.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "originalNumber": 11,
          "type": "qcd",
          "text": "Le signe de Murphy associe douleur et arrêt inspiratoire à la palpation.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Il est recherché dans l’hypochondre droit.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 25.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 12,
          "type": "qcd",
          "text": "L’échographie abdominale est l’imagerie de première intention citée.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Elle recherche calculs et anomalies vésiculaires.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 25.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 13,
          "type": "qcd",
          "text": "L’hyperleucocytose peut accompagner une cholécystite.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. La CRP peut également être élevée.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 25.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 14,
          "type": "qcd",
          "text": "Un épaississement de la paroi vésiculaire peut être visible à l’échographie.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. C’est un des éléments recherchés.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 25.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 15,
          "type": "qcd",
          "text": "Une perforation vésiculaire peut entraîner une péritonite biliaire.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Ces complications sont listées dans le cours.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 25.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 16,
          "type": "qcd",
          "text": "La gangrène vésiculaire est toujours une évolution bénigne.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "B Faux. Elle fait partie des complications graves.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 25.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "originalNumber": 17,
          "type": "qcd",
          "text": "La cholécystectomie consiste à retirer la vésicule.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Elle constitue le traitement chirurgical de référence présenté.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 26.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 18,
          "type": "qcd",
          "text": "Une cholécystectomie peut être réalisée par laparoscopie.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. La chirurgie conventionnelle est également mentionnée.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 26.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 19,
          "type": "qcd",
          "text": "La préparation préopératoire relève du rôle infirmier.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Elle accompagne la surveillance et l’administration des traitements.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 26.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 20,
          "type": "qcd",
          "text": "L’éducation nutritionnelle est absente de la prise en charge.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "B Faux. Le cours conseille notamment un régime pauvre en graisses.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 26.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "originalNumber": 21,
          "type": "qcm",
          "text": "Quelle structure est obstruée dans le mécanisme lithiasique typique ?",
          "options": [
            "Canal pancréatique",
            "Canal cystique",
            "Canal hépatique",
            "Œsophage"
          ],
          "explanation": "B Canal cystique. Le calcul enclavé empêche la vidange vésiculaire.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 24.",
          "answers": [
            "Canal cystique"
          ],
          "correct": [
            "Canal cystique"
          ]
        },
        {
          "originalNumber": 22,
          "type": "qcm",
          "text": "Quels terrains sont associés à la forme alithiasique ?",
          "options": [
            "Patients avec simple reflux non compliqué",
            "Polytraumatisés",
            "Patients en réanimation",
            "Brûlés graves"
          ],
          "explanation": "B Polytraumatisés ; C Patients en réanimation ; D Brûlés graves. Ces trois terrains sont cités.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 24.",
          "answers": [
            "Polytraumatisés",
            "Patients en réanimation",
            "Brûlés graves"
          ],
          "correct": [
            "Polytraumatisés",
            "Patients en réanimation",
            "Brûlés graves"
          ]
        },
        {
          "originalNumber": 23,
          "type": "qcm",
          "text": "Quels signes sont décrits ?",
          "options": [
            "Diarrhée glairo sanglante obligatoire",
            "Nausées",
            "Douleur de l’hypochondre droit",
            "Vomissements"
          ],
          "explanation": "B Nausées ; C Douleur de l’hypochondre droit ; D Vomissements. Ils appartiennent au tableau digestif.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 24.",
          "answers": [
            "Nausées",
            "Douleur de l’hypochondre droit",
            "Vomissements"
          ],
          "correct": [
            "Nausées",
            "Douleur de l’hypochondre droit",
            "Vomissements"
          ]
        },
        {
          "originalNumber": 24,
          "type": "qcm",
          "text": "Quel signe correspond à la palpation douloureuse sous costale droite avec arrêt inspiratoire ?",
          "options": [
            "Babinski",
            "Murphy",
            "Lasègue",
            "Romberg"
          ],
          "explanation": "B Murphy. C’est la définition du signe de Murphy dans le chapitre.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 25.",
          "answers": [
            "Murphy"
          ],
          "correct": [
            "Murphy"
          ]
        },
        {
          "originalNumber": 25,
          "type": "qcm",
          "text": "Quels éléments l’échographie peut elle montrer ?",
          "options": [
            "Ulcération de la muqueuse gastrique",
            "Distension vésiculaire",
            "Calculs",
            "Paroi vésiculaire épaissie"
          ],
          "explanation": "B Distension vésiculaire ; C Calculs ; D Paroi vésiculaire épaissie. Elle explore directement la vésicule.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 25.",
          "answers": [
            "Distension vésiculaire",
            "Calculs",
            "Paroi vésiculaire épaissie"
          ],
          "correct": [
            "Distension vésiculaire",
            "Calculs",
            "Paroi vésiculaire épaissie"
          ]
        },
        {
          "originalNumber": 26,
          "type": "qcm",
          "text": "Quelles complications sont citées ?",
          "options": [
            "Empyème",
            "Perforation vésiculaire",
            "RCH obligatoire",
            "Gangrène"
          ],
          "explanation": "A Empyème ; B Perforation vésiculaire ; D Gangrène. Ces complications peuvent aggraver rapidement l’état clinique.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 25.",
          "answers": [
            "Empyème",
            "Perforation vésiculaire",
            "Gangrène"
          ],
          "correct": [
            "Empyème",
            "Perforation vésiculaire",
            "Gangrène"
          ]
        },
        {
          "originalNumber": 27,
          "type": "qcm",
          "text": "Quel traitement est curatif dans le cours ?",
          "options": [
            "Coloscopie seule",
            "Appendicectomie systématique",
            "Cholécystectomie",
            "Insuline seule"
          ],
          "explanation": "C Cholécystectomie. L’ablation de la vésicule traite la cholécystite selon le contexte.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 26.",
          "answers": [
            "Cholécystectomie"
          ],
          "correct": [
            "Cholécystectomie"
          ]
        },
        {
          "originalNumber": 28,
          "type": "qcm",
          "text": "Quels paramètres font partie de la surveillance ?",
          "options": [
            "Douleur",
            "Uniquement la glycémie sans suivi clinique",
            "Température",
            "Pression artérielle"
          ],
          "explanation": "A Douleur ; C Température ; D Pression artérielle. Le pouls est également surveillé.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 26.",
          "answers": [
            "Douleur",
            "Température",
            "Pression artérielle"
          ],
          "correct": [
            "Douleur",
            "Température",
            "Pression artérielle"
          ]
        },
        {
          "originalNumber": 29,
          "type": "qcm",
          "text": "Quelle mesure relève des soins infirmiers ?",
          "options": [
            "Arrêter le suivi postopératoire",
            "Ignorer la fièvre",
            "Retirer un calcul sans prescription au lit",
            "Surveiller la perfusion"
          ],
          "explanation": "D Surveiller la perfusion. La surveillance des perfusions est explicitement citée.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 26.",
          "answers": [
            "Surveiller la perfusion"
          ],
          "correct": [
            "Surveiller la perfusion"
          ]
        },
        {
          "originalNumber": 30,
          "type": "qcm",
          "text": "Quel conseil alimentaire est donné dans le chapitre ?",
          "options": [
            "Absence de suivi nutritionnel",
            "Alcool à chaque repas",
            "Excès systématique de graisses",
            "Régime pauvre en graisses"
          ],
          "explanation": "D Régime pauvre en graisses. Ce conseil accompagne le suivi médical.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 26.",
          "answers": [
            "Régime pauvre en graisses"
          ],
          "correct": [
            "Régime pauvre en graisses"
          ]
        }
      ]
    },
    {
      "id": "hepato-chapitre-06",
      "title": "Sujet 6 — Angiocholite",
      "matter": "Hépatogastroentérologie",
      "description": "30 questions corrigées",
      "instructions": "QCD : choisir Vrai ou Faux. QCM : choisir toutes les réponses exactes.",
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
      "filiere": "IDE",
      "questions": [
        {
          "originalNumber": 1,
          "type": "qcd",
          "text": "L’angiocholite est une infection bactérienne aiguë des voies biliaires.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Elle survient généralement en présence d’un obstacle biliaire.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 27.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 2,
          "type": "qcd",
          "text": "L’angiocholite est une urgence médico chirurgicale.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Son risque septique impose une prise en charge rapide.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 27.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 3,
          "type": "qcd",
          "text": "Un calcul cholédocien peut provoquer une angiocholite.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. C’est une cause lithiasique fréquente.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 27.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 4,
          "type": "qcd",
          "text": "Une tumeur peut être responsable d’un obstacle favorisant l’angiocholite.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Le cours cite plusieurs causes tumorales.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 27.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 5,
          "type": "qcd",
          "text": "L’ascaridiose biliaire n’est jamais une cause possible.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "B Faux. Elle figure parmi les causes parasitaires.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 27.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "originalNumber": 6,
          "type": "qcd",
          "text": "La stase biliaire favorise la prolifération bactérienne.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Elle participe au mécanisme infectieux.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 28.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 7,
          "type": "qcd",
          "text": "L’infection peut se propager dans le sang.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Elle peut conduire à une septicémie.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 28.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 8,
          "type": "qcd",
          "text": "Escherichia coli est un germe cité dans l’angiocholite.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Il figure dans la liste des bactéries responsables.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 28.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 9,
          "type": "qcd",
          "text": "La triade de Charcot associe douleur, fièvre et ictère.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. La douleur siège typiquement à l’hypochondre droit.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 28.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 10,
          "type": "qcd",
          "text": "La triade de Charcot associe toux, hémoptysie et douleur du mollet.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "B Faux. Ce n’est pas la triade biliaire du cours.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 28.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "originalNumber": 11,
          "type": "qcd",
          "text": "Les troubles de conscience peuvent signaler une forme grave.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Ils participent à la pentade de Reynolds.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 28.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 12,
          "type": "qcd",
          "text": "La pentade de Reynolds ajoute choc et troubles de conscience à la triade.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Elle décrit une forme sévère d’angiocholite.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 28.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 13,
          "type": "qcd",
          "text": "Une hyperbilirubinémie peut accompagner l’angiocholite.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Les marqueurs de cholestase peuvent aussi augmenter.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 28.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 14,
          "type": "qcd",
          "text": "L’échographie peut montrer une dilatation des voies biliaires.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Elle recherche également un calcul.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 29.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 15,
          "type": "qcd",
          "text": "Le choc septique est une complication majeure.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Il peut engager le pronostic vital.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 29 et 30.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 16,
          "type": "qcd",
          "text": "Une insuffisance rénale peut compliquer l’angiocholite.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Elle fait partie des complications du chapitre.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 29.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 17,
          "type": "qcd",
          "text": "Le traitement repose toujours sur les antalgiques seuls.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "B Faux. Il associe notamment antibiothérapie et drainage biliaire.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 29 et 30.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "originalNumber": 18,
          "type": "qcd",
          "text": "La CPRE peut permettre l’extraction de calculs.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Elle peut également drainer les voies biliaires.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 29.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 19,
          "type": "qcd",
          "text": "La diurèse doit être surveillée dans les formes graves.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Elle aide à suivre le retentissement circulatoire et rénal.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 30.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 20,
          "type": "qcd",
          "text": "La surveillance neurologique est sans intérêt devant un sepsis biliaire.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "B Faux. Une altération de conscience est un signe de gravité.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 28 et 30.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "originalNumber": 21,
          "type": "qcm",
          "text": "Quels éléments composent la triade de Charcot ?",
          "options": [
            "Fièvre avec frissons",
            "Dysphagie obligatoire",
            "Ictère",
            "Douleur de l’hypochondre droit"
          ],
          "explanation": "A Fièvre avec frissons ; C Ictère ; D Douleur de l’hypochondre droit. Douleur, fièvre et ictère forment la triade classique.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 28.",
          "answers": [
            "Fièvre avec frissons",
            "Ictère",
            "Douleur de l’hypochondre droit"
          ],
          "correct": [
            "Fièvre avec frissons",
            "Ictère",
            "Douleur de l’hypochondre droit"
          ]
        },
        {
          "originalNumber": 22,
          "type": "qcm",
          "text": "Quels signes ajoutés à la triade évoquent Reynolds ?",
          "options": [
            "Choc septique",
            "Gastrite superficielle isolée",
            "Prurit isolé ancien",
            "Troubles de conscience"
          ],
          "explanation": "A Choc septique ; D Troubles de conscience. Ces deux éléments marquent la gravité.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 28.",
          "answers": [
            "Choc septique",
            "Troubles de conscience"
          ],
          "correct": [
            "Choc septique",
            "Troubles de conscience"
          ]
        },
        {
          "originalNumber": 23,
          "type": "qcm",
          "text": "Quels germes sont cités ?",
          "options": [
            "Klebsiella",
            "E. coli",
            "Enterococcus",
            "Virus rougeoleux comme germe principal"
          ],
          "explanation": "A Klebsiella ; B E. coli ; C Enterococcus. Le cours mentionne aussi Enterobacter.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 28.",
          "answers": [
            "Klebsiella",
            "E. coli"
          ],
          "correct": [
            "Klebsiella",
            "E. coli"
          ]
        },
        {
          "originalNumber": 24,
          "type": "qcm",
          "text": "Quel examen peut drainer les voies biliaires et extraire un calcul ?",
          "options": [
            "CPRE",
            "Rectoscopie",
            "ECG",
            "Cholangio IRM"
          ],
          "explanation": "A CPRE. La CPRE possède ici un rôle thérapeutique.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 29.",
          "answers": [
            "CPRE"
          ],
          "correct": [
            "CPRE"
          ]
        },
        {
          "originalNumber": 25,
          "type": "qcm",
          "text": "Quelles complications faut il craindre ?",
          "options": [
            "Guérison spontanée obligatoire",
            "Choc septique",
            "Insuffisance rénale",
            "Abcès hépatique"
          ],
          "explanation": "B Choc septique ; C Insuffisance rénale ; D Abcès hépatique. Elles figurent dans les complications graves.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 29.",
          "answers": [
            "Choc septique",
            "Insuffisance rénale",
            "Abcès hépatique"
          ],
          "correct": [
            "Choc septique",
            "Insuffisance rénale",
            "Abcès hépatique"
          ]
        },
        {
          "originalNumber": 26,
          "type": "qcm",
          "text": "Quel ensemble correspond aux grandes lignes du traitement ?",
          "options": [
            "Antibiothérapie et drainage biliaire",
            "Régime seul",
            "Repos sans évaluation",
            "Antiacide seul"
          ],
          "explanation": "A Antibiothérapie et drainage biliaire. Le contrôle de l’infection s’associe à la levée de l’obstacle.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 29 et 30.",
          "answers": [
            "Antibiothérapie et drainage biliaire"
          ],
          "correct": [
            "Antibiothérapie et drainage biliaire"
          ]
        },
        {
          "originalNumber": 27,
          "type": "qcm",
          "text": "Quels examens d’imagerie sont cités ?",
          "options": [
            "Échographie",
            "Scanner",
            "Transit œsophagien",
            "Cholangio IRM"
          ],
          "explanation": "A Échographie ; B Scanner ; D Cholangio IRM. Ils explorent les voies biliaires et leur obstacle.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 29.",
          "answers": [
            "Échographie",
            "Scanner",
            "Cholangio IRM"
          ],
          "correct": [
            "Échographie",
            "Scanner",
            "Cholangio IRM"
          ]
        },
        {
          "originalNumber": 28,
          "type": "qcm",
          "text": "Quels paramètres relèvent de la surveillance rapprochée ?",
          "options": [
            "Température",
            "PA et pouls",
            "Uniquement le périmètre crânien",
            "SpO2"
          ],
          "explanation": "A Température ; B PA et pouls ; D SpO2. Ces paramètres aident à dépister une dégradation.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 30.",
          "answers": [
            "Température",
            "PA et pouls",
            "SpO2"
          ],
          "correct": [
            "Température",
            "PA et pouls",
            "SpO2"
          ]
        },
        {
          "originalNumber": 29,
          "type": "qcm",
          "text": "Quelle cause tumorale figure dans le chapitre ?",
          "options": [
            "Tumeur cutanée bénigne isolée",
            "Gliome sans atteinte biliaire",
            "Cancer du pancréas",
            "Adénome de la thyroïde isolé"
          ],
          "explanation": "C Cancer du pancréas. Il peut créer un obstacle à l’écoulement de la bile.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 27.",
          "answers": [
            "Cancer du pancréas"
          ],
          "correct": [
            "Cancer du pancréas"
          ]
        },
        {
          "originalNumber": 30,
          "type": "qcm",
          "text": "Quel signe doit faire rechercher une dégradation rénale ou circulatoire ?",
          "options": [
            "Baisse de la diurèse",
            "Pyrosis stable isolé",
            "Stéatorrhée ancienne stable",
            "Ballonnements chroniques isolés"
          ],
          "explanation": "A Baisse de la diurèse. La surveillance urinaire est prévue dans les formes graves.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 30.",
          "answers": [
            "Baisse de la diurèse"
          ],
          "correct": [
            "Baisse de la diurèse"
          ]
        }
      ]
    },
    {
      "id": "hepato-chapitre-07",
      "title": "Sujet 7 — Tumeurs des voies biliaires",
      "matter": "Hépatogastroentérologie",
      "description": "30 questions corrigées",
      "instructions": "QCD : choisir Vrai ou Faux. QCM : choisir toutes les réponses exactes.",
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
      "filiere": "IDE",
      "questions": [
        {
          "originalNumber": 1,
          "type": "qcd",
          "text": "Les tumeurs biliaires peuvent se développer dans les voies intra ou extra hépatiques.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Le cours inclut ces deux localisations.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 31.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 2,
          "type": "qcd",
          "text": "Toutes les tumeurs biliaires sont bénignes.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "B Faux. Elles sont le plus souvent malignes selon le cours.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 31.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "originalNumber": 3,
          "type": "qcd",
          "text": "Un cholangiocarcinome est un cancer primitif des voies biliaires.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Il fait partie des tumeurs malignes citées.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 31.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 4,
          "type": "qcd",
          "text": "Les adénomes biliaires sont classés parmi les tumeurs bénignes.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Les papillomes sont également cités.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 31.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 5,
          "type": "qcd",
          "text": "L’ampullome de Vater se développe au niveau de l’ampoule de Vater.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Il figure parmi les tumeurs étudiées.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 31.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 6,
          "type": "qcd",
          "text": "La cholangite sclérosante primitive est un facteur de risque cité.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Elle favorise certaines tumeurs des voies biliaires.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 31.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 7,
          "type": "qcd",
          "text": "Les kystes du cholédoque figurent parmi les facteurs de risque.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Ils sont listés dans le chapitre.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 31.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 8,
          "type": "qcd",
          "text": "Les parasitoses biliaires sont exclues des facteurs favorisants.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "B Faux. Elles figurent parmi les facteurs de risque.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 31.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "originalNumber": 9,
          "type": "qcd",
          "text": "L’ictère cholestatique progressif peut révéler une tumeur biliaire.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. C’est le signe révélateur principal décrit.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 32.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 10,
          "type": "qcd",
          "text": "L’ictère tumoral décrit est nécessairement brutal et très douloureux.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "B Faux. Le cours décrit une installation progressive souvent indolore.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 32.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "originalNumber": 11,
          "type": "qcd",
          "text": "Un prurit peut accompagner l’obstruction biliaire tumorale.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Il figure parmi les manifestations.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 32.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 12,
          "type": "qcd",
          "text": "L’amaigrissement peut faire partie du tableau clinique.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Il peut s’associer à l’anorexie et à l’asthénie.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 32.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 13,
          "type": "qcd",
          "text": "Les phosphatases alcalines peuvent augmenter.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Le bilan peut montrer une cholestase.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 32.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 14,
          "type": "qcd",
          "text": "La cholangio IRM participe à l’évaluation de l’extension tumorale.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Cet objectif est précisé dans le chapitre.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 32.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 15,
          "type": "qcd",
          "text": "L’examen anatomopathologique peut contribuer à la confirmation.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Il repose sur l’étude d’un prélèvement tissulaire.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 32.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 16,
          "type": "qcd",
          "text": "Une angiocholite peut compliquer une obstruction tumorale.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Elle figure dans les complications locales.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 32.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 17,
          "type": "qcd",
          "text": "La dénutrition et la cachexie sont impossibles dans les tumeurs biliaires.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "B Faux. Elles figurent dans les complications générales.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 32.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "originalNumber": 18,
          "type": "qcd",
          "text": "La chirurgie offre une possibilité de traitement curatif dans certains cas.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Elle dépend notamment de la localisation et de l’extension.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 33.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 19,
          "type": "qcd",
          "text": "Une endoprothèse biliaire constitue toujours un traitement curatif du cancer.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "B Faux. Le cours la classe parmi les traitements palliatifs.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 33.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "originalNumber": 20,
          "type": "qcd",
          "text": "Le soutien psychologique fait partie de l’accompagnement infirmier.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Il complète la surveillance et les conseils nutritionnels.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 33.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 21,
          "type": "qcm",
          "text": "Quelle tumeur est un cancer primitif biliaire ?",
          "options": [
            "Polype gastrique bénin",
            "Papillome bénin",
            "Cholangiocarcinome",
            "Adénome biliaire"
          ],
          "explanation": "C Cholangiocarcinome. Le cholangiocarcinome est la tumeur maligne principale citée.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 31.",
          "answers": [
            "Cholangiocarcinome"
          ],
          "correct": [
            "Cholangiocarcinome"
          ]
        },
        {
          "originalNumber": 22,
          "type": "qcm",
          "text": "Quelles tumeurs sont classées comme bénignes dans le cours ?",
          "options": [
            "Adénomes biliaires",
            "Cholangiocarcinomes",
            "Papillomes",
            "Cancers vésiculaires"
          ],
          "explanation": "A Adénomes biliaires ; C Papillomes. Adénomes et papillomes appartiennent au groupe bénin.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 31.",
          "answers": [
            "Adénomes biliaires",
            "Papillomes"
          ],
          "correct": [
            "Adénomes biliaires",
            "Papillomes"
          ]
        },
        {
          "originalNumber": 23,
          "type": "qcm",
          "text": "Quels facteurs de risque sont cités ?",
          "options": [
            "Appendicite ancienne comme facteur établi",
            "Kyste du cholédoque",
            "Cholangite sclérosante primitive",
            "Parasitoses biliaires"
          ],
          "explanation": "B Kyste du cholédoque ; C Cholangite sclérosante primitive ; D Parasitoses biliaires. Ces trois facteurs figurent dans le chapitre.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 31.",
          "answers": [
            "Kyste du cholédoque",
            "Cholangite sclérosante primitive",
            "Parasitoses biliaires"
          ],
          "correct": [
            "Kyste du cholédoque",
            "Cholangite sclérosante primitive",
            "Parasitoses biliaires"
          ]
        },
        {
          "originalNumber": 24,
          "type": "qcm",
          "text": "Quelle présentation est particulièrement évocatrice selon le cours ?",
          "options": [
            "Méléna isolé sans cholestase",
            "Dysphagie isolée d’apparition brutale",
            "Ictère progressif indolore",
            "Diarrhée aiguë isolée"
          ],
          "explanation": "C Ictère progressif indolore. Le tableau cholestatique progressif est mis en avant.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 32.",
          "answers": [
            "Ictère progressif indolore"
          ],
          "correct": [
            "Ictère progressif indolore"
          ]
        },
        {
          "originalNumber": 25,
          "type": "qcm",
          "text": "Quel bilan biologique évoque une cholestase ?",
          "options": [
            "Bilirubine élevée",
            "Hémoglobine seule élevée",
            "PAL élevées",
            "Gamma GT élevées"
          ],
          "explanation": "A Bilirubine élevée ; C PAL élevées ; D Gamma GT élevées. Ces paramètres sont cités dans le diagnostic.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 32.",
          "answers": [
            "Bilirubine élevée",
            "PAL élevées",
            "Gamma GT élevées"
          ],
          "correct": [
            "Bilirubine élevée",
            "PAL élevées",
            "Gamma GT élevées"
          ]
        },
        {
          "originalNumber": 26,
          "type": "qcm",
          "text": "Quel examen est proposé en première intention dans ce chapitre ?",
          "options": [
            "Échographie abdominale",
            "pH métrie",
            "Coloscopie",
            "Manométrie œsophagienne"
          ],
          "explanation": "A Échographie abdominale. Elle constitue une première exploration de l’obstacle biliaire.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 32.",
          "answers": [
            "Échographie abdominale"
          ],
          "correct": [
            "Échographie abdominale"
          ]
        },
        {
          "originalNumber": 27,
          "type": "qcm",
          "text": "Quelles complications locales sont décrites ?",
          "options": [
            "Angiocholite",
            "Insuffisance hépatique",
            "Achalasie constante",
            "Obstruction biliaire"
          ],
          "explanation": "A Angiocholite ; B Insuffisance hépatique ; D Obstruction biliaire. Les complications découlent notamment de l’obstacle.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 32.",
          "answers": [
            "Angiocholite",
            "Insuffisance hépatique",
            "Obstruction biliaire"
          ],
          "correct": [
            "Angiocholite",
            "Insuffisance hépatique",
            "Obstruction biliaire"
          ]
        },
        {
          "originalNumber": 28,
          "type": "qcm",
          "text": "Quelles interventions chirurgicales sont mentionnées selon la localisation ?",
          "options": [
            "Duodénopancréatectomie céphalique",
            "Hépatectomie partielle",
            "Résection biliaire",
            "Thyroïdectomie systématique"
          ],
          "explanation": "A Duodénopancréatectomie céphalique ; B Hépatectomie partielle ; C Résection biliaire. Le geste dépend de l’implantation tumorale.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 33.",
          "answers": [
            "Duodénopancréatectomie céphalique",
            "Hépatectomie partielle",
            "Résection biliaire"
          ],
          "correct": [
            "Duodénopancréatectomie céphalique",
            "Hépatectomie partielle",
            "Résection biliaire"
          ]
        },
        {
          "originalNumber": 29,
          "type": "qcm",
          "text": "Quel traitement vise notamment à améliorer l’écoulement biliaire sans enlever toute la tumeur ?",
          "options": [
            "Drainage avec endoprothèse",
            "Lactulose seul",
            "IPP seul",
            "Substitution enzymatique seule"
          ],
          "explanation": "A Drainage avec endoprothèse. Le drainage figure dans les options palliatives.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 33.",
          "answers": [
            "Drainage avec endoprothèse"
          ],
          "correct": [
            "Drainage avec endoprothèse"
          ]
        },
        {
          "originalNumber": 30,
          "type": "qcm",
          "text": "Quels éléments surveiller particulièrement ?",
          "options": [
            "Ictère",
            "État nutritionnel",
            "Uniquement l’acuité visuelle",
            "Prurit"
          ],
          "explanation": "A Ictère ; B État nutritionnel ; D Prurit. La douleur et les suites opératoires sont aussi surveillées.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 33.",
          "answers": [
            "Ictère",
            "État nutritionnel",
            "Prurit"
          ],
          "correct": [
            "Ictère",
            "État nutritionnel",
            "Prurit"
          ]
        }
      ]
    },
    {
      "id": "hepato-chapitre-08",
      "title": "Sujet 8 — Pancréatite aiguë",
      "matter": "Hépatogastroentérologie",
      "description": "30 questions corrigées",
      "instructions": "QCD : choisir Vrai ou Faux. QCM : choisir toutes les réponses exactes.",
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
      "filiere": "IDE",
      "questions": [
        {
          "originalNumber": 1,
          "type": "qcd",
          "text": "La pancréatite aiguë implique une activation prématurée d’enzymes dans le pancréas.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Cette activation participe à l’autodigestion.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 34 et 35.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 2,
          "type": "qcd",
          "text": "Le pancréas possède uniquement une fonction endocrine.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "B Faux. Il a aussi une fonction exocrine digestive.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 34 et 35.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "originalNumber": 3,
          "type": "qcd",
          "text": "La lipase est une enzyme digestive produite par le pancréas.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Elle figure parmi les sécrétions exocrines.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 35.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 4,
          "type": "qcd",
          "text": "L’insuline fait partie des hormones pancréatiques.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Elle relève de la fonction endocrine.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 35.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 5,
          "type": "qcd",
          "text": "La lithiase biliaire est une cause majeure de pancréatite aiguë.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Le calcul peut obstruer la région ampullaire.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 35.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 6,
          "type": "qcd",
          "text": "L’alcool est sans lien avec la pancréatite aiguë.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "B Faux. Il constitue l’autre grande cause décrite.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 35.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "originalNumber": 7,
          "type": "qcd",
          "text": "Une hypertriglycéridémie peut être en cause.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Elle figure parmi les causes métaboliques citées.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 35.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 8,
          "type": "qcd",
          "text": "Une CPRE peut exceptionnellement être suivie d’une pancréatite aiguë.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Elle est citée parmi les causes possibles.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 35.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 9,
          "type": "qcd",
          "text": "La douleur typique est épigastrique et peut irradier dans le dos.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Le cours décrit une douleur en barre ou transfixiante.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 36.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 10,
          "type": "qcd",
          "text": "Les vomissements sont incompatibles avec une pancréatite aiguë.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "B Faux. Ils font partie des troubles digestifs possibles.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 36.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "originalNumber": 11,
          "type": "qcd",
          "text": "Une hypotension peut annoncer une forme grave.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Elle peut accompagner une défaillance circulatoire.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 36.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 12,
          "type": "qcd",
          "text": "Une détresse respiratoire peut compliquer la pancréatite aiguë.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Les formes graves peuvent devenir multiviscérales.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 36 et 37.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 13,
          "type": "qcd",
          "text": "Une lipase supérieure à trois fois la normale est fortement évocatrice dans le contexte adapté.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Ce seuil est indiqué dans le cours.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 36.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 14,
          "type": "qcd",
          "text": "La glycémie et la fonction rénale sont inutiles à surveiller.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "B Faux. Elles figurent dans la surveillance biologique.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 38.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "originalNumber": 15,
          "type": "qcd",
          "text": "Le scanner peut rechercher une nécrose pancréatique.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Il participe à l’évaluation des lésions et de la gravité.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 37.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 16,
          "type": "qcd",
          "text": "La forme nécrosante est décrite comme une forme grave.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Elle comporte une nécrose tissulaire.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 37.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 17,
          "type": "qcd",
          "text": "Un pseudokyste est une complication locale possible.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Il figure parmi les complications pancréatiques.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 37.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 18,
          "type": "qcd",
          "text": "Le cours recommande des antibiotiques pour toute pancréatite, même non infectée.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "B Faux. Il les réserve aux infections documentées.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 37.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "originalNumber": 19,
          "type": "qcd",
          "text": "Le traitement de la cause est une composante de la prise en charge.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Le cours évoque notamment l’origine biliaire et l’alcool.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 38.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 20,
          "type": "qcd",
          "text": "La surveillance des perfusions relève du rôle infirmier.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Elle accompagne le suivi clinique et biologique.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 38.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 21,
          "type": "qcm",
          "text": "Quels éléments appartiennent à la fonction exocrine du pancréas ?",
          "options": [
            "Amylase",
            "Insuline",
            "Lipase",
            "Trypsine"
          ],
          "explanation": "A Amylase ; C Lipase ; D Trypsine. Amylase, lipase et trypsine sont des enzymes digestives.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 35.",
          "answers": [
            "Amylase",
            "Lipase",
            "Trypsine"
          ],
          "correct": [
            "Amylase",
            "Lipase",
            "Trypsine"
          ]
        },
        {
          "originalNumber": 22,
          "type": "qcm",
          "text": "Quelles causes de pancréatite aiguë sont citées ?",
          "options": [
            "Lithiase biliaire",
            "Alcool",
            "Carence isolée en facteur intrinsèque",
            "Hypercalcémie"
          ],
          "explanation": "A Lithiase biliaire ; B Alcool ; D Hypercalcémie. Le cours décrit ces étiologies possibles.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 35.",
          "answers": [
            "Lithiase biliaire",
            "Alcool",
            "Hypercalcémie"
          ],
          "correct": [
            "Lithiase biliaire",
            "Alcool",
            "Hypercalcémie"
          ]
        },
        {
          "originalNumber": 23,
          "type": "qcm",
          "text": "Quelle douleur est la plus évocatrice dans ce chapitre ?",
          "options": [
            "Épigastrique intense irradiant au dos",
            "Douleur uniquement anale",
            "Douleur exclusivement à la déglutition",
            "Douleur dentaire isolée"
          ],
          "explanation": "A Épigastrique intense irradiant au dos. La douleur épigastrique transfixiante est mise en avant.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 36.",
          "answers": [
            "Épigastrique intense irradiant au dos"
          ],
          "correct": [
            "Épigastrique intense irradiant au dos"
          ]
        },
        {
          "originalNumber": 24,
          "type": "qcm",
          "text": "Quels signes orientent vers la gravité ?",
          "options": [
            "Hypotension",
            "Détresse respiratoire",
            "Choc",
            "Pyrosis isolé ancien"
          ],
          "explanation": "A Hypotension ; B Détresse respiratoire ; C Choc. Ils traduisent un retentissement systémique.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 36.",
          "answers": [
            "Hypotension",
            "Détresse respiratoire",
            "Choc"
          ],
          "correct": [
            "Hypotension",
            "Détresse respiratoire",
            "Choc"
          ]
        },
        {
          "originalNumber": 25,
          "type": "qcm",
          "text": "Quel dosage est l’examen biologique de référence cité ?",
          "options": [
            "TSH",
            "Lipase",
            "Vitamine B12",
            "Troponine"
          ],
          "explanation": "B Lipase. La lipasémie est au premier plan du diagnostic biologique.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 36.",
          "answers": [
            "Lipase"
          ],
          "correct": [
            "Lipase"
          ]
        },
        {
          "originalNumber": 26,
          "type": "qcm",
          "text": "Quel objectif correspond au scanner abdominal ?",
          "options": [
            "Rechercher lésions et nécrose",
            "Mesurer le reflux acide",
            "Compter directement les selles",
            "Étudier la motricité œsophagienne"
          ],
          "explanation": "A Rechercher lésions et nécrose. L’imagerie précise les lésions pancréatiques.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 37.",
          "answers": [
            "Rechercher lésions et nécrose"
          ],
          "correct": [
            "Rechercher lésions et nécrose"
          ]
        },
        {
          "originalNumber": 27,
          "type": "qcm",
          "text": "Quelles complications locales sont citées ?",
          "options": [
            "Abcès",
            "Nécrose",
            "Pseudokyste",
            "RCH nouvellement obligatoire"
          ],
          "explanation": "A Abcès ; B Nécrose ; C Pseudokyste. Elles surviennent au niveau ou autour du pancréas.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 37.",
          "answers": [
            "Abcès",
            "Nécrose",
            "Pseudokyste"
          ],
          "correct": [
            "Abcès",
            "Nécrose",
            "Pseudokyste"
          ]
        },
        {
          "originalNumber": 28,
          "type": "qcm",
          "text": "Quelles complications générales sont possibles ?",
          "options": [
            "Défaillance multiviscérale",
            "Insuffisance rénale aiguë",
            "Guérison constante sans surveillance",
            "Choc hypovolémique"
          ],
          "explanation": "A Défaillance multiviscérale ; B Insuffisance rénale aiguë ; D Choc hypovolémique. Ces complications peuvent engager le pronostic vital.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 37.",
          "answers": [
            "Défaillance multiviscérale",
            "Insuffisance rénale aiguë",
            "Choc hypovolémique"
          ],
          "correct": [
            "Défaillance multiviscérale",
            "Insuffisance rénale aiguë",
            "Choc hypovolémique"
          ]
        },
        {
          "originalNumber": 29,
          "type": "qcm",
          "text": "Dans quel contexte les antibiotiques sont ils indiqués selon le cours ?",
          "options": [
            "Toute douleur sans évaluation",
            "Tout pyrosis isolé",
            "Infection documentée",
            "Toute lipase normale"
          ],
          "explanation": "C Infection documentée. L’antibiothérapie n’est pas systématique dans une inflammation non infectée.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 37.",
          "answers": [
            "Infection documentée"
          ],
          "correct": [
            "Infection documentée"
          ]
        },
        {
          "originalNumber": 30,
          "type": "qcm",
          "text": "Quels paramètres sont surveillés par l’infirmier ?",
          "options": [
            "PA et pouls",
            "Fréquence respiratoire",
            "Uniquement le transit une fois par mois",
            "Douleur et température"
          ],
          "explanation": "A PA et pouls ; B Fréquence respiratoire ; D Douleur et température. La surveillance doit être rigoureuse et continue.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 38.",
          "answers": [
            "PA et pouls",
            "Fréquence respiratoire",
            "Douleur et température"
          ],
          "correct": [
            "PA et pouls",
            "Fréquence respiratoire",
            "Douleur et température"
          ]
        }
      ]
    },
    {
      "id": "hepato-chapitre-09",
      "title": "Sujet 9 — Pancréatite chronique",
      "matter": "Hépatogastroentérologie",
      "description": "30 questions corrigées",
      "instructions": "QCD : choisir Vrai ou Faux. QCM : choisir toutes les réponses exactes.",
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
      "filiere": "IDE",
      "questions": [
        {
          "originalNumber": 1,
          "type": "qcd",
          "text": "La pancréatite chronique entraîne une destruction progressive du pancréas.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. La fibrose s’accompagne d’une perte fonctionnelle.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 39.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 2,
          "type": "qcd",
          "text": "Les lésions de pancréatite chronique sont décrites comme totalement réversibles.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "B Faux. Le cours les présente comme irréversibles.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 39.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "originalNumber": 3,
          "type": "qcd",
          "text": "L’alcoolisme chronique est une cause majeure chez l’adulte.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Il est présenté comme la cause la plus fréquente.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 39.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 4,
          "type": "qcd",
          "text": "La mucoviscidose est une cause génétique citée.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Les causes héréditaires font partie des étiologies.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 39.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 5,
          "type": "qcd",
          "text": "Une obstruction canalaire peut contribuer à une pancréatite chronique.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Sténoses et tumeurs sont citées.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 39.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 6,
          "type": "qcd",
          "text": "La fibrose pancréatique peut s’accompagner de calcifications.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Ces modifications sont décrites dans la physiopathologie.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 40.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 7,
          "type": "qcd",
          "text": "L’insuffisance exocrine peut provoquer une maldigestion.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Les enzymes digestives deviennent insuffisantes.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 40.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 8,
          "type": "qcd",
          "text": "La stéatorrhée correspond à un excès de graisses dans les selles.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Les selles peuvent être abondantes et luisantes.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 40.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 9,
          "type": "qcd",
          "text": "La destruction endocrine peut provoquer un diabète.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. L’atteinte des cellules productrices d’insuline y participe.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 40.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 10,
          "type": "qcd",
          "text": "L’amaigrissement exclut une pancréatite chronique.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "B Faux. Il peut accompagner maldigestion et dénutrition.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 40.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "originalNumber": 11,
          "type": "qcd",
          "text": "La lipase est obligatoirement très élevée dans toute pancréatite chronique.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "B Faux. Elle peut être normale.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 40.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "originalNumber": 12,
          "type": "qcd",
          "text": "L’HbA1c peut être utile dans l’évaluation métabolique.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Elle complète notamment la glycémie.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 40.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 13,
          "type": "qcd",
          "text": "Le scanner peut montrer une atrophie pancréatique.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Il peut aussi montrer calcifications et dilatation canalaire.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 41.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 14,
          "type": "qcd",
          "text": "L’écho endoscopie est citée pour les formes débutantes.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Le cours la présente comme très sensible dans ce contexte.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 41.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 15,
          "type": "qcd",
          "text": "Une compression biliaire est une complication possible.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Elle figure parmi les complications digestives.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 41.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 16,
          "type": "qcd",
          "text": "Le risque de cancer pancréatique n’est jamais augmenté.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "B Faux. Le cours mentionne un risque accru.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 41.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "originalNumber": 17,
          "type": "qcd",
          "text": "Les enzymes pancréatiques peuvent substituer l’insuffisance exocrine.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Elles compensent le déficit enzymatique.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 41.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 18,
          "type": "qcd",
          "text": "L’insuline peut être prescrite en cas de diabète associé.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Elle traite le déficit endocrine selon l’indication.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 41.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 19,
          "type": "qcd",
          "text": "Le sevrage alcoolique et tabagique fait partie de l’éducation.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Il vise à limiter les facteurs aggravants.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 41 et 42.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 20,
          "type": "qcd",
          "text": "La surveillance du poids est inutile dans une maladie avec maldigestion.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "B Faux. Elle aide à dépister une dénutrition.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 42.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "originalNumber": 21,
          "type": "qcm",
          "text": "Quel mécanisme caractérise cette maladie ?",
          "options": [
            "Hyperproduction constante d’insuline",
            "Obstacle isolé du canal cystique",
            "Fibrose progressive irréversible",
            "Inflammation exclusivement pharyngée"
          ],
          "explanation": "C Fibrose progressive irréversible. La destruction progressive est l’élément central.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 39 et 40.",
          "answers": [
            "Fibrose progressive irréversible"
          ],
          "correct": [
            "Fibrose progressive irréversible"
          ]
        },
        {
          "originalNumber": 22,
          "type": "qcm",
          "text": "Quel signe traduit surtout l’insuffisance exocrine ?",
          "options": [
            "Stéatorrhée",
            "Ictère isolé",
            "Hématémèse",
            "Dysphagie oropharyngée"
          ],
          "explanation": "A Stéatorrhée. Les graisses mal digérées sont éliminées dans les selles.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 40.",
          "answers": [
            "Stéatorrhée"
          ],
          "correct": [
            "Stéatorrhée"
          ]
        },
        {
          "originalNumber": 23,
          "type": "qcm",
          "text": "Quel signe traduit surtout l’insuffisance endocrine ?",
          "options": [
            "Méléna",
            "Signe de Murphy",
            "Pyrosis",
            "Diabète"
          ],
          "explanation": "D Diabète. La destruction endocrine réduit notamment la sécrétion d’insuline.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 40.",
          "answers": [
            "Diabète"
          ],
          "correct": [
            "Diabète"
          ]
        },
        {
          "originalNumber": 24,
          "type": "qcm",
          "text": "Quels examens biologiques sont cités ?",
          "options": [
            "Bilan nutritionnel",
            "pH métrie sanguine comme seul test",
            "Glycémie",
            "HbA1c"
          ],
          "explanation": "A Bilan nutritionnel ; C Glycémie ; D HbA1c. Ils évaluent le retentissement métabolique et nutritionnel.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 40.",
          "answers": [
            "Bilan nutritionnel",
            "Glycémie",
            "HbA1c"
          ],
          "correct": [
            "Bilan nutritionnel",
            "Glycémie",
            "HbA1c"
          ]
        },
        {
          "originalNumber": 25,
          "type": "qcm",
          "text": "Quelles anomalies sont recherchées au scanner ?",
          "options": [
            "Calcifications",
            "Ulcérations rectales exclusivement",
            "Dilatation canalaire",
            "Atrophie"
          ],
          "explanation": "A Calcifications ; C Dilatation canalaire ; D Atrophie. Ces anomalies peuvent témoigner d’une atteinte chronique.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 41.",
          "answers": [
            "Calcifications",
            "Dilatation canalaire",
            "Atrophie"
          ],
          "correct": [
            "Calcifications",
            "Dilatation canalaire",
            "Atrophie"
          ]
        },
        {
          "originalNumber": 26,
          "type": "qcm",
          "text": "Quelles complications sont décrites ?",
          "options": [
            "Pseudokyste",
            "Dénutrition",
            "Obstruction duodénale",
            "Achalasie obligatoire"
          ],
          "explanation": "A Pseudokyste ; B Dénutrition ; C Obstruction duodénale. Le chapitre décrit des complications digestives et métaboliques.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 41.",
          "answers": [
            "Pseudokyste",
            "Dénutrition",
            "Obstruction duodénale"
          ],
          "correct": [
            "Pseudokyste",
            "Dénutrition",
            "Obstruction duodénale"
          ]
        },
        {
          "originalNumber": 27,
          "type": "qcm",
          "text": "Quel traitement compense le déficit digestif exocrine ?",
          "options": [
            "IPP seul",
            "Vitamine K seule",
            "Enzymes pancréatiques",
            "Insuline seule"
          ],
          "explanation": "C Enzymes pancréatiques. La substitution enzymatique vise la maldigestion.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 41.",
          "answers": [
            "Enzymes pancréatiques"
          ],
          "correct": [
            "Enzymes pancréatiques"
          ]
        },
        {
          "originalNumber": 28,
          "type": "qcm",
          "text": "Quelles situations peuvent faire discuter une chirurgie ?",
          "options": [
            "Complications obstructives",
            "Douleurs rebelles",
            "Simple antécédent de tabagisme",
            "Toute lipase normale isolée"
          ],
          "explanation": "A Complications obstructives ; B Douleurs rebelles. Les indications citées sont les douleurs résistantes et les complications.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 42.",
          "answers": [
            "Complications obstructives",
            "Douleurs rebelles"
          ],
          "correct": [
            "Complications obstructives",
            "Douleurs rebelles"
          ]
        },
        {
          "originalNumber": 29,
          "type": "qcm",
          "text": "Quels éléments relèvent du suivi infirmier ?",
          "options": [
            "Douleur",
            "Poids",
            "Glycémie",
            "Uniquement le signe de Murphy"
          ],
          "explanation": "A Douleur ; B Poids ; C Glycémie. La surveillance associe nutrition, douleur et métabolisme.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 42.",
          "answers": [
            "Douleur",
            "Poids",
            "Glycémie"
          ],
          "correct": [
            "Douleur",
            "Poids",
            "Glycémie"
          ]
        },
        {
          "originalNumber": 30,
          "type": "qcm",
          "text": "Quelle comparaison correspond au tableau du cours ?",
          "options": [
            "Aiguë toujours sans complication",
            "Chronique toujours brutale",
            "Aiguë souvent réversible et chronique irréversible",
            "Chronique sans déficit fonctionnel"
          ],
          "explanation": "C Aiguë souvent réversible et chronique irréversible. L’évolution distingue les deux formes.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 43.",
          "answers": [
            "Aiguë souvent réversible et chronique irréversible"
          ],
          "correct": [
            "Aiguë souvent réversible et chronique irréversible"
          ]
        }
      ]
    },
    {
      "id": "hepato-chapitre-10",
      "title": "Sujet 10 — Hémorragies digestives hautes et basses",
      "matter": "Hépatogastroentérologie",
      "description": "30 questions corrigées",
      "instructions": "QCD : choisir Vrai ou Faux. QCM : choisir toutes les réponses exactes.",
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
      "filiere": "IDE",
      "questions": [
        {
          "originalNumber": 1,
          "type": "qcd",
          "text": "Une hémorragie digestive provient du tube digestif.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Elle correspond à une perte sanguine digestive.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 44.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 2,
          "type": "qcd",
          "text": "Le repère anatomique haut ou bas utilisé dans le cours est l’angle de Treitz.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. La classification repose sur la situation par rapport à cet angle.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 44 et 45.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 3,
          "type": "qcd",
          "text": "Une hémorragie digestive haute siège en aval de l’angle de Treitz.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "B Faux. Elle siège en amont.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 44.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "originalNumber": 4,
          "type": "qcd",
          "text": "L’ulcère gastro duodénal peut provoquer une hémorragie haute.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. C’est une cause citée dans le chapitre.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 44.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 5,
          "type": "qcd",
          "text": "Une rupture de varices œsophagiennes peut saigner dans le tube digestif.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Elle constitue une cause d’hémorragie haute.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 44.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 6,
          "type": "qcd",
          "text": "L’hématémèse désigne un vomissement de sang.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Le sang peut être rouge ou noirâtre.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 44.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 7,
          "type": "qcd",
          "text": "Le méléna correspond à des selles noires goudronneuses.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Le cours les décrit aussi comme malodorantes.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 45.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 8,
          "type": "qcd",
          "text": "La rectorragie désigne exclusivement un vomissement sanglant.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "B Faux. Elle désigne une émission de sang rouge par l’anus.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 45.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "originalNumber": 9,
          "type": "qcd",
          "text": "Les hémorroïdes figurent parmi les causes de saignement bas.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Le cours cite aussi diverticulose et cancer colorectal.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 45.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 10,
          "type": "qcd",
          "text": "Une RCH peut être responsable de saignement digestif bas.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Elle est citée avec la maladie de Crohn.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 45.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 11,
          "type": "qcd",
          "text": "Une tachycardie peut signaler la gravité d’une hémorragie.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Elle doit être interprétée avec les autres signes circulatoires.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 45.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 12,
          "type": "qcd",
          "text": "L’oligurie est rassurante pendant une hémorragie abondante.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "B Faux. Elle peut traduire une hypoperfusion.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 45.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "originalNumber": 13,
          "type": "qcd",
          "text": "Sueurs froides et troubles de conscience sont des signes d’alerte.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Ils figurent parmi les signes de gravité.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 45.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 14,
          "type": "qcd",
          "text": "L’interrogatoire recherche la prise d’AINS et d’anticoagulants.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Ils sont des médicaments importants à identifier.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 45.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 15,
          "type": "qcd",
          "text": "La FOGD peut avoir un rôle diagnostique et thérapeutique.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. L’endoscopie peut permettre une hémostase.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 46 et 47.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 16,
          "type": "qcd",
          "text": "Le groupe sanguin et le Rhésus sont sans intérêt devant une hémorragie grave.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "B Faux. Ils participent à la préparation d’une éventuelle transfusion.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 45.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "originalNumber": 17,
          "type": "qcd",
          "text": "Deux voies veineuses périphériques de gros calibre sont citées dans la prise en charge.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Elles permettent notamment les traitements prescrits.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 46.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 18,
          "type": "qcd",
          "text": "Les IPP sont cités dans le traitement d’une hémorragie ulcéreuse.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Ils peuvent être associés à l’hémostase endoscopique.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 46.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 19,
          "type": "qcd",
          "text": "La surveillance doit s’arrêter dès le premier traitement reçu.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "B Faux. Elle reste nécessaire pendant toute la phase aiguë.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 47.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "originalNumber": 20,
          "type": "qcd",
          "text": "Une récidive de saignement doit conduire à une réévaluation rapide.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. L’éducation insiste sur la consultation en cas de récidive.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 47.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 21,
          "type": "qcm",
          "text": "Quelle manifestation correspond à une hématémèse ?",
          "options": [
            "Vomissement de sang",
            "Difficulté à avaler",
            "Accumulation de liquide péritonéal",
            "Selles graisseuses"
          ],
          "explanation": "A Vomissement de sang. L’hématémèse se manifeste par la bouche lors d’un vomissement.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 44.",
          "answers": [
            "Vomissement de sang"
          ],
          "correct": [
            "Vomissement de sang"
          ]
        },
        {
          "originalNumber": 22,
          "type": "qcm",
          "text": "Quelle description correspond au méléna ?",
          "options": [
            "Vomissement bilieux simple",
            "Selles uniquement grasses",
            "Urines rouges",
            "Selles noires goudronneuses"
          ],
          "explanation": "D Selles noires goudronneuses. Il correspond à l’élimination de sang digéré.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 45.",
          "answers": [
            "Selles noires goudronneuses"
          ],
          "correct": [
            "Selles noires goudronneuses"
          ]
        },
        {
          "originalNumber": 23,
          "type": "qcm",
          "text": "Quelles causes d’hémorragie haute sont citées ?",
          "options": [
            "Hémorroïdes",
            "Ulcère gastro duodénal",
            "Varices œsophagiennes",
            "Gastrite érosive"
          ],
          "explanation": "B Ulcère gastro duodénal ; C Varices œsophagiennes ; D Gastrite érosive. Les hémorroïdes appartiennent aux causes basses du cours.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 44 et 45.",
          "answers": [
            "Ulcère gastro duodénal",
            "Varices œsophagiennes",
            "Gastrite érosive"
          ],
          "correct": [
            "Ulcère gastro duodénal",
            "Varices œsophagiennes",
            "Gastrite érosive"
          ]
        },
        {
          "originalNumber": 24,
          "type": "qcm",
          "text": "Quelles causes d’hémorragie basse sont citées ?",
          "options": [
            "Cancer colorectal",
            "RCH",
            "Œsophagite isolée",
            "Diverticulose"
          ],
          "explanation": "A Cancer colorectal ; B RCH ; D Diverticulose. Elles se situent en aval du repère utilisé.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 45.",
          "answers": [
            "Cancer colorectal",
            "RCH",
            "Diverticulose"
          ],
          "correct": [
            "Cancer colorectal",
            "RCH",
            "Diverticulose"
          ]
        },
        {
          "originalNumber": 25,
          "type": "qcm",
          "text": "Quels signes doivent alerter sur une mauvaise tolérance circulatoire ?",
          "options": [
            "Oligurie",
            "Hypotension",
            "Tachycardie",
            "Simple prurit ancien isolé"
          ],
          "explanation": "A Oligurie ; B Hypotension ; C Tachycardie. Ils peuvent traduire un retentissement hémodynamique.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 45.",
          "answers": [
            "Oligurie",
            "Hypotension",
            "Tachycardie"
          ],
          "correct": [
            "Oligurie",
            "Hypotension",
            "Tachycardie"
          ]
        },
        {
          "originalNumber": 26,
          "type": "qcm",
          "text": "Quels examens biologiques sont cités ?",
          "options": [
            "TP ou INR",
            "Groupe et Rhésus",
            "Test respiratoire à l’urée comme bilan principal",
            "NFS"
          ],
          "explanation": "A TP ou INR ; B Groupe et Rhésus ; D NFS. Ils évaluent notamment anémie, compatibilité et coagulation.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 45.",
          "answers": [
            "TP ou INR",
            "Groupe et Rhésus",
            "NFS"
          ],
          "correct": [
            "TP ou INR",
            "Groupe et Rhésus",
            "NFS"
          ]
        },
        {
          "originalNumber": 27,
          "type": "qcm",
          "text": "Quel examen est la référence citée pour les hémorragies hautes ?",
          "options": [
            "Coloscopie exclusivement",
            "FOGD",
            "Manométrie",
            "Cholangio IRM"
          ],
          "explanation": "B FOGD. La FOGD explore l’œsophage, l’estomac et le duodénum.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 46.",
          "answers": [
            "FOGD"
          ],
          "correct": [
            "FOGD"
          ]
        },
        {
          "originalNumber": 28,
          "type": "qcm",
          "text": "Quel geste est cité pour les varices œsophagiennes ?",
          "options": [
            "Cholécystectomie systématique",
            "Substitution enzymatique seule",
            "Ligature endoscopique",
            "Ponction d’ascite seule"
          ],
          "explanation": "C Ligature endoscopique. La ligature appartient au traitement spécifique décrit.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 46.",
          "answers": [
            "Ligature endoscopique"
          ],
          "correct": [
            "Ligature endoscopique"
          ]
        },
        {
          "originalNumber": 29,
          "type": "qcm",
          "text": "Quels éléments relèvent de la surveillance infirmière ?",
          "options": [
            "Uniquement la lipase",
            "Diurèse",
            "Évolution du saignement",
            "PA et pouls"
          ],
          "explanation": "B Diurèse ; C Évolution du saignement ; D PA et pouls. Le suivi recherche une dégradation ou une récidive.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 46 et 47.",
          "answers": [
            "Diurèse",
            "Évolution du saignement",
            "PA et pouls"
          ],
          "correct": [
            "Diurèse",
            "Évolution du saignement",
            "PA et pouls"
          ]
        },
        {
          "originalNumber": 30,
          "type": "qcm",
          "text": "Quel conseil est donné après l’épisode ?",
          "options": [
            "Reprendre les AINS en automédication",
            "Signaler rapidement tout nouveau saignement",
            "Ignorer une nouvelle hématémèse",
            "Supprimer les contrôles"
          ],
          "explanation": "B Signaler rapidement tout nouveau saignement. La surveillance des récidives fait partie de l’éducation.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 47.",
          "answers": [
            "Signaler rapidement tout nouveau saignement"
          ],
          "correct": [
            "Signaler rapidement tout nouveau saignement"
          ]
        }
      ]
    },
    {
      "id": "hepato-chapitre-11",
      "title": "Sujet 11 — Ascite et ses complications",
      "matter": "Hépatogastroentérologie",
      "description": "30 questions corrigées",
      "instructions": "QCD : choisir Vrai ou Faux. QCM : choisir toutes les réponses exactes.",
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
      "filiere": "IDE",
      "questions": [
        {
          "originalNumber": 1,
          "type": "qcd",
          "text": "L’ascite est une accumulation pathologique de liquide dans la cavité péritonéale.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Elle ne correspond pas à un liquide pleural.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 48.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 2,
          "type": "qcd",
          "text": "La cirrhose est une cause majeure d’ascite.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. C’est la cause principale retenue dans le cours.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 48.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 3,
          "type": "qcd",
          "text": "Une insuffisance cardiaque droite peut être une cause d’ascite.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Les causes cardiaques sont explicitement citées.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 48.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 4,
          "type": "qcd",
          "text": "Le syndrome néphrotique est une cause rénale possible.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Il figure parmi les étiologies.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 48.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 5,
          "type": "qcd",
          "text": "Une carcinose péritonéale peut s’accompagner d’ascite.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Les causes tumorales sont présentées.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 48.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 6,
          "type": "qcd",
          "text": "La tuberculose péritonéale est exclue des causes d’ascite.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "B Faux. Elle est citée parmi les causes infectieuses.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 48.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "originalNumber": 7,
          "type": "qcd",
          "text": "L’hypertension portale participe à l’ascite de la cirrhose.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Elle s’associe à la rétention hydrosodée et à l’hypoalbuminémie.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 48.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 8,
          "type": "qcd",
          "text": "La rétention de sodium et d’eau peut favoriser l’ascite.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Elle contribue à l’accumulation de liquide.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 48 et 49.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 9,
          "type": "qcd",
          "text": "Une ascite ne peut jamais gêner la respiration.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "B Faux. Une dyspnée peut accompagner la distension abdominale.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 49.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "originalNumber": 10,
          "type": "qcd",
          "text": "La matité déclive est un signe physique cité.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Elle est décrite avec l’onde ascitique.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 49.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 11,
          "type": "qcd",
          "text": "Une éversion ombilicale peut accompagner une ascite abondante.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Elle fait partie des signes physiques présentés.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 49.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 12,
          "type": "qcd",
          "text": "L’échographie peut confirmer la présence de liquide.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Elle contribue aussi à en apprécier la quantité.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 49.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 13,
          "type": "qcd",
          "text": "La ponction d’ascite ne permet aucune analyse du liquide.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "B Faux. Elle permet notamment biochimie, cytologie et bactériologie.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 49.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "originalNumber": 14,
          "type": "qcd",
          "text": "Une péritonite bactérienne spontanée peut compliquer l’ascite.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. C’est la complication infectieuse majeure présentée.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 49 et 50.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 15,
          "type": "qcd",
          "text": "Fièvre et douleur abdominale chez un patient ascitique doivent alerter.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Elles peuvent évoquer une infection du liquide.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 49.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 16,
          "type": "qcd",
          "text": "Le syndrome hépatorénal est une complication grave citée.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Il correspond à une insuffisance rénale fonctionnelle sévère.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 49.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 17,
          "type": "qcd",
          "text": "La restriction hydrique est systématique chez tous les patients selon le cours.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "B Faux. Le cours précise « si nécessaire ».",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 50.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "originalNumber": 18,
          "type": "qcd",
          "text": "La spironolactone et le furosémide sont cités comme traitements.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Ce sont les diurétiques mentionnés.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 50.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 19,
          "type": "qcd",
          "text": "Le poids quotidien fait partie de la surveillance.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Il complète périmètre abdominal et diurèse.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 50.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 20,
          "type": "qcd",
          "text": "La surveillance après ponction d’ascite est inutile.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "B Faux. Elle est explicitement prévue dans les soins.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 50.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "originalNumber": 21,
          "type": "qcm",
          "text": "Où le liquide d’ascite s’accumule t il ?",
          "options": [
            "Lumière œsophagienne",
            "Cavité pleurale uniquement",
            "Canal pancréatique uniquement",
            "Cavité péritonéale"
          ],
          "explanation": "D Cavité péritonéale. L’ascite est un épanchement péritonéal.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 48.",
          "answers": [
            "Cavité péritonéale"
          ],
          "correct": [
            "Cavité péritonéale"
          ]
        },
        {
          "originalNumber": 22,
          "type": "qcm",
          "text": "Quelles étiologies sont citées ?",
          "options": [
            "Œsophagite superficielle isolée",
            "Carcinose péritonéale",
            "Insuffisance cardiaque droite",
            "Cirrhose"
          ],
          "explanation": "B Carcinose péritonéale ; C Insuffisance cardiaque droite ; D Cirrhose. Le cours présente des causes hépatiques et extra hépatiques.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 48.",
          "answers": [
            "Carcinose péritonéale",
            "Insuffisance cardiaque droite",
            "Cirrhose"
          ],
          "correct": [
            "Carcinose péritonéale",
            "Insuffisance cardiaque droite",
            "Cirrhose"
          ]
        },
        {
          "originalNumber": 23,
          "type": "qcm",
          "text": "Quels mécanismes participent à l’ascite cirrhotique ?",
          "options": [
            "Hypoalbuminémie",
            "Excès de facteur intrinsèque",
            "Rétention hydrosodée",
            "Hypertension portale"
          ],
          "explanation": "A Hypoalbuminémie ; C Rétention hydrosodée ; D Hypertension portale. Ils favorisent l’accumulation péritonéale de liquide.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 48 et 49.",
          "answers": [
            "Hypoalbuminémie",
            "Rétention hydrosodée",
            "Hypertension portale"
          ],
          "correct": [
            "Hypoalbuminémie",
            "Rétention hydrosodée",
            "Hypertension portale"
          ]
        },
        {
          "originalNumber": 24,
          "type": "qcm",
          "text": "Quels signes physiques sont décrits ?",
          "options": [
            "Signe de Murphy obligatoire",
            "Distension abdominale",
            "Onde ascitique",
            "Matité déclive"
          ],
          "explanation": "B Distension abdominale ; C Onde ascitique ; D Matité déclive. Ces signes orientent vers un épanchement liquidien.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 49.",
          "answers": [
            "Distension abdominale",
            "Onde ascitique",
            "Matité déclive"
          ],
          "correct": [
            "Distension abdominale",
            "Onde ascitique",
            "Matité déclive"
          ]
        },
        {
          "originalNumber": 25,
          "type": "qcm",
          "text": "Quelles analyses sont possibles après ponction ?",
          "options": [
            "Bactériologie",
            "Cytologie",
            "Manométrie œsophagienne sur le liquide",
            "Biochimie"
          ],
          "explanation": "A Bactériologie ; B Cytologie ; D Biochimie. Le liquide prélevé est analysé en laboratoire.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 49.",
          "answers": [
            "Bactériologie",
            "Cytologie",
            "Biochimie"
          ],
          "correct": [
            "Bactériologie",
            "Cytologie",
            "Biochimie"
          ]
        },
        {
          "originalNumber": 26,
          "type": "qcm",
          "text": "Quelle association fait rechercher une péritonite bactérienne spontanée ?",
          "options": [
            "Dysphagie ancienne isolée",
            "Fièvre et douleur abdominale",
            "Pyrosis isolé sans fièvre",
            "Stéatorrhée isolée stable"
          ],
          "explanation": "B Fièvre et douleur abdominale. Ces signes sont cités pour la complication infectieuse.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 49.",
          "answers": [
            "Fièvre et douleur abdominale"
          ],
          "correct": [
            "Fièvre et douleur abdominale"
          ]
        },
        {
          "originalNumber": 27,
          "type": "qcm",
          "text": "Quels médicaments sont cités dans le traitement ?",
          "options": [
            "Aspirine systématique",
            "Furosémide",
            "Spironolactone",
            "Insuline obligatoire pour toute ascite"
          ],
          "explanation": "B Furosémide ; C Spironolactone. Le cours mentionne ces deux diurétiques.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 50.",
          "answers": [
            "Furosémide",
            "Spironolactone"
          ],
          "correct": [
            "Furosémide",
            "Spironolactone"
          ]
        },
        {
          "originalNumber": 28,
          "type": "qcm",
          "text": "Dans quelle situation une ponction évacuatrice est elle citée ?",
          "options": [
            "Gastrite sans épanchement",
            "Ascite abondante",
            "Simple reflux acide",
            "Toute diarrhée isolée"
          ],
          "explanation": "B Ascite abondante. Elle permet d’évacuer un volume liquidien important.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 50.",
          "answers": [
            "Ascite abondante"
          ],
          "correct": [
            "Ascite abondante"
          ]
        },
        {
          "originalNumber": 29,
          "type": "qcm",
          "text": "Quels paramètres suivre régulièrement ?",
          "options": [
            "Poids",
            "Diurèse",
            "Uniquement l’acidité gastrique",
            "Périmètre abdominal"
          ],
          "explanation": "A Poids ; B Diurèse ; D Périmètre abdominal. Ils renseignent sur l’évolution de la rétention liquidienne.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 50.",
          "answers": [
            "Poids",
            "Diurèse",
            "Périmètre abdominal"
          ],
          "correct": [
            "Poids",
            "Diurèse",
            "Périmètre abdominal"
          ]
        },
        {
          "originalNumber": 30,
          "type": "qcm",
          "text": "Quel conseil éducatif est adapté ?",
          "options": [
            "Augmenter systématiquement le sel",
            "Arrêter seul les traitements",
            "Supprimer toute surveillance après ponction",
            "Respecter le régime pauvre en sel prescrit"
          ],
          "explanation": "D Respecter le régime pauvre en sel prescrit. Le régime et l’observance figurent dans l’éducation.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 50.",
          "answers": [
            "Respecter le régime pauvre en sel prescrit"
          ],
          "correct": [
            "Respecter le régime pauvre en sel prescrit"
          ]
        }
      ]
    },
    {
      "id": "hepato-chapitre-12",
      "title": "Sujet 12 — Prise en charge des urgences hépato digestives",
      "matter": "Hépatogastroentérologie",
      "description": "30 questions corrigées",
      "instructions": "QCD : choisir Vrai ou Faux. QCM : choisir toutes les réponses exactes.",
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
      "filiere": "IDE",
      "questions": [
        {
          "originalNumber": 1,
          "type": "qcd",
          "text": "Une urgence hépato digestive nécessite une prise en charge rapide.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Elle peut engager le pronostic vital.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 51.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 2,
          "type": "qcd",
          "text": "L’occlusion intestinale aiguë figure parmi les urgences digestives.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Le cours cite aussi péritonite et perforation.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 51.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 3,
          "type": "qcd",
          "text": "La rupture de varices œsophagiennes est une urgence potentielle.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Elle expose à un saignement grave.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 51.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 4,
          "type": "qcd",
          "text": "Une angiocholite ne relève jamais d’une prise en charge urgente.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "B Faux. Elle figure parmi les urgences biliaires.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 51.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "originalNumber": 5,
          "type": "qcd",
          "text": "Une pancréatite aiguë grave peut relever de la réanimation.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Elle peut entraîner des défaillances d’organes.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 52 et 53.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 6,
          "type": "qcd",
          "text": "La lettre A de l’évaluation ABCDE concerne les voies aériennes.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Airway signifie évaluer leur liberté.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 52.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 7,
          "type": "qcd",
          "text": "La lettre B de l’ABCDE concerne la respiration.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Elle comprend notamment l’évaluation de l’oxygénation.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 52.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 8,
          "type": "qcd",
          "text": "La lettre C concerne uniquement la conscience.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "B Faux. C correspond à la circulation ; D à l’état neurologique.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 52.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "originalNumber": 9,
          "type": "qcd",
          "text": "Le score de Glasgow peut participer à l’évaluation neurologique.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Il est cité dans l’étape D.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 52.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 10,
          "type": "qcd",
          "text": "L’étape E correspond à un examen complet du patient.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Exposure complète l’évaluation initiale.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 52.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 11,
          "type": "qcd",
          "text": "Hypotension et tachycardie peuvent être des signes de gravité.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Ils peuvent révéler un retentissement circulatoire.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 52.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 12,
          "type": "qcd",
          "text": "Une confusion nouvelle est un signe qu’il faut ignorer.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "B Faux. Elle peut annoncer une urgence neurologique ou systémique.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 52.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "originalNumber": 13,
          "type": "qcd",
          "text": "Une désaturation est un signe respiratoire préoccupant.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Elle figure parmi les signes de gravité.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 52.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 14,
          "type": "qcd",
          "text": "Le monitoring participe à la mise en condition initiale.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Il aide à suivre l’évolution clinique.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 52.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 15,
          "type": "qcd",
          "text": "La fonction rénale peut faire partie du bilan d’urgence.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Elle est citée avec le bilan hépatique.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 53.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 16,
          "type": "qcd",
          "text": "Le remplissage vise notamment à restaurer la volémie lorsqu’il est indiqué.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. C’est un objectif de la réanimation initiale.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 53.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 17,
          "type": "qcd",
          "text": "La réanimation initiale vise à favoriser la défaillance multiviscérale.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "B Faux. Elle cherche à la prévenir.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 53.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "originalNumber": 18,
          "type": "qcd",
          "text": "La surveillance des produits sanguins relève du rôle infirmier.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Elle figure dans le suivi des traitements.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 53.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 19,
          "type": "qcd",
          "text": "La prévention des escarres et de la dénutrition est citée.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Elle fait partie de la prévention des complications.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 53.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 20,
          "type": "qcd",
          "text": "L’information de la famille est toujours exclue de l’accompagnement.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "B Faux. Le cours la prévoit avec celle du patient.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 54.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "originalNumber": 21,
          "type": "qcm",
          "text": "Quelles situations figurent parmi les urgences digestives ?",
          "options": [
            "Perforation digestive",
            "Péritonite",
            "Gastrite asymptomatique stable uniquement",
            "Occlusion aiguë"
          ],
          "explanation": "A Perforation digestive ; B Péritonite ; D Occlusion aiguë. Ces situations nécessitent une évaluation rapide.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 51.",
          "answers": [
            "Perforation digestive",
            "Péritonite",
            "Occlusion aiguë"
          ],
          "correct": [
            "Perforation digestive",
            "Péritonite",
            "Occlusion aiguë"
          ]
        },
        {
          "originalNumber": 22,
          "type": "qcm",
          "text": "À quelle étape de l’ABCDE évalue t on les voies aériennes ?",
          "options": [
            "B",
            "E",
            "A",
            "C"
          ],
          "explanation": "C A. A correspond à Airway.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 52.",
          "answers": [
            "A"
          ],
          "correct": [
            "A"
          ]
        },
        {
          "originalNumber": 23,
          "type": "qcm",
          "text": "Quelle étape examine respiration et saturation ?",
          "options": [
            "D",
            "C",
            "E",
            "B"
          ],
          "explanation": "D B. B correspond à Breathing.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 52.",
          "answers": [
            "B"
          ],
          "correct": [
            "B"
          ]
        },
        {
          "originalNumber": 24,
          "type": "qcm",
          "text": "Quels paramètres relèvent principalement de C ?",
          "options": [
            "Motricité œsophagienne",
            "Coloration cutanée",
            "Pouls",
            "Pression artérielle"
          ],
          "explanation": "B Coloration cutanée ; C Pouls ; D Pression artérielle. Ils participent à l’évaluation circulatoire.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 52.",
          "answers": [
            "Coloration cutanée",
            "Pouls",
            "Pression artérielle"
          ],
          "correct": [
            "Coloration cutanée",
            "Pouls",
            "Pression artérielle"
          ]
        },
        {
          "originalNumber": 25,
          "type": "qcm",
          "text": "Quels signes indiquent une possible gravité neurologique ?",
          "options": [
            "Agitation",
            "Prurit isolé chronique",
            "Confusion",
            "Coma"
          ],
          "explanation": "A Agitation ; C Confusion ; D Coma. Ils justifient une réévaluation immédiate.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 52.",
          "answers": [
            "Agitation",
            "Confusion",
            "Coma"
          ],
          "correct": [
            "Agitation",
            "Confusion",
            "Coma"
          ]
        },
        {
          "originalNumber": 26,
          "type": "qcm",
          "text": "Quels examens sont cités dans le bilan initial ?",
          "options": [
            "Groupe sanguin",
            "Ionogramme",
            "NFS",
            "Audiométrie systématique"
          ],
          "explanation": "A Groupe sanguin ; B Ionogramme ; C NFS. Le bilan s’adapte à la situation et aux prescriptions.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 52.",
          "answers": [
            "Groupe sanguin",
            "Ionogramme",
            "NFS"
          ],
          "correct": [
            "Groupe sanguin",
            "Ionogramme",
            "NFS"
          ]
        },
        {
          "originalNumber": 27,
          "type": "qcm",
          "text": "Quels sont les objectifs de la réanimation initiale ?",
          "options": [
            "Prévenir les défaillances",
            "Retarder volontairement l’évaluation",
            "Restaurer la volémie",
            "Maintenir l’oxygénation"
          ],
          "explanation": "A Prévenir les défaillances ; C Restaurer la volémie ; D Maintenir l’oxygénation. La prise en charge cherche à préserver les fonctions vitales.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 53.",
          "answers": [
            "Prévenir les défaillances",
            "Restaurer la volémie",
            "Maintenir l’oxygénation"
          ],
          "correct": [
            "Prévenir les défaillances",
            "Restaurer la volémie",
            "Maintenir l’oxygénation"
          ]
        },
        {
          "originalNumber": 28,
          "type": "qcm",
          "text": "Quels éléments biologiques sont suivis ?",
          "options": [
            "Uniquement l’antigène H. pylori",
            "Fonction rénale",
            "Glycémie",
            "Hémoglobine"
          ],
          "explanation": "B Fonction rénale ; C Glycémie ; D Hémoglobine. Le cours mentionne aussi les bilans hépatiques.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 53.",
          "answers": [
            "Fonction rénale",
            "Glycémie",
            "Hémoglobine"
          ],
          "correct": [
            "Fonction rénale",
            "Glycémie",
            "Hémoglobine"
          ]
        },
        {
          "originalNumber": 29,
          "type": "qcm",
          "text": "Quelles complications cherche t on à prévenir ?",
          "options": [
            "Choc",
            "Amélioration de la perfusion",
            "Dénutrition",
            "Infections"
          ],
          "explanation": "A Choc ; C Dénutrition ; D Infections. Les complications évitables font partie du rôle infirmier.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 53.",
          "answers": [
            "Choc",
            "Dénutrition",
            "Infections"
          ],
          "correct": [
            "Choc",
            "Dénutrition",
            "Infections"
          ]
        },
        {
          "originalNumber": 30,
          "type": "qcm",
          "text": "Quelle conduite d’accompagnement est prévue ?",
          "options": [
            "Informer et soutenir le patient et sa famille",
            "Exclure toute explication",
            "Supprimer le suivi prescrit",
            "Encourager l’alcool"
          ],
          "explanation": "A Informer et soutenir le patient et sa famille. L’information et le soutien psychologique sont explicitement cités.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 54.",
          "answers": [
            "Informer et soutenir le patient et sa famille"
          ],
          "correct": [
            "Informer et soutenir le patient et sa famille"
          ]
        }
      ]
    },
    {
      "id": "hepato-chapitre-13",
      "title": "Sujet 13 — Préparation et surveillance des examens endoscopiques",
      "matter": "Hépatogastroentérologie",
      "description": "30 questions corrigées",
      "instructions": "QCD : choisir Vrai ou Faux. QCM : choisir toutes les réponses exactes.",
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
      "filiere": "IDE",
      "questions": [
        {
          "originalNumber": 1,
          "type": "qcd",
          "text": "L’endoscopie utilise un appareil muni d’une caméra et d’une source lumineuse.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Elle permet une visualisation directe de la muqueuse.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 55.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 2,
          "type": "qcd",
          "text": "L’endoscopie digestive peut avoir une fonction thérapeutique.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Son rôle ne se limite pas au diagnostic.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 55.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 3,
          "type": "qcd",
          "text": "La FOGD explore l’œsophage, l’estomac et le duodénum.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Ce sont les trois segments cités.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 55.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 4,
          "type": "qcd",
          "text": "La rectoscopie explore principalement l’estomac.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "B Faux. Elle explore le rectum.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 56.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "originalNumber": 5,
          "type": "qcd",
          "text": "La coloscopie peut explorer le côlon et l’iléon terminal.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Le rectum fait également partie du trajet exploré.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 56.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 6,
          "type": "qcd",
          "text": "Une hématémèse peut justifier une endoscopie haute.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Elle figure parmi les indications de FOGD.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 56.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 7,
          "type": "qcd",
          "text": "La diarrhée chronique peut être une indication de coloscopie.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Le cours cite aussi rectorragies et dépistage colorectal.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 56.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 8,
          "type": "qcd",
          "text": "Il est inutile de vérifier l’identité avant l’endoscopie.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "B Faux. Elle fait partie des vérifications préalables.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 56.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "originalNumber": 9,
          "type": "qcd",
          "text": "Le consentement éclairé fait partie des vérifications prévues.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Il est cité avec la prescription et le dossier.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 56.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 10,
          "type": "qcd",
          "text": "Les allergies doivent être recherchées avant l’examen.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Elles font partie de la préparation.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 56.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 11,
          "type": "qcd",
          "text": "Les prothèses dentaires amovibles sont laissées systématiquement pour la FOGD.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "B Faux. Le cours prévoit leur retrait.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 56.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "originalNumber": 12,
          "type": "qcd",
          "text": "La préparation colique vise à obtenir un côlon propre.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Elle conditionne la qualité de l’exploration.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 57.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 13,
          "type": "qcd",
          "text": "L’hydratation doit être surveillée pendant la préparation colique.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Le cours insiste sur la tolérance digestive et hydrique.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 57.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 14,
          "type": "qcd",
          "text": "Le décubitus latéral gauche est une position citée pour l’endoscopie.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Elle est mentionnée pour FOGD et coloscopie.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 57.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 15,
          "type": "qcd",
          "text": "La saturation et la conscience sont surveillées pendant l’examen.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Elles complètent pouls et pression artérielle.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 57.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 16,
          "type": "qcd",
          "text": "Après sédation, une somnolence excessive est toujours rassurante.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "B Faux. Elle peut annoncer une complication de la sédation.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 57.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "originalNumber": 17,
          "type": "qcd",
          "text": "Une dépression respiratoire peut survenir après sédation.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Elle justifie une surveillance adaptée.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 57.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 18,
          "type": "qcd",
          "text": "La reprise alimentaire doit suivre les consignes médicales.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Elle dépend notamment de l’absence de complication.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 57 et 58.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 19,
          "type": "qcd",
          "text": "Un saignement est possible après biopsie ou polypectomie.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Il fait partie des complications à rechercher.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 58.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 20,
          "type": "qcd",
          "text": "La traçabilité des soins est inutile après une endoscopie.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "B Faux. Elle figure dans le rôle infirmier après l’examen.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 59.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "originalNumber": 21,
          "type": "qcm",
          "text": "Quelle exploration correspond à la FOGD ?",
          "options": [
            "Œsophage estomac duodénum",
            "Côlon uniquement",
            "Cavité péritonéale uniquement",
            "Rectum uniquement"
          ],
          "explanation": "A Œsophage estomac duodénum. La FOGD explore le haut du tube digestif.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 55.",
          "answers": [
            "Œsophage estomac duodénum"
          ],
          "correct": [
            "Œsophage estomac duodénum"
          ]
        },
        {
          "originalNumber": 22,
          "type": "qcm",
          "text": "Quelles indications de coloscopie sont citées ?",
          "options": [
            "Dépistage colorectal",
            "Rectorragies",
            "Dysphagie isolée comme indication principale",
            "Diarrhée chronique"
          ],
          "explanation": "A Dépistage colorectal ; B Rectorragies ; D Diarrhée chronique. Elles concernent l’exploration digestive basse.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 56.",
          "answers": [
            "Dépistage colorectal",
            "Rectorragies",
            "Diarrhée chronique"
          ],
          "correct": [
            "Dépistage colorectal",
            "Rectorragies",
            "Diarrhée chronique"
          ]
        },
        {
          "originalNumber": 23,
          "type": "qcm",
          "text": "Quelles vérifications sont prévues avant l’examen ?",
          "options": [
            "Identité",
            "Consentement",
            "Choix personnel d’une sédation sans prescription",
            "Prescription"
          ],
          "explanation": "A Identité ; B Consentement ; D Prescription. Ces vérifications sécurisent la prise en charge.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 56.",
          "answers": [
            "Identité",
            "Consentement",
            "Prescription"
          ],
          "correct": [
            "Identité",
            "Consentement",
            "Prescription"
          ]
        },
        {
          "originalNumber": 24,
          "type": "qcm",
          "text": "Quelles mesures figurent dans la préparation de FOGD ?",
          "options": [
            "Vérification des allergies",
            "Respect du jeûne prescrit",
            "Retrait des prothèses dentaires",
            "Repas solide juste avant"
          ],
          "explanation": "A Vérification des allergies ; B Respect du jeûne prescrit ; C Retrait des prothèses dentaires. Ces précautions sont décrites avant l’examen.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 56.",
          "answers": [
            "Vérification des allergies",
            "Respect du jeûne prescrit",
            "Retrait des prothèses dentaires"
          ],
          "correct": [
            "Vérification des allergies",
            "Respect du jeûne prescrit",
            "Retrait des prothèses dentaires"
          ]
        },
        {
          "originalNumber": 25,
          "type": "qcm",
          "text": "Quel est l’objectif de la préparation colique ?",
          "options": [
            "Évaluer la glycémie seule",
            "Provoquer une stase biliaire",
            "Nettoyer le côlon",
            "Augmenter le saignement"
          ],
          "explanation": "C Nettoyer le côlon. Un côlon propre améliore la qualité de visualisation.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 57.",
          "answers": [
            "Nettoyer le côlon"
          ],
          "correct": [
            "Nettoyer le côlon"
          ]
        },
        {
          "originalNumber": 26,
          "type": "qcm",
          "text": "Quels paramètres sont surveillés pendant l’endoscopie ?",
          "options": [
            "PA",
            "SpO2",
            "Uniquement l’appétit",
            "Pouls"
          ],
          "explanation": "A PA ; B SpO2 ; D Pouls. La conscience est également suivie.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 57.",
          "answers": [
            "PA",
            "SpO2",
            "Pouls"
          ],
          "correct": [
            "PA",
            "SpO2",
            "Pouls"
          ]
        },
        {
          "originalNumber": 27,
          "type": "qcm",
          "text": "Quelles complications de sédation faut il rechercher ?",
          "options": [
            "Dépression respiratoire",
            "Somnolence excessive",
            "Hypotension",
            "Reprise normale de la vigilance comme complication"
          ],
          "explanation": "A Dépression respiratoire ; B Somnolence excessive ; C Hypotension. Ces manifestations peuvent nécessiter une intervention.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 57.",
          "answers": [
            "Dépression respiratoire",
            "Somnolence excessive",
            "Hypotension"
          ],
          "correct": [
            "Dépression respiratoire",
            "Somnolence excessive",
            "Hypotension"
          ]
        },
        {
          "originalNumber": 28,
          "type": "qcm",
          "text": "Quelles complications majeures sont décrites ?",
          "options": [
            "Ballonnement modéré seul classé toujours majeur",
            "Perforation digestive",
            "Hémorragie",
            "Détresse respiratoire"
          ],
          "explanation": "B Perforation digestive ; C Hémorragie ; D Détresse respiratoire. Le chapitre distingue complications mineures et majeures.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 58.",
          "answers": [
            "Perforation digestive",
            "Hémorragie",
            "Détresse respiratoire"
          ],
          "correct": [
            "Perforation digestive",
            "Hémorragie",
            "Détresse respiratoire"
          ]
        },
        {
          "originalNumber": 29,
          "type": "qcm",
          "text": "Quels signes doivent être signalés après le retour ?",
          "options": [
            "Douleur importante",
            "Simple oubli d’un nom sans autre symptôme",
            "Fièvre",
            "Saignement anormal"
          ],
          "explanation": "A Douleur importante ; C Fièvre ; D Saignement anormal. L’éducation insiste sur ces signes d’alerte.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 58.",
          "answers": [
            "Douleur importante",
            "Fièvre",
            "Saignement anormal"
          ],
          "correct": [
            "Douleur importante",
            "Fièvre",
            "Saignement anormal"
          ]
        },
        {
          "originalNumber": 30,
          "type": "qcm",
          "text": "Quelle consigne est donnée après une sédation ?",
          "options": [
            "Ignorer une somnolence excessive",
            "Reprendre toute activité sans consigne",
            "Rentrer systématiquement seul",
            "Être accompagné au retour"
          ],
          "explanation": "D Être accompagné au retour. L’accompagnement est prévu dans l’éducation du patient.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 58.",
          "answers": [
            "Être accompagné au retour"
          ],
          "correct": [
            "Être accompagné au retour"
          ]
        }
      ]
    },
    {
      "id": "hepato-chapitre-14",
      "title": "Sujet 14 — Évaluation transversale",
      "matter": "Hépatogastroentérologie",
      "description": "60 questions corrigées",
      "instructions": "QCD : choisir Vrai ou Faux. QCM : choisir toutes les réponses exactes.",
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
      "filiere": "IDE",
      "questions": [
        {
          "originalNumber": 1,
          "type": "qcm",
          "text": "Un scanner met en évidence une nécrose pancréatique. Quelle forme est décrite ?",
          "options": [
            "Œsophagite médicamenteuse",
            "Gastrite chronique simple",
            "Pancréatite aiguë nécrosante",
            "RCH isolée"
          ],
          "explanation": "C Pancréatite aiguë nécrosante. La nécrose caractérise une forme potentiellement grave.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 37.",
          "answers": [
            "Pancréatite aiguë nécrosante"
          ],
          "correct": [
            "Pancréatite aiguë nécrosante"
          ]
        },
        {
          "originalNumber": 2,
          "type": "qcm",
          "text": "Un malade présente douleur de l’hypochondre droit, fièvre avec frissons et ictère. Quel tableau faut il suspecter ?",
          "options": [
            "Angiocholite",
            "Achalasie simple",
            "Gastrite atrophique isolée",
            "Hémorroïdes simples"
          ],
          "explanation": "A Angiocholite. Cette association correspond à la triade de Charcot.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 28.",
          "answers": [
            "Angiocholite"
          ],
          "correct": [
            "Angiocholite"
          ]
        },
        {
          "originalNumber": 3,
          "type": "qcm",
          "text": "Une douleur sous costale droite provoque un arrêt inspiratoire à la palpation. Quel signe est décrit ?",
          "options": [
            "Onde ascitique",
            "Astérixis",
            "Ténesme",
            "Murphy"
          ],
          "explanation": "D Murphy. Le signe de Murphy est décrit dans la cholécystite.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 25.",
          "answers": [
            "Murphy"
          ],
          "correct": [
            "Murphy"
          ]
        },
        {
          "originalNumber": 4,
          "type": "qcm",
          "text": "Quel ensemble permet le suivi infirmier d’une ascite ?",
          "options": [
            "Test respiratoire seul",
            "Poids, périmètre abdominal et diurèse",
            "Manométrie seule",
            "Lipase seule"
          ],
          "explanation": "B Poids, périmètre abdominal et diurèse. Ces paramètres suivent la rétention et son évolution.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 50.",
          "answers": [
            "Poids, périmètre abdominal et diurèse"
          ],
          "correct": [
            "Poids, périmètre abdominal et diurèse"
          ]
        },
        {
          "originalNumber": 5,
          "type": "qcd",
          "text": "Sans infection documentée, le cours recommande une antibiothérapie systématique de toute pancréatite.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "B Faux. Il ne recommande pas d’antibiotiques systématiques hors infection.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 37.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "originalNumber": 6,
          "type": "qcm",
          "text": "Un malade saigne et présente PA basse, pouls rapide et oligurie. Quel risque faut il rechercher ?",
          "options": [
            "Dysphagie bénigne",
            "Simple reflux sans retentissement",
            "Diabète nécessairement isolé",
            "Choc hypovolémique"
          ],
          "explanation": "D Choc hypovolémique. Ces signes traduisent une mauvaise tolérance circulatoire possible.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 45.",
          "answers": [
            "Choc hypovolémique"
          ],
          "correct": [
            "Choc hypovolémique"
          ]
        },
        {
          "originalNumber": 7,
          "type": "qcd",
          "text": "Une angiocholite obstructive s’améliore parfois par antibiothérapie et drainage biliaire. Ces deux axes sont complémentaires dans le cours.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Ils traitent l’infection et son obstacle favorisant.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 29 et 30.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 8,
          "type": "qcm",
          "text": "Un calcul migre vers l’ampoule de Vater avant une pancréatite. Quelle origine est évoquée ?",
          "options": [
            "Biliaire",
            "Colique exclusivement",
            "Neurologique oropharyngée",
            "Auto immune gastrique exclusivement"
          ],
          "explanation": "A Biliaire. L’obstruction ampullaire par un calcul est un mécanisme décrit.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 35.",
          "answers": [
            "Biliaire"
          ],
          "correct": [
            "Biliaire"
          ]
        },
        {
          "originalNumber": 9,
          "type": "qcm",
          "text": "Avant une éventuelle transfusion, quels examens sont cités ?",
          "options": [
            "Groupe sanguin",
            "Manométrie comme seul bilan",
            "Rhésus",
            "NFS"
          ],
          "explanation": "A Groupe sanguin ; C Rhésus ; D NFS. Ils participent à l’évaluation et à la préparation transfusionnelle.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 45.",
          "answers": [
            "Groupe sanguin",
            "Rhésus",
            "NFS"
          ],
          "correct": [
            "Groupe sanguin",
            "Rhésus",
            "NFS"
          ]
        },
        {
          "originalNumber": 10,
          "type": "qcd",
          "text": "Une tumeur biliaire obstructive peut se compliquer d’angiocholite.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. L’infection biliaire figure parmi les complications locales.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 32.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 11,
          "type": "qcd",
          "text": "Une CPRE peut être utilisée pour extraire un calcul responsable d’obstruction biliaire.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Elle peut réaliser extraction et drainage.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 29.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 12,
          "type": "qcd",
          "text": "La fibroscopie d’un patient permet de voir la muqueuse gastrique et de prélever des biopsies.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. La FOGD possède ces deux intérêts diagnostiques.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 10.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 13,
          "type": "qcd",
          "text": "Un patient est confus et sa saturation chute. Ces deux signes justifient une réévaluation urgente.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Ils correspondent à des signes de gravité neurologique et respiratoire.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 52.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 14,
          "type": "qcd",
          "text": "Une patiente atteinte de MICI présente une uvéite. L’atteinte oculaire exclut le lien avec sa maladie digestive.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "B Faux. Des manifestations oculaires extra digestives sont décrites.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 15.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "originalNumber": 15,
          "type": "qcm",
          "text": "Pendant une préparation colique, le patient tolère mal les laxatifs. Que faut il surveiller dans le cours ?",
          "options": [
            "Uniquement la couleur du drain biliaire",
            "Hydratation et tolérance digestive",
            "Uniquement la lipase",
            "Uniquement le réflexe rotulien"
          ],
          "explanation": "B Hydratation et tolérance digestive. La préparation peut avoir un retentissement digestif et hydrique.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 57.",
          "answers": [
            "Hydratation et tolérance digestive"
          ],
          "correct": [
            "Hydratation et tolérance digestive"
          ]
        },
        {
          "originalNumber": 16,
          "type": "qcm",
          "text": "Quelles mesures correspondent au suivi de la pancréatite chronique ?",
          "options": [
            "Substitution enzymatique prescrite",
            "Surveillance glycémique",
            "Arrêt autonome de toute alimentation",
            "Soutien au sevrage alcoolique"
          ],
          "explanation": "A Substitution enzymatique prescrite ; B Surveillance glycémique ; D Soutien au sevrage alcoolique. Le suivi traite déficits et facteurs de risque.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 41 et 42.",
          "answers": [
            "Substitution enzymatique prescrite",
            "Surveillance glycémique",
            "Soutien au sevrage alcoolique"
          ],
          "correct": [
            "Substitution enzymatique prescrite",
            "Surveillance glycémique",
            "Soutien au sevrage alcoolique"
          ]
        },
        {
          "originalNumber": 17,
          "type": "qcm",
          "text": "Un ictère s’installe progressivement avec prurit et amaigrissement. Quel groupe de maladies faut il notamment rechercher ?",
          "options": [
            "RCH obligatoirement",
            "Œsophagite isolée uniquement",
            "Tumeurs des voies biliaires",
            "Dysphagie neurologique seule"
          ],
          "explanation": "C Tumeurs des voies biliaires. Le cours décrit ce tableau cholestatique tumoral.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 32.",
          "answers": [
            "Tumeurs des voies biliaires"
          ],
          "correct": [
            "Tumeurs des voies biliaires"
          ]
        },
        {
          "originalNumber": 18,
          "type": "qcd",
          "text": "Chez un patient atteint de tumeur biliaire, nutrition et soutien psychologique sont étrangers au rôle infirmier.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "B Faux. Ils font partie de l’accompagnement prévu.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 33.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "originalNumber": 19,
          "type": "qcm",
          "text": "À l’accueil d’une urgence digestive, un soignant vérifie d’abord la liberté des voies aériennes. À quelle lettre de l’ABCDE cela correspond il ?",
          "options": [
            "D",
            "C",
            "B",
            "A"
          ],
          "explanation": "D A. Il s’agit de l’étape Airway.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 52.",
          "answers": [
            "A"
          ],
          "correct": [
            "A"
          ]
        },
        {
          "originalNumber": 20,
          "type": "qcd",
          "text": "La restriction hydrique doit être imposée automatiquement à toute ascite, sans indication individuelle.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "B Faux. Le cours ne la prévoit que si nécessaire.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 50.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "originalNumber": 21,
          "type": "qcm",
          "text": "Pour suivre une poussée de MICI, quels éléments recueillir ?",
          "options": [
            "Fréquence des selles",
            "Uniquement le périmètre abdominal une fois par an",
            "Douleur et état nutritionnel",
            "Présence de sang"
          ],
          "explanation": "A Fréquence des selles ; C Douleur et état nutritionnel ; D Présence de sang. Ces informations suivent activité et retentissement de la maladie.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 16.",
          "answers": [
            "Fréquence des selles",
            "Douleur et état nutritionnel",
            "Présence de sang"
          ],
          "correct": [
            "Fréquence des selles",
            "Douleur et état nutritionnel",
            "Présence de sang"
          ]
        },
        {
          "originalNumber": 22,
          "type": "qcm",
          "text": "Chez ce patient ascitique, une fièvre et une douleur abdominale apparaissent. Quelle complication doit être recherchée ?",
          "options": [
            "Achalasie simple",
            "RGO non compliqué uniquement",
            "Gastrite asymptomatique seule",
            "Péritonite bactérienne spontanée"
          ],
          "explanation": "D Péritonite bactérienne spontanée. Ces signes font évoquer une infection du liquide d’ascite.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 49.",
          "answers": [
            "Péritonite bactérienne spontanée"
          ],
          "correct": [
            "Péritonite bactérienne spontanée"
          ]
        },
        {
          "originalNumber": 23,
          "type": "qcm",
          "text": "Un patient atteint de pancréatite chronique a une lipase normale. Cela suffit il à exclure sa maladie ?",
          "options": [
            "Non",
            "Oui si le poids baisse",
            "Oui toujours",
            "Oui si un diabète est présent"
          ],
          "explanation": "A Non. Le cours précise que la lipase peut être normale.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 40.",
          "answers": [
            "Non"
          ],
          "correct": [
            "Non"
          ]
        },
        {
          "originalNumber": 24,
          "type": "qcm",
          "text": "La PA baisse et la diurèse diminue chez un patient infecté des voies biliaires. Quelle complication redouter ?",
          "options": [
            "Dysphagie isolée",
            "Gastrite asymptomatique",
            "Choc septique avec retentissement rénal",
            "Simple reflux sans gravité"
          ],
          "explanation": "C Choc septique avec retentissement rénal. Choc et insuffisance rénale font partie des complications.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 29 et 30.",
          "answers": [
            "Choc septique avec retentissement rénal"
          ],
          "correct": [
            "Choc septique avec retentissement rénal"
          ]
        },
        {
          "originalNumber": 25,
          "type": "qcm",
          "text": "Le patient s’améliore après stabilisation. Quelles actions restent prévues ?",
          "options": [
            "Soutien à l’observance",
            "Information de la famille",
            "Prévention de la dénutrition",
            "Suppression de toute traçabilité"
          ],
          "explanation": "A Soutien à l’observance ; B Information de la famille ; C Prévention de la dénutrition. L’accompagnement complète la prise en charge aiguë.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 53 et 54.",
          "answers": [
            "Soutien à l’observance",
            "Information de la famille",
            "Prévention de la dénutrition"
          ],
          "correct": [
            "Soutien à l’observance",
            "Information de la famille",
            "Prévention de la dénutrition"
          ]
        },
        {
          "originalNumber": 26,
          "type": "qcm",
          "text": "Un patient vomit du sang rouge. Comment nommer cette manifestation ?",
          "options": [
            "Hématémèse",
            "Stéatorrhée",
            "Rectorragie",
            "Pyrosis"
          ],
          "explanation": "A Hématémèse. Il s’agit d’un vomissement sanglant.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 44.",
          "answers": [
            "Hématémèse"
          ],
          "correct": [
            "Hématémèse"
          ]
        },
        {
          "originalNumber": 27,
          "type": "qcm",
          "text": "Une personne immunodéprimée présente une œsophagite. Quelles causes infectieuses sont citées ?",
          "options": [
            "Candida",
            "Calcul cholédocien",
            "CMV",
            "Herpès simplex"
          ],
          "explanation": "A Candida ; C CMV ; D Herpès simplex. Ces trois agents sont cités parmi les causes infectieuses.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 4.",
          "answers": [
            "Candida",
            "CMV",
            "Herpès simplex"
          ],
          "correct": [
            "Candida",
            "CMV",
            "Herpès simplex"
          ]
        },
        {
          "originalNumber": 28,
          "type": "qcm",
          "text": "Au tableau précédent s’ajoutent choc et confusion. Quelle association nommée décrit cette gravité ?",
          "options": [
            "Pentade de Reynolds",
            "Score d’Apgar",
            "Signe de Murphy isolé",
            "Triade de Virchow"
          ],
          "explanation": "A Pentade de Reynolds. Reynolds ajoute choc et troubles de conscience à Charcot.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 28.",
          "answers": [
            "Pentade de Reynolds"
          ],
          "correct": [
            "Pentade de Reynolds"
          ]
        },
        {
          "originalNumber": 29,
          "type": "qcd",
          "text": "Une patiente maigrit car elle ne peut plus avaler normalement. Le suivi du poids et de l’hydratation fait partie des soins.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. La dysphagie expose à la dénutrition et à la déshydratation.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 7.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 30,
          "type": "qcm",
          "text": "Une coloscopie montre des lésions discontinues et une atteinte iléale. Quelle MICI est la plus compatible avec cette description ?",
          "options": [
            "Cholécystite",
            "RCH typique",
            "Gastrite aiguë",
            "Crohn"
          ],
          "explanation": "D Crohn. Crohn peut atteindre l’iléon avec des lésions en saut.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 14.",
          "answers": [
            "Crohn"
          ],
          "correct": [
            "Crohn"
          ]
        },
        {
          "originalNumber": 31,
          "type": "qcm",
          "text": "Un patient traité contre H. pylori veut arrêter seul ses médicaments. Quel objectif éducatif retenir ?",
          "options": [
            "Reprise de l’alcool pour stimuler la digestion",
            "Arrêt dès disparition de la douleur",
            "Respect du traitement prescrit",
            "Prise libre d’AINS"
          ],
          "explanation": "C Respect du traitement prescrit. Le cours insiste sur l’observance du traitement.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 11.",
          "answers": [
            "Respect du traitement prescrit"
          ],
          "correct": [
            "Respect du traitement prescrit"
          ]
        },
        {
          "originalNumber": 32,
          "type": "qcm",
          "text": "Après un AVC, un patient tousse au cours des repas. Quel risque doit être recherché en priorité dans ce chapitre ?",
          "options": [
            "Fausse route",
            "Ascite néoplasique",
            "Cholestase tumorale",
            "Calcification pancréatique"
          ],
          "explanation": "A Fausse route. Un trouble oropharyngé expose à l’inhalation.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 6 et 7.",
          "answers": [
            "Fausse route"
          ],
          "correct": [
            "Fausse route"
          ]
        },
        {
          "originalNumber": 33,
          "type": "qcd",
          "text": "L’infirmier surveille conscience, diurèse et périmètre abdominal chez un insuffisant hépatique. Ces trois éléments relèvent du suivi prévu.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Ils font partie des paramètres cliniques à surveiller.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 22.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 34,
          "type": "qcm",
          "text": "Une gastrite atrophique s’accompagne d’une baisse du facteur intrinsèque. Quelle carence est à rechercher dans le cours ?",
          "options": [
            "Lipase",
            "Sodium exclusivement",
            "Vitamine B12",
            "Glucose"
          ],
          "explanation": "C Vitamine B12. La carence en B12 peut provoquer une anémie.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 10.",
          "answers": [
            "Vitamine B12"
          ],
          "correct": [
            "Vitamine B12"
          ]
        },
        {
          "originalNumber": 35,
          "type": "qcd",
          "text": "Un patient atteint de Crohn développe une fistule. Cette complication est compatible avec le cours.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. La fistule figure parmi les complications de Crohn.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 15.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 36,
          "type": "qcm",
          "text": "Un patient atteint de pancréatite aiguë présente détresse respiratoire et hypotension. Quels éléments sont présents ?",
          "options": [
            "Signes de gravité",
            "Risque de défaillance d’organes",
            "Signes garantissant une forme bénigne",
            "Indication d’évaluation urgente"
          ],
          "explanation": "A Signes de gravité ; B Risque de défaillance d’organes ; D Indication d’évaluation urgente. Le retentissement respiratoire et circulatoire impose une surveillance accrue.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 36 et 37.",
          "answers": [
            "Signes de gravité",
            "Risque de défaillance d’organes",
            "Indication d’évaluation urgente"
          ],
          "correct": [
            "Signes de gravité",
            "Risque de défaillance d’organes",
            "Indication d’évaluation urgente"
          ]
        },
        {
          "originalNumber": 37,
          "type": "qcm",
          "text": "Une endoprothèse est placée pour améliorer le drainage sans résection tumorale. Quel objectif est décrit ?",
          "options": [
            "Guérison histologique automatiquement acquise",
            "Prévention des fausses routes uniquement",
            "Substitution endocrine",
            "Palliatif"
          ],
          "explanation": "D Palliatif. Le drainage avec prothèse figure dans les soins palliatifs.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 33.",
          "answers": [
            "Palliatif"
          ],
          "correct": [
            "Palliatif"
          ]
        },
        {
          "originalNumber": 38,
          "type": "qcm",
          "text": "Un patient prend des AINS sans avis médical puis présente des épigastralgies. Quel facteur faut il relever ?",
          "options": [
            "MICI confirmée",
            "Obstruction cystique prouvée",
            "Déficit endocrine pancréatique certain",
            "Agression médicamenteuse gastrique"
          ],
          "explanation": "D Agression médicamenteuse gastrique. Les AINS figurent parmi les causes de gastrite aiguë.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 9.",
          "answers": [
            "Agression médicamenteuse gastrique"
          ],
          "correct": [
            "Agression médicamenteuse gastrique"
          ]
        },
        {
          "originalNumber": 39,
          "type": "qcm",
          "text": "Une atteinte continue part du rectum et reste rectocolique. Quelle maladie est évoquée ?",
          "options": [
            "Pancréatite chronique",
            "Angiocholite",
            "RCH",
            "Œsophagite caustique"
          ],
          "explanation": "C RCH. La RCH associe continuité et localisation rectocolique.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 14.",
          "answers": [
            "RCH"
          ],
          "correct": [
            "RCH"
          ]
        },
        {
          "originalNumber": 40,
          "type": "qcd",
          "text": "Une dysphagie persistante doit être considérée comme toujours bénigne sans exploration.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "B Faux. Une sténose ou une tumeur peuvent être en cause.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 6 et 7.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "originalNumber": 41,
          "type": "qcm",
          "text": "Une douleur épigastrique brutale irradie au dos avec vomissements. Quel dosage est prioritairement cité pour rechercher une pancréatite aiguë ?",
          "options": [
            "TSH",
            "INR seul",
            "Vitamine B12",
            "Lipase"
          ],
          "explanation": "D Lipase. La lipasémie est l’examen biologique de référence du chapitre.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 36.",
          "answers": [
            "Lipase"
          ],
          "correct": [
            "Lipase"
          ]
        },
        {
          "originalNumber": 42,
          "type": "qcm",
          "text": "Un prélèvement tumoral est étudié au microscope. Quel examen contribue à la confirmation ?",
          "options": [
            "Manométrie",
            "HbA1c seule",
            "Anatomopathologie",
            "pH métrie"
          ],
          "explanation": "C Anatomopathologie. La confirmation histologique repose sur l’étude tissulaire.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 32.",
          "answers": [
            "Anatomopathologie"
          ],
          "correct": [
            "Anatomopathologie"
          ]
        },
        {
          "originalNumber": 43,
          "type": "qcm",
          "text": "Un calcul est enclavé dans le canal cystique. Quelle affection ce mécanisme favorise t il ?",
          "options": [
            "Cholécystite",
            "RCH",
            "Gastrite auto immune",
            "Œsophagite infectieuse"
          ],
          "explanation": "A Cholécystite. L’obstacle provoque stase et inflammation vésiculaire.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 24.",
          "answers": [
            "Cholécystite"
          ],
          "correct": [
            "Cholécystite"
          ]
        },
        {
          "originalNumber": 44,
          "type": "qcd",
          "text": "Après hémostase endoscopique, la surveillance d’une récidive de saignement reste nécessaire.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Le traitement initial ne supprime pas la nécessité du suivi.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 46 et 47.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 45,
          "type": "qcm",
          "text": "Un malade du foie devient confus et somnolent avec astérixis. Quelle complication faut il évoquer ?",
          "options": [
            "Achalasie",
            "Encéphalopathie hépatique",
            "Gastrite simple isolée",
            "Hémorroïdes"
          ],
          "explanation": "B Encéphalopathie hépatique. Ces manifestations neurologiques sont citées dans l’encéphalopathie.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 20 et 21.",
          "answers": [
            "Encéphalopathie hépatique"
          ],
          "correct": [
            "Encéphalopathie hépatique"
          ]
        },
        {
          "originalNumber": 46,
          "type": "qcm",
          "text": "Un patient a des selles grasses, volumineuses et luisantes. Quel déficit pancréatique est évoqué ?",
          "options": [
            "Motricité pharyngée uniquement",
            "Endocrine uniquement",
            "Synthèse hépatique uniquement",
            "Exocrine"
          ],
          "explanation": "D Exocrine. La stéatorrhée traduit une maldigestion des graisses.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 40.",
          "answers": [
            "Exocrine"
          ],
          "correct": [
            "Exocrine"
          ]
        },
        {
          "originalNumber": 47,
          "type": "qcm",
          "text": "Quels objectifs guident la réanimation initiale ?",
          "options": [
            "Attendre l’arrêt complet de la diurèse",
            "Prévenir les défaillances",
            "Restaurer la volémie si nécessaire",
            "Maintenir l’oxygénation"
          ],
          "explanation": "B Prévenir les défaillances ; C Restaurer la volémie si nécessaire ; D Maintenir l’oxygénation. Les soins cherchent à préserver les fonctions vitales.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 53.",
          "answers": [
            "Prévenir les défaillances",
            "Restaurer la volémie si nécessaire",
            "Maintenir l’oxygénation"
          ],
          "correct": [
            "Prévenir les défaillances",
            "Restaurer la volémie si nécessaire",
            "Maintenir l’oxygénation"
          ]
        },
        {
          "originalNumber": 48,
          "type": "qcm",
          "text": "Pour rechercher une cholécystite, quelle imagerie est citée en première intention ?",
          "options": [
            "pH métrie",
            "Échographie abdominale",
            "Coloscopie",
            "Manométrie œsophagienne"
          ],
          "explanation": "B Échographie abdominale. Elle recherche calculs, distension et épaississement pariétal.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 25.",
          "answers": [
            "Échographie abdominale"
          ],
          "correct": [
            "Échographie abdominale"
          ]
        },
        {
          "originalNumber": 49,
          "type": "qcm",
          "text": "Après décision de cholécystectomie, quel soin relève du rôle infirmier ?",
          "options": [
            "Préparation préopératoire et surveillance des perfusions",
            "Suppression de toute mesure de température",
            "Arrêt autonome des antibiotiques",
            "Extraction d’un calcul au lit sans prescription"
          ],
          "explanation": "A Préparation préopératoire et surveillance des perfusions. La préparation et la surveillance sont décrites dans le chapitre.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 26.",
          "answers": [
            "Préparation préopératoire et surveillance des perfusions"
          ],
          "correct": [
            "Préparation préopératoire et surveillance des perfusions"
          ]
        },
        {
          "originalNumber": 50,
          "type": "qcd",
          "text": "Une destruction des îlots de Langerhans peut expliquer un diabète au cours d’une pancréatite chronique.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Elle altère la fonction endocrine.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 40.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 51,
          "type": "qcd",
          "text": "Un patient grave en réanimation présente une inflammation vésiculaire sans calcul. Cette forme est possible.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Le cours décrit la cholécystite alithiasique sur ce terrain.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 24.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 52,
          "type": "qcm",
          "text": "Un surdosage en paracétamol est rapporté avant une défaillance hépatique rapide. Quelle catégorie étiologique retenir ?",
          "options": [
            "Médicamenteuse",
            "Uniquement génétique",
            "Toujours tumorale",
            "Toujours parasitaire"
          ],
          "explanation": "A Médicamenteuse. Le surdosage est cité parmi les causes aiguës.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 19.",
          "answers": [
            "Médicamenteuse"
          ],
          "correct": [
            "Médicamenteuse"
          ]
        },
        {
          "originalNumber": 53,
          "type": "qcd",
          "text": "Dans une gastrite chronique, l’absence de douleur exclut toute lésion gastrique.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "B Faux. La gastrite chronique peut être asymptomatique.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 10.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "originalNumber": 54,
          "type": "qcm",
          "text": "Un patient cirrhotique a un abdomen distendu et une matité déclive. Quel épanchement rechercher ?",
          "options": [
            "Pneumothorax",
            "Ascite",
            "Épanchement péricardique uniquement",
            "Collection œsophagienne"
          ],
          "explanation": "B Ascite. Ces signes évoquent du liquide dans la cavité péritonéale.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 48 et 49.",
          "answers": [
            "Ascite"
          ],
          "correct": [
            "Ascite"
          ]
        },
        {
          "originalNumber": 55,
          "type": "qcm",
          "text": "Un patient décrit une brûlure derrière le sternum avec remontées acides. Quel terme désigne cette brûlure ?",
          "options": [
            "Stéatorrhée",
            "Ascite",
            "Pyrosis",
            "Méléna"
          ],
          "explanation": "C Pyrosis. Le pyrosis correspond à la brûlure rétrosternale décrite dans le cours.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 5.",
          "answers": [
            "Pyrosis"
          ],
          "correct": [
            "Pyrosis"
          ]
        },
        {
          "originalNumber": 56,
          "type": "qcm",
          "text": "Après retour à domicile, quels signes nécessitent un signalement rapide ?",
          "options": [
            "Douleur importante",
            "Saignement anormal",
            "Fièvre",
            "Absence de symptôme seule"
          ],
          "explanation": "A Douleur importante ; B Saignement anormal ; C Fièvre. Ces signes d’alerte figurent dans l’éducation post endoscopie.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 58.",
          "answers": [
            "Douleur importante",
            "Saignement anormal",
            "Fièvre"
          ],
          "correct": [
            "Douleur importante",
            "Saignement anormal",
            "Fièvre"
          ]
        },
        {
          "originalNumber": 57,
          "type": "qcd",
          "text": "Chez un insuffisant hépatique, le TP diminue et l’INR augmente. Ce profil peut traduire une atteinte de la synthèse des facteurs de coagulation.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Le cours associe ce profil au risque hémorragique.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 18 et 21.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 58,
          "type": "qcm",
          "text": "Avant une FOGD, quelles vérifications sont prévues ?",
          "options": [
            "Retrait des prothèses dentaires",
            "Identité et consentement",
            "Repas solide immédiatement avant",
            "Allergies"
          ],
          "explanation": "A Retrait des prothèses dentaires ; B Identité et consentement ; D Allergies. La préparation associe sécurité administrative et clinique.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 56.",
          "answers": [
            "Retrait des prothèses dentaires",
            "Identité et consentement",
            "Allergies"
          ],
          "correct": [
            "Retrait des prothèses dentaires",
            "Identité et consentement",
            "Allergies"
          ]
        },
        {
          "originalNumber": 59,
          "type": "qcm",
          "text": "Une baisse d’albumine s’accompagne d’œdèmes. Quelle fonction hépatique est notamment en cause ?",
          "options": [
            "Production d’insuline exclusivement",
            "Sécrétion de facteur intrinsèque",
            "Motricité œsophagienne",
            "Synthèse protéique"
          ],
          "explanation": "D Synthèse protéique. Le foie produit l’albumine ; sa diminution favorise les œdèmes.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 18 et 19 et 20.",
          "answers": [
            "Synthèse protéique"
          ],
          "correct": [
            "Synthèse protéique"
          ]
        },
        {
          "originalNumber": 60,
          "type": "qcd",
          "text": "Après sédation endoscopique, une somnolence excessive avec respiration déprimée nécessite une surveillance et une alerte adaptées.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "A Vrai. Ces manifestations sont des complications possibles de la sédation.",
          "source": "HEPATOGASTRO ENTEROLOGIE (1).pdf — PDF p. 57. Référence Cours harmonisé d’hépatogastroentérologie, document fourni HEPATOGASTRO ENTEROLOGIE (1).pdf. Sommaire p. PDF 2, chapitres p. PDF 3 à 59. Les questions reformulent les notions du support pour l’entraînement.",
          "answer": "Vrai",
          "correct": "Vrai"
        }
      ]
    },
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
      "filiere": "SFM"
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
      "filiere": "SFM"
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
            <div class="filiere-buttons"><button class="student-start-btn" aria-pressed="${window.selectedFiliere === 'IDE'}" onclick="selectFiliere('IDE')">IDE : Hépatogastroentérologie</button><button class="student-start-btn" aria-pressed="${window.selectedFiliere === 'SFM'}" onclick="selectFiliere('SFM')">SFM : SONU</button></div>
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
