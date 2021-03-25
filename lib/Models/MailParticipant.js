/**
 * PipedriveAPIV1Lib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of MailParticipant
 */
class MailParticipant extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.id = this.constructor.getValue(obj.id);
        this.email_address = this.constructor.getValue(obj.email_address);
        this.name = this.constructor.getValue(obj.name);
        this.linked_person_id = this.constructor.getValue(obj.linked_person_id);
        this.linked_person_name = this.constructor.getValue(obj.linked_person_name);
        this.mail_message_party_id = this.constructor.getValue(obj.mail_message_party_id);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'id', realName: 'id' },
            { name: 'email_address', realName: 'email_address' },
            { name: 'name', realName: 'name' },
            { name: 'linked_person_id', realName: 'linked_person_id' },
            { name: 'linked_person_name', realName: 'linked_person_name' },
            { name: 'mail_message_party_id', realName: 'mail_message_party_id' },
        ]);
    }

    /**
     * Function containing information about discriminator values
     * mapped with their corresponding model class names
     *
     * @return   {object}  Object containing Key-Value pairs mapping discriminator
     *                     values with their corresponding model classes
     */
    static discriminatorMap() {
        return {};
    }
}

module.exports = MailParticipant;