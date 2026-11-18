// Données obligatoires des 8 activités du Cap Bon
const ACTIVITIES = [
  {
    id: "A01",
    titre: "Découverte de la médina — Nabeul",
    lieu: "Nabeul",
    categorie: "Culture",
    duree: "2 h",
    prix: 20,
    image: "images/a01.jpg",
    alt: "Ruelle traditionnelle animée de la médina de Nabeul",
    accroche: "Plongez au cœur de l’histoire et des ruelles parfumées de Nabeul.",
    description: "Parcourez les souks historiques de Nabeul accompagné d’un guide local passionné. Vous découvrirez l’architecture traditionnelle, les ateliers d’artisans et les places emblématiques de la vieille ville. Cette visite immersive retrace l’évolution culturelle de la capitale du Cap Bon à travers les siècles."
  },
  {
    id: "A02",
    titre: "Atelier d’initiation à la poterie — Nabeul",
    lieu: "Nabeul",
    categorie: "Artisanat",
    duree: "1 h 30",
    prix: 35,
    image: "images/a02.jpg",
    alt: "Mains façonnant de l'argile sur un tour de potier à Nabeul",
    accroche: "Façonnez votre propre pièce d’argile aux côtés d’un maître potier.",
    description: "Initiation pratique aux gestes ancestraux du tournage et du modelage de l’argile dans un atelier traditionnel de Nabeul. Un artisan vous guide étape par étape pour préparer la terre et façonner votre premier objet en poterie. Vous repartez avec une compréhension concrète de ce savoir-faire emblématique de la région."
  },
  {
    id: "A03",
    titre: "Parcours découverte de Kerkouane — Kerkouane",
    lieu: "Kerkouane",
    categorie: "Culture",
    duree: "2 h 30",
    prix: 30,
    image: "images/a03.jpg",
    alt: "Vestiges antiques de la cité punique de Kerkouane face à la mer",
    accroche: "Explorez l’unique cité punique préservée au monde face à la Méditerranée.",
    description: "Visitez le site archéologique de Kerkouane, classé au patrimoine mondial de l’UNESCO, surplombant une côte sauvage spectaculaire. Le parcours dévoile l’urbanisme antique, les habitations dotées de salles d’eau et les mosaïques puniques d’origine. Une plongée fascinante dans l’histoire méditerranéenne du Cap Bon."
  },
  {
    id: "A04",
    titre: "Randonnée découverte — Djebel Abderrahmane",
    lieu: "Djebel Abderrahmane",
    categorie: "Nature",
    duree: "3 h",
    prix: 25,
    image: "images/a04.jpg",
    alt: "Sentier de randonnée verdoyant au Djebel Abderrahmane",
    accroche: "Prenez de la hauteur sur les sentiers boisés du massif du Cap Bon.",
    description: "Partez pour une randonnée accessible à travers les forêts et crêtes panoramiques du Djebel Abderrahmane. Votre guide vous fait découvrir la flore méditerranéenne locale ainsi que des points de vue dégagés sur l’ensemble de la péninsule. Une sortie idéale pour les amateurs de nature et de grand air."
  },
  {
    id: "A05",
    titre: "Circuit du littoral — Kélibia",
    lieu: "Kélibia",
    categorie: "Nature",
    duree: "3 h",
    prix: 40,
    image: "images/a05.jpg",
    alt: "Côte rocheuse et eaux turquoise du littoral de Kélibia",
    accroche: "Longez les criques turquoise et les falaises sauvages de Kélibia.",
    description: "Ce circuit côtier vous emmène à la découverte des paysages marins préservés autour de Kélibia, au pied de sa célèbre forteresse. Vous observerez des criques aux eaux limpides, des formations rocheuses naturelles et la biodiversité du littoral. Une expérience ressourçante entre mer et patrimoine naturel."
  },
  {
    id: "A06",
    titre: "Peinture sur céramique — Nabeul",
    lieu: "Nabeul",
    categorie: "Artisanat",
    duree: "2 h",
    prix: 25,
    image: "images/a06.jpg",
    alt: "Assiettes en céramique peintes avec des motifs traditionnels colorés",
    accroche: "Initiez-vous aux motifs géométriques et floraux de la céramique nabeulienne.",
    description: "Découvrez l’art de la décoration sur céramique émaillée dans un atelier créatif au cœur de Nabeul. Après une présentation des pigments naturels et des motifs traditionnels, vous décorez votre propre carreau ou assiette. Cet atelier convivial convient aussi bien aux débutants qu’aux passionnés d’arts décoratifs."
  },
  {
    id: "A07",
    titre: "Découverte d’un marché local — Nabeul",
    lieu: "Nabeul",
    categorie: "Découverte",
    duree: "1 h 30",
    prix: 15,
    image: "images/a07.jpg",
    alt: "Étals colorés d'épices et de produits frais au marché de Nabeul",
    accroche: "Éveillez vos sens au milieu des épices, agrumes et produits du terroir.",
    description: "Accompagné d’un habitué des lieux, flânez entre les étals animés du marché hebdomadaire de Nabeul. Vous apprendrez à reconnaître les épices locales, les variétés d’agrumes du Cap Bon et les spécialités culinaires de saison. Une rencontre authentique avec les producteurs et commerçants de la région."
  },
  {
    id: "A08",
    titre: "Promenade photographique — Hammamet",
    lieu: "Hammamet",
    categorie: "Découverte",
    duree: "2 h",
    prix: 30,
    image: "images/a08.jpg",
    alt: "Architecture blanche et lumière méditerranéenne à Hammamet",
    accroche: "Capturez la lumière unique et les remparts blancs de Hammamet.",
    description: "Parcourez les ruelles blanches, les remparts historiques et le front de mer de Hammamet lors d’une balade dédiée à la photographie. L’itinéraire met l’accent sur les jeux d’ombre et de lumière, les portes traditionnelles et les panoramas côtiers. Accessible avec un simple smartphone ou un appareil photo."
  }
];
