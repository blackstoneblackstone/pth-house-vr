var APP_DATA = {
  "scenes": [
    {
      "id": "0-front-door",
      "name": "Front door",
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
          "yaw": -0.00021252180914110852,
          "pitch": 1.560502279408384,
          "rotation": 0,
          "target": "0-front-door"
        },
        {
          "yaw": 2.842347194799342,
          "pitch": 0.5778781838720715,
          "rotation": 0,
          "target": "2-living-room"
        },
        {
          "yaw": 0.08197299694011839,
          "pitch": 0.5425781880026914,
          "rotation": 0,
          "target": "1-kitchen"
        },
        {
          "yaw": 2.058802100973847,
          "pitch": 0.36032513670281574,
          "rotation": 0,
          "target": "3-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-kitchen",
      "name": "Kitchen",
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
          "yaw": -0.6693311362344492,
          "pitch": 1.5707963267948966,
          "rotation": 0,
          "target": "1-kitchen"
        },
        {
          "yaw": -2.533883767754686,
          "pitch": 0.5539110452697287,
          "rotation": 0,
          "target": "0-front-door"
        },
        {
          "yaw": -3.1254366875474844,
          "pitch": 0.33367439957520517,
          "rotation": 0,
          "target": "2-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-living-room",
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
          "yaw": -1.542532212433997,
          "pitch": 1.5707963267948966,
          "rotation": 0,
          "target": "2-living-room"
        },
        {
          "yaw": -2.0295823240370936,
          "pitch": 0.5366665936392394,
          "rotation": 0,
          "target": "0-front-door"
        },
        {
          "yaw": -1.7098742682020092,
          "pitch": 0.3026217859696203,
          "rotation": 0,
          "target": "1-kitchen"
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
          "yaw": 0.19284344261568442,
          "pitch": 0.4961906876990554,
          "rotation": 0,
          "target": "4-bathroom"
        },
        {
          "yaw": -2.663371229770549,
          "pitch": 1.5561797387113723,
          "rotation": 0,
          "target": "3-bedroom"
        },
        {
          "yaw": -1.2179317375525507,
          "pitch": 0.3574547923327138,
          "rotation": 0,
          "target": "0-front-door"
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
          "yaw": -0.281989861912054,
          "pitch": 1.5707963267948966,
          "rotation": 0,
          "target": "4-bathroom"
        },
        {
          "yaw": -2.356394869208547,
          "pitch": 0.16500734637883596,
          "rotation": 0,
          "target": "2-living-room"
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
