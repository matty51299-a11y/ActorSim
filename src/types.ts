export type StatKey = 'industry' | 'critical' | 'audience' | 'commercial'
export type PersonRole = 'Director' | 'Actor' | 'Producer' | 'Casting Director' | 'Agent'
export type AuditionStage = 'Self-tape' | 'Callback' | 'Director session' | 'Chemistry read' | 'Screen test' | 'Final two' | 'Result'

export interface Player { name:string; pronouns:string; age:number; year:number; month:number; money:number; earnings:number; agent:string; agentQuality:number; stats:Record<StatKey,number>; abilities:Record<string,number>; perceptions:string[] }
export interface Person { id:string; name:string; role:PersonRole; quality:number }
export interface Relationship extends Person { warmth:number; history:string[]; lastSeen?:number }
export interface Project { id:string; title:string; type:'Film'|'TV'|'Limited series'; format:string; genre:string; subgenre:string; studio:string; director:Person; producer:Person; castingDirector:Person; role:string; character:string; roleSize:string; budget:number; salary:number; weeks:number; script:string; agentRead:string; logline:string; coStars:string[]; offerType:'Audition'|'Meeting'|'Direct offer'; hidden:{script:number; appeal:number; chaos:number; director:number}; history:string[] }
export interface StageRecord { stage:AuditionStage; note:string; choice?:string; outcome:string }
export interface Opportunity { project:Project; stages:AuditionStage[]; stageIndex:number; status:'open'|'active'|'rejected'|'booked'|'offered'; prepared:boolean; competitor:string; performance:number; professionalism:number; chemistry:number; history:StageRecord[] }
export interface EventChoice { label:string; detail:string; consequence:string; performance:number; relationship:number; industry:number; film:number; perception?:string }
export interface StoryEvent { id:string; kind:'audition'|'production'|'career'|'year'; title:string; kicker:string; body:string; projectId?:string; choices:EventChoice[] }
export interface ReleaseResult { critic:number; audience:number; performance:string; performanceScore:number; boxOffice:string; worldwide:number; consensus:string; reviews:string[]; impact:Partial<Record<StatKey,number>>; award?:string }
export interface Credit { project:Project; release:ReleaseResult; year:number }
export interface FeedItem { id:string; date:string; title:string; body:string; tone:'neutral'|'good'|'bad'; kind?:string }
export interface YearReview { year:number; filmed:number; released:number; earnings:number; best?:string; disappointment?:string; relationships:number }
export interface CareerState { version:number; seed:number; player:Player; opportunities:Opportunity[]; current?:Project; currentOpportunity?:Opportunity; event?:StoryEvent; productionQueue:StoryEvent[]; productionPerformance:number; filmQuality:number; filmography:Credit[]; relationships:Relationship[]; feed:FeedItem[]; cycle:number; phase:'opportunities'|'audition'|'production'|'release'|'yearReview'; lastRelease?:Credit; awards:string[]; lastReviewYear:number; yearStats:YearReview }
