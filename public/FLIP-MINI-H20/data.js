var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrance-hall",
      "name": "Entrance hall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.25610113483423547,
          "pitch": 1.5707963267948966,
          "rotation": 0,
          "target": "0-entrance-hall"
        },
        {
          "yaw": -0.345634246305778,
          "pitch": 0.3730084025690914,
          "rotation": 0,
          "target": "1-living-room"
        },
        {
          "yaw": -1.4808928247212165,
          "pitch": 0.4721034692997499,
          "rotation": 0,
          "target": "2-check"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-living-room",
      "name": "living room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.8895942225584044,
          "pitch": 0.45840252288117256,
          "rotation": 0,
          "target": "0-entrance-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-check",
      "name": "Check",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.1176187971098273,
          "pitch": 0.5661724498865546,
          "rotation": 0,
          "target": "3-bedroom"
        },
        {
          "yaw": 1.530568224106779,
          "pitch": 0.6763751422190936,
          "rotation": 0,
          "target": "4-bathroom"
        },
        {
          "yaw": -1.409413323125797,
          "pitch": 0.4650997965240329,
          "rotation": 0,
          "target": "0-entrance-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-bedroom",
      "name": "Bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.4593142809521176,
          "pitch": 0.604071597645488,
          "rotation": 0,
          "target": "2-check"
        },
        {
          "yaw": -0.24800575097841104,
          "pitch": 1.5228497013861917,
          "rotation": 0,
          "target": "3-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-bathroom",
      "name": "Bathroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.6984881040689537,
          "pitch": 1.5410137168980782,
          "rotation": 0,
          "target": "4-bathroom"
        },
        {
          "yaw": 3.039082998506764,
          "pitch": 0.7017324240683145,
          "rotation": 0,
          "target": "2-check"
        },
        {
          "yaw": 3.1120403272062838,
          "pitch": 0.32775372367834166,
          "rotation": 0,
          "target": "0-entrance-hall"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
