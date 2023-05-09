using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.Events;

public class GravityScript : MonoBehaviour
{
    public Button gravityButton;
    private GameObject[] myObjects;
    private bool isGravityEnabled = true;
    void Start()
    {
        GetComponent<Button>().onClick.AddListener(changeGravityConfig);
        
    }

    void changeGravityConfig()
    {
        isGravityEnabled = !isGravityEnabled;
        //#2F7125
        //#A9191E
        Color color = new Color(47f, 113f, 37f);
        if (isGravityEnabled)
        {
            ColorUtility.TryParseHtmlString("#2F7125", out color);
        }
        else 
        {
            ColorUtility.TryParseHtmlString("#A9191E", out color);
        }
        
        GetComponent<Image>().color = color;
        myObjects = GameObject.FindGameObjectsWithTag("bot") as GameObject[];

        for (var i = 0; i < myObjects.Length; i++) {
            changeConstraints(myObjects[i]);
        }
    }

    void changeConstraints(GameObject g)
    {
        g.GetComponent<Rigidbody>().useGravity = isGravityEnabled;
        g.GetComponent<Rigidbody>().constraints = (isGravityEnabled) ?
        RigidbodyConstraints.FreezeRotationX | RigidbodyConstraints.FreezeRotationZ :
        RigidbodyConstraints.None;
    }
}
