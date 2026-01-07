var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrance-door",
      "name": "Entrance door",
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
          "yaw": -0.24683942278206317,
          "pitch": 1.5707963267948966,
          "rotation": 0,
          "target": "0-entrance-door"
        },
        {
          "yaw": -0.03881967104679873,
          "pitch": 0.4467694356066154,
          "rotation": 0,
          "target": "1-bathroom"
        },
        {
          "yaw": -1.138762281231676,
          "pitch": 0.44244633174353254,
          "rotation": 0,
          "target": "2-left-side"
        },
        {
          "yaw": 0.8975732489631625,
          "pitch": 0.4386901473734124,
          "rotation": 0,
          "target": "3-right-side"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-bathroom",
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
          "yaw": 2.566751181958174,
          "pitch": 1.5463911419087806,
          "rotation": 0,
          "target": "1-bathroom"
        },
        {
          "yaw": 3.137694504127447,
          "pitch": 0.3936673429772668,
          "rotation": 0,
          "target": "0-entrance-door"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-left-side",
      "name": "Left side",
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
          "yaw": 2.3873985858239894,
          "pitch": 0.3694013036612951,
          "rotation": 0,
          "target": "0-entrance-door"
        },
        {
          "yaw": -1.369691948834035,
          "pitch": 1.5237097257936085,
          "rotation": 0,
          "target": "2-left-side"
        },
        {
          "yaw": 1.5396745697303116,
          "pitch": 0.27618866795944896,
          "rotation": 0,
          "target": "3-right-side"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-right-side",
      "name": "Right side",
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
          "yaw": -1.282489530726071,
          "pitch": 1.5563901022793099,
          "rotation": 0,
          "target": "3-right-side"
        },
        {
          "yaw": -2.2042053105382635,
          "pitch": 0.4254448667728763,
          "rotation": 0,
          "target": "0-entrance-door"
        },
        {
          "yaw": -1.4001122168105251,
          "pitch": 0.24801682310732076,
          "rotation": 0,
          "target": "2-left-side"
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
