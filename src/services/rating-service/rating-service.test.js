import RatingService from '~/services/rating-service/rating-service';

describe(`RatingService tests`, () => {
  const createService = (rating) => new RatingService(rating);

  it(`getLevel method work correctly`, () => {
    expect(createService(0).getLevel()).toEqual(`Bad`);
    expect(createService(2).getLevel()).toEqual(`Bad`);
    expect(createService(3).getLevel()).toEqual(`Normal`);
    expect(createService(4).getLevel()).toEqual(`Normal`);
    expect(createService(5).getLevel()).toEqual(`Good`);
    expect(createService(7).getLevel()).toEqual(`Good`);
    expect(createService(8).getLevel()).toEqual(`Very good`);
    expect(createService(9).getLevel()).toEqual(`Very good`);
    expect(createService(10).getLevel()).toEqual(`Awesome`);
    expect(createService(99).getLevel()).toEqual(`Awesome`);
  });

  it(`getConvertRating method work correctly`, () => {
    expect(createService(8.4).getConvertRating()).toEqual(`8,4`);
    expect(createService(5.4445).getConvertRating()).toEqual(`5,4`);
  });
});
