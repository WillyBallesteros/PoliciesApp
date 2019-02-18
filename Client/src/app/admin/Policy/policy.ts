export class Policy {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public startvalidity: string,
    public coverperiod: string,
    public price: string,
    public coverageId: string,
    public riskId: string,
  ) {}
}
