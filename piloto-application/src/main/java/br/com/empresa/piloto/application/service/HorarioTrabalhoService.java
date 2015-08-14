package br.com.empresa.piloto.application.service;
import gumga.framework.application.GumgaService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import org.hibernate.Hibernate;

import br.com.empresa.piloto.application.repository.HorarioTrabalhoRepository;
import br.com.empresa.piloto.domain.model.HorarioTrabalho;

@Service
public class HorarioTrabalhoService extends GumgaService<HorarioTrabalho, Long> {
	
	private HorarioTrabalhoRepository repository;
	
	@Autowired
	public HorarioTrabalhoService(HorarioTrabalhoRepository repository) {
		super(repository);
		this.repository = repository;
	}

}

