# Pipedrive.AddNoteRequestAllOf

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**leadId** | **String** | The ID of the lead the note will be attached to. This property is required unless one of (&#x60;deal_id/person_id/org_id&#x60;) is specified. | [optional] 
**dealId** | **Number** | The ID of the deal the note will be attached to. This property is required unless one of (&#x60;lead_id/person_id/org_id&#x60;) is specified. | [optional] 
**personId** | **Number** | The ID of the person this note will be attached to. This property is required unless one of (&#x60;deal_id/lead_id/org_id&#x60;) is specified. | [optional] 
**orgId** | **Number** | The ID of the organization this note will be attached to. This property is required unless one of (&#x60;deal_id/lead_id/person_id&#x60;) is specified. | [optional] 


