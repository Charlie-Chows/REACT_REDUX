import React from "react";
import  ReactDOM  from "react-dom/client";

const Header = ()=>{
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="data:image/png;base64,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" />
            </div>
            <div className="nav-container">
                <ul className="nav-items">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

// Props Destructring
const RestaurantCard = (props)=>{
    const {resData} = props;
    /* If objects are in different hierchey we will declare like this*/
    const {
        info: {
            cloudinaryImageId,
            name,
            cuisines,
            avgRating,
            sla: { deliveryTime },
            costForTwo
        }
    } = resData;
    return (
        <div className="res-card">
            <img className="res-logo" alt = "restaurant logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} Stars</h4>
            <h4>{deliveryTime} minutes</h4>
            <h4>{costForTwo}</h4>
        </div>
    )
}

const resList = [
        {
          "info": {
            "id": "10576",
            "name": "Pizza Hut",
            "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
            "locality": "Koramangala",
            "areaName": "Koramangala",
            "costForTwo": "₹350 for two",
            "cuisines": [
              "Pizzas"
            ],
            "avgRating": 3.8,
            "feeDetails": {
              "restaurantId": "10576",
              "fees": [
                {
                  "name": "BASE_DISTANCE",
                  "fee": 3000
                },
                {
                  "name": "BASE_TIME"
                },
                {
                  "name": "ANCILLARY_SURGE_FEE"
                }
              ],
              "totalFee": 3000
            },
            "parentId": "721",
            "avgRatingString": "3.8",
            "totalRatingsString": "10K+",
            "sla": {
              "deliveryTime": 21,
              "lastMileTravel": 0.7,
              "serviceability": "SERVICEABLE",
              "slaString": "21 mins",
              "lastMileTravelString": "0.7 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-11-27 04:00:00",
              "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {},
                "textBased": {},
                "textExtendedBadges": {}
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "60% OFF",
              "subHeader": "UPTO ₹120"
            },
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {}
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
              }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
          },
          "analytics": {
            "context": "seo-data-d7a6c408-c85d-48c0-ae75-e3b732e9c990"
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/pizza-hut-koramangala-bangalore-10576",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
          "info": {
            "id": "689427",
            "name": "Haldiram's",
            "cloudinaryImageId": "2f849d999918d411532dd1e8c24f29e0",
            "locality": "Sector-4",
            "areaName": "HSR Layout",
            "costForTwo": "₹200 for two",
            "cuisines": [
              "Sweets",
              "Desserts",
              "Bakery"
            ],
            "avgRating": 4.3,
            "veg": true,
            "feeDetails": {
              "restaurantId": "689427",
              "fees": [
                {
                  "name": "BASE_DISTANCE",
                  "fee": 4200
                },
                {
                  "name": "BASE_TIME"
                },
                {
                  "name": "ANCILLARY_SURGE_FEE"
                }
              ],
              "totalFee": 4200
            },
            "parentId": "377669",
            "avgRatingString": "4.3",
            "totalRatingsString": "500+",
            "sla": {
              "deliveryTime": 25,
              "lastMileTravel": 4.2,
              "serviceability": "SERVICEABLE",
              "slaString": "25 mins",
              "lastMileTravelString": "4.2 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-11-27 01:00:00",
              "opened": true
            },
            "badges": {},
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {},
                "textBased": {},
                "textExtendedBadges": {}
              }
            },
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {}
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
              }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
          },
          "analytics": {
            "context": "seo-data-d7a6c408-c85d-48c0-ae75-e3b732e9c990"
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/haldirams-sector-4-hsr-layout-bangalore-689427",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
          "info": {
            "id": "25620",
            "name": "KFC",
            "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
            "locality": "Intermediate Ring Road",
            "areaName": "Ejipura",
            "costForTwo": "₹400 for two",
            "cuisines": [
              "Burgers",
              "Biryani",
              "American",
              "Snacks",
              "Fast Food"
            ],
            "avgRating": 4.1,
            "feeDetails": {
              "restaurantId": "25620",
              "fees": [
                {
                  "name": "BASE_DISTANCE",
                  "fee": 3700
                },
                {
                  "name": "BASE_TIME"
                },
                {
                  "name": "ANCILLARY_SURGE_FEE"
                }
              ],
              "totalFee": 3700
            },
            "parentId": "547",
            "avgRatingString": "4.1",
            "totalRatingsString": "10K+",
            "sla": {
              "deliveryTime": 16,
              "lastMileTravel": 0.9,
              "serviceability": "SERVICEABLE",
              "slaString": "16 mins",
              "lastMileTravelString": "0.9 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-11-26 23:00:00",
              "opened": true
            },
            "badges": {},
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {},
                "textBased": {},
                "textExtendedBadges": {}
              }
            },
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {}
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
              }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
          },
          "analytics": {
            "context": "seo-data-d7a6c408-c85d-48c0-ae75-e3b732e9c990"
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/kfc-intermediate-ring-road-ejipura-bangalore-25620",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
          "info": {
            "id": "50467",
            "name": "Bakingo",
            "cloudinaryImageId": "wle5xrryznnyrdoxlchz",
            "locality": "1st Block",
            "areaName": "Koramangala",
            "costForTwo": "₹300 for two",
            "cuisines": [
              "Bakery",
              "Desserts",
              "Beverages",
              "Snacks"
            ],
            "avgRating": 4.2,
            "feeDetails": {
              "restaurantId": "50467",
              "fees": [
                {
                  "name": "BASE_DISTANCE",
                  "fee": 3700
                },
                {
                  "name": "BASE_TIME"
                },
                {
                  "name": "ANCILLARY_SURGE_FEE"
                }
              ],
              "totalFee": 3700
            },
            "parentId": "3818",
            "avgRatingString": "4.2",
            "totalRatingsString": "5K+",
            "sla": {
              "deliveryTime": 20,
              "lastMileTravel": 2.5,
              "serviceability": "SERVICEABLE",
              "slaString": "20 mins",
              "lastMileTravelString": "2.5 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-11-27 01:00:00",
              "opened": true
            },
            "badges": {},
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {},
                "textBased": {},
                "textExtendedBadges": {}
              }
            },
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {}
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
              }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
          },
          "analytics": {
            "context": "seo-data-d7a6c408-c85d-48c0-ae75-e3b732e9c990"
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/bakingo-1st-block-koramangala-bangalore-50467",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
          "info": {
            "id": "23678",
            "name": "McDonald's",
            "cloudinaryImageId": "bb7ae131544c7d37e10fc5faf76f09d6",
            "locality": "5th Block",
            "areaName": "Koramangala",
            "costForTwo": "₹400 for two",
            "cuisines": [
              "Burgers",
              "Beverages",
              "Cafe",
              "Desserts"
            ],
            "avgRating": 4.3,
            "feeDetails": {
              "restaurantId": "23678",
              "fees": [
                {
                  "name": "BASE_DISTANCE",
                  "fee": 3000
                },
                {
                  "name": "BASE_TIME"
                },
                {
                  "name": "ANCILLARY_SURGE_FEE"
                }
              ],
              "totalFee": 3000
            },
            "parentId": "630",
            "avgRatingString": "4.3",
            "totalRatingsString": "10K+",
            "sla": {
              "deliveryTime": 17,
              "lastMileTravel": 1.4,
              "serviceability": "SERVICEABLE",
              "slaString": "17 mins",
              "lastMileTravelString": "1.4 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-11-27 03:15:00",
              "opened": true
            },
            "badges": {
              "textExtendedBadges": [
                {
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available",
                  "fontColor": "#7E808C"
                }
              ]
            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {},
                "textBased": {},
                "textExtendedBadges": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "",
                        "fontColor": "#7E808C",
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available"
                      }
                    }
                  ]
                }
              }
            },
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {}
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
              }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
          },
          "analytics": {
            "context": "seo-data-d7a6c408-c85d-48c0-ae75-e3b732e9c990"
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/mcdonalds-5th-block-koramangala-bangalore-23678",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
          "info": {
            "id": "341867",
            "name": "Burger King",
            "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
            "locality": "Forum Mall",
            "areaName": "Adugodi",
            "costForTwo": "₹350 for two",
            "cuisines": [
              "Burgers",
              "American"
            ],
            "avgRating": 4.1,
            "feeDetails": {
              "restaurantId": "341867",
              "fees": [
                {
                  "name": "BASE_DISTANCE",
                  "fee": 3000
                },
                {
                  "name": "BASE_TIME"
                },
                {
                  "name": "ANCILLARY_SURGE_FEE"
                }
              ],
              "totalFee": 3000
            },
            "parentId": "166",
            "avgRatingString": "4.1",
            "totalRatingsString": "1K+",
            "sla": {
              "deliveryTime": 27,
              "lastMileTravel": 2.2,
              "serviceability": "SERVICEABLE",
              "slaString": "27 mins",
              "lastMileTravelString": "2.2 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-11-26 23:00:00",
              "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {},
                "textBased": {},
                "textExtendedBadges": {}
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "60% OFF",
              "subHeader": "UPTO ₹120"
            },
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {}
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
              }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
          },
          "analytics": {
            "context": "seo-data-d7a6c408-c85d-48c0-ae75-e3b732e9c990"
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/burger-king-forum-mall-adugodi-bangalore-341867",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
          "info": {
            "id": "74444",
            "name": "Samosa Party",
            "cloudinaryImageId": "d8d4e708a41f011361c949d44990d5e0",
            "locality": "Koramangala",
            "areaName": "Koramangala",
            "costForTwo": "₹100 for two",
            "cuisines": [
              "Fast Food",
              "Snacks",
              "Beverages",
              "Chaat",
              "North Indian",
              "Street Food",
              "Sweets",
              "Desserts",
              "Punjabi",
              "Bakery"
            ],
            "avgRating": 4.3,
            "feeDetails": {
              "restaurantId": "74444",
              "fees": [
                {
                  "name": "BASE_DISTANCE",
                  "fee": 3000
                },
                {
                  "name": "BASE_TIME"
                },
                {
                  "name": "ANCILLARY_SURGE_FEE"
                }
              ],
              "totalFee": 3000
            },
            "parentId": "6364",
            "avgRatingString": "4.3",
            "totalRatingsString": "10K+",
            "sla": {
              "deliveryTime": 23,
              "lastMileTravel": 1.6,
              "serviceability": "SERVICEABLE",
              "slaString": "23 mins",
              "lastMileTravelString": "1.6 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-12-03 00:00:00",
              "opened": true
            },
            "badges": {
              "textExtendedBadges": [
                {
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available",
                  "fontColor": "#7E808C"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {},
                "textBased": {},
                "textExtendedBadges": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "",
                        "fontColor": "#7E808C",
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available"
                      }
                    }
                  ]
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "60% OFF",
              "subHeader": "UPTO ₹120"
            },
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {}
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
              }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
          },
          "analytics": {
            "context": "seo-data-d7a6c408-c85d-48c0-ae75-e3b732e9c990"
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/samosa-party-koramangala-bangalore-74444",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
          "info": {
            "id": "382641",
            "name": "Wendy's Burgers",
            "cloudinaryImageId": "a2ec5418246b622ec4baa3bd051ef6ab",
            "locality": "Bommanahalli",
            "areaName": "BTM Layout",
            "costForTwo": "₹200 for two",
            "cuisines": [
              "Burgers",
              "American",
              "Fast Food",
              "Snacks",
              "Beverages"
            ],
            "avgRating": 4,
            "feeDetails": {
              "restaurantId": "382641",
              "fees": [
                {
                  "name": "BASE_DISTANCE",
                  "fee": 4200
                },
                {
                  "name": "BASE_TIME"
                },
                {
                  "name": "ANCILLARY_SURGE_FEE"
                }
              ],
              "totalFee": 4200
            },
            "parentId": "972",
            "avgRatingString": "4.0",
            "totalRatingsString": "5K+",
            "sla": {
              "deliveryTime": 32,
              "lastMileTravel": 4.7,
              "serviceability": "SERVICEABLE",
              "slaString": "32 mins",
              "lastMileTravelString": "4.7 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-11-26 23:59:00",
              "opened": true
            },
            "badges": {},
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {},
                "textBased": {},
                "textExtendedBadges": {}
              }
            },
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {}
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
              }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
          },
          "analytics": {
            "context": "seo-data-d7a6c408-c85d-48c0-ae75-e3b732e9c990"
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/wendys-burgers-bommanahalli-btm-layout-bangalore-382641",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
          "info": {
            "id": "59593",
            "name": "Al Daaz",
            "cloudinaryImageId": "rxsvhvcdip9dbfdijzk9",
            "locality": "HSR Layout",
            "areaName": "HSR Layout",
            "costForTwo": "₹400 for two",
            "cuisines": [
              "American",
              "Arabian",
              "Chinese",
              "Desserts",
              "Mughlai",
              "North Indian"
            ],
            "avgRating": 4.4,
            "feeDetails": {
              "restaurantId": "59593",
              "fees": [
                {
                  "name": "BASE_DISTANCE",
                  "fee": 4700
                },
                {
                  "name": "BASE_TIME"
                },
                {
                  "name": "ANCILLARY_SURGE_FEE"
                }
              ],
              "totalFee": 4700
            },
            "parentId": "21640",
            "avgRatingString": "4.4",
            "totalRatingsString": "10K+",
            "sla": {
              "deliveryTime": 35,
              "lastMileTravel": 4.4,
              "serviceability": "SERVICEABLE",
              "slaString": "35 mins",
              "lastMileTravelString": "4.4 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-11-26 23:59:00",
              "opened": true
            },
            "badges": {},
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {},
                "textBased": {},
                "textExtendedBadges": {}
              }
            },
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {}
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
              }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
          },
          "analytics": {
            "context": "seo-data-d7a6c408-c85d-48c0-ae75-e3b732e9c990"
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/al-daaz-hsr-layout-bangalore-59593",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        }
      
];



const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
               {resList.map((resPointer)=> (<RestaurantCard key={resPointerData.info.id} resData={resPointer}/>))};
            </div>
        </div>
    );
}


const AppLayout = ()=>{
    return(
        <div>
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);




