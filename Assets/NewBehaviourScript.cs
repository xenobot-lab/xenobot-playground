// // using System.Collections;
// // using System.Collections.Generic;
// using UnityEngine;

// public class NewBehaviourScript : MonoBehaviour
// {
//     public Rigidbody rb;
//     private int frames = 0;
//     // private var x = Random.Range(-10.0f, 10.0f);
//     // private var z = Random.Range(-10.0f, 10.0f);
//     // Update is called once per frame
    
//     public float thrust;
//     public Vector3 m_NewForce = new Vector3(15.0f, 0.0f, 0.0f);
//     void FixedUpdate()
//     {
//         // frames++;
//         // if (frames % 10 == 0) {
//         //     var x = Random.Range(-10.0f, 10.0f);
//         //     var z = Random.Range(-10.0f, 10.0f);
//         //     rb.AddForce(600 * x * Time.deltaTime,0,600 * z * Time.deltaTime);
//         //     frames = 1;
//         // }
//         // var x = Random.Range(-10.0f, 10.0f);
//         // var z = Random.Range(-10.0f, 10.0f);

//         // rb.AddForce(209  * Time.deltaTime, 0, 209 * Time.deltaTime);
//         rb.AddRelativeForce(m_NewForce );
//         // frames++;
//         // if (frames == 5) {
//         //     // var x = Random.Range(-10.0f, 10.0f);
//         //     // var z = Random.Range(-10.0f, 10.0f);
//         //     rb.AddForce(2600  * Time.deltaTime,0,5600  * Time.deltaTime);
//         //     frames = 1;
//         // }

//     }
// }


// Code2
using UnityEngine;

public class NewBehaviourScript : MonoBehaviour
{
    public Rigidbody rb;
    private int frames = 0;
   
    
    
    void FixedUpdate()
    {
        // transform.position += Vector3.forward * Time.deltaTime;
        rb.AddRelativeForce(Vector3.forward * 30);
    }

    void OnCollisionEnter(Collision c) {
        if (c.gameObject.tag == "dish" || c.gameObject.tag == "bot") {
            // how much the character should be knocked back
            var magnitude = 250;
            // calculate force vector
            var force = transform.position - c.transform.position;
            // normalize force vector to get direction only and trim magnitude
            force.Normalize();
            rb.AddForce(-force * magnitude);
        }
    }
}