package br.com.empresa.piloto.application.service;
import gumga.framework.application.GumgaService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import org.hibernate.Hibernate;

import br.com.empresa.piloto.application.repository.FuncionarioRepository;
import br.com.empresa.piloto.domain.model.Funcionario;
import br.com.empresa.piloto.domain.model.Servico;
import br.com.empresa.piloto.domain.model.HorarioTrabalho;

@Service
public class FuncionarioService extends GumgaService<Funcionario, Long> {
	
	private FuncionarioRepository repository;
	
	@Autowired
	public FuncionarioService(FuncionarioRepository repository) {
		super(repository);
		this.repository = repository;
	}

    @Transactional
    public Funcionario loadFuncionarioFat(Long id) {
        Funcionario obj = repository.findOne(id);
        Hibernate.initialize(obj.getCapacidades());
        Hibernate.initialize(obj.getHorarios());
        return obj;
    }

}

