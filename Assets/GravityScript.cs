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
        GetComponent<Image>().color = (isGravityEnabled) ? Color.green : Color.red;
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
