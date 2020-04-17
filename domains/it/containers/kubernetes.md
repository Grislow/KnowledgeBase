# Kubernetes Reference


#### Table of contents
* [Kubernetes](#Kubernetes)
    * [KB Nomenclature](#KB-Nomenclature)
    * [KB CLI](#KB-CLI)

&nbsp;
# Kubernetes

## KB Nomenclature

### Pod
Groups of co-located containers that share resources

### Deployment
A scalable group of pods maintained automatically by Kubernetes

### Kubernetes YAML
A manifest describing Kubernetes components and their configurations.

```YAML
apiVersion: apps/v1
kind: Deployment
metadata:
  name: bb-demo
  namespace: default
spec:
  replicas: 1
  selector:
    matchLabels:
      bb: web
  template:
    metadata:
      labels:
        bb: web
    spec:
      containers:
      - name: bb-site
        image: bulletinboard:1.0
---
apiVersion: v1
kind: Service
metadata:
  name: bb-entrypoint
  namespace: default
spec:
  type: NodePort
  selector:
    bb: web
  ports:
  - port: 8080
    targetPort: 8080
    nodePort: 30001
```

## KB CLI

`kubectl apply -f bb.yaml`

Deploys an application defined in `bb.yaml` to kubernetes

`kubectl get deployments`

List kuubernetes deployments

`kubectl delete -f bb.yaml`

Remove an application