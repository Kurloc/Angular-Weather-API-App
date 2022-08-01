export class Alert {
  public readonly headline: string;
  public readonly msgtype: string;
  public readonly severity: string;
  public readonly urgency: string;
  public readonly areas: string;
  public readonly category: string;
  public readonly certainty: string;
  public readonly event: string;
  public readonly note: string;
  public readonly effective: string;
  public readonly expires: string;
  public readonly desc: string;
  public readonly instruction: string;

  constructor(headline: string,
              msgtype: string,
              severity: string,
              urgency: string,
              areas: string,
              category: string,
              certainty: string,
              event: string,
              note: string,
              effective: string,
              expires: string,
              desc: string,
              instruction: string) {
    this.headline = headline;
    this.msgtype = msgtype;
    this.severity = severity;
    this.urgency = urgency;
    this.areas = areas;
    this.category = category;
    this.certainty = certainty;
    this.event = event;
    this.note = note;
    this.effective = effective;
    this.expires = expires;
    this.desc = desc;
    this.instruction = instruction;
  }
}
