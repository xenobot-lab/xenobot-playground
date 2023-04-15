// using System.Collections;
// using System.Collections.Generic;
using UnityEngine;

public class NewBehaviourScript : MonoBehaviour
{
    public Rigidbody rb;
    private int frames = 0;
    // private var x = Random.Range(-10.0f, 10.0f);
    // private var z = Random.Range(-10.0f, 10.0f);
    // Update is called once per frame
    void FixedUpdate()
    {
        // frames++;
        // if (frames % 10 == 0) {
        //     var x = Random.Range(-10.0f, 10.0f);
        //     var z = Random.Range(-10.0f, 10.0f);
        //     rb.AddForce(600 * x * Time.deltaTime,0,600 * z * Time.deltaTime);
        //     frames = 1;
        // }
        // var x = Random.Range(-10.0f, 10.0f);
        // var z = Random.Range(-10.0f, 10.0f);
        rb.AddForce(209  * Time.deltaTime, 0, 209 * Time.deltaTime);

    }
}
