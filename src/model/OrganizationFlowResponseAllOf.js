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
import AdditionalData from './AdditionalData';
import OrganizationFlowResponseAllOfData from './OrganizationFlowResponseAllOfData';
import OrganizationFlowResponseAllOfRelatedObjects from './OrganizationFlowResponseAllOfRelatedObjects';

/**
 * The OrganizationFlowResponseAllOf model module.
 * @module model/OrganizationFlowResponseAllOf
 * @version 1.0.0
 */
class OrganizationFlowResponseAllOf {
    /**
     * Constructs a new <code>OrganizationFlowResponseAllOf</code>.
     * @alias module:model/OrganizationFlowResponseAllOf
     */
    constructor() { 
        
        OrganizationFlowResponseAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrganizationFlowResponseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrganizationFlowResponseAllOf} obj Optional instance to populate.
     * @return {module:model/OrganizationFlowResponseAllOf} The populated <code>OrganizationFlowResponseAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrganizationFlowResponseAllOf();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [OrganizationFlowResponseAllOfData]);

                delete data['data'];
            }
            if (data.hasOwnProperty('additional_data')) {
                obj['additional_data'] = AdditionalData.constructFromObject(data['additional_data']);

                delete data['additional_data'];
            }
            if (data.hasOwnProperty('related_objects')) {
                obj['related_objects'] = OrganizationFlowResponseAllOfRelatedObjects.constructFromObject(data['related_objects']);

                delete data['related_objects'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/OrganizationFlowResponseAllOfData>} data
 */
OrganizationFlowResponseAllOf.prototype['data'] = undefined;

/**
 * @member {module:model/AdditionalData} additional_data
 */
OrganizationFlowResponseAllOf.prototype['additional_data'] = undefined;

/**
 * @member {module:model/OrganizationFlowResponseAllOfRelatedObjects} related_objects
 */
OrganizationFlowResponseAllOf.prototype['related_objects'] = undefined;






export default OrganizationFlowResponseAllOf;

