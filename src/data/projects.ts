export interface ProjectMeta {
  label: string;
  value: string;
}

export interface ExternalLink {
  icon: string;
  tag: string;
  title: string;
  desc: string;
  url: string;
  btnText: string;
}

export interface ProjectData {
  slug: string;
  title: string;
  subtitle: string;
  badge: string;
  heroImage: string;
  metaTitle: string;
  metaDescription: string;
  galleryImages: string[];
  mainHeading: string;
  leadParagraph: string;
  paragraphs: string[];
  quote?: string;
  externalLinks?: ExternalLink[];
  sidebarMeta: ProjectMeta[];
  embeddedVideoYoutubeUrl?: string;
  prevProject?: { slug: string; title: string };
  nextProject?: { slug: string; title: string };
}

export const projectsData: Record<string, ProjectData> = {
  'east-bayside': {
    slug: 'east-bayside',
    title: 'East Bayside Community Mosaic',
    subtitle: 'Une œuvre collaborative unissant la communauté de Portland à travers l\'art de la mosaïque',
    badge: 'Mosaïque Murale Communautaire',
    heroImage: 'project-east-bayside/a.webp',
    metaTitle: 'East Bayside Community Mosaic | Muhsana Ali',
    metaDescription: 'Découvrez le projet East Bayside Community Mosaic par Muhsana Ali - Mosaïque murale communautaire réalisée avec les résidents d\'East Bayside à Portland, Maine.',
    galleryImages: [
      "project-east-bayside/a.webp", "project-east-bayside/b.webp", "project-east-bayside/c.webp", "project-east-bayside/d.webp", "project-east-bayside/e.webp", "project-east-bayside/f.webp", "project-east-bayside/g.webp", "project-east-bayside/h.webp", "project-east-bayside/i.webp", "project-east-bayside/j.webp", "project-east-bayside/k.webp", "project-east-bayside/l.webp", "project-east-bayside/m.webp", "project-east-bayside/n.webp", "project-east-bayside/o.webp", "project-east-bayside/p.webp", "project-east-bayside/q.webp", "project-east-bayside/r.webp", "project-east-bayside/s.webp", "project-east-bayside/t.webp", "project-east-bayside/v.webp", "project-east-bayside/w.webp", "project-east-bayside/x.webp", "project-east-bayside/y.webp"
    ],
    mainHeading: 'East Bayside a neighborhood in the throes of gentrification in Portland, Maine.',
    leadParagraph: 'This mural, located on a vibrant corner in the ethnically diverse Bayside neighborhood of Portland, was designed by USM Artist-in-Residence Muhsana Ali in 2016. The configuration with footprints spiraling out from its nucleus emphasizes humanity’s common origins. The colors and wave-like forms that emerge from the spiral emphasize diversity and the various paths we take. Ali is an internationally-recognized artist based in Senegal who works in many media to create conceptual community-centered art.',
    paragraphs: [
      'The project was organized by the USM Artist-in-Residence program in collaboration with the School of Social Work and Coffee by Design. Muhsana Ali and Dr. Paula Gerstenblatt taught a class that created an opportunity for USM students and community members to work together. As a group they gave voice to the experiences of living and working in East Bayside through the collaborative creation of the mosaic mural.',
      'Over one hundred USM students and several hundred East Bayside community members participated in the mural project. The artist and her collaborators adhered glass paintings to the wall along with cut mirror, tiles, ceramic pieces, and a mixture of pigmented concrete and sand. Special mention is given to Senegalese artist, Amadou Kane Sy, Ali’s husband and colleague, who assisted in the creation of the mural. Special thanks to USM art alumna Mia Bogyo and USM art intern Kayla Frost, as well as to all those who worked on the mural.',
      'This project could not have been completed without the generous contributions of Coffee by Design, Redfern Properties, the USM Office of the President, the Running with Scissors artist community, an anonymous community donor, and all those who donated materials.'
    ],
    quote: '–Carolyn Eyler, USM Director of Exhibitions and Programs',
    externalLinks: [
      {
        icon: '🏛️',
        tag: 'University of Southern Maine Gallery (2016)',
        title: 'Muhsana Ali: East Bayside Community Mosaic Mural',
        desc: 'Consultez la fiche d\'exposition officielle et la documentation institutionnelle sur le site de l\'Université de Southern Maine.',
        url: 'https://usm.maine.edu/gallery/2016-muhsana-ali-east-bayside-community-mosaic-mural/',
        btnText: 'Lire l\'article officiel'
      }
    ],
    sidebarMeta: [
      { label: 'Année / Période', value: '2015 - 2018' },
      { label: 'Lieu', value: 'Portland, Maine (États-Unis)' },
      { label: 'Médium', value: 'Mosaïque murale participative, céramique, verre, miroirs' },
      { label: 'Partenaires & Institutions', value: 'University of Southern Maine, Résidents d\'East Bayside' },
      { label: 'Catégorie', value: 'Art Communautaire & Mosaïque' }
    ],
    prevProject: { slug: 'association', title: 'Association Portes & Passages' },
    nextProject: { slug: 'mart', title: 'Mart Community Project' }
  },

  'mart': {
    slug: 'mart',
    title: 'Mart Community Project',
    subtitle: 'Créations collectives et fresques murales participatives avec la jeunesse',
    badge: 'Urbain & Mosaïque',
    heroImage: 'project-mart/1.webp',
    metaTitle: 'Mart Community Project | Muhsana Ali',
    metaDescription: 'Découvrez le Mart Community Project par Muhsana Ali - Créations collectives et fresques murales participatives avec la jeunesse.',
    galleryImages: [
      "project-mart/1.webp", "project-mart/2.webp", "project-mart/3.webp", "project-mart/4.webp", "project-mart/5.webp", "project-mart/6.webp", "project-mart/7.webp", "project-mart/8.webp", "project-mart/9.webp", "project-mart/10.webp", "project-mart/11.webp", "project-mart/12.webp", "project-mart/DSC_9550_edited.webp", "project-mart/IN PROGRESS MOSAIC TREE, SCULPTURE MART.webp"
    ],
    mainHeading: 'Mart community project',
    leadParagraph: 'The Mart Community Project, officially established in 2011, was a multifaceted, collaborative initiative designed to inspire individual and community transformation, inspire racial harmony, promote economic revitalization, and encourage educational innovation in the town of Mart, Texas. This experimental project was driven by a unique collaboration between the residents of Mart, Mart ISD, local and international artists, the Baylor University Oral History Institute, and multiple departments and schools at the University of Texas at Austin.',
    paragraphs: [
      'In 2007 American artist, social worker and grant writer, Paula Gerstenblatt collaborated with the association Portes et Passages to gain funding from the American Institute of Architects for the association’s first earth construction on the land of their Center for art and Holistic Development in Mbodiene, Senegal. The project involved collaboration with architecture students from the University of Michigan at Ann Arbor. During this time, Gerstenblatt collaborated with Muhsana and their professor of architecture, Coleman Jordan, to direct the students in the creation of a design-build installation on the land.',
      'Inspired by this project, in 2008, Paula Gerstenblatt, a member of a Mart family by marriage, facilitated the construction of an art installation on her family’s land. The installation on the Davis family land became the catalyst for several oral history and community building programs in Mart which engendered MCP.',
      'Muhsana was first invited in 2009 to engage with the residents of Mart and again in 2010, when she initiated a number of children’s programs and produced her first community mosaic with the residents of Mart, Texas. In 2011, she returned with artist, Amadou Kane Sy (Kan-si) and their three children to engage over a period of three months with the community.',
      'Recognizing the community’s love for American Football, the artists chose it as a theme for the major work they would produce in collaboration with Mart residents on the concession stand of a former beloved football field, which held cherished memories for the entire community. Muhsana again returned to Mart in 2012 to produce a giant tree sculpture which the community worked to mosaic, entitled : “Family Tree”.',
      'The experience was a major success in not only revitalizing the town of Mart, but in establishing positive interracial exchange and wide ranging participation and enthusiasm from the town’s residents. With the Sy family appearing weekly on the front page of the town’s newspaper, the community members deemed what they had achieved as something they called “Mart Magic”: a new love and appreciation for their community and the energy and enthusiasm to transform it into something better for everyone.'
    ],
    externalLinks: [
      {
        icon: '🎬',
        tag: 'Documentaire Vidéo Officiel',
        title: 'Mart Community Project Video',
        desc: 'Découvrez l\'histoire et les moments clés du projet communautaire à Mart, Texas en vidéo.',
        url: 'https://vimeo.com/44746197',
        btnText: 'Regarder sur Vimeo'
      }
    ],
    sidebarMeta: [
      { label: 'Type', value: 'Art Urbain Participatif & Mosaïque' },
      { label: 'Public Cible', value: 'Jeunesse locale & Communauté urbaine' },
      { label: 'Matériaux', value: 'Mosaïque de verre, céramique, mortier, pigments' },
      { label: 'Directrice Artistique', value: 'Muhsana Ali' }
    ],
    prevProject: { slug: 'east-bayside', title: 'East Bayside Community Mosaic' },
    nextProject: { slug: 'jen-rekk', title: 'Série Jën Rekk' }
  },

  'jen-rekk': {
    slug: 'jen-rekk',
    title: 'Série Jën Rekk',
    subtitle: 'Sculptures explorant la vie côtière, l\'océan et la culture maritime du Sénégal',
    badge: 'Sculpture & Installation',
    heroImage: 'project-jen-rekk/1.webp',
    metaTitle: 'Série Jën Rekk | Muhsana Ali',
    metaDescription: 'Découvrez la Série Jën Rekk par Muhsana Ali - Sculptures et installations explorant la vie côtière et l\'écosystème marin sénégalais.',
    galleryImages: [
      "project-jen-rekk/1.webp", "project-jen-rekk/2.webp", "project-jen-rekk/3.webp", "project-jen-rekk/4.webp", "project-jen-rekk/5.webp", "project-jen-rekk/6.webp", "project-jen-rekk/7.webp", "project-jen-rekk/8.webp", "project-jen-rekk/9.webp", "project-jen-rekk/10.webp", "project-jen-rekk/11.webp", "project-jen-rekk/12.webp", "project-jen-rekk/13.webp", "project-jen-rekk/14.webp", "project-jen-rekk/15.webp", "project-jen-rekk/16.webp"
    ],
    mainHeading: 'Jen Rekk Project',
    leadParagraph: 'Jën Rekk (Just Fish) is a project initiated by the association, Portes et Passages du Retour, which was conceived of first and foremost with the aim of doing something in the city of Joal-Fadiuth that could have an impact on the mentality of the people who live there. This town has long been targeted by non-profit organizations bringing standardized “development projects” in the form of a standard package. The aim of the Jën Rekk project is to present development in a different light, to encourage the people to define it by using a creative approach. "Jën" (fish) is the major preoccupation of the people of Joal-Fadiouth, home to Senegal’s largest fishing port.',
    paragraphs: [
      'Senegal is facing a major problem with the disappearance of fish in Senegal and on the West African coast caused by the illegal overfishing by oversized fishing vessels from Europe, China and Russia. Local artisanal fishermen are finding it hard to find fish because of these ships and are increasingly forced to go far out to sea in search of fish. Many are unfortunately losing their lives in the process. Our association initiated this project in order to bring public awareness to this very serious national problem. Jën Rekk, was also created in a symbolic effort to aesthetically return the fish to the town of Joal-Fadiouth by creating visually impressive images that can transform the town\'s facade.',
      'We have also involved the population, so as to enable them to embrace the concept as their own by making direct contributions to the production of the works. An objective is also to contribute to the development of the living environment. We\'ve additionally involved pirogue painters. Senegalese fishing boats are known for the colorful imagery that decorates their exteriors. Joal-Fadiouth\'s fishing boat painters are among the commune\'s local artisans, their imagery being a part of the local landscape. We wanted to expand the creative repertoire of these painters by transferring their imagery to the walls of the city.'
    ],
    sidebarMeta: [
      { label: 'Médium', value: 'Sculpture bois, bronze, matériaux de récupération, fer' },
      { label: 'Origine', value: 'Mbodiène & Dakar, Sénégal' },
      { label: 'Expositions', value: 'Biennale de Dakar (Dak\'Art), Expositions internationales' },
      { label: 'Thématique', value: 'Écologie marine, tradition maritime wolof, mémoire' }
    ],
    prevProject: { slug: 'mart', title: 'Mart Community Project' },
    nextProject: { slug: 'bethel', title: 'Bethel Burying Ground' }
  },

  'bethel': {
    slug: 'bethel',
    title: 'Bethel Burying Ground',
    subtitle: 'Hommage mémoriel aux plus de 5 000 ancêtres afro-américains enterrés à Philadelphie',
    badge: 'Mémorial & Histoire',
    heroImage: 'project-bethel/a_edited.webp',
    metaTitle: 'Bethel Burying Ground Memorial | Muhsana Ali',
    metaDescription: 'Découvrez le projet mémorial Bethel Burying Ground par Muhsana Ali - Hommage artistique et mémoriel aux ancêtres afro-américains à Philadelphie.',
    galleryImages: [
      "project-bethel/a_edited.webp", "project-bethel/b_edited.webp", "project-bethel/c_edited.webp", "project-bethel/d_edited.webp", "project-bethel/e_edited.webp", "project-bethel/f_edited.webp", "project-bethel/g.webp", "project-bethel/h_edited.webp", "project-bethel/i_edited.webp", "project-bethel/j_edited.webp", "project-bethel/k_edited.webp", "project-bethel/l_edited.webp", "project-bethel/m_edited.webp"
    ],
    mainHeading: 'Bethel Burying Ground Project',
    leadParagraph: 'Bethel Burying Ground Competition: “A Symbolic Up and Away”',
    paragraphs: [
      'Taking place between 2019-2021, the Bethel Burying ground competition was a contest to design a memorial for a Philadelphia playground under which was discovered an ancient African American gravesite which had existed from the early 1800’s. Muhsana Ali was one of the five finalists selected to design the burying ground memorial to honor the ancestors underfoot. While Muhsana’s work was not selected, she received high rating from the community who participated in the vote and honorable mention from the selection committee.',
      'Muhsana produced a powerful design, created in collaboration with two architects, a landscape architect, an archeologist and an assistant from the school of architecture at Morgan State University. The work required the production of a PDF document, project presentation, a 3D model design and a video presentation.'
    ],
    embeddedVideoYoutubeUrl: 'https://www.youtube.com/embed/cxoEAs_cQfc?rel=0&modestbranding=1',
    sidebarMeta: [
      { label: 'Lieu', value: 'Weccacoe Park, Philadelphie, PA (USA)' },
      { label: 'Thématique', value: 'Mémoire afro-américaine, Histoire, Mémorial' },
      { label: 'Artiste', value: 'Muhsana Ali' },
      { label: 'Reconnaissance', value: 'Pew Fellowship in the Arts, Projet de commande publique' }
    ],
    prevProject: { slug: 'jen-rekk', title: 'Série Jën Rekk' },
    nextProject: { slug: 'presence', title: 'Presence of a Fundamental Absence' }
  },

  'presence': {
    slug: 'presence',
    title: 'Presence of a Fundamental Absence',
    subtitle: 'Méditation visuelle et sculpturale sur le vide, le déracinement et les traces de l\'histoire',
    badge: 'Installation Conceptuelle',
    heroImage: 'project-presence/1.webp',
    metaTitle: 'Presence of a Fundamental Absence | Muhsana Ali',
    metaDescription: 'Découvrez Presence of a Fundamental Absence par Muhsana Ali - Méditation visuelle et sculpturale sur le vide, le déracinement et la mémoire.',
    galleryImages: [
      "project-presence/1.webp", "project-presence/2.webp", "project-presence/3.webp", "project-presence/4.webp", "project-presence/5.webp", "project-presence/6.webp", "project-presence/7.webp", "project-presence/7&#39;.webp", "project-presence/8.webp", "project-presence/9.webp", "project-presence/10.webp", "project-presence/11.webp", "project-presence/12.webp", "project-presence/13.webp", "project-presence/14.webp", "project-presence/20191123_133809.webp", "project-presence/x.webp"
    ],
    mainHeading: 'Presence of a Fundamental Absence',
    leadParagraph: 'This work was commissioned by the Penn Museum of University of Pennsylvania in Philadelphia, PA to accompany the redesign of the Africa Galleries in a 10-year exhibition that opened in November 2019. This installation reads as an aesthetic echo that adds contemporary visual input as a conversation with the traditional objects on display. It is a contribution to the process of redesigning the collective mental space concerning Africa in general. The irregular pattern this work carves out evokes an abstract map with different continents. Like the life of traditional African objects and artifacts, movement, displacement, circulation, itinerary and re-appropriation all resonate with the shape of the world map as a field work. The use of old objects found in Africa (iron, bones, ceramics, writings…) are juxtaposed to those new, used and reused in reference to a constantly changing Africa and its diaspora.',
    paragraphs: [
      'In creating this work, we wish to emphasize the relationship between the objects we have brought over featured in our installation and the objects that are on display inside the cases at the museum. The overpowering size of the work is an effort in a sense, to heal the pain of those objects trapped behind the glass. Its placement emphasizes the connection between past and present. In producing a conglomeration of objects representing life in Africa today, we are reflecting the absence of those objects that have been taken away (stolen) from Africa, which in turn has resulted, as a result of colonization,(and its outcome:capitalism), in the presence of the objects we see now (today). The objects of this installation represent the life, activity and energy that remain in Africa (and its Diaspora) as a result of the absence of those lost and powerful objects (behind cases). Those objects that once lived on the Continent during a time when Africa was freely expressing itself without any influence from the West. After colonization and its outcome: capitalism, this conglomeration represents the results; the presence of the fundamental absence.'
    ],
    sidebarMeta: [
      { label: 'Médium', value: 'Installation multimédia, sculpture, textile, ombre & lumière' },
      { label: 'Thématiques', value: 'Mémoire, Diaspora africaine, Absence & Présence' },
      { label: 'Artiste', value: 'Muhsana Ali' }
    ],
    prevProject: { slug: 'bethel', title: 'Bethel Burying Ground' },
    nextProject: { slug: 'doors', title: 'Doors & Passageways of Return' }
  },

  'doors': {
    slug: 'doors',
    title: 'Doors & Passageways of Return',
    subtitle: 'Portes et Passages du Retour : Projet artistique de 2 ans à Abidjan avec 50 jeunes sans-abri',
    badge: 'Exposition & Transformation Sociale',
    heroImage: 'project-doors/IMG-20231030-WA0014.webp',
    metaTitle: 'Doors & Passageways of Return | Muhsana Ali',
    metaDescription: 'Découvrez Doors & Passageways of Return par Muhsana Ali - Projet artistique fondateur de deux ans mené à Abidjan avec 50 jeunes de la rue.',
    galleryImages: [
      "project-doors/IMG-20231030-WA0014.webp", "project-doors/IMG-20231030-WA0020.webp", "project-doors/IMG-20231030-WA0021.webp", "project-doors/IMG-20231030-WA0026.webp", "project-doors/IMG-20231030-WA0026_edited.webp", "project-doors/IMG-20231030-WA0028.webp", "project-doors/IMG-20231030-WA0034.webp", "project-doors/IMG-20231030-WA0037.webp", "project-doors/IMG-20231030-WA0038.webp", "project-doors/IMG-20231030-WA0038_edited.webp", "project-doors/Cotton Fields.webp", "project-doors/portes et passages expo (2).webp", "project-doors/portes et passages expo (3).webp", "project-doors/portes et passages expo (4).webp", "project-doors/portes et passages expo (5).webp", "project-doors/portes et passages expo (6).webp", "project-doors/portes et passages expo (7).webp", "project-doors/portes et passages expo (9).webp", "project-doors/portes et passages expo (10).webp", "project-doors/portes et passages expo (15).webp", "project-doors/portes et passages expo (17).webp"
    ],
    mainHeading: 'Doors and Passageways of Return Exhibition',
    leadParagraph: 'Doors and Passageways of Return was a monumental two-year artistic and community intervention in Abidjan, Côte d\'Ivoire. Muhsana Ali transformed an abandoned central building into a creative workshop involving over 50 homeless youth.',
    paragraphs: [
      'This group of wayward teens, many of them drug-addicted and prone to crime and violence, subsequently became an integral part of her work. This experience led her to discover the power of art to inspire community innovation and to transform human consciousness.',
      'This Côte d’Ivoire exhibition, Portes et Passages du Retour (Doors and Passageways of Return), became the title of the association she later co-founded when she eventually relocated to Senegal.'
    ],
    sidebarMeta: [
      { label: 'Période', value: '1997 - 1999' },
      { label: 'Lieu', value: 'Abidjan, Côte d\'Ivoire' },
      { label: 'Impact', value: '50+ jeunes réhabilités par l\'art' },
      { label: 'Artiste', value: 'Muhsana Ali' }
    ],
    prevProject: { slug: 'presence', title: 'Presence of a Fundamental Absence' },
    nextProject: { slug: 'association', title: 'Association Portes & Passages' }
  },

  'association': {
    slug: 'association',
    title: 'Association Portes & Passages du Retour',
    subtitle: 'Un espace vivant d\'innovation artistique, d\'architecture alternative et d\'échange interculturel à Mbodiène (Sénégal)',
    badge: 'Centre Culturel & Développement Holistique',
    heroImage: 'project-association/Architecture Alternative.webp',
    metaTitle: 'Association Portes & Passages du Retour | Muhsana Ali',
    metaDescription: 'Découvrez l\'Association Portes & Passages du Retour co-fondée par Muhsana Ali - Centre d\'art et de développement holistique à Mbodiène, Sénégal.',
    galleryImages: [
      "project-association/Architecture Alternative.webp", "project-association/AGROCAMP.webp", "project-association/Artiste en residence.webp", "project-association/DSC00933.webp", "project-association/DSCF5076.webp", "project-association/DSC_1185.webp", "project-association/FP43.webp", "project-association/FP59.webp", "project-association/Femmes Potières.webp", "project-association/IMG_0764.webp", "project-association/RSP_0376.webp", "project-association/Volontaire.webp", "project-association/Volontaires.webp", "project-association/Volontaires_edited.webp", "project-association/kPeO3.webp", "project-association/omar andhis fish.webp", "project-association/portes et passages du retour.webp", "project-association/projet Jën Rekk_edited.webp", "project-association/10.webp"
    ],
    mainHeading: 'Portes et Passages du Retour Association',
    leadParagraph: 'Portes et Passages du Retour is an association placing emphasis on art and creativity to insure the vital, necessary relationship between man and nature for holistic well-being and intellectual and creative sovereignty within the society. Founded in 2004, it is led by visual artists who have initiated a CENTER FOR ART AND HOLISTIC DEVELOPMENT in the rural region along the “Petite Côte” of Senegal, which generates community-centered programs revolving around alternative engagement in art, education, health, environmental consciousness, agriculture and eco-building and all areas of the holistic development of man and his environment.',
    paragraphs: [
      'Portes et Passages is situated between the villages of Mbodiene and the town of Joal-Fadiouth, which houses the largest fishing port in Senegal. The association is committed to the raising the awareness of creative values and to improving the manner in which such values are manifested in the everyday lives of inhabitants throughout the region. Intercultural exchange is encouraged through our engagement with artists, institutions and volunteers, in order to increase the dynamic manner in which African development may be enhanced.'
    ],
    externalLinks: [
      {
        icon: '🌐',
        tag: 'Site Web Officiel de l\'Association',
        title: 'Portes et Passages du Retour',
        desc: 'Visitez le site officiel de l\'association pour découvrir tous les programmes et actualités du centre.',
        url: 'https://www.portesetpassagesduretour.com/',
        btnText: 'Visiter le site web'
      },
      {
        icon: '🎬',
        tag: 'Vidéo de Présentation',
        title: 'Portes et Passages du Retour Video',
        desc: 'Visionnez la vidéo de présentation du centre et de ses actions à Mbodiène.',
        url: 'https://vimeo.com/44733858',
        btnText: 'Regarder sur Vimeo'
      }
    ],
    sidebarMeta: [
      { label: 'Année de création', value: '2007 (Toujours actif)' },
      { label: 'Localisation', value: 'Mbodiène, Région de Thiès, Sénégal' },
      { label: 'Fondatrice', value: 'Muhsana Ali' },
      { label: 'Partenaires Majeurs', value: 'DOEN Foundation, Arts Collaboratory, University of Michigan, AIA' }
    ],
    prevProject: { slug: 'doors', title: 'Doors & Passageways of Return' },
    nextProject: { slug: 'east-bayside', title: 'East Bayside Community Mosaic' }
  }
};
