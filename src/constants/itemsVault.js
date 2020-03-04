  export const mele = 
 [
   //unusuall weapons
  {name:"sword", value:"140 gc", group:"ordinary", power:"S", qualities:"defensive"},
  {name:"hammer", value:"70 gc", group:"ordinary", power:"S", qualities:"pummeling"},
  {name:"axe", value:"60 gc", group:"ordinary", power:"S", qualities:"impact"},
  {name:"military pick", value:"90 gc", group:"ordinary", power:"S", qualities:"impact"},
  {name:"elven battle-axe", value:"priceless", group:"two-handed", power:"S+1", qualities:"armor piercing"},
  {name:"khopesh", value:"10 gc", group:"ordinary", power:"S", qualities:"slow"},
  {name:"wood elf hunting spear", value:"priceless", group:"ordinary", power:"S+1", qualities:"fast"},
  {name:"tilean pike", value:"20 gc", group:"two-handed", power:"S", qualities:"fast"},
  {name:"claymore", value:"30 gc", group:"two-handed", power:"S", qualities:"slow / impact & slow"},
  {name:"white wolf hammer", value:"40 gc", group:"ordinary", power:"S+1", qualities:"tiring"},
  {name:"orc choppa", value:"worthless", group:"orc choppa", power:"S", qualities:"special"},
  {name:"great axe", value:"120 gc", group:"two-handed", power:"S+1", qualities:"impact, slow, tiring"},
  {name:"great warhammer", value:"150 gc", group:"two-handed", power:"S", qualities:"impact, pummeling, slow"},
  {name:"great pick", value:"200 gc", group:"two-handed", power:"S", qualities:"armor piercing, impact, slow"},
  {name:"great sword", value:"350 gc", group:"two-handed", power:"S+1", qualities:"impact, slow"},

  //common weapons
  {name:"buckler", value:"2 gc", group:"parrying", power:"S-4", qualities:"balanced, defensive, pummeling"},
  {name:"dagger", value:"1 gc", group:"ordinary", power:"S-3", qualities:"none"},
  {name:"demilance", value:"20 gc", group:"cavalry", power:"S", qualities:"fast, impact, tiring"},
  {name:"flail", value:"15 gc", group:"flail", power:"S+1", qualities:"impact, tiring"},
  {name:"foil", value:"18 gc", group:"fencing", power:"S-2", qualities:"fast, precise"},
  {name:"gauntlet", value:"1 gc", group:"ordinary", power:"S-3", qualities:"pumelling"},
  {name:"halberd", value:"15 gc", group:"two-handed", power:"S", qualities:"special"},
  {name:"lance", value:"40 gc", group:"cavalry", power:"S+1", qualities:"fast, impact, tiring"},
  {name:"main gauche", value:"4 gc", group:"parrying", power:"S-3", qualities:"balanced, defensive"},
  {name:"morning star", value:"15 gc", group:"flail", power:"S", qualities:"impact tiring"},
  {name:"quaterstaff", value:"3 s", group:"ordinary", power:"S-2", qualities:"defensive, pummeling"},
  {name:"rapier", value:"18 gc", group:"fencing", power:"S-1", qualities:"fast"},
  {name:"shield", value:"10 gc", group:"ordinary", power:"S-2", qualities:"defensive, special"},
  {name:"spear", value:"10 gc", group:"flail", power:"S", qualities:"fast"},
  {name:"sword-breaker", value:"5 gc", group:"parrying", power:"S-3", qualities:"balanced, special"},

 ]

  export const ranged = 
 [
  {name:"bola", value:"7 s", group:"entangling", power:"1", range:"8/16", reload:"half", qualities:"snare"},
  {name:"bow", value:"10 gc", group:"ordinary", power:"3", range:"24/48", reload:"half", qualities:"none"},
  {name:"crossbow", value:"25 gc", group:"crossbow", power:"4", range:"30/60", reload:"full",qualities:"none"},
  {name:"crossbow pistol", value:"35 g", group:"crossbow", power:"2", range:"8/16", reload:"full", qualities:"none"},
  {name:"elfbow", value:"70 gc", group:"longbow", power:"3", range:"36/72", reload:"half", qualities:"armor piercing"},
  {name:"jevelin", value:"25 s", group:"ordinary", power:"S-1", range:"8/16", reload:"half", qualities:"none"},
  {name:"lasso", value:"1 gc", group:"entangling", power:"n/a", range:"8/-", reload:"half", qualities:"snare"},
  {name:"longbow", value:"15 gc", group:"longbow", power:"3", range:"30/60", reload:"half", qualities:"armor piercing"},
  {name:"net", value:"3 gc", group:"entagling", power:"n/a", range:"4/8", reload:"full", qualities:"snare"},
  {name:"repeter crossbow", value:"100 gc", group:"crossbow", power:"2", range:"16/32", reload:"free", qualities:"special"},
  {name:"shortbow", value:"7 gc", group:"ordinary", power:"3", range:"16/32", reload:"half", qualities:"none"},
  {name:"sling", value:"4 gc", group:"sling", power:"3", range:"16/32", reload:"half", qualities:"none"},
  {name:"spear", value:"10 gc", group:"ordinary", power:"S", range:"8/-", reload:"half", qualities:"none"},
  {name:"staff sling", value:"6 gc", group:"sling", power:"4", range:"24/48", reload:"full", qualities:"none"},
  {name:"throwing axe", value:"5 gc", group:"throwing", power:"S-2", range:"8/-", reload:"half", qualities:"none"},
  {name:"throwing hammer", value:"5 gc", group:"throwing", power:"S-2", range:"8/-", reload:"half", qualities:"none"},
  {name:"throwing dagger", value:"3 gc", group:"throwing", power:"S-3", range:"6/12", reload:"half", qualities:"none"},
  {name:"throwing star", value:"3 gc", group:"throwing", power:"S-3", range:"6/12", reload:"half", qualities:"none"},

//gunpowder weapons
  {name:"blunderbuss", value:"70 gc", group:"gunpowder", power:"3", range:"32/-", reload:"3 full", qualities:"shrapnel, unreliable"},
  {name:"bomb", value:"75 gc", group:"explosive", power:"6", range:"4/20", reload:"are you serious?", qualities:"unreliable"},
  {name:"duck-foot", value:"500 gc", group:"engineer", power:"3", range:"16/-", reload:"4 full", qualities:"special, experimental"},
  {name:"firearm", value:"300 gc", group:"gunpowder", power:"4", range:"24/48", reload:"2 full", qualities:"impact, unreliable"},
  {name:"hochland long rifle", value:"450 gc", group:"engineer", power:"4", range:"48/96", reload:"2 full", qualities:"impact, unreliable"},
  {name:"incendentary", value:"5 gc", group:"explosive", power:"4", range:"4/10", reload:"full + half", qualities:"special"},
  {name:"jezzail", value:"??? ", group:"gunpowder", power:"3", range:"24/72", reload:"2 full", qualities:"none"},
  {name:"pistol", value:"200 gc", group:"gunpowder", power:"4", range:"8/16", reload:"2 full", qualities:"impact, unreliable"},
  {name:"repeater handgun", value:"600 gc", group:"engineer", power:"4", range:"24/48", reload:"free", qualities:"experimental, special"},
  {name:"repeater pistol", value:"400 gc", group:"engineer", power:"4", range:"8/16", reload:"2 full", qualities:"experimental, special"},

 ]

  export const armor = 
 [
  {name:"leather skullcap", value:"3 gc",  location:"head", armor:1 },
  {name:"leather jerkin", value:"6 gc",  location:"body", armor:1},
  {name:"leather leggings", value:"12 gc",  location:"body,arms", armor:1},
 ]

 export const potion = 
 [
  {name:"potions are comming soon"},

 ]
 export const general = 
 [
  {name:"general eq is comming soon"},

 ]
 export const treasure = 
 [
  {name:"treasures are comming soon"},

 ]
 export const food = 
 [
  {name:" food is comming soon"},

 ]
 export const clothes = 
 [
  {attire:"apron", value:"5 p" },
  {attire:"belt", value:"3 s" },
  {attire:"boots hip high", value:"8 gc" },
  {attire:"boots hobnailed", value:"30 gc" },
  {attire:"boots low", value:"18 s" },
  {attire:"boots riding", value:"3 gc" },
  {attire:"cannoncs", value:"6 gc" },
  {attire:"cap", value:"10 s" },
  {attire:"cape short", value:"5 s" },
  {attire:"cape long", value:"9 s" },
  {attire:"chemise", value:"1 gc" },
  {attire:"coat light", value:"3 gc" },
  {attire:"coat heavy", value:"5 gc" },
  {attire:"codpiece", value:"4g c" },
  {attire:"corset", value:"3 gc" },
  {attire:"costume", value:"5g c" },
  {attire:"doublet", value:"10 s" },
  {attire:"dress", value:"1 gc" },
  {attire:"girdled", value:"4 gc" },
  {attire:"gloves", value:"3 gc" },
  {attire:"handkerchief", value:"6 p" },
  {attire:"hat", value:"1 gc" },
  {attire:"hood", value:"5 s" },
  {attire:"jerkin", value:"10 s" },
  {attire:"kilt", value:"12 s" },
  {attire:"loincloth", value:"4 s" },
  {attire:"mask", value:"10 s" },
  {attire:"nightsirt", value:"2 gc" },
  {attire:"overcoat", value:"10 gc" },
  {attire:"priest vestments", value:"13 gc" },
  {attire:"rags", value:"1 p" },
  {attire:"robes", value:"15 gc" },
  {attire:"sandals", value:"2s" },
  {attire:"sash", value:"30 p" },
  {attire:"scarf", value:"15 p" },
  {attire:"socks", value:"16 s" },
  {attire:"shoes", value:"26 s" },
 ]

 export const tools = 
 [
  {name:"tools are comming soon",},

 ]


