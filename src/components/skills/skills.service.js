//This class is for verifying if a skill exists because the skillname is passed via url parameter
import SkillList from '../../config/skills.config'

export default class SkillService {
  constructor ($q, $log) {
    'ngInject'
    this.$q = $q
    this.$log = $log
  }

  /* check if strings are identical */
    isSkillPresent(skillArray, skillStr) {
      var $log = this.$log
      return skillArray.some( function( item ) {
        $log.info('verifying skill', item.title )
         return skillStr.toLowerCase() === item.title.toLowerCase();
       });

  }

  /* check if given string skill exists in the array of valid skills
  * incase user has manually typed the skill name in the url and that skill does not exists in the array
  * this is called via the ui-router resolve this ensures the controller does not crash if an invalid skills
  * is sent via url param
  */
  isValidSkill ( skillStr ) {
     this.$log.info('skill', skillStr)
     let $q = this.$q
     let defer = $q.defer();
      let validSkill = false
     if (skillStr)
        validSkill = this.isSkillPresent( SkillList.skills, skillStr )

      this.$log.info('VERIFICATION COMPLETE' , validSkill)
     //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
     if (validSkill)
         defer.resolve(true)
     else
         defer.reject(false)

     return defer.promise;
  }

  /* return list of skills */
  getSkills() {
    return SkillList
  }

}
