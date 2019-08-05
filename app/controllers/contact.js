import Controller from '@ember/controller';
import { not, match, gte, and } from '@ember/object/computed';

export default Controller.extend({
    emailAddress: '',
    textMessage: '',
    responseMessage: '',
    isValid: match('emailAddress', /^.+@.+\..+$/),
    isLongEnough: gte('textMessage',5),
    isDisbaled: not('isValid'),


    actions: {
        sendMessage(){
            alert(`Email:  ${this.get('emailAddress')} Message: ${this.get('textMessage')}`);
            this.set('responseMessage', `We got your message and we’ll get in touch soon`);
            this.set('emailAddress', '');
            this.set('textMessage', '');
        }
    }

});
