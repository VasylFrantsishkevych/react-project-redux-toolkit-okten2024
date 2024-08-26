export interface IForm {
   form_order: number,
   id: number,
   is_battle_only:boolean,
   is_default:boolean,
   is_mega:boolean,
   name: string,
   sprites: {
      back_default: string,
      front_default: string,
      back_shiny: string,
      front_shiny: string,
   }
}