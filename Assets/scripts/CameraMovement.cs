using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CameraMovement : MonoBehaviour
{
    [SerializeField] private Camera cam;
    [SerializeField] private Transform target;

    private Vector3 previousPosition;
   
    void Update()
    {
        if (Input.GetMouseButtonDown(0))
        {
            previousPosition = cam.ScreenToViewportPoint(Input.mousePosition);
        }

        if (Input.GetMouseButton(0))
        {
            Vector3 direction = previousPosition - cam.ScreenToViewportPoint(Input.mousePosition);

            // cam.transform.RotateAround(point: new Vector3(), axis: new Vector3(x:1, y:0, z:0), angle: direction.y * 180);
            // cam.transform.RotateAround(point: new Vector3(), axis: new Vector3(x:0, y:1, z:0), angle: -direction.x * 180);

            // cam.transform.position = new Vector3();
            cam.transform.position = target.position; 

            cam.transform.Rotate(new Vector3(x:1, y:0, z:0), angle: direction.y * 180);
            cam.transform.Rotate(new Vector3(x:0, y:1, z:0), angle: -direction.x * 180, relativeTo: Space.World);
            cam.transform.Translate(new Vector3(x:0, y:0, z:-10));

            previousPosition = cam.ScreenToViewportPoint(Input.mousePosition);
        }
    }
}
