var APP_DATA = {
  "scenes": [
    {
      "id": "0-comedor",
      "name": "Comedor",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -2.074584613855956,
        "pitch": 0.17743674541735288,
        "fov": 1.3846885878135222
      },
      "linkHotspots": [
        {
          "yaw": 0.780394195007208,
          "pitch": 0.4235417157948813,
          "rotation": 0,
          "target": "1-area-de-trabajo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-area-de-trabajo",
      "name": "Area de Trabajo",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.007933109771736113,
        "pitch": 0.0394373331972222,
        "fov": 1.3846885878135222
      },
      "linkHotspots": [
        {
          "yaw": -1.876051416117651,
          "pitch": 0.5334429135798082,
          "rotation": 5.497787143782138,
          "target": "0-comedor"
        },
        {
          "yaw": 1.4991020538203212,
          "pitch": 0.4794623554637152,
          "rotation": 7.0685834705770345,
          "target": "2-afuera"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-afuera",
      "name": "Afuera",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.3866165133985593,
        "pitch": 0.19471400142805173,
        "fov": 1.3846885878135222
      },
      "linkHotspots": [
        {
          "yaw": -2.7133787951612973,
          "pitch": 0.6694748164880018,
          "rotation": 5.497787143782138,
          "target": "1-area-de-trabajo"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
