const {Actor} = require("cqrs");

module.exports = class Task extends Actor {
  constructor(){
    const {title, content}  = data;
    super({title, content});
  }

  change(title, content){
    this.$({title, content});  // create an event
  }

  get updater(){
    return {
      change(json, event){
        const {title, content} = event.data;
        return { title, content };
      }

    }
  }
}