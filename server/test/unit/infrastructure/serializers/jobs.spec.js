const { expect } = require('../../../test-helper');
const serializer = require('../../../../src/infrastructure/serializers/jobs');

describe('Unit | Serializer | jobs', () => {
  it('should return an array of Job objects serialized from Projects and Activities to be staffed', () => {
    // given
    const octopodProjects = [{
      id: 1,
      name: 'Project 1',
      url: 'https://octopod.octo.com/api/v0/projects/1',
      reference: 'F2017-123',
      status: 'proposal_sent',
      customer: { name: 'Client A' },
      nature: 'consulting',
      business_contact: { nickname: 'ABC' },
      mission_director: { nickname: 'DEF' },
      locations: 'OCTO',
    }, {
      id: 2,
      name: 'Project 2',
      url: 'https://octopod.octo.com/api/v0/projects/2',
      reference: 'F2017-456',
      status: 'proposal_in_progress',
      customer: { name: 'Client B' },
      nature: 'training',
      business_contact: { nickname: 'GHI' },
      mission_director: { nickname: 'JKL' },
      locations: 'La Défense',
    }, {
      id: 3,
      name: 'Project 3',
      url: 'https://octopod.octo.com/api/v0/projects/3',
      reference: 'F2017-789',
      status: 'mission_accepted',
      customer: { name: 'Client C' },
      nature: 'delivery',
      business_contact: { nickname: 'MNO' },
      mission_director: { nickname: 'PQR' },
      locations: 'Osny et OCTO',
    }];

    const octopodActivities = [
      { id: 1, title: 'Activity 1-A', project: { id: 1 }, staffing_needed_from: '2017-07-01', people: ['NIMA', 'SMI'] },
      { id: 2, title: 'Activity 2-A', project: { id: 2 }, staffing_needed_from: '2017-08-01', people: ['LAMA', 'ABC'] },
      { id: 3, title: 'Activity 2-B', project: { id: 2 }, staffing_needed_from: '2017-09-01', people: ['LAMA', 'ABC'] },
      { id: 4, title: 'Activity 3-A', project: { id: 3 }, staffing_needed_from: '2017-10-01', people: ['DEF', 'XYZ'] },
      { id: 5, title: 'Activity 3-B', project: { id: 3 }, staffing_needed_from: '2017-11-01', people: ['DEF', 'XYZ'] },
      { id: 6, title: 'Activity 3-C', project: { id: 3 }, staffing_needed_from: '2017-12-01', people: ['DEF', 'XYZ'] },
    ];

    // when
    const jobs = serializer.serialize(octopodProjects, octopodActivities);

    // then
    const expectedJobs = [{
      project: {
        id: 1,
        name: 'Project 1',
        url: 'https://octopod.octo.com/api/v0/projects/1',
        reference: 'F2017-123',
        status: 'proposal_sent',
        customer: { name: 'Client A' },
        nature: 'consulting',
        business_contact: { nickname: 'ABC' },
        mission_director: { nickname: 'DEF' },
        locations: 'OCTO',
      },
      activity: {
        id: 1,
        title: 'Activity 1-A',
        staffing_needed_from: '2017-07-01',
        people_staffed_on_project: ['NIMA', 'SMI'],
      },
    }, {
      project: {
        id: 2,
        name: 'Project 2',
        url: 'https://octopod.octo.com/api/v0/projects/2',
        reference: 'F2017-456',
        status: 'proposal_in_progress',
        customer: { name: 'Client B' },
        nature: 'training',
        business_contact: { nickname: 'GHI' },
        mission_director: { nickname: 'JKL' },
        locations: 'La Défense',
      },
      activity: {
        id: 2,
        title: 'Activity 2-A',
        staffing_needed_from: '2017-08-01',
        people_staffed_on_project: ['LAMA', 'ABC'],
      },
    }, {
      project: {
        id: 2,
        name: 'Project 2',
        url: 'https://octopod.octo.com/api/v0/projects/2',
        reference: 'F2017-456',
        status: 'proposal_in_progress',
        customer: { name: 'Client B' },
        nature: 'training',
        business_contact: { nickname: 'GHI' },
        mission_director: { nickname: 'JKL' },
        locations: 'La Défense',
      },
      activity: {
        id: 3,
        title: 'Activity 2-B',
        staffing_needed_from: '2017-09-01',
        people_staffed_on_project: ['LAMA', 'ABC'],
      },
    }, {
      project: {
        id: 3,
        name: 'Project 3',
        url: 'https://octopod.octo.com/api/v0/projects/3',
        reference: 'F2017-789',
        status: 'mission_accepted',
        customer: { name: 'Client C' },
        nature: 'delivery',
        business_contact: { nickname: 'MNO' },
        mission_director: { nickname: 'PQR' },
        locations: 'Osny et OCTO',
      },
      activity: {
        id: 4,
        title: 'Activity 3-A',
        staffing_needed_from: '2017-10-01',
        people_staffed_on_project: ['DEF', 'XYZ'],
      },
    }, {
      project: {
        id: 3,
        name: 'Project 3',
        url: 'https://octopod.octo.com/api/v0/projects/3',
        reference: 'F2017-789',
        status: 'mission_accepted',
        customer: { name: 'Client C' },
        nature: 'delivery',
        business_contact: { nickname: 'MNO' },
        mission_director: { nickname: 'PQR' },
        locations: 'Osny et OCTO',
      },
      activity: {
        id: 5,
        title: 'Activity 3-B',
        staffing_needed_from: '2017-11-01',
        people_staffed_on_project: ['DEF', 'XYZ'],
      },
    }, {
      project: {
        id: 3,
        name: 'Project 3',
        url: 'https://octopod.octo.com/api/v0/projects/3',
        reference: 'F2017-789',
        status: 'mission_accepted',
        customer: { name: 'Client C' },
        nature: 'delivery',
        business_contact: { nickname: 'MNO' },
        mission_director: { nickname: 'PQR' },
        locations: 'Osny et OCTO',
      },
      activity: {
        id: 6,
        title: 'Activity 3-C',
        staffing_needed_from: '2017-12-01',
        people_staffed_on_project: ['DEF', 'XYZ'],
      },
    }];

    expect(jobs).to.deep.equal(expectedJobs);
  });
});
