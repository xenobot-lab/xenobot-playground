using UnityEngine;

public class NewBehaviourScript : MonoBehaviour
{
    public Rigidbody rb;
    private int frames = 0;
   
    
    
    void FixedUpdate()
    {
        // transform.position += Vector3.forward * Time.deltaTime;
        rb.AddRelativeForce(Vector3.forward * 10);
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