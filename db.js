const DB = {
  meta: {
    version: '1.4',
    theme: 'v4-classic-cream',
    title: 'Agri Nexus — Crop Protection Reference Intelligence',
    last_updated: '2026-10-05',
    review_mode: true,
    notes: 'Operational recommendations excluded. Use only as reference and source-review layer.',
    official_sources: {
      IRAC: 'https://irac-online.org',
      FRAC: 'https://www.frac.info',
      HRAC: 'https://hracglobal.com'
    }
  },
  crops: [
    { key: 'wheat', name: 'Wheat', group: 'Field crops', blurb: 'Major cereal crop.' },
    { key: 'maize', name: 'Maize', group: 'Field crops', blurb: 'High-value crop with broad weed pressure.' },
    { key: 'tomato', name: 'Tomato', group: 'Vegetables', blurb: 'High-value vegetable with fungal pressure.' },
    { key: 'cotton', name: 'Cotton', group: 'Field crops', blurb: 'Major row crop with insect and weed pressure.' }
  ],
  pests: [
    {
      id: 'p1', common: 'Cotton bollworm', scientific: 'Helicoverpa armigera', order: 'Lepidoptera', arabic: 'دودة اللوز', family: 'Noctuidae',
      hosts: 'Cotton, maize, tomato', target_site_group: 'Nervous system',
      irac_groups: ['3A', '28'], chemical_control_status: 'Reference only',
      definition: 'Polyphagous lepidopteran pest of many field crops.',
      damage: 'Larvae feed on fruiting structures and foliage; heavily damaged crops show abortion, holes and reduced yield.',
      lifecycle: 'Eggs on plant tissues; larval stage responsible for crop damage; pupation in soil or crop debris.',
      conditions: 'Warm conditions favor rapid development and high population growth.',
      monitoring: 'Scouting at threshold windows during flowering and fruiting.',
      irac_relationships: [
        { group_id: 'g3a', relationship_type: 'taxonomic_reference', evidence_level: 'Reference', confidence: 'Medium' },
        { group_id: 'g28', relationship_type: 'taxonomic_reference', evidence_level: 'Reference', confidence: 'Medium' }
      ]
    },
    {
      id: 'p2', common: 'Whitefly', scientific: 'Bemisia tabaci', order: 'Hemiptera', arabic: 'الذبابة البيضاء', family: 'Aleyrodidae',
      hosts: 'Cotton, tomato, cucurbits', target_site_group: 'Nervous system',
      irac_groups: ['4A', '6'], chemical_control_status: 'Reference only',
      definition: 'Sucking hemipteran pest attacking foliage and fruiting structures.',
      damage: 'Sap feeding leads to chlorosis, honeydew and sooty mold, especially on young growth.',
      lifecycle: 'Eggs on underside of leaves; nymphs and adults feed together; several overlapping generations possible.',
      conditions: 'High humidity and warm conditions favor outbreaks.',
      monitoring: 'Inspect undersides of leaves; check sticky honeydew and winged adults.',
      irac_relationships: [
        { group_id: 'g4a', relationship_type: 'taxonomic_reference', evidence_level: 'Reference', confidence: 'Medium' },
        { group_id: 'g6', relationship_type: 'taxonomic_reference', evidence_level: 'Reference', confidence: 'Medium' }
      ]
    },
    {
      id: 'p3', common: 'Thrips', scientific: 'Thrips tabaci', order: 'Thysanoptera', arabic: 'التربس', family: 'Thripidae',
      hosts: 'Onion, cotton, tomato', target_site_group: 'Nervous system',
      irac_groups: ['3A'], chemical_control_status: 'Reference only',
      definition: 'Minute piercing-sucking insects that aggregate on tender tissue.',
      damage: 'Feeding causes silvery scars, distorted growth and flower damage.',
      lifecycle: 'Eggs in plant tissue; larvae and adults feed on soft tissues; generations overlap fast under warm conditions.',
      conditions: 'Warm, dry to moderate conditions commonly favor thrips buildup.',
      monitoring: 'Use flower or foliage checks; inspect new growth and blossoms.',
      irac_relationships: [{ group_id: 'g3a', relationship_type: 'taxonomic_reference', evidence_level: 'Reference', confidence: 'Medium' }]
    },
    {
      id: 'p4', common: 'Aphids', scientific: 'Aphis spp.', order: 'Hemiptera', arabic: 'منّ', family: 'Aphididae',
      hosts: 'Wheat, cotton, tomato', target_site_group: 'Nervous system',
      irac_groups: ['4A', '3A'], chemical_control_status: 'Reference only',
      definition: 'Soft-bodied sap-feeding insects with rapid population increase.',
      damage: 'Distorts new growth, transmits viruses and causes honeydew accumulation.',
      lifecycle: 'Parthenogenetic cycles can be rapid; alates appear under stress or crowding.',
      conditions: 'Mild and favorable conditions commonly sustain aphid outbreaks.',
      monitoring: 'Inspect shoot tips and undersides of leaves; check for colonies and natural enemies.',
      irac_relationships: [{ group_id: 'g4a', relationship_type: 'taxonomic_reference', evidence_level: 'Reference', confidence: 'Medium' }]
    },
    {
      id: 'p5', common: 'Cutworms', scientific: 'Agrotis spp.', order: 'Lepidoptera', arabic: 'الديدان القارضة', family: 'Noctuidae',
      hosts: 'Maize, wheat, tomato', target_site_group: 'Nervous system',
      irac_groups: ['28', '1A'], chemical_control_status: 'Reference only',
      definition: 'Nocturnal larvae that cut young stems near the soil line.',
      damage: 'Seedlings are severed at the base, causing stand loss.',
      lifecycle: 'Eggs on soil or plant bases; larvae feed at night; pupate in soil.',
      conditions: 'Moist soil and dense early growth encourage activity.',
      monitoring: 'Check for cut stems, larval presence in soil and damaged patches.',
      irac_relationships: [{ group_id: 'g28', relationship_type: 'taxonomic_reference', evidence_level: 'Reference', confidence: 'Medium' }]
    }
  ],
  diseases: [
    {
      id: 'd1', name: 'Early blight', pathogen: 'Alternaria solani', pathogen_type: 'Fungal', taxon_group: 'Fungal', host_crops: ['tomato'],
      aliases: ['Alternaria leaf blight'], family: 'Pleosporaceae',
      quickref_group: 'FRAC 7 / M5 / 3', chemical_control_status: 'Reference mapping only',
      symptoms: ['Dark brown lesions with concentric rings', 'Leaf chlorosis and defoliation', 'Fruit lesions can develop under severe pressure'],
      signs: ['Brown to olive conidia on leaf lesions', 'Dark mycelial growth under humid conditions'],
      disease_cycle: 'Conidia produced on infected tissue spread via splashing and wind under humid conditions.',
      infection_conditions: 'Humid, warm weather favors infection and rapid lesion development.',
      classification: 'Leaf and fruit disease with foliar blight symptoms.',
      frac_relationships: [
        { active_id: 'ai13', group_ids: ['gfr7'], relationship_type: 'general_reference', evidence_level: 'Reference', confidence: 'Medium' },
        { active_id: 'ai17', group_ids: ['gfr11'], relationship_type: 'general_reference', evidence_level: 'Reference', confidence: 'Medium' }
      ],
      frac_actives_ref: ['ai13', 'ai17'],
      taxonomy: { cell_wall: 'Septate hyphae', asexual: 'Conidia', sexual: 'Not recorded in source' }
    },
    {
      id: 'd2', name: 'Powdery mildew', pathogen: 'Erysiphe spp.', pathogen_type: 'Fungal', taxon_group: 'Fungal', host_crops: ['wheat', 'tomato'],
      aliases: ['Powdery mildew disease'], family: 'Erysiphaceae',
      quickref_group: 'FRAC 3 / 13 / U6', chemical_control_status: 'Reference mapping only',
      symptoms: ['White powdery colonies on leaves', 'Leaf curling and reduced photosynthesis', 'Reduced green leaf area leads to lower growth'],
      signs: ['Mycelium and conidia on leaf surface', 'Visible white fungal growth on upper leaf surfaces'],
      disease_cycle: 'Conidia establish on the host surface and colonize epidermal tissue under favorable conditions.',
      infection_conditions: 'Moderate temperatures with low humidity on leaf surfaces favor infection.',
      classification: 'Obligate biotrophic foliar disease with characteristic powdery growth.',
      frac_relationships: [
        { active_id: 'ai7', group_ids: ['gfr3'], relationship_type: 'general_reference', evidence_level: 'Reference', confidence: 'Medium' },
        { active_id: 'ai10', group_ids: ['gfr13'], relationship_type: 'general_reference', evidence_level: 'Reference', confidence: 'Medium' }
      ],
      frac_actives_ref: ['ai7', 'ai10'],
      taxonomy: { cell_wall: 'Septate hyphae', asexual: 'Conidia', sexual: 'Chasmothecia' }
    },
    {
      id: 'd3', name: 'Rust', pathogen: 'Puccinia spp.', pathogen_type: 'Fungal', taxon_group: 'Fungal', host_crops: ['wheat'],
      aliases: ['Cereal rust'], family: 'Pucciniaceae',
      quickref_group: 'FRAC 3 / 11 / U', chemical_control_status: 'Reference mapping only',
      symptoms: ['Orange or brown pustules on leaves and stems', 'Chlorosis preceding pustule formation', 'Leaf senescence under severe infection'],
      signs: ['Urediniospores or pustules on leaf tissue'],
      disease_cycle: 'Rust fungi reproduce repeatedly on living host tissue and rely on environmental conditions for spore dispersal.',
      infection_conditions: 'Leaf wetness and moderate temperatures can favor uredinia development.',
      classification: 'Foliar rust disease of cereals and some vegetable hosts.',
      frac_relationships: [],
      frac_actives_ref: []
    },
    {
      id: 'd4', name: 'Damping-off', pathogen: 'Pythium spp.', pathogen_type: 'Oomycete', taxon_group: 'Fungal-like', host_crops: ['tomato', 'maize'],
      aliases: ['Seedling blight'], family: 'Pythiaceae',
      quickref_group: 'FRAC 4 / 28 / M', chemical_control_status: 'Reference mapping only',
      symptoms: ['Seedling collapse at the soil line', 'Water-soaked stems and wilting', 'Poor stand emergence'],
      signs: ['Cottony growth on stems and nearby soil', 'White mycelial growth in wet media'],
      disease_cycle: 'Zoospores infect seedling tissues under wet conditions, then spread via water movement.',
      infection_conditions: 'Wet soils, low oxygen and cool to moderate temperatures favor infection.',
      classification: 'Soil-borne seedling disease affecting emergence and stand establishment.',
      frac_relationships: [],
      frac_actives_ref: []
    }
  ],
  weed_named: [
    { crop: 'wheat', section: 'Grassy weeds', names: ['Wild oat', 'Avena fatua', 'شبت', 'أبو ركبة'] },
    { crop: 'wheat', section: 'Broadleaf weeds', names: ['Lambsquarters', 'Chenopodium album', 'دنيبة'] },
    { crop: 'maize', section: 'Grassy weeds', names: ['Barnyard grass', 'Echinochloa crus-galli', 'عجيرة'] },
    { crop: 'maize', section: 'Broadleaf weeds', names: ['Prickly lettuce', 'Lactuca serriola'] }
  ],
  weed_options: [
    {
      crop: 'wheat', weed_type: 'Grassy weeds', trade: 'Broadway Star', section: 'Cereal weed control', target_weeds: ['Wild oat', 'Barnyard grass'],
      actives_text: 'Mesotrione + metolachlor', active_ids: ['ai1'], hrac: [2, 15],
      application: { timing: 'Post-emergence after crop establishment', rate: '1.5', unit: 'L/feddan' },
      evidence_level: 'Reference', confidence: 'Medium', registration_status: 'Unknown',
      application_method: 'Foliar spray', water_management: 'Use clean water', conditions: 'Warm, moderately humid periods'
    },
    {
      crop: 'maize', weed_type: 'Broadleaf weeds', trade: 'Frontier', section: 'Maize key weeds', target_weeds: ['Lambsquarters'],
      actives_text: 'Atrazine + S-metolachlor', active_ids: ['ai2'], hrac: [5, 15],
      application: { timing: 'Pre- and post-emergence', rate: '1.2', unit: 'L/feddan' },
      evidence_level: 'Reference', confidence: 'Medium', registration_status: 'Unknown',
      application_method: 'Soil or foliar', water_management: 'Adequate coverage', conditions: 'Field conditions'
    },
    {
      crop: 'maize', weed_type: 'Grassy weeds', trade: 'Dual Gold', section: 'Maize pre-emergence', target_weeds: ['Barnyard grass'],
      actives_text: 'S-metolachlor', active_ids: ['ai15'], hrac: [15],
      application: { timing: 'Pre-emergence', rate: '1.0', unit: 'L/feddan' },
      evidence_level: 'Reference', confidence: 'Medium', registration_status: 'Unknown',
      application_method: 'Soil application', water_management: 'Good soil distribution', conditions: 'Moist seedbed' 
    }
  ],
  actives: [
    { id: 'ai1', name: 'Mesotrione', record_type: 'Reference', usage_scope: 'Reference', uses: ['herbicide'],
      groups: [{ system: 'HRAC', code: '27', name: 'HPPD inhibitors', moa: 'Inhibits 4-hydroxyphenylpyruvate dioxygenase' }],
      pests: [], diseases: [], weed_crops: ['wheat', 'maize'], evidence_level: 'Reference', registration_status: 'Unknown', classification_status: 'Classified' },
    { id: 'ai2', name: 'Atrazine', record_type: 'Reference', usage_scope: 'Reference', uses: ['herbicide'],
      groups: [{ system: 'HRAC', code: '5', name: 'Photosystem II inhibitors', moa: 'Disrupts photosystem II' }],
      pests: [], diseases: [], weed_crops: ['maize'], evidence_level: 'Reference', registration_status: 'Unknown', classification_status: 'Classified' },
    { id: 'ai3', name: 'Bifenthrin', record_type: 'Reference', usage_scope: 'Reference', uses: ['insecticide'],
      groups: [{ system: 'IRAC', code: '3A', name: 'Pyrethroids', moa: 'Sodium channel modulators' }], pests: ['p1', 'p3'], diseases: [], weed_crops: [], evidence_level: 'Reference', registration_status: 'Unknown', classification_status: 'Classified' },
    { id: 'ai4', name: 'Spirotetramat', record_type: 'Reference', usage_scope: 'Reference', uses: ['insecticide'],
      groups: [{ system: 'IRAC', code: '23', name: 'Lipid synthesis inhibitors', moa: 'Inhibits acetyl-CoA carboxylase' }], pests: ['p2'], diseases: [], weed_crops: [], evidence_level: 'Reference', registration_status: 'Unknown', classification_status: 'Classified' },
    { id: 'ai5', name: 'Azoxystrobin', record_type: 'Reference', usage_scope: 'Reference', uses: ['fungicide'],
      groups: [{ system: 'FRAC', code: '11', name: 'QoI', moa: 'Inhibits mitochondrial respiration' }], pests: [], diseases: ['d1', 'd2'], weed_crops: [], evidence_level: 'Reference', registration_status: 'Unknown', classification_status: 'Classified' },
    { id: 'ai6', name: 'Difenoconazole', record_type: 'Reference', usage_scope: 'Reference', uses: ['fungicide'],
      groups: [{ system: 'FRAC', code: '3', name: 'DMI', moa: 'Sterol demethylation inhibitor' }], pests: [], diseases: ['d2'], weed_crops: [], evidence_level: 'Reference', registration_status: 'Unknown', classification_status: 'Classified' },
    { id: 'ai7', name: 'Tebuconazole', record_type: 'Reference', usage_scope: 'Reference', uses: ['fungicide'],
      groups: [{ system: 'FRAC', code: '3', name: 'DMI', moa: 'Sterol demethylation inhibitor' }], pests: [], diseases: ['d2'], weed_crops: [], evidence_level: 'Reference', registration_status: 'Unknown', classification_status: 'Classified' },
    { id: 'ai8', name: 'Mancozeb', record_type: 'Reference', usage_scope: 'Reference', uses: ['fungicide'],
      groups: [{ system: 'FRAC', code: 'M3', name: 'Dithiocarbamates', moa: 'Multi-site contact' }], pests: [], diseases: ['d1'], weed_crops: [], evidence_level: 'Reference', registration_status: 'Unknown', classification_status: 'Classified' },
    { id: 'ai9', name: 'Propamocarb', record_type: 'Reference', usage_scope: 'Reference', uses: ['fungicide'],
      groups: [{ system: 'FRAC', code: '28', name: 'Carbamates', moa: 'Inhibits cell wall synthesis' }], pests: [], diseases: ['d1'], weed_crops: [], evidence_level: 'Reference', registration_status: 'Unknown', classification_status: 'Classified' },
    { id: 'ai10', name: 'Sulfur', record_type: 'Reference', usage_scope: 'Reference', uses: ['fungicide'],
      groups: [{ system: 'FRAC', code: 'M2', name: 'Inorganic', moa: 'Multi-site contact' }], pests: [], diseases: ['d2'], weed_crops: [], evidence_level: 'Reference', registration_status: 'Unknown', classification_status: 'Classified' },
    { id: 'ai11', name: 'Clofentezine', record_type: 'Reference', usage_scope: 'Reference', uses: ['acaricide'],
      groups: [{ system: 'IRAC', code: '10A', name: 'Mite growth inhibitors', moa: 'Mite growth regulator' }], pests: ['p3'], diseases: [], weed_crops: [], evidence_level: 'Reference', registration_status: 'Unknown', classification_status: 'Classified' },
    { id: 'ai12', name: 'Acetamiprid', record_type: 'Reference', usage_scope: 'Reference', uses: ['insecticide'],
      groups: [{ system: 'IRAC', code: '4A', name: 'Neonicotinoids', moa: 'Nicotinic acetylcholine receptor competitive modulators' }], pests: ['p2'], diseases: [], weed_crops: [], evidence_level: 'Reference', registration_status: 'Unknown', classification_status: 'Classified' },
    { id: 'ai13', name: 'Chlorothalonil', record_type: 'Reference', usage_scope: 'Reference', uses: ['fungicide'],
      groups: [{ system: 'FRAC', code: 'M5', name: 'Chloronitriles', moa: 'Multi-site contact' }], pests: [], diseases: ['d1'], weed_crops: [], evidence_level: 'Reference', registration_status: 'Unknown', classification_status: 'Classified' },
    { id: 'ai14', name: 'Fluopicolide', record_type: 'Reference', usage_scope: 'Reference', uses: ['fungicide'],
      groups: [{ system: 'FRAC', code: '43', name: 'QiI', moa: 'Inhibits cellulose synthesis' }], pests: [], diseases: ['d1'], weed_crops: [], evidence_level: 'Reference', registration_status: 'Unknown', classification_status: 'Classified' },
    { id: 'ai15', name: 'Metolachlor', record_type: 'Reference', usage_scope: 'Reference', uses: ['herbicide'],
      groups: [{ system: 'HRAC', code: '15', name: 'Very long chain fatty acid inhibitors', moa: 'Inhibits VLCFA synthesis' }], pests: [], diseases: [], weed_crops: ['wheat', 'maize'], evidence_level: 'Reference', registration_status: 'Unknown', classification_status: 'Classified' },
    { id: 'ai16', name: 'Fenoxaprop-p-ethyl', record_type: 'Reference', usage_scope: 'Reference', uses: ['herbicide'],
      groups: [{ system: 'HRAC', code: '1', name: 'ACCase inhibitors', moa: 'Inhibits acetyl-CoA carboxylase' }], pests: [], diseases: [], weed_crops: ['wheat'], evidence_level: 'Reference', registration_status: 'Unknown', classification_status: 'Classified' },
    { id: 'ai17', name: 'Azoxystrobin', record_type: 'Reference', usage_scope: 'Reference', uses: ['fungicide'],
      groups: [{ system: 'FRAC', code: '11', name: 'QoI', moa: 'Mitochondrial respiration inhibitor' }], pests: [], diseases: ['d1'], weed_crops: [], evidence_level: 'Reference', registration_status: 'Unknown', classification_status: 'Classified' }
  ],
  groups: [
    { id: 'g3a', system: 'IRAC', code: '3A', name: 'Pyrethroids', moa: 'Sodium channel modulators', category: 'Nervous system', kind: 'Insecticide', resistance_risk: 'Medium', resistance: 'Resistance common where repeated exposure occurs.', ambiguous_code: false },
    { id: 'g4a', system: 'IRAC', code: '4A', name: 'Neonicotinoids', moa: 'Nicotinic acetylcholine receptor modulators', category: 'Nervous system', kind: 'Insecticide', resistance_risk: 'Medium', resistance: 'Resistance reported in several sucking pests.', ambiguous_code: false },
    { id: 'g28', system: 'IRAC', code: '28', name: 'Diamides', moa: 'RyR modulators', category: 'Energy production', kind: 'Insecticide', resistance_risk: 'Medium', resistance: 'Resistance risk is moderate depending on use patterns.', ambiguous_code: false },
    { id: 'gfr3', system: 'FRAC', code: '3', name: 'DMI fungicides', moa: 'Sterol demethylation inhibitor', category: 'Cell membrane', kind: 'Fungicide', resistance_risk: 'High', resistance: 'High risk of site-specific resistance.', ambiguous_code: false },
    { id: 'gfr7', system: 'FRAC', code: '7', name: 'SDHI fungicides', moa: 'Succinate dehydrogenase inhibition', category: 'Energy production', kind: 'Fungicide', resistance_risk: 'High', resistance: 'Resistance can develop rapidly when used alone.', ambiguous_code: false },
    { id: 'gfr11', system: 'FRAC', code: '11', name: 'QoI fungicides', moa: 'Mitochondrial respiration inhibitors', category: 'Energy production', kind: 'Fungicide', resistance_risk: 'High', resistance: 'Resistance can develop rapidly.', ambiguous_code: false },
    { id: 'ghrac2', system: 'HRAC', code: '2', name: 'ALS inhibitors', moa: 'Acetolactate synthase inhibition', category: 'Amino acid synthesis', kind: 'Herbicide', resistance_risk: 'High', resistance: 'Resistance is a major concern in annual weeds.', ambiguous_code: false },
    { id: 'ghrac5', system: 'HRAC', code: '5', name: 'Photosystem II inhibitors', moa: 'Photosystem II inhibition', category: 'Photosynthesis', kind: 'Herbicide', resistance_risk: 'Medium', resistance: 'Resistance is variable and field-dependent.', ambiguous_code: false },
    { id: 'ghrac15', system: 'HRAC', code: '15', name: 'Very long chain fatty acid inhibitors', moa: 'VLCFA synthesis inhibitor', category: 'Cell division', kind: 'Herbicide', resistance_risk: 'Medium', resistance: 'Resistance less common but possible.', ambiguous_code: false },
    { id: 'ghrac27', system: 'HRAC', code: '27', name: 'HPPD inhibitors', moa: 'HPPD inhibition', category: 'Pigment synthesis', kind: 'Herbicide', resistance_risk: 'Medium', resistance: 'Species-specific risk pattern.', ambiguous_code: false }
  ],
  resistance: {
    irac: {
      practice: ['Rotate MoA groups across successive generations.', 'Do not repeat the same IRAC group in the same crop season.', 'Use monitoring data to time interventions.'],
      why: ['Repeated exposure selects resistant individuals.', 'Cross-resistance can reduce the value of related chemistry.', 'Resistance risk increases when the same target site is used repeatedly.']
    },
    frac: {
      practices: ['Avoid consecutive applications of the same FRAC group.', 'Use mixture or alternation only when supported by field evidence.', 'Prioritize disease monitoring and cultural controls.'],
      note: 'FRAC resistance management is especially important for single-site fungicides.'
    },
    hrac: {
      practices: ['Rotate HRAC groups across seasons.', 'Avoid repeated use of the same site-of-action.', 'Use diversified weed control to reduce selection pressure.'],
      concentration: [
        { crop: 'Wheat', groups: 'Group 2 + Group 15', observation: 'Repeated selective pressure is common in cereal systems.' },
        { crop: 'Maize', groups: 'Group 5 + Group 15', observation: 'Rotation across site-of-action is recommended for broad-spectrum programs.' }
      ]
    }
  },
  filters: {
    insect_mode: ['Nervous system', 'Energy production', 'Growth regulation'],
    disease_effective: ['Effective / likely effective', 'Partially effective', 'Not confirmed'],
    weed_grouping: ['Grassy weeds', 'Broadleaf weeds']
  }
};

window.DB = DB;
if (typeof module !== 'undefined') module.exports = { DB };
