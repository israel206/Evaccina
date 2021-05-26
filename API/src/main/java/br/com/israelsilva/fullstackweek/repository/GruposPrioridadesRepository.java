package br.com.israelsilva.fullstackweek.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.israelsilva.fullstackweek.domain.GruposPrioridades;

@Repository
public interface GruposPrioridadesRepository extends JpaRepository<GruposPrioridades, Long> {

}
