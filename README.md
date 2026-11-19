# ⚔️ War Planner · MCOC Tactical Suite

Planificador táctico de Guerras de Alianza (AW) para Marvel Contest of Champions integrado con **CereBro**.

## 🚀 Despliegue en GitHub + Vercel (Gratis, 24/7)

1. **Sube este proyecto a un repositorio en GitHub** (público o privado):
   ```bash
   git init
   git add .
   git commit -m "Initial War Planner commit"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/War_Planner.git
   git push -u origin main
   ```
2. **Conecta el repositorio en [Vercel](https://vercel.com/new):**
   - Importa tu repositorio de GitHub `War_Planner`.
   - Framework Preset: **Other** (se detectan automáticamente `vercel.json` y `api/index.py`).
   - Haz clic en **Deploy**.
3. *(Opcional)* **Variables de entorno en Vercel** (`Settings → Environment Variables`):
   - `WAR_PLANNER_CODE`: Código de acceso a la app (por defecto: `theboys`).
   - `WAR_PLANNER_SECRET`: Clave secreta para firmar las cookies de sesión.

## 💻 Ejecución local

```bash
python server.py
```
Abre `http://localhost:8787` en tu navegador.
