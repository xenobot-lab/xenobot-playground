using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.Events;

public class GravityScript : MonoBehaviour
{
    public Button gravityButton;
    // private Rigidbody rb;
    private GameObject[] myObjects;
    private bool isGravityEnabled = true;
    // private var colors = GetComponent<Button> ().colors;
    // private ColorBlock color1;
    // Start is called before the first frame update
    void Start()
    {
        Debug.Log("i am in start");
        // rb = GetComponent<Rigidbody>();
        // List<GameObject>[] gameObjects=GameObject.FindObjectsOfType(typeof(GameObject)) as GameObject[];
        // gravityButton.onClick.AddListener(UnityEngine.PlayerLoop.Update);
        myObjects = GameObject.FindGameObjectsWithTag("bot") as GameObject[];

        for (var i = 0; i < myObjects.Length; i++) {
            if (myObjects[i].tag != "control"){
                gravityChange(myObjects[i]);
            }
        }
        // Debug.Log(rb.name);
        GetComponent<Button>().onClick.AddListener(changeColor);
    }

    // Update is called once per frame
    void changeColor(){
        isGravityEnabled = !isGravityEnabled;
        // ColorBlock color1 = GetComponent<Button>().colors;
        if (isGravityEnabled){
            // color1.normalColor = Color.green;
            // GetComponent<Button>().colors = color1;
            GetComponent<Image>().color = Color.green;
        }

        else {
            // color1.normalColor = Color.red;
            // GetComponent<Button>().colors = color1;
            GetComponent<Image>().color = Color.red;
        }

        
    }

    // Update is called once per frame
    void gravityChange(GameObject rb)
    {
        Debug.Log("i am in update");
        // isGravityEnabled = !isGravityEnabled;
        rb.GetComponent<Rigidbody>().useGravity = isGravityEnabled;
        // Debug.Log(gravityButton);
        // GetComponentInChildren<Text>()
        //= isGravityEnabled ? "Disable Gravity" : "Enable Gravity";
    }
}
