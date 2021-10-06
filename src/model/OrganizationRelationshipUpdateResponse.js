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
import AllOrganizationRelationshipsGetResponseAllOfRelatedObjects from './AllOrganizationRelationshipsGetResponseAllOfRelatedObjects';
import BaseOrganizationRelationshipItem from './BaseOrganizationRelationshipItem';
import BaseResponse from './BaseResponse';
import OrganizationRelationshipPostResponseAllOf from './OrganizationRelationshipPostResponseAllOf';

/**
 * The OrganizationRelationshipUpdateResponse model module.
 * @module model/OrganizationRelationshipUpdateResponse
 * @version 1.0.0
 */
class OrganizationRelationshipUpdateResponse {
    /**
     * Constructs a new <code>OrganizationRelationshipUpdateResponse</code>.
     * @alias module:model/OrganizationRelationshipUpdateResponse
     * @implements module:model/BaseResponse
     * @implements module:model/OrganizationRelationshipPostResponseAllOf
     */
    constructor() { 
        BaseResponse.initialize(this);OrganizationRelationshipPostResponseAllOf.initialize(this);
        OrganizationRelationshipUpdateResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrganizationRelationshipUpdateResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrganizationRelationshipUpdateResponse} obj Optional instance to populate.
     * @return {module:model/OrganizationRelationshipUpdateResponse} The populated <code>OrganizationRelationshipUpdateResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrganizationRelationshipUpdateResponse();
            BaseResponse.constructFromObject(data, obj);
            OrganizationRelationshipPostResponseAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');

                delete data['success'];
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = BaseOrganizationRelationshipItem.constructFromObject(data['data']);

                delete data['data'];
            }
            if (data.hasOwnProperty('related_objects')) {
                obj['related_objects'] = AllOrganizationRelationshipsGetResponseAllOfRelatedObjects.constructFromObject(data['related_objects']);

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
 * If the response is successful or not
 * @member {Boolean} success
 */
OrganizationRelationshipUpdateResponse.prototype['success'] = undefined;

/**
 * @member {module:model/BaseOrganizationRelationshipItem} data
 */
OrganizationRelationshipUpdateResponse.prototype['data'] = undefined;

/**
 * @member {module:model/AllOrganizationRelationshipsGetResponseAllOfRelatedObjects} related_objects
 */
OrganizationRelationshipUpdateResponse.prototype['related_objects'] = undefined;


// Implement BaseResponse interface:
/**
 * If the response is successful or not
 * @member {Boolean} success
 */
BaseResponse.prototype['success'] = undefined;
// Implement OrganizationRelationshipPostResponseAllOf interface:
/**
 * @member {module:model/BaseOrganizationRelationshipItem} data
 */
OrganizationRelationshipPostResponseAllOf.prototype['data'] = undefined;
/**
 * @member {module:model/AllOrganizationRelationshipsGetResponseAllOfRelatedObjects} related_objects
 */
OrganizationRelationshipPostResponseAllOf.prototype['related_objects'] = undefined;




export default OrganizationRelationshipUpdateResponse;

