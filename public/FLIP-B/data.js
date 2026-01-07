var APP_DATA = {
  "scenes": [
    {
      "id": "0-activity",
      "name": "Activity",
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
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.9532256033106314,
          "pitch": 0.3075286908485211,
          "rotation": 0,
          "target": "2-entryway"
        },
        {
          "yaw": -0.7057344200065057,
          "pitch": 0.38741257223794356,
          "rotation": 0,
          "target": "1-living"
        },
        {
          "yaw": -2.435434593198881,
          "pitch": 0.17333672718347337,
          "rotation": 0,
          "target": "3-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-living",
      "name": "living",
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
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.783954905011365,
          "pitch": 0.3913612277789227,
          "rotation": 0,
          "target": "0-activity"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-entryway",
      "name": "entryway",
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
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.9891460705431419,
          "pitch": 0.22705194248439042,
          "rotation": 0,
          "target": "3-dining"
        },
        {
          "yaw": -3.080415557537867,
          "pitch": 0.34090721980957994,
          "rotation": 0,
          "target": "0-activity"
        },
        {
          "yaw": 2.880583616838276,
          "pitch": 0.18897866472184432,
          "rotation": 0,
          "target": "1-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-dining",
      "name": "Dining",
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
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.4945937239035594,
          "pitch": 0.4285711291008383,
          "rotation": 0,
          "target": "2-entryway"
        },
        {
          "yaw": 2.2673120449058546,
          "pitch": 0.39849975885477384,
          "rotation": 0,
          "target": "0-activity"
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
