import AjaxService from 'ember-ajax/services/ajax';

export default AjaxService.extend({
  headers: Object.freeze({
    Authenticated: true
  })
})
