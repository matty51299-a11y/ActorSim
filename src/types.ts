export type StatKey = 'industry' | 'critical' | 'audience' | 'commercial'
export interface Player { name:string; pronouns:string; age:number; year:number; month:number; money:number; earnings:number; agent:string; agentQuality:number; stats:Record<StatKey,number>; abilities:Record<string,number>; perceptions:string[] }
export interface Person { id:string; name:string; role:'Director'|'Actor'|'Producer'|'Casting Director'|'Agent'; quality:number }
export interface Relationship extends Person { warmth:number; history:string[] }
export interface Project { id:string; title:string; type:'Film'|'TV'|'Commercial'; genre:string; studio:string; director:Person; role:string; roleSize:string; budget:number; salary:number; weeks:number; script:string; coStar:string; hidden:{script:number; appeal:number; chaos:number; director:number}; history:string[] }
export interface Opportunity { project:Project; stage:number; status:'open'|'rejected'|'booked'; prepared:boolean; competitor:string; chance?:number }
export interface ProductionEvent { title:string; body:string; choices:{label:string; detail:string; performance:number; relationship:number; industry:number; perception?:string}[] }
export interface ReleaseResult { critic:number; audience:number; performance:string; boxOffice:string; impact:Partial<Record<StatKey,number>>; award?:string }
export interface Credit { project:Project; release:ReleaseResult; year:number }
export interface FeedItem { id:string; date:string; title:string; body:string; tone:'neutral'|'good'|'bad' }
export interface CareerState { seed:number; player:Player; opportunities:Opportunity[]; current?:Project; productionEvent?:ProductionEvent; productionPerformance:number; filmography:Credit[]; relationships:Relationship[]; feed:FeedItem[]; cycle:number; phase:'opportunities'|'production'|'release'; lastRelease?:Credit; awards:string[] }
