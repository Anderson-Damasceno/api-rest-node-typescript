/* eslint-disable @typescript-eslint/no-explicit-any */
import { Router } from "express";
import { CidadesController } from "./../controllers";

const router = Router();

router.post('/cidades',CidadesController.createValidadtion, CidadesController.create as any);
router.get('/cidades',CidadesController.getAllValidadtion, CidadesController.getAll as any);
router.get('/cidades/:id',CidadesController.getByIdValidation, CidadesController.getById as any);
router.put('/cidades/:id',CidadesController.updateByIdValidation, CidadesController.updateById as any);
router.delete('/cidades/:id', CidadesController.deleteByIdValidation, CidadesController.deleteById as any);

export {router};