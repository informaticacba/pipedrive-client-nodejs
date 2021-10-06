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
import DealCountAndActivityInfo from './DealCountAndActivityInfo';
import DealParticipantCountInfo from './DealParticipantCountInfo';

/**
 * The MergePersonDealRelatedInfo model module.
 * @module model/MergePersonDealRelatedInfo
 * @version 1.0.0
 */
class MergePersonDealRelatedInfo {
    /**
     * Constructs a new <code>MergePersonDealRelatedInfo</code>.
     * @alias module:model/MergePersonDealRelatedInfo
     * @implements module:model/DealCountAndActivityInfo
     * @implements module:model/DealParticipantCountInfo
     */
    constructor() { 
        DealCountAndActivityInfo.initialize(this);DealParticipantCountInfo.initialize(this);
        MergePersonDealRelatedInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MergePersonDealRelatedInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MergePersonDealRelatedInfo} obj Optional instance to populate.
     * @return {module:model/MergePersonDealRelatedInfo} The populated <code>MergePersonDealRelatedInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MergePersonDealRelatedInfo();
            DealCountAndActivityInfo.constructFromObject(data, obj);
            DealParticipantCountInfo.constructFromObject(data, obj);

            if (data.hasOwnProperty('open_deals_count')) {
                obj['open_deals_count'] = ApiClient.convertToType(data['open_deals_count'], 'Number');

                delete data['open_deals_count'];
            }
            if (data.hasOwnProperty('related_open_deals_count')) {
                obj['related_open_deals_count'] = ApiClient.convertToType(data['related_open_deals_count'], 'Number');

                delete data['related_open_deals_count'];
            }
            if (data.hasOwnProperty('closed_deals_count')) {
                obj['closed_deals_count'] = ApiClient.convertToType(data['closed_deals_count'], 'Number');

                delete data['closed_deals_count'];
            }
            if (data.hasOwnProperty('related_closed_deals_count')) {
                obj['related_closed_deals_count'] = ApiClient.convertToType(data['related_closed_deals_count'], 'Number');

                delete data['related_closed_deals_count'];
            }
            if (data.hasOwnProperty('won_deals_count')) {
                obj['won_deals_count'] = ApiClient.convertToType(data['won_deals_count'], 'Number');

                delete data['won_deals_count'];
            }
            if (data.hasOwnProperty('related_won_deals_count')) {
                obj['related_won_deals_count'] = ApiClient.convertToType(data['related_won_deals_count'], 'Number');

                delete data['related_won_deals_count'];
            }
            if (data.hasOwnProperty('lost_deals_count')) {
                obj['lost_deals_count'] = ApiClient.convertToType(data['lost_deals_count'], 'Number');

                delete data['lost_deals_count'];
            }
            if (data.hasOwnProperty('related_lost_deals_count')) {
                obj['related_lost_deals_count'] = ApiClient.convertToType(data['related_lost_deals_count'], 'Number');

                delete data['related_lost_deals_count'];
            }
            if (data.hasOwnProperty('next_activity_date')) {
                obj['next_activity_date'] = ApiClient.convertToType(data['next_activity_date'], 'String');

                delete data['next_activity_date'];
            }
            if (data.hasOwnProperty('next_activity_time')) {
                obj['next_activity_time'] = ApiClient.convertToType(data['next_activity_time'], 'String');

                delete data['next_activity_time'];
            }
            if (data.hasOwnProperty('next_activity_id')) {
                obj['next_activity_id'] = ApiClient.convertToType(data['next_activity_id'], 'Number');

                delete data['next_activity_id'];
            }
            if (data.hasOwnProperty('last_activity_id')) {
                obj['last_activity_id'] = ApiClient.convertToType(data['last_activity_id'], 'Number');

                delete data['last_activity_id'];
            }
            if (data.hasOwnProperty('last_activity_date')) {
                obj['last_activity_date'] = ApiClient.convertToType(data['last_activity_date'], 'String');

                delete data['last_activity_date'];
            }
            if (data.hasOwnProperty('participant_open_deals_count')) {
                obj['participant_open_deals_count'] = ApiClient.convertToType(data['participant_open_deals_count'], 'Number');

                delete data['participant_open_deals_count'];
            }
            if (data.hasOwnProperty('participant_closed_deals_count')) {
                obj['participant_closed_deals_count'] = ApiClient.convertToType(data['participant_closed_deals_count'], 'Number');

                delete data['participant_closed_deals_count'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * The count of open Deals related with the item
 * @member {Number} open_deals_count
 */
MergePersonDealRelatedInfo.prototype['open_deals_count'] = undefined;

/**
 * The count of related open Deals related with the item
 * @member {Number} related_open_deals_count
 */
MergePersonDealRelatedInfo.prototype['related_open_deals_count'] = undefined;

/**
 * The count of closed Deals related with the item
 * @member {Number} closed_deals_count
 */
MergePersonDealRelatedInfo.prototype['closed_deals_count'] = undefined;

/**
 * The count of related closed Deals related with the item
 * @member {Number} related_closed_deals_count
 */
MergePersonDealRelatedInfo.prototype['related_closed_deals_count'] = undefined;

/**
 * The count of won Deals related with the item
 * @member {Number} won_deals_count
 */
MergePersonDealRelatedInfo.prototype['won_deals_count'] = undefined;

/**
 * The count of related won Deals related with the item
 * @member {Number} related_won_deals_count
 */
MergePersonDealRelatedInfo.prototype['related_won_deals_count'] = undefined;

/**
 * The count of lost Deals related with the item
 * @member {Number} lost_deals_count
 */
MergePersonDealRelatedInfo.prototype['lost_deals_count'] = undefined;

/**
 * The count of related lost Deals related with the item
 * @member {Number} related_lost_deals_count
 */
MergePersonDealRelatedInfo.prototype['related_lost_deals_count'] = undefined;

/**
 * The date of the next activity associated with the Deal
 * @member {String} next_activity_date
 */
MergePersonDealRelatedInfo.prototype['next_activity_date'] = undefined;

/**
 * The time of the next activity associated with the Deal
 * @member {String} next_activity_time
 */
MergePersonDealRelatedInfo.prototype['next_activity_time'] = undefined;

/**
 * The ID of the next activity associated with the Deal
 * @member {Number} next_activity_id
 */
MergePersonDealRelatedInfo.prototype['next_activity_id'] = undefined;

/**
 * The ID of the last activity associated with the Deal
 * @member {Number} last_activity_id
 */
MergePersonDealRelatedInfo.prototype['last_activity_id'] = undefined;

/**
 * The date of the last activity associated with the Deal
 * @member {String} last_activity_date
 */
MergePersonDealRelatedInfo.prototype['last_activity_date'] = undefined;

/**
 * The count of open participant Deals related with the item
 * @member {Number} participant_open_deals_count
 */
MergePersonDealRelatedInfo.prototype['participant_open_deals_count'] = undefined;

/**
 * The count of closed participant Deals related with the item
 * @member {Number} participant_closed_deals_count
 */
MergePersonDealRelatedInfo.prototype['participant_closed_deals_count'] = undefined;


// Implement DealCountAndActivityInfo interface:
/**
 * The count of open Deals related with the item
 * @member {Number} open_deals_count
 */
DealCountAndActivityInfo.prototype['open_deals_count'] = undefined;
/**
 * The count of related open Deals related with the item
 * @member {Number} related_open_deals_count
 */
DealCountAndActivityInfo.prototype['related_open_deals_count'] = undefined;
/**
 * The count of closed Deals related with the item
 * @member {Number} closed_deals_count
 */
DealCountAndActivityInfo.prototype['closed_deals_count'] = undefined;
/**
 * The count of related closed Deals related with the item
 * @member {Number} related_closed_deals_count
 */
DealCountAndActivityInfo.prototype['related_closed_deals_count'] = undefined;
/**
 * The count of won Deals related with the item
 * @member {Number} won_deals_count
 */
DealCountAndActivityInfo.prototype['won_deals_count'] = undefined;
/**
 * The count of related won Deals related with the item
 * @member {Number} related_won_deals_count
 */
DealCountAndActivityInfo.prototype['related_won_deals_count'] = undefined;
/**
 * The count of lost Deals related with the item
 * @member {Number} lost_deals_count
 */
DealCountAndActivityInfo.prototype['lost_deals_count'] = undefined;
/**
 * The count of related lost Deals related with the item
 * @member {Number} related_lost_deals_count
 */
DealCountAndActivityInfo.prototype['related_lost_deals_count'] = undefined;
/**
 * The date of the next activity associated with the Deal
 * @member {String} next_activity_date
 */
DealCountAndActivityInfo.prototype['next_activity_date'] = undefined;
/**
 * The time of the next activity associated with the Deal
 * @member {String} next_activity_time
 */
DealCountAndActivityInfo.prototype['next_activity_time'] = undefined;
/**
 * The ID of the next activity associated with the Deal
 * @member {Number} next_activity_id
 */
DealCountAndActivityInfo.prototype['next_activity_id'] = undefined;
/**
 * The ID of the last activity associated with the Deal
 * @member {Number} last_activity_id
 */
DealCountAndActivityInfo.prototype['last_activity_id'] = undefined;
/**
 * The date of the last activity associated with the Deal
 * @member {String} last_activity_date
 */
DealCountAndActivityInfo.prototype['last_activity_date'] = undefined;
// Implement DealParticipantCountInfo interface:
/**
 * The count of open participant Deals related with the item
 * @member {Number} participant_open_deals_count
 */
DealParticipantCountInfo.prototype['participant_open_deals_count'] = undefined;
/**
 * The count of closed participant Deals related with the item
 * @member {Number} participant_closed_deals_count
 */
DealParticipantCountInfo.prototype['participant_closed_deals_count'] = undefined;




export default MergePersonDealRelatedInfo;

