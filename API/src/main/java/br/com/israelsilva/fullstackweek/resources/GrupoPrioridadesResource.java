package br.com.israelsilva.fullstackweek.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.israelsilva.fullstackweek.domain.GruposPrioridades;
import br.com.israelsilva.fullstackweek.repository.GruposPrioridadesRepository;

@RestController
@RequestMapping("/pessoa")
public class GrupoPrioridadesResource {
	
	@Autowired
	private GruposPrioridadesRepository gruposPrioridadesRepository;
	
	@GetMapping
	public List<GruposPrioridades> listarTodos(){
		return gruposPrioridadesRepository.findAll();
	}
	
	@GetMapping("/{codigo}")
	public GruposPrioridades buscaGruposPrioridades(@PathVariable Long codigo) {
		return gruposPrioridadesRepository.findById(codigo).orElse(null);
	}

}
