using UnityEngine;

public class SphereSpawner : MonoBehaviour
{
    public GameObject spherePrefab;  // Reference to the Sphere prefab.
    public int numberOfSpheres = 5000; // Number of spheres to spawn.

    void Start()
    {
        // Loop through to create multiple spheres.
        for (int i = 0; i < numberOfSpheres; i++)
        {
            // Calculate random positions to spawn the spheres.
            Vector3 randomPosition = new Vector3(Random.Range(-3f, 3f), 0, Random.Range(-3.5f, 3.5f));

            // Instantiate a new sphere at the random position.
            Instantiate(spherePrefab, randomPosition, Quaternion.identity);
        }
    }
}