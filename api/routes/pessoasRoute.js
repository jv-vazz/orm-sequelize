const { Router } = require("express");
const PessoaController = require("../controllers/PessoaController.js");


const router = Router()

router.get("/pessoas",  PessoaController.pegaTodasAsPessoas)
router.get("pessoas/ativas", PessoaController.pegaPessoasAtivas)
router.get("/pessoas/:id", PessoaController.pegaUmaPessoa)
router.get("/pessoas/:estudanteId/matricula/:matriculaId", PessoaController.pegaUmaMatricula)
router.get("/pessoas/:estudanteId/matricula", PessoaController.pegaMatriculas)
router.get("/pessoas/matricula/:turmaId/confirmadas", PessoaController.pegaMatriculasPorTurma)
router.get("/pessoas/matricula/lotada", PessoaController.pegaTurmasLotadas)
router.put("/pessoas/:id", PessoaController.atualizaPessoa)
router.put("/pessoas/:estudanteId/matricula/:matriculaId", PessoaController.atualizaMatricula)
router.post("/pessoas", PessoaController.criaPessoa)
router.post("/pessoas/:estudanteId/matricula", PessoaController.criaMatricula)
router.post("/pessoas/:id/restaura", PessoaController.restauraPessoa)
router.post("/pessoas/:estudanteId/cancela", PessoaController.cancelaPessoa)
router.delete("/pessoas/:estudanteId/matricula/:matriculaId", PessoaController.apagaMatricula)
router.delete("/pessoas/:id", PessoaController.apagaPessoa)

module.exports = router