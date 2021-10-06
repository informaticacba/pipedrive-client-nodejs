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

/**
 * The CreateTeam model module.
 * @module model/CreateTeam
 * @version 1.0.0
 */
class CreateTeam {
    /**
     * Constructs a new <code>CreateTeam</code>.
     * @alias module:model/CreateTeam
     * @param name {String} The Team name
     * @param managerId {Number} The Team manager ID
     */
    constructor(name, managerId) { 
        
        CreateTeam.initialize(this, name, managerId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, managerId) { 
        obj['name'] = name;
        obj['manager_id'] = managerId;
    }

    /**
     * Constructs a <code>CreateTeam</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateTeam} obj Optional instance to populate.
     * @return {module:model/CreateTeam} The populated <code>CreateTeam</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateTeam();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');

                delete data['name'];
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');

                delete data['description'];
            }
            if (data.hasOwnProperty('manager_id')) {
                obj['manager_id'] = ApiClient.convertToType(data['manager_id'], 'Number');

                delete data['manager_id'];
            }
            if (data.hasOwnProperty('users')) {
                obj['users'] = ApiClient.convertToType(data['users'], ['Number']);

                delete data['users'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * The Team name
 * @member {String} name
 */
CreateTeam.prototype['name'] = undefined;

/**
 * The Team description
 * @member {String} description
 */
CreateTeam.prototype['description'] = undefined;

/**
 * The Team manager ID
 * @member {Number} manager_id
 */
CreateTeam.prototype['manager_id'] = undefined;

/**
 * List of User IDs
 * @member {Array.<Number>} users
 */
CreateTeam.prototype['users'] = undefined;






export default CreateTeam;

