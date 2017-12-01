module.exports = (status = 'proposal_sent',
  kind = 'fixed_price',
  customerName = 'Airbus Defense') => (
  {
    id: 2146905983,
    url: 'https://octopod.octo.com/api/v0/projects/2146905983',
    name: 'Audit Déploiement Segments Sol',
    kind,
    reference: '2017-1447F',
    status,
    customer: {
      id: 2504,
      name: customerName,
      customer_group: null,
    },
    customer_contract_reference: null,
    comment: '',
    mission_description: '<p>Auditer le processus de d&eacute;ploiement de logiciels sur les Segments Sol (stations &agrave; terre qui re&ccedil;oivent les informations en provenance des satellites).</p><p>Processus reposant sur Razor et Puppet.</p>',
    competition_type: 'competitive',
    success_probability: 25,
    nature: 'consulting',
    mission_maker: 'acn_prime',
    origin: 'partnership',
    amount: '4500.0',
    decision_maker: '',
    project_group: null,
    business_contact: {
      id: 730937409,
      last_name: 'Joguet',
      first_name: 'Damien',
      nickname: 'DJO',
      url: 'https://octopod.octo.com/api/v0/people/730937409',
    },
    mission_director: {
      id: 730937409,
      last_name: 'Joguet',
      first_name: 'Damien',
      nickname: 'DJO',
      url: 'https://octopod.octo.com/api/v0/people/730937409',
    },
    proposal_delivery_date: '2017-11-08',
    proposal_link: '',
    created_at: '2017-11-09T15:12:54Z',
    updated_at: '2017-11-09T15:14:31Z',
    start_date: '2017-11-13',
    end_date: '2017-12-31',
    locations: 'Toulouse, OCTO',
    mission_duration: 30,
  });
