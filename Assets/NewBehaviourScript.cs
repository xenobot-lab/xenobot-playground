using UnityEngine;

public class NewBehaviourScript : MonoBehaviour
{
    public Rigidbody rb;
    private int frames = 0;
   
    
    
    void FixedUpdate()
    {
        // transform.position += Vector3.forward * Time.deltaTime;
        rb.AddRelativeForce(Vector3.forward * 12);
    }

    void OnCollisionEnter(Collision c) {
        if (c.gameObject.tag == "dish" || c.gameObject.tag == "bot") {
            // how much the character should be knocked back
            var magnitude = 250;
            // calculate force vector
            var force = transform.position - c.transform.position;
            // normalize force vector to get direction only and trim magnitude
            force.Normalize();
            // Debug.Log(force + c.gameObject.tag);

            rb.AddForce(-force * magnitude);
        }
        else if (c.gameObject.tag == "top") {
            // how much the character should be knocked back
            var magnitude = -80;
            // calculate force vector
            var force = transform.position - c.transform.position;
            // normalize force vector to get direction only and trim magnitude
            force.Normalize();
            // Debug.Log(force + c.gameObject.tag);
    
            rb.AddForce(0, magnitude, 0, ForceMode.Force);
        }
        if (!rb.useGravity)
            {
                if (c.gameObject.tag == "bottom") {
                var magnitude = 80;
                // Debug.Log(force + c.gameObject.tag);
                rb.AddForce(0, magnitude, 0, ForceMode.Force);
            }
            }
    }
}