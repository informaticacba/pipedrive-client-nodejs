/**
 * Pipedrive API v1
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import BaseMailThreadMessagesAllOf from './BaseMailThreadMessagesAllOf';
import CommonMailThread from './CommonMailThread';
import MailThreadParticipant from './MailThreadParticipant';
import NumberBooleanDefault0 from './NumberBooleanDefault0';

/**
 * The BaseMailThreadMessages model module.
 * @module model/BaseMailThreadMessages
 * @version 1.0.0
 */
class BaseMailThreadMessages {
    /**
     * Constructs a new <code>BaseMailThreadMessages</code>.
     * @alias module:model/BaseMailThreadMessages
     * @implements module:model/CommonMailThread
     * @implements module:model/BaseMailThreadMessagesAllOf
     */
    constructor() { 
        CommonMailThread.initialize(this);BaseMailThreadMessagesAllOf.initialize(this);
        BaseMailThreadMessages.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BaseMailThreadMessages</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BaseMailThreadMessages} obj Optional instance to populate.
     * @return {module:model/BaseMailThreadMessages} The populated <code>BaseMailThreadMessages</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BaseMailThreadMessages();
            CommonMailThread.constructFromObject(data, obj);
            BaseMailThreadMessagesAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');

                delete data['id'];
            }
            if (data.hasOwnProperty('account_id')) {
                obj['account_id'] = ApiClient.convertToType(data['account_id'], 'String');

                delete data['account_id'];
            }
            if (data.hasOwnProperty('user_id')) {
                obj['user_id'] = ApiClient.convertToType(data['user_id'], 'Number');

                delete data['user_id'];
            }
            if (data.hasOwnProperty('subject')) {
                obj['subject'] = ApiClient.convertToType(data['subject'], 'String');

                delete data['subject'];
            }
            if (data.hasOwnProperty('snippet')) {
                obj['snippet'] = ApiClient.convertToType(data['snippet'], 'String');

                delete data['snippet'];
            }
            if (data.hasOwnProperty('read_flag')) {
                obj['read_flag'] = ApiClient.convertToType(data['read_flag'], NumberBooleanDefault0);

                delete data['read_flag'];
            }
            if (data.hasOwnProperty('mail_tracking_status')) {
                obj['mail_tracking_status'] = ApiClient.convertToType(data['mail_tracking_status'], 'String');

                delete data['mail_tracking_status'];
            }
            if (data.hasOwnProperty('has_attachments_flag')) {
                obj['has_attachments_flag'] = ApiClient.convertToType(data['has_attachments_flag'], NumberBooleanDefault0);

                delete data['has_attachments_flag'];
            }
            if (data.hasOwnProperty('has_inline_attachments_flag')) {
                obj['has_inline_attachments_flag'] = ApiClient.convertToType(data['has_inline_attachments_flag'], NumberBooleanDefault0);

                delete data['has_inline_attachments_flag'];
            }
            if (data.hasOwnProperty('has_real_attachments_flag')) {
                obj['has_real_attachments_flag'] = ApiClient.convertToType(data['has_real_attachments_flag'], NumberBooleanDefault0);

                delete data['has_real_attachments_flag'];
            }
            if (data.hasOwnProperty('deleted_flag')) {
                obj['deleted_flag'] = ApiClient.convertToType(data['deleted_flag'], NumberBooleanDefault0);

                delete data['deleted_flag'];
            }
            if (data.hasOwnProperty('synced_flag')) {
                obj['synced_flag'] = ApiClient.convertToType(data['synced_flag'], NumberBooleanDefault0);

                delete data['synced_flag'];
            }
            if (data.hasOwnProperty('smart_bcc_flag')) {
                obj['smart_bcc_flag'] = ApiClient.convertToType(data['smart_bcc_flag'], NumberBooleanDefault0);

                delete data['smart_bcc_flag'];
            }
            if (data.hasOwnProperty('mail_link_tracking_enabled_flag')) {
                obj['mail_link_tracking_enabled_flag'] = ApiClient.convertToType(data['mail_link_tracking_enabled_flag'], NumberBooleanDefault0);

                delete data['mail_link_tracking_enabled_flag'];
            }
            if (data.hasOwnProperty('write_flag')) {
                obj['write_flag'] = ApiClient.convertToType(data['write_flag'], 'Boolean');

                delete data['write_flag'];
            }
            if (data.hasOwnProperty('from')) {
                obj['from'] = ApiClient.convertToType(data['from'], [MailThreadParticipant]);

                delete data['from'];
            }
            if (data.hasOwnProperty('to')) {
                obj['to'] = ApiClient.convertToType(data['to'], [MailThreadParticipant]);

                delete data['to'];
            }
            if (data.hasOwnProperty('cc')) {
                obj['cc'] = ApiClient.convertToType(data['cc'], [MailThreadParticipant]);

                delete data['cc'];
            }
            if (data.hasOwnProperty('bcc')) {
                obj['bcc'] = ApiClient.convertToType(data['bcc'], [MailThreadParticipant]);

                delete data['bcc'];
            }
            if (data.hasOwnProperty('body_url')) {
                obj['body_url'] = ApiClient.convertToType(data['body_url'], 'String');

                delete data['body_url'];
            }
            if (data.hasOwnProperty('mail_thread_id')) {
                obj['mail_thread_id'] = ApiClient.convertToType(data['mail_thread_id'], 'Number');

                delete data['mail_thread_id'];
            }
            if (data.hasOwnProperty('draft')) {
                obj['draft'] = ApiClient.convertToType(data['draft'], 'String');

                delete data['draft'];
            }
            if (data.hasOwnProperty('has_body_flag')) {
                obj['has_body_flag'] = ApiClient.convertToType(data['has_body_flag'], NumberBooleanDefault0);

                delete data['has_body_flag'];
            }
            if (data.hasOwnProperty('sent_flag')) {
                obj['sent_flag'] = ApiClient.convertToType(data['sent_flag'], NumberBooleanDefault0);

                delete data['sent_flag'];
            }
            if (data.hasOwnProperty('sent_from_pipedrive_flag')) {
                obj['sent_from_pipedrive_flag'] = ApiClient.convertToType(data['sent_from_pipedrive_flag'], NumberBooleanDefault0);

                delete data['sent_from_pipedrive_flag'];
            }
            if (data.hasOwnProperty('message_time')) {
                obj['message_time'] = ApiClient.convertToType(data['message_time'], 'Date');

                delete data['message_time'];
            }
            if (data.hasOwnProperty('add_time')) {
                obj['add_time'] = ApiClient.convertToType(data['add_time'], 'Date');

                delete data['add_time'];
            }
            if (data.hasOwnProperty('update_time')) {
                obj['update_time'] = ApiClient.convertToType(data['update_time'], 'Date');

                delete data['update_time'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * ID of the mail thread
 * @member {Number} id
 */
BaseMailThreadMessages.prototype['id'] = undefined;

/**
 * The connection account ID
 * @member {String} account_id
 */
BaseMailThreadMessages.prototype['account_id'] = undefined;

/**
 * ID of the user whom mail message will be assigned to
 * @member {Number} user_id
 */
BaseMailThreadMessages.prototype['user_id'] = undefined;

/**
 * The subject
 * @member {String} subject
 */
BaseMailThreadMessages.prototype['subject'] = undefined;

/**
 * A snippet
 * @member {String} snippet
 */
BaseMailThreadMessages.prototype['snippet'] = undefined;

/**
 * Whether the mail thread is read
 * @member {module:model/NumberBooleanDefault0} read_flag
 */
BaseMailThreadMessages.prototype['read_flag'] = undefined;

/**
 * Mail tracking status
 * @member {String} mail_tracking_status
 */
BaseMailThreadMessages.prototype['mail_tracking_status'] = undefined;

/**
 * Whether the mail thread has an attachment
 * @member {module:model/NumberBooleanDefault0} has_attachments_flag
 */
BaseMailThreadMessages.prototype['has_attachments_flag'] = undefined;

/**
 * Whether the mail thread has inline attachments
 * @member {module:model/NumberBooleanDefault0} has_inline_attachments_flag
 */
BaseMailThreadMessages.prototype['has_inline_attachments_flag'] = undefined;

/**
 * Whether the mail thread has real attachments (which are not inline)
 * @member {module:model/NumberBooleanDefault0} has_real_attachments_flag
 */
BaseMailThreadMessages.prototype['has_real_attachments_flag'] = undefined;

/**
 * Whether the mail thread is deleted
 * @member {module:model/NumberBooleanDefault0} deleted_flag
 */
BaseMailThreadMessages.prototype['deleted_flag'] = undefined;

/**
 * Whether the mail thread is synced
 * @member {module:model/NumberBooleanDefault0} synced_flag
 */
BaseMailThreadMessages.prototype['synced_flag'] = undefined;

/**
 * Whether one of the parties of the mail thread is Bcc
 * @member {module:model/NumberBooleanDefault0} smart_bcc_flag
 */
BaseMailThreadMessages.prototype['smart_bcc_flag'] = undefined;

/**
 * Whether the link tracking of the mail thread is enabled
 * @member {module:model/NumberBooleanDefault0} mail_link_tracking_enabled_flag
 */
BaseMailThreadMessages.prototype['mail_link_tracking_enabled_flag'] = undefined;

/**
 * We strongly advise you to avoid the use of this property. We will soon deprecate this property
 * @member {Boolean} write_flag
 */
BaseMailThreadMessages.prototype['write_flag'] = undefined;

/**
 * Senders of the mail thread
 * @member {Array.<module:model/MailThreadParticipant>} from
 */
BaseMailThreadMessages.prototype['from'] = undefined;

/**
 * Recipients of the mail thread
 * @member {Array.<module:model/MailThreadParticipant>} to
 */
BaseMailThreadMessages.prototype['to'] = undefined;

/**
 * Participants of the Cc
 * @member {Array.<module:model/MailThreadParticipant>} cc
 */
BaseMailThreadMessages.prototype['cc'] = undefined;

/**
 * Participants of the Bcc
 * @member {Array.<module:model/MailThreadParticipant>} bcc
 */
BaseMailThreadMessages.prototype['bcc'] = undefined;

/**
 * A link to the mail thread message
 * @member {String} body_url
 */
BaseMailThreadMessages.prototype['body_url'] = undefined;

/**
 * ID of the mail thread
 * @member {Number} mail_thread_id
 */
BaseMailThreadMessages.prototype['mail_thread_id'] = undefined;

/**
 * If the mail message has a draft status then the value is the mail message object as JSON formatted string, otherwise `null`.
 * @member {String} draft
 */
BaseMailThreadMessages.prototype['draft'] = undefined;

/**
 * Whether the mail thread message has a body
 * @member {module:model/NumberBooleanDefault0} has_body_flag
 */
BaseMailThreadMessages.prototype['has_body_flag'] = undefined;

/**
 * Whether the mail thread message is sent
 * @member {module:model/NumberBooleanDefault0} sent_flag
 */
BaseMailThreadMessages.prototype['sent_flag'] = undefined;

/**
 * Whether the mail thread message is sent from Pipedrive
 * @member {module:model/NumberBooleanDefault0} sent_from_pipedrive_flag
 */
BaseMailThreadMessages.prototype['sent_from_pipedrive_flag'] = undefined;

/**
 * The time when the mail message was received or created
 * @member {Date} message_time
 */
BaseMailThreadMessages.prototype['message_time'] = undefined;

/**
 * The time when the mail message was inserted to database
 * @member {Date} add_time
 */
BaseMailThreadMessages.prototype['add_time'] = undefined;

/**
 * The time when the mail message was updated in database received
 * @member {Date} update_time
 */
BaseMailThreadMessages.prototype['update_time'] = undefined;


// Implement CommonMailThread interface:
/**
 * ID of the mail thread
 * @member {Number} id
 */
CommonMailThread.prototype['id'] = undefined;
/**
 * The connection account ID
 * @member {String} account_id
 */
CommonMailThread.prototype['account_id'] = undefined;
/**
 * ID of the user whom mail message will be assigned to
 * @member {Number} user_id
 */
CommonMailThread.prototype['user_id'] = undefined;
/**
 * The subject
 * @member {String} subject
 */
CommonMailThread.prototype['subject'] = undefined;
/**
 * A snippet
 * @member {String} snippet
 */
CommonMailThread.prototype['snippet'] = undefined;
/**
 * Whether the mail thread is read
 * @member {module:model/NumberBooleanDefault0} read_flag
 */
CommonMailThread.prototype['read_flag'] = undefined;
/**
 * Mail tracking status
 * @member {String} mail_tracking_status
 */
CommonMailThread.prototype['mail_tracking_status'] = undefined;
/**
 * Whether the mail thread has an attachment
 * @member {module:model/NumberBooleanDefault0} has_attachments_flag
 */
CommonMailThread.prototype['has_attachments_flag'] = undefined;
/**
 * Whether the mail thread has inline attachments
 * @member {module:model/NumberBooleanDefault0} has_inline_attachments_flag
 */
CommonMailThread.prototype['has_inline_attachments_flag'] = undefined;
/**
 * Whether the mail thread has real attachments (which are not inline)
 * @member {module:model/NumberBooleanDefault0} has_real_attachments_flag
 */
CommonMailThread.prototype['has_real_attachments_flag'] = undefined;
/**
 * Whether the mail thread is deleted
 * @member {module:model/NumberBooleanDefault0} deleted_flag
 */
CommonMailThread.prototype['deleted_flag'] = undefined;
/**
 * Whether the mail thread is synced
 * @member {module:model/NumberBooleanDefault0} synced_flag
 */
CommonMailThread.prototype['synced_flag'] = undefined;
/**
 * Whether one of the parties of the mail thread is Bcc
 * @member {module:model/NumberBooleanDefault0} smart_bcc_flag
 */
CommonMailThread.prototype['smart_bcc_flag'] = undefined;
/**
 * Whether the link tracking of the mail thread is enabled
 * @member {module:model/NumberBooleanDefault0} mail_link_tracking_enabled_flag
 */
CommonMailThread.prototype['mail_link_tracking_enabled_flag'] = undefined;
/**
 * We strongly advise you to avoid the use of this property. We will soon deprecate this property
 * @member {Boolean} write_flag
 */
CommonMailThread.prototype['write_flag'] = undefined;
// Implement BaseMailThreadMessagesAllOf interface:
/**
 * Senders of the mail thread
 * @member {Array.<module:model/MailThreadParticipant>} from
 */
BaseMailThreadMessagesAllOf.prototype['from'] = undefined;
/**
 * Recipients of the mail thread
 * @member {Array.<module:model/MailThreadParticipant>} to
 */
BaseMailThreadMessagesAllOf.prototype['to'] = undefined;
/**
 * Participants of the Cc
 * @member {Array.<module:model/MailThreadParticipant>} cc
 */
BaseMailThreadMessagesAllOf.prototype['cc'] = undefined;
/**
 * Participants of the Bcc
 * @member {Array.<module:model/MailThreadParticipant>} bcc
 */
BaseMailThreadMessagesAllOf.prototype['bcc'] = undefined;
/**
 * A link to the mail thread message
 * @member {String} body_url
 */
BaseMailThreadMessagesAllOf.prototype['body_url'] = undefined;
/**
 * ID of the mail thread
 * @member {Number} mail_thread_id
 */
BaseMailThreadMessagesAllOf.prototype['mail_thread_id'] = undefined;
/**
 * If the mail message has a draft status then the value is the mail message object as JSON formatted string, otherwise `null`.
 * @member {String} draft
 */
BaseMailThreadMessagesAllOf.prototype['draft'] = undefined;
/**
 * Whether the mail thread message has a body
 * @member {module:model/NumberBooleanDefault0} has_body_flag
 */
BaseMailThreadMessagesAllOf.prototype['has_body_flag'] = undefined;
/**
 * Whether the mail thread message is sent
 * @member {module:model/NumberBooleanDefault0} sent_flag
 */
BaseMailThreadMessagesAllOf.prototype['sent_flag'] = undefined;
/**
 * Whether the mail thread message is sent from Pipedrive
 * @member {module:model/NumberBooleanDefault0} sent_from_pipedrive_flag
 */
BaseMailThreadMessagesAllOf.prototype['sent_from_pipedrive_flag'] = undefined;
/**
 * The time when the mail message was received or created
 * @member {Date} message_time
 */
BaseMailThreadMessagesAllOf.prototype['message_time'] = undefined;
/**
 * The time when the mail message was inserted to database
 * @member {Date} add_time
 */
BaseMailThreadMessagesAllOf.prototype['add_time'] = undefined;
/**
 * The time when the mail message was updated in database received
 * @member {Date} update_time
 */
BaseMailThreadMessagesAllOf.prototype['update_time'] = undefined;




export default BaseMailThreadMessages;

