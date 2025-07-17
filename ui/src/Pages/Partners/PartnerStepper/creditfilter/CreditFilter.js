export const InitialFilterData=[
    {
      "conditionID": "42930390-c152-41cb-9d57-15185b05690c",
      "subConditions": [],
      "category": "Borrower vintage with partner",
      "relation": "Greater than or Equal To",
      "val": "10000",
      "combiner": "AND",
    },
    {
      "conditionID": "919b2c2b-2f57-44ab-82fb-3c57e4efc0fd",
      "subConditions": [],
      "category": "Average monthly credit",
      "relation": "Greater than",
      "val": "5500000",
      "combiner": "AND",
    }
]
export const CreditFilterData=[
    {
      "rulesetID": "7165fee9-bea7-458e-8533-0a337506f6c6",
      "rules": [
        {
          "ruleID": "8c3fd337-a167-4d2c-a145-3c8a4bbc0726",
          "conditions": [
            {
              "conditionID": "78d0aaa3-990c-4238-b50b-bce75872454c",
              "subConditions": [
                {
                  "subConditionID": "0a85fbf5-1b20-4556-ac36-da2b6e45898f",
                  "operation": "OR",
                  "relation": "Equal to",
                  "val": "Kerala"
                }
              ],
              "category": "Location",
              "relation": "Equal to",
              "val": "TamilNadu",
              "combiner": "AND"
            },
            {
              "conditionID": "79633c78-2363-450b-89a1-99568a7b1998",
              "subConditions": [
                {
                  "subConditionID": "bc3e1030-0a89-472a-bd73-5b8f112afaae",
                  "operation": "AND",
                  "relation": "Greater than or Equal To",
                  "val": "20"
                }
              ],
              "category": "Age",
              "relation": "Less than or Equal To",
              "val": "30",
              "combiner": "AND"
            }
          ],
          "combiner": "AND",
          "ruleCombination": "Rule Combination 1"
        },
        {
          "ruleID": "a343547d-f0b7-4375-a63b-363fbf3cf5bb",
          "conditions": [
            {
              "conditionID": "cfa0ab56-6f90-41da-bda6-c9d5c75fd549",
              "subConditions": [],
              "category": "Average monthly credit",
              "relation": "Greater than",
              "val": "100000",
              "combiner": "AND"
            },
            {
              "conditionID": "7cf986a0-bfd0-424e-ab66-01995ed00daa",
              "subConditions": [],
              "category": "30DPD",
              "relation": "Equal to",
              "val": "5000",
              "combiner": "AND",
              "inMonths": "3months"
            },
            {
              "conditionID": "836ae51f-7912-45bb-80b5-c80641931abd",
              "subConditions": [],
              "category": "30DPD",
              "relation": "Equal to",
              "val": "80100",
              "combiner": "AND",
              "inMonths": "10months"
            }
          ],
          "combiner": "AND",
          "ruleCombination": "Rule Combination 2"
        },
        {
          "ruleID": "a73aaa14-cb8d-474a-9cf4-bda13e004ba6",
          "conditions": [
            {
              "conditionID": "8dee75d1-fa52-44dc-b27d-a0c5b6d1462d",
              "subConditions": [],
              "category": "Average monthly credit",
              "relation": "Greater than",
              "val": "100000",
              "combiner": "AND"
            },
            {
              "conditionID": "74eff4b8-f793-4b32-9f6f-a4dcc836d09f",
              "subConditions": [],
              "category": "30DPD",
              "relation": "Equal to",
              "val": "5000",
              "combiner": "AND",
              "inMonths": "3months"
            },
            {
              "conditionID": "56e2e242-6ba0-44ff-a720-98cf41590e31",
              "subConditions": [],
              "category": "30DPD",
              "relation": "Equal to",
              "val": "80100",
              "combiner": "AND",
              "inMonths": "10months"
            }
          ],
          "combiner": "AND",
          "ruleCombination": "Rule Combination 3"
        }
      ],
      "combiner": "AND",
      "customRuleSet": "Costome Rule Set 1"
    },
    {
      "rulesetID": "93f10fa1-9318-4814-a5d3-1a814787a215",
      "rules": [
        {
          "ruleID": "b67b38f3-cdf2-444d-abaa-82b2bca28b68",
          "conditions": [
            {
              "conditionID": "657027ef-b990-4d32-9e3d-8c3e8ef6844b",
              "subConditions": [
                {
                  "subConditionID": "87a311e8-ed9b-4036-86ef-c3f88473b2af",
                  "operation": "OR",
                  "relation": "Equal to",
                  "val": "Kerala"
                }
              ],
              "category": "Location",
              "relation": "Equal to",
              "val": "TamilNadu",
              "combiner": "AND"
            },
            {
              "conditionID": "0289de31-6dc3-4708-8b4a-037a2e29a1bf",
              "subConditions": [
                {
                  "subConditionID": "c5ea30d8-3e72-4d83-87ae-cf829d53006c",
                  "operation": "AND",
                  "relation": "Greater than or Equal To",
                  "val": "20"
                }
              ],
              "category": "Age",
              "relation": "Less than or Equal To",
              "val": "30",
              "combiner": "AND"
            }
          ],
          "combiner": "AND",
          "ruleCombination": "Rule Combination 1"
        },
        {
          "ruleID": "b458d2c3-2714-45d7-899c-7ade0789bd46",
          "conditions": [
            {
              "conditionID": "e3687640-e561-41b8-9edb-8f6779fbe015",
              "subConditions": [],
              "category": "Average monthly credit",
              "relation": "Greater than",
              "val": "100000",
              "combiner": "AND"
            },
            {
              "conditionID": "1a9848b2-8996-484f-81a2-8cabf95013a0",
              "subConditions": [],
              "category": "30DPD",
              "relation": "Equal to",
              "val": "5000",
              "combiner": "AND",
              "inMonths": "3months"
            },
            {
              "conditionID": "c4374bc6-1e51-4402-bfec-4ee5d1eb04b0",
              "subConditions": [],
              "category": "30DPD",
              "relation": "Equal to",
              "val": "80100",
              "combiner": "AND",
              "inMonths": "10months"
            }
          ],
          "combiner": "AND",
          "ruleCombination": "Rule Combination 2"
        },
        {
          "ruleID": "76dc4185-3bf2-4a15-aae7-48d434654c79",
          "conditions": [
            {
              "conditionID": "08700be5-0e00-4b16-a8b2-7c4019667a3c",
              "subConditions": [],
              "category": "Average monthly credit",
              "relation": "Greater than",
              "val": "100000",
              "combiner": "AND"
            },
            {
              "conditionID": "47186d7e-e84a-49a5-b7ed-b69c4d00eeed",
              "subConditions": [],
              "category": "30DPD",
              "relation": "Equal to",
              "val": "5000",
              "combiner": "AND",
              "inMonths": "3months"
            },
            {
              "conditionID": "852834d8-4271-4f3d-bf37-d13cd41b3cdd",
              "subConditions": [],
              "category": "30DPD",
              "relation": "Equal to",
              "val": "80100",
              "combiner": "AND",
              "inMonths": "10months"
            }
          ],
          "combiner": "AND",
          "ruleCombination": "Rule Combination 3"
        }
      ],
      "combiner": "AND",
      "customRuleSet": "Costome Rule Set 2"
    },
    {
      "rulesetID": "7c3ca554-c09c-496b-b4d2-702f36dbd736",
      "rules": [
        {
          "ruleID": "965a4b75-8991-4817-b621-759854c64a36",
          "conditions": [
            {
              "conditionID": "90c37dc1-e275-4493-8e30-db601078362a",
              "subConditions": [
                {
                  "subConditionID": "40c7cae4-c496-4d71-8e76-5a3009ffe9e3",
                  "operation": "OR",
                  "relation": "Equal to",
                  "val": "Kerala"
                }
              ],
              "category": "Location",
              "relation": "Equal to",
              "val": "TamilNadu",
              "combiner": "AND"
            },
            {
              "conditionID": "8f818115-6ba2-462a-ad45-03f1e5f00e83",
              "subConditions": [
                {
                  "subConditionID": "f0663291-d662-43f3-94b6-666239b85ed2",
                  "operation": "AND",
                  "relation": "Greater than or Equal To",
                  "val": "20"
                }
              ],
              "category": "Age",
              "relation": "Less than or Equal To",
              "val": "30",
              "combiner": "AND"
            }
          ],
          "combiner": "AND",
          "ruleCombination": "Rule Combination 1"
        },
        {
          "ruleID": "74e21bb4-d72e-49ca-98d9-f152d2f73832",
          "conditions": [
            {
              "conditionID": "5a5e8915-2678-4d51-99dc-ff126c741480",
              "subConditions": [],
              "category": "Average monthly credit",
              "relation": "Greater than",
              "val": "100000",
              "combiner": "AND"
            },
            {
              "conditionID": "28825f45-8a8f-4b59-a4ea-b4326e3e0add",
              "subConditions": [],
              "category": "30DPD",
              "relation": "Equal to",
              "val": "5000",
              "combiner": "AND",
              "inMonths": "3months"
            },
            {
              "conditionID": "a22c9f83-d147-4a54-bf87-48519fb6c560",
              "subConditions": [],
              "category": "30DPD",
              "relation": "Equal to",
              "val": "80100",
              "combiner": "AND",
              "inMonths": "10months"
            }
          ],
          "combiner": "AND",
          "ruleCombination": "Rule Combination 2"
        },
        {
          "ruleID": "0a06b955-ebf8-423e-8eb7-c55435ad571e",
          "conditions": [
            {
              "conditionID": "7d89e18a-8cee-4266-a99f-8353df382638",
              "subConditions": [],
              "category": "Average monthly credit",
              "relation": "Greater than",
              "val": "100000",
              "combiner": "AND"
            },
            {
              "conditionID": "b434e446-1206-497b-be97-8d44fd3ee71b",
              "subConditions": [],
              "category": "30DPD",
              "relation": "Equal to",
              "val": "5000",
              "combiner": "AND",
              "inMonths": "3months"
            },
            {
              "conditionID": "3700c1ab-2682-40f8-af3a-f8a4cc9bf75b",
              "subConditions": [],
              "category": "30DPD",
              "relation": "Equal to",
              "val": "80100",
              "combiner": "AND",
              "inMonths": "10months"
            }
          ],
          "combiner": "AND",
          "ruleCombination": "Rule Combination 3"
        }
      ],
      "combiner": "AND",
      "customRuleSet": "Costome Rule Set 3"
    }
  ]