import timeConverterService from '~/services/time-converter-service/time-converter-service';

describe(`timeConverterService tests`, () => {
  it(`timeConverterService work correctly`, () => {
    expect(timeConverterService(100)).toEqual(`1h 40m`);
    expect(timeConverterService(120)).toEqual(`2h 0m`);
  });
});
